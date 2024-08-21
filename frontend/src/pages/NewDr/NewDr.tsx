import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./NewDr.css";

const NewDr: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log("Searching for doctor", query);
    // Implement search logic here
  };

  const gotoDoctorProfile = () => {
    navigate("/doctorprofile");
  };

  return (
    <div className="new-dr-container">
      <div className="search-bar">
        <SearchBar placeholder="Search for a doctor" onSearch={handleSearch} />
        <button 
          type="button" 
          onClick={gotoDoctorProfile} 
          className="navigate-button"
        >
          Add New Doctor
        </button>
      </div>
    </div>
  );
};

export default NewDr;
