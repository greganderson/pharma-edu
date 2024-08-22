import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Modal from "../../components/Modal/Modal";
import "./NewPatient.css";

const NewPatient: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log("Searching for patient:", query);
    // Implement search logic here, e.g., fetch patient data

    // Navigate to the PatientProfile page
    setIsModalOpen(false)
    navigate("/patientprofile", { state: { query } });
  };

  const goToAddPatient = () => {
    setIsModalOpen(false)
    navigate("/addpatient");
  };

  const openModal = () => {
    setIsModalOpen(true)
  };

  const closeModal = () => {
    setIsModalOpen(false)
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="new-patient-container">
          <div className="search-bar">
            <SearchBar
              placeholder="Search for a patient"
              onSearch={handleSearch}
            />
          </div>
          <button
            type="button"
            onClick={goToAddPatient}
            className="navigate-button"
          >
            Add Patient
          </button>
        </div>
      </Modal>
    </>
  );
};

export default NewPatient;
