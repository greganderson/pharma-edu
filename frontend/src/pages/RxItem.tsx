import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const RxItem: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log("Searching for Rx item", query);
    // Implement search logic here
  };

  const goToNewRx = () => {
    navigate("/newrx");
  };

  return (
    <div className="new-rx-container">
      <div className="search-bar">
        <SearchBar placeholder="Search for an Rx item" onSearch={handleSearch} />
      </div>
      <button 
        type="button" 
        onClick={goToNewRx} 
        className="navigate-button"
      >
        Add New Rx
      </button>
    </div>
  );
};

export default RxItem;
