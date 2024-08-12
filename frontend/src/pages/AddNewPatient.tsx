import React, { useState } from "react";

interface PatientDetails {
  last: string;
  first: string;
  dob: string;
  address: string;
  primaryDr: string;
  allergies: string;
}

const AddNewPatient: React.FC = () => {
  const [patientDetails, setPatientDetails] = useState<PatientDetails>({
    last: "",
    first: "",
    dob: "",
    address: "",
    primaryDr: "",
    allergies: "",
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value } = event.target;
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Patient Details:", patientDetails);
  };

  return (
    <div className="add-new-patient-container">
      <h1>Add New Patient</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patient-last-name">Last Name</label>
          <input
            type="text"
            name="last"
            id="patient-last-name"
            value={patientDetails.last}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="patient-first-name">First Name</label>
          <input
            type="text"
            name="first"
            id="patient-first-name"
            value={patientDetails.first}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="patient-dob">DOB</label>
          <input
            type="text"
            name="dob"
            id="patient-dob"
            value={patientDetails.dob}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="patient-address">Address</label>
          <input
            type="text"
            name="address"
            id="patient-address"
            value={patientDetails.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="patient-primary-dr">Primary Dr</label>
          <input
            type="text"
            name="primary-dr"
            id="patient-primary-dr"
            value={patientDetails.primaryDr}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="patient-allergies">Allergies</label>
          <input
            type="text"
            name="allergies"
            id="patient-allergies"
            value={patientDetails.allergies}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewPatient;
