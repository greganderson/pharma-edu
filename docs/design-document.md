# API Design Document

TODO: Verify parameters and paths
TODO: Make sure wording is consistent, especially with Rx and prescription, doctor and prescriber
TODO: Make sure the APIs are all in a logical order
TODO: Fix any of the datetimes to be actual examples
TODO: Make sure commas are all good on anything json
TODO: Fix any ?'s
TODO: Add backticks to request parameters

## Overview

### Purpose

A brief description of the purpose and scope of the API. Explain what the API is designed to do and its intended audience.

### Goals

- List the primary goals of the API.
- Define the key functionalities it aims to provide.

### Assumptions

Outline any assumptions made during the design process.

## API Overview

### Base URL

Until the API is hosted, the base url will be set by `uvicorn` when running locally. Usually this is `http://localhost:8000`, assuming the default port of `8000`.

### Authentication

As the data is all dummy data, there is no need to keep data secure. Students will be able to sign in using their first name as the username and their last name as the password.

All API calls should be made with the user ID in the header:

```json
{
  "X-User-Id": 17
}
```

## Endpoints

### Patients

#### GET /patients

##### Description

Retrieves a list of patient records. Because the number of records will be very small, there is no need to limit or filter the results that come back.

##### Request Parameters

- **Path Parameters:**
  - None
- **Query Parameters:**
  - None

##### Response

- Status Codes:
  - 200 OK: List of patients successfully returned.
  - 401 Unauthorized: Missing the required `X-User-Id` header

##### Response Example

TODO: Fix the datetimes

```json
[
  {
      "id": 123,
      "first_name": "Tony",
      "last_name": "Stark",
      "date_of_birth": datetime
  }
]
```

#### GET /patients/:patient_id

##### Description

Gets the patient profile, including a list of the prescriptions the patient currently has.

##### Request Parameters

- **Path Parameters:**
  - patient_id: ID of the patient.
- **Query Parameters:**
  - None.

##### Response

- Status Codes:
  - 200 OK: Patient profile successfully retrieved.
  - 401 Unauthorized: Missing the required `X-User-Id` header
  - 404 Not Found: Patient not found.

##### Response Example

```json
{
  "patient_id": 123,
  "first_name": "Thor",
  "last_name": "Odinson",
  "date_of_birth": datetime,
  "address": "123 Web Dev Road, St. George, UT 84770",
  "primary_prescriber_id": 234,
  "allergies": "fish, happiness, light",
  "insurance_bin": ?,
  "insurance_pcn": ?,
  "insurance_person_code": ?,
  "insurance_id": ?,
  "insurance_group_number": ?,
  "prescriptions": [
    {
      "rx_id": 13,
      "rx_item_name": "Red Pill",
      "quantity": 30,
      "refills": 3
    },
    {
      "rx_id": 29,
      "rx_item_name": "Blue Pill",
      "quantity": 10,
      "refills": 0
    }
  ]
}
```

#### POST /patients

##### Description

Creates a patient.

##### Request Parameters

- **Path Parameters:**
  - None
- **Query Parameters:**
  - None
- **Body Parameters:**
  - first_name: string
  - last_name: string
  - date_of_birth: string
  - address: string
  - primary_doctor_id: string
  - allergies: string
  - insurance_bin: "...",
  - insurance_pcn: "...",
  - insurance_person_code: "...",
  - insurance_id: "...",
  - insurance_group_number: "..."

##### Response

- Status Codes:
  - 201 Created: Patient successfully created.
  - 400 Bad Request: Malformed body sent to the API.
  - 401 Unauthorized: Missing the required `X-User-Id` header

##### Response Example

```json
{
  "patient_id": 123
}
```

#### PATCH /patients/:patient_id

##### Description

Updates a patient. All parameters are optional and only those fields will be updated.

##### Request Parameters

- **Path Parameters:**:
  - patient_id: ID of the patient
- **Query Parameters:**
  - None
