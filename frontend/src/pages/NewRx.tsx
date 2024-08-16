import React, { useState } from "react";

interface RxDetails {
  ptName: string;
  dob: string;
  drName: string;
  dateOfRx: string;
  medication: string;
  directions: string;
  quantityWritten: string;
  quantityDispensed: string;
  refills: string;
  techInitials: string;
}

const NewRx: React.FC = () => {
  const [rxDetails, setRxDetails] = useState<RxDetails>({
    ptName: "",
    dob: "",
    drName: "",
    dateOfRx: "",
    medication: "",
    directions: "",
    quantityWritten: "",
    quantityDispensed: "",
    refills: "",
    techInitials: "",
  });

  const handleRxChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRxDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="new-rx-container">
      <div>
        <label htmlFor="rx-pt-name">Patient Last Name</label>
        <input
          type="text"
          name="ptName"
          id="rx-pt-name"
          value={rxDetails.ptName}
          onChange={handleRxChange}
        />
      </div>
      <div>
        <label htmlFor="rx-dob">DOB</label>
        <input
          type="text"
          name="dob"
          id="rx-dob"
          value={rxDetails.dob}
          onChange={handleRxChange}
        />
      </div>
      <div>
        <label htmlFor="rx-dr-name">Dr Name</label>
        <input
          type="text"
          name="drName"
          id="rx-dr-name"
          value={rxDetails.drName}
          onChange={handleRxChange}
        />
      </div>
      <div>
        <label htmlFor="rx-date-of-rx">Date of Rx</label>
        <input
          type="text"
          name="dateOfRx"
          id="rx-date-of-rx"
          value={rxDetails.dateOfRx}
          onChange={handleRxChange}
        />
      </div>
      <div>
        <label htmlFor="rx-medication">Medication</label>
        <input
          type="text"
          name="medication"
          id="rx-medication"
          value={rxDetails.medication}
          onChange={handleRxChange}
        />
      </div>
      <div>
        <label htmlFor="rx-directions">Directions</label>
        <input
          type="text"
          name="directions"
          id="rx-directions"
          value={rxDetails.directions}
          onChange={handleRxChange}
        />
      </div>
      <div>
        <label htmlFor="rx-quantity-written">Quantity Written</label>
        <input
          type="text"
          name="quantityWritten"
          id="rx-quantity-written"
          value={rxDetails.quantityWritten}
          onChange={handleRxChange}
        />
      </div>
      <div>
        <label htmlFor="rx-quantity-dispensed">Quantity Dispensed</label>
        <input
          type="text"
          name="quantityDispensed"
          id="rx-quantity-dispensed"
          value={rxDetails.quantityDispensed}
          onChange={handleRxChange}
        />
      </div>
      <div>
        <label htmlFor="rx-refills">Refills</label>
        <input
          type="text"
          name="refills"
          id="rx-refills"
          value={rxDetails.refills}
          onChange={handleRxChange}
        />
      </div>
      <div>
        <label htmlFor="rx-tech-initials">Tech Initials</label>
        <input
          type="text"
          name="techInitials"
          id="rx-tech-initials"
          value={rxDetails.techInitials}
          onChange={handleRxChange}
        />
      </div>
      <h3>Scan Image</h3>
    </div>
  );
};

export default NewRx;
