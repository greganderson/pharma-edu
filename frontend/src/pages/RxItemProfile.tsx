import React, { useState } from "react";

interface RxDetails {
  medicationName: string;
  medicationStrength: string;
  ndc: string;
  expiration: string;
  lotNumber: string;
}

const RxItemProfile: React.FC = () => {
  const [rxDetails, setRxDetails] = useState<RxDetails>({
    medicationName: "",
    medicationStrength: "",
    ndc: "",
    expiration: "",
    lotNumber: "",
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
      <div>
        <label htmlFor="rx-medication-name">Medication Name</label>
        <input
          type="text"
          name="medicationName"
          id="rx-medication-name"
          value={rxDetails.medicationName}
          onChange={handleRxChange}
        />
      </div>
      <div>
        <label htmlFor="rx-medication-strength">Medication Strength</label>
        <input
          type="text"
          name="medicationStrength"
          id="rx-medication-strength"
          value={rxDetails.medicationStrength}
          onChange={handleRxChange}
        />
      </div>
      <div>
        <label htmlFor="rx-ndc">NDC: National Drug Code</label>
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
    </div>
  );
};

export default RxItemProfile;
