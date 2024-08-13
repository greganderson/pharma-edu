import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const PatientProfile: React.FC = () => {
  const navigate = useNavigate();

  const [patientDetails, setPatientDetails] = useState<PatientDetails>({
    last: "",
    first: "",
    dob: "",
    address: "",
    primaryDr: "",
    allergies: "",
  });

  const [InsuranceInfo, setInsuranceInfo] = useState<InsuranceInfo>({
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

  const goToNewRx = () => {
    navigate("/newrx");
  };

  return (
    <div className="add-new-patient-container">
      <h3>Patient Name</h3>
      <h3>General Information</h3>
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
          name="primary-dr"
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
      <p>Insurance Info</p>
      <div>
        <label htmlFor="patient-bin">Bin</label>
        <input
          type="text"
          name="bin"
          id="patient-bin"
          value={InsuranceInfo.bin}
          onChange={handleInsuranceChange}
        />
      </div>
      <div>
        <label htmlFor="patient-pcn">PCN</label>
        <input
          type="text"
          name="pcn"
          id="patient-pcn"
          value={InsuranceInfo.pcn}
          onChange={handleInsuranceChange}
        />
      </div>
      <div>
        <label htmlFor="patient-person-code">Person Code</label>
        <input
          type="text"
          name="person-code"
          id="patient-person-code"
          value={InsuranceInfo.personCode}
          onChange={handleInsuranceChange}
        />
      </div>
      <div>
        <label htmlFor="patient-id">ID #</label>
        <input
          type="text"
          name="id"
          id="patient-id"
          value={InsuranceInfo.id}
          onChange={handleInsuranceChange}
        />
      </div>
      <div>
        <label htmlFor="patient-group">Group #</label>
        <input
          type="text"
          name="group"
          id="patient-group"
          value={InsuranceInfo.group}
          onChange={handleInsuranceChange}
        />
      </div>
      <button 
        type="button"
        onClick={goToNewRx}
        className="navigate-button"
      >
        New Rx
      </button>
    </div>
  );
};

export default PatientProfile;
