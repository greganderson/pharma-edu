import React from "react";
import Modal from "../Modal/Modal";

const ModalButtons: React.FC = () => {
  const handleClick = () => {
    return <Modal />
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        New Patient
      </button>
      <button type="button" onClick={handleClick}>
        New Doctor
      </button>
      <button type="button" onClick={handleClick}>
        Rx Item
      </button>
    </div>
  );
};

export default ModalButtons;
