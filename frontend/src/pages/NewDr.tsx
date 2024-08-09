import React from "react";
import SearchBar from "../components/SearchBar";

const NewDr: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for doctor", query);
  };

  return (
    <div>
      <SearchBar placeholder="Search for a doctor" onSearch={handleSearch} />
    </div>
  );
};

export default NewDr;
