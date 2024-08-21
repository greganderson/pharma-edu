import React, { useState } from "react";
import "./RxItemProfile.css";

interface RxDetails {
  medicationName: string;
  medicationStrength: string;
  ndc: string;
  expiration: string;
  lotNumber: string;
  deaSchedule: string;
  drugClass: string;
}

const RxItemProfile: React.FC = () => {
  const [rxDetails, setRxDetails] = useState<RxDetails>({
    medicationName: "",
    medicationStrength: "",
    ndc: "",
    expiration: "",
    lotNumber: "",
    deaSchedule: "",
    drugClass: "",
  });

  const handleRxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRxDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="rx-item-profile-container">
      <h3>Doctor Name First/Last</h3>
      <div className="rx-main">
        <div>
          <label htmlFor="rx-medication-name">Name</label>
          <input
            type="text"
            name="medicationName"
            id="rx-medication-name"
            value={rxDetails.medicationName}
            onChange={handleRxChange}
          />
        </div>
        <div>
          <label htmlFor="rx-medication-strength">Strength</label>
          <input
            type="text"
            name="medicationStrength"
            id="rx-medication-strength"
            value={rxDetails.medicationStrength}
            onChange={handleRxChange}
          />
        </div>
        <div>
          <label htmlFor="rx-ndc">NDC</label>
          <input
            type="text"
            name="ndc"
            id="rx-ndc"
            value={rxDetails.ndc}
            onChange={handleRxChange}
          />
        </div>
        <div>
          <label htmlFor="rx-expiration">Expiration</label>
          <input
            type="text"
            name="expiration"
            id="rx-expiration"
            value={rxDetails.expiration}
            onChange={handleRxChange}
          />
        </div>
        <div>
          <label htmlFor="rx-lot-number">Lot Number</label>
          <input
            type="text"
            name="lotNumber"
            id="rx-lot-number"
            value={rxDetails.lotNumber}
            onChange={handleRxChange}
          />
        </div>
        <div>
          <label htmlFor="rx-dea-schedule">DEA Schedule</label>
          <input
            type="text"
            name="deaSchedule"
            id="rx-dea-schedule"
            value={rxDetails.deaSchedule}
            onChange={handleRxChange}
          />
        </div>
        <div>
          <label htmlFor="rx-drug-class">Drug Class</label>
          <input
            type="text"
            name="drugClass"
            id="rx-drug-class"
            value={rxDetails.drugClass}
            onChange={handleRxChange}
          />
        </div>
      </div>
    </div>
  );
};

export default RxItemProfile;
