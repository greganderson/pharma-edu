import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../SearchBar/SearchBar";
import "./NewPatient.css";

const NewPatient: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log("Searching for patient:", query);
    // Implement search logic here, e.g., fetch patient data

    // Navigate to the PatientProfile page

    navigate("/patientprofile", { state: { query } });
  };

  const goToAddPatient = () => {
    navigate("/addpatient");
  };

  return (
    <>
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
    </>
  );
};

export default NewPatient;
