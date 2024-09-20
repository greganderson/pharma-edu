import React, { useState } from "react";
import Modal from "../Modal/Modal";
import NewPatient from "./NewPatient/NewPatient";
import NewDr from "./NewDr/NewDr";
import RxItem from "./RxItem/RxItem";

const ModalButtons: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // Store the type of modal content

  const handleClick = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(""); // Clear the modal type
  };

  const renderModalContent = () => {
    switch (modalType) {
      case "patient":
        return <NewPatient onClose={closeModal}/>;
      case "doctor":
        return <NewDr onClose={closeModal}/>;
      case "rxItem":
        return <RxItem onClose={closeModal}/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <button type="button" onClick={() => handleClick("patient")}>
        New Patient
      </button>
      <button type="button" onClick={() => handleClick("doctor")}>
        New Doctor
      </button>
      <button type="button" onClick={() => handleClick("rxItem")}>
        Rx Item
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default ModalButtons;

