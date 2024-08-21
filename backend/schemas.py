from datetime import date

from pydantic import BaseModel


class PatientUpdateRequest(BaseModel):
    first_name: str | None
    last_name: str | None
    dob: date | None
    address_id: int | None
    primary_care_prescriber_id: int | None
    allergies: str | None
    member_id_number: str | None
    group_number: str | None
    rx_bin: str | None
    rx_pcn: str | None
    person_code: str | None