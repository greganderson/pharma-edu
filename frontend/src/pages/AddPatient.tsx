import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientDetailsContainer from "../components/PatientDetailsContainer";
import Main from "../components/Main";
import PageFooter from "../components/PageFooter";

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
    const { name, value } = event.target;
    setInsuranceInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const goToPatientProfile = () => {
    navigate("/patientprofile");
  };

  return (
    <div className="w-full relative bg-white border-black border-[1px] border-solid box-border overflow-hidden leading-[normal] tracking-[normal]">
      <img
        className="absolute top-[0px] left-[-3px] w-[1236px] h-[408px]"
        alt=""
        src="/navheader.svg"
      />
      <main className="absolute top-[408px] left-[0px] rounded-3xs bg-white border-black border-[1px] border-solid box-border w-full flex flex-row items-start justify-start pt-0 px-0 pb-[444px] max-w-full [row-gap:20px] text-left text-21xl text-gray font-roboto mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-end justify-start gap-[39px] min-w-[400px] max-w-full mq450:min-w-full mq750:gap-[19px] mq1050:flex-1">
          <div className="self-stretch rounded-3xs bg-white border-black border-[1px] border-solid box-border flex flex-row items-start justify-center pt-[23px] px-5 pb-6 max-w-full z-[2]">
            <div className="w-[311px] relative leading-[41.12px] font-medium inline-block shrink-0 z-[3] mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[33px]">
              Insurance Info
            </div>
          </div>
          <div className="add-new-patient-container">
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
            <p>Insurance Info</p>
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
            <button
              type="button"
              onClick={goToPatientProfile}
              className="navigate-button"
            >
              Save Info
            </button>
          </div>
        </div>
      </main>
      <Main />
      <PageFooter />
    </div>
  );
};

export default AddPatient;
