import React from "react";
import SearchBar from "../components/SearchBar";

const NewPatient: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for patient", query);
  };

  return (
    <div>
      <SearchBar placeholder="Search for a patient" onSearch={handleSearch} />
    </div>
  );
};

export default NewPatient;
