import React, { useState, useMemo, useCallback, type CSSProperties } from "react";

export type NewRxType = {
  className?: string;
  newRx?: string;

  /** Style props */
  propTextDecoration?: CSSProperties["textDecoration"];

  /** Action props */
  onNewRxContainerClick?: () => void;
};

const NewRx: React.FC<NewRxType> = ({
  className = "",
  newRx = "New Rx",
  propTextDecoration,
  onNewRxContainerClick,
}) => {
  const [rxDetails, setRxDetails] = useState({
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

  const handleRxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRxDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const newRxStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const handleClick = useCallback(() => {
    if (onNewRxContainerClick) {
      onNewRxContainerClick();
    } else {
      // Please sync "New Rx" to the project
    }
  }, [onNewRxContainerClick]);

  return (
    <div className={`w-full flex flex-col items-start justify-start box-border ${className}`}>
      <div
        className={`w-[206px] flex flex-row items-start justify-start pt-[79.1px] px-6 pb-[59.4px] box-border relative cursor-pointer z-[1] text-left text-17xl text-white font-roboto ${className}`}
        onClick={handleClick}
      >
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] rounded-3xs bg-darkslategray border-black border-[1px] border-solid box-border" />
        <div
          className="w-[153px] relative leading-[43.5px] font-medium inline-block shrink-0 z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]"
          style={newRxStyle}
        >
          {newRx}
        </div>
      </div>
      <div className="new-rx-container mt-8">
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
        <h3 className="mt-4">Scan Image</h3>
      </div>
    </div>
  );
};

export default NewRx;
