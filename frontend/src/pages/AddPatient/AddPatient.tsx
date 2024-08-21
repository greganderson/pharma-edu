import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPatient.css";

interface PatientDetails {
  last: string;
  first: string;
  dob: string;
  address: string;
  primaryDr: string;
  allergies: string;
}

interface InsuranceInfo {
  bin: string;
  pcn: string;
  personCode: string;
  id: string;
  group: string;
}

const AddPatient: React.FC = () => {
  const navigate = useNavigate();

  const [patientDetails, setPatientDetails] = useState<PatientDetails>({
    last: "",
    first: "",
    dob: "",
    address: "",
    primaryDr: "",
    allergies: "",
  });

  const [insuranceInfo, setInsuranceInfo] = useState<InsuranceInfo>({
    bin: "",
    pcn: "",
    personCode: "",
    id: "",
    group: "",
  });

  const handlePatientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleInsuranceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value } = event.target;
    setInsuranceInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const goToPatientProfile = () => {
    navigate("/patientprofile");
  };

  return (
    <div className="add-new-patient-container">
      <div className="pt-left-side">
        <div>
          <label htmlFor="patient-last-name">Last Name</label>
          <input
            type="text"
            name="last"
            id="patient-last-name"
            value={patientDetails.last}
            onChange={handlePatientChange}
          />
        </div>
        <div>
          <label htmlFor="patient-first-name">First Name</label>
          <input
            type="text"
            name="first"
            id="patient-first-name"
            value={patientDetails.first}
            onChange={handlePatientChange}
          />
        </div>
        <div>
          <label htmlFor="patient-dob">DOB</label>
          <input
            type="text"
            name="dob"
            id="patient-dob"
            value={patientDetails.dob}
            onChange={handlePatientChange}
          />
        </div>
        <div>
          <label htmlFor="patient-address">Address</label>
          <input
            type="text"
            name="address"
            id="patient-address"
            value={patientDetails.address}
            onChange={handlePatientChange}
          />
        </div>
        <div>
          <label htmlFor="patient-primary-dr">Primary Dr</label>
          <input
            type="text"
            name="primaryDr"
            id="patient-primary-dr"
            value={patientDetails.primaryDr}
            onChange={handlePatientChange}
          />
        </div>
        <div>
          <label htmlFor="patient-allergies">Allergies</label>
          <input
            type="text"
            name="allergies"
            id="patient-allergies"
            value={patientDetails.allergies}
            onChange={handlePatientChange}
          />
        </div>
      </div>

      <div className="separator"></div>

      <div className="pt-right-side">
        <h3>Insurance Info</h3>
        <div>
          <label htmlFor="patient-bin">Bin</label>
          <input
            type="text"
            name="bin"
            id="patient-bin"
            value={insuranceInfo.bin}
            onChange={handleInsuranceChange}
          />
        </div>
        <div>
          <label htmlFor="patient-pcn">PCN</label>
          <input
            type="text"
            name="pcn"
            id="patient-pcn"
            value={insuranceInfo.pcn}
            onChange={handleInsuranceChange}
          />
        </div>
        <div>
          <label htmlFor="patient-person-code">Person Code</label>
          <input
            type="text"
            name="personCode"
            id="patient-person-code"
            value={insuranceInfo.personCode}
            onChange={handleInsuranceChange}
          />
        </div>
        <div>
          <label htmlFor="patient-id">ID #</label>
          <input
            type="text"
            name="id"
            id="patient-id"
            value={insuranceInfo.id}
            onChange={handleInsuranceChange}
          />
        </div>
        <div>
          <label htmlFor="patient-group">Group #</label>
          <input
            type="text"
            name="group"
            id="patient-group"
            value={insuranceInfo.group}
            onChange={handleInsuranceChange}
          />
        </div>
      </div>
      <button 
        type="button"
        onClick={goToPatientProfile}
        className="navigate-button"
      >
        Save Info
      </button>
    </div>
  );
};

export default AddPatient;
