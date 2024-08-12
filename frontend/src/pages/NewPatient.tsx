import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const NewPatient: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log("Searching for patient:", query);
    // Implement search logic here
  };

  const goToPatientProfile = () => {
    navigate("/patientprofile");
  };

  return (
    <div className="new-patient-container">
      <div className="search-bar">
        <SearchBar placeholder="Search for a patient" onSearch={handleSearch} />
      </div>
      <button
        type="button"
        onClick={goToPatientProfile}
        className="navigate-button"
      >
        Go to Patient Profile
      </button>
    </div>
  );
};

export default NewPatient;
