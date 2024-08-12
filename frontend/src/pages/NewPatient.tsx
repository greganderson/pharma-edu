import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const NewPatient: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log("Searching for patient:", query);
    // Implement search logic here
  };

  const goToAddNewPatient = () => {
    navigate("/addnewpatient");
  };

  return (
    <div className="new-patient-container">
      <div className="search-bar">
        <SearchBar placeholder="Search for a patient" onSearch={handleSearch} />
      </div>
      <button
        type="button"
        onClick={goToAddNewPatient}
        className="navigate-button"
      >
        Add New Patient
      </button>
    </div>
  );
};

export default NewPatient;