- **Body Parameters:**:
  - first_name?: string
  - last_name?: string
  - date_of_birth?: string
  - address?: string
  - primary_doctor_id?: string
  - allergies?: string
  - insurance_bin?: "...",
  - insurance_pcn?: "...",
  - insurance_person_code?: "...",
  - insurance_id?: "...",
  - insurance_group_number?: "..."

##### Response

- Status Codes:
  - 204 No Content: Patient successfully updated.
  - 400 Bad Request: Malformed body sent to the API.
  - 401 Unauthorized: Missing the required `X-User-Id` header
  - 404 Not Found: Patient not found.

#### DELETE /patients/:patient_id

##### Description

Deletes a patient.

##### Request Parameters

- **Path Parameters:**
  - patient_id: ID of the patient to delete.
- **Query Parameters:**
  - None.
- **Body Parameters:**
  - None.

##### Response

- Status Codes:
  - 204 No Content: Patient successfully deleted
  - 401 Unauthorized: Missing the required `X-User-Id` header
  - 404 Not Found: Patient not found.

### Prescriptions

#### GET /prescriptions

##### Description

Get a list of all prescriptions.

##### Request Parameters

- **Path Parameters:**
  - None.
- **Query Parameters:**
  - `limit?`: An optional parameter to limit how many results are returned. Defaults to 100.
  - `patient_id?`: An optional patient ID to filter by.
  - `status?`: An optional Rx status to filter by (PENDING, COMPLETED, SOLD).

##### Response

- Status Codes:
  - 200 OK: Description of the successful response.
  - 401 Unauthorized: Missing the required `X-User-Id` header

##### Response Example

```json
[
  {
    "patient_id": 123,
    "name": "Tony Stark",
    "date_of_birth": datetime
  }
]
```

#### POST /prescriptions

##### Description

Creates a prescription.

##### Request Parameters

- **Path Parameters:**
  - None.
- **Query Parameters:**
  - None.
- **Body Parameters:**
  - patient_id: ID of the patient.
  - prescriber_id: ID of the prescriber.
  - rx_item_id: ID of the Rx item being prescribed.
  - directions: The directions that will be on the printed label.
  - quantity: The quantity of items in the Rx.
  - quantity_dispensed: The quantity actually dispensed to the patient.
  - refills: Number of refills.
  - image_id: ID of the scanned image.
  - tech_id: ID of the pharmacy technician filling the Rx.

##### Response

- Status Codes:
  - 201 Created: Prescription successfully created.
  - 400 Bad Request: Malformed body sent to the API.
  - 401 Unauthorized: Missing the required `X-User-Id` header

##### Response Example

```json
{
  "rx_number": 123
}
```

#### PATCH /prescriptions/:rx_number

##### Description

Updates a prescription's refills and/or status. Both fields are optional.

##### Request Parameters

- **Path Parameters:**
  - rx_number: The Rx number to update.
- **Query Parameters:**
  - None.
- **Body Parameters:**
  - refills?: Number of refills.
  - status?: Current status of the Rx, either PENDING, COMPLETED, or SOLD.

##### Response

- Status Codes:
  - 204 No Content: Rx successfully updated.
  - 400 Bad Request: Malformed body sent to the API.
  - 401 Unauthorized: Missing the required `X-User-Id` header
  - 404 Not Found: Rx not found.

#### DELETE /prescriptions/:rx_number

##### Description

Deletes a prescription.

##### Request Parameters

- **Path Parameters:**
  - rx_number: The Rx number of the Rx to delete.
- **Query Parameters:**
  - None.
- **Body Parameters:**
  - None.

##### Response

- Status Codes:
  - 204 No Content: Rx successfully deleted.
  - 401 Unauthorized: Missing the required `X-User-Id` header
  - 404 Not Found: Rx not found.

### Prescribers

#### GET /prescribers

##### Description

Retrieves a list of prescribers. Because the number of records will be very small, there is no need to limit or filter the results that come back.

##### Request Parameters

- **Path Parameters:**
  - None.
- **Query Parameters:**
  - None.

##### Response

- Status Codes:
  - 200 OK: List of prescribers successfully returned.
  - 401 Unauthorized: Missing the required `X-User-Id` header

##### Response Example

```json
[
  {
    "prescriber_id": 123,
    "first_name": "Stephen",
    "last_name": "Strange",
    "type": "MD",
    "address": "456 Subnautica Lane, St. George, UT 84770",
    "phone_number": "435-123-4567",
    "dea": ?,
    "npi": ?
  }
]
```

#### POST /prescribers

##### Description

Creates a prescriber.

##### Request Parameters

- **Path Parameters:**
  - None.
- **Query Parameters:**
  - None.
- **Body Parameters:**
  - `first_name`: First name of the prescriber.
  - `last_name`: Last name of the prescriber.
  - `type`: Type of doctor (MD, DO, etc).
  - `address`: Address of the prescriber's office.
  - `phone_number`: Phone number of the prescriber's office.
  - `dea`: ?
  - `npi`: ?

##### Response

- Status Codes:
  - 201 Created: Prescriber successfully created.
  - 400 Bad Request: Malformed body sent to the API.
  - 401 Unauthorized: Missing the required `X-User-Id` header

##### Response Example

```json
{
  "prescriber_id": 123
}
```

#### PATCH /prescribers/:prescriber_id

##### Description

Updates a prescriber. All parameters are optional and only those fields will be updated.

##### Request Parameters

- **Path Parameters:**
  - `prescriber_id`: ID of the prescriber.
- **Query Parameters:**
  - None.
- **Body Parameters:**
  - `first_name?`: First name of the prescriber.
  - `last_name?`: Last name of the prescriber.
  - `type?`: Type of doctor (MD, DO, etc).
  - `address?`: Address of the prescriber's office.
  - `phone_number?`: Phone number of the prescriber's office.
  - `dea?`: ?
  - `npi?`: ?

##### Response

- Status Codes:
  - 204 No Content: Prescriber successfully updated.
  - 400 Bad Request: Malformed body sent to the API.
  - 401 Unauthorized: Missing the required `X-User-Id` header
  - 404 Not Found: Prescriber not found.

#### DELETE /prescribers/:prescriber_id

##### Description

Deletes a prescriber.

##### Request Parameters

- **Path Parameters:**
  - `prescriber_id`: ID of the prescriber.
- **Query Parameters:**
  - None.
- **Body Parameters:**
  - None.

##### Response

- Status Codes:
  - 204 No Content: Prescriber successfully deleted
  - 401 Unauthorized: Missing the required `X-User-Id` header
  - 404 Not Found: Prescriber not found.

### [Additional Resource Name] Endpoint

#### GET|POST|PATCH|DELETE /endpoint

##### Description

A brief description of what the endpoint does.

##### Request Parameters

- **Path Parameters:**
  - Describe any parameters that are part of the URL path.
- **Query Parameters:**
  - List any parameters that can be passed in the URL query string.
- **Body Parameters:**
  - Define the structure of the request body, if applicable.

##### Response

- Status Codes:
  - 200 OK: Description of the successful response.
  - 201 Created: Description of the response when a resource is created.
  - 204 No Content: Patient successfully updated.
  - 400 Bad Request: Malformed body sent to the API.
  - 401 Unauthorized: Missing the required `X-User-Id` header
  - 404 Not Found: Description of the response when the resource is not found.

##### Response Example

```json
{
  "id": 123,
  "name": "Sample Resource",
  "created_at": "2024-07-31T12:00:00Z"
}
```

Repeat the same structure as above for each resource.

## Security Considerations

Detail any security measures, such as rate limiting, data encryption, and sensitive data handling.

## Rate Limiting

Describe rate limits and how they are enforced (e.g., requests per minute/hour).

## Throttling and Quotas

Explain any throttling or quota policies.

## Contact Information

Provide contact details for support and further inquiries.

## Open Questions

- Will students need to be able to sign in somehow? If so, what all is attached to their account?
- Will instructors need to be able to sign in? If so, will they need a separate page to do perform custom actions?
