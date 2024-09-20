import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../SearchBar/SearchBar";
import "./RxItem.css";

interface RxItemProps {
  onClose: () => void; // Add this prop to handle closing the modal
}

const RxItem: React.FC<RxItemProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log("Searching for Rx item:", query);
    // Implement search logic here, e.g., fetch Rx item data

    // Navigate to the RxItemProfile page
    navigate("/rxitemprofile", { state: { query } });
  };

  const goToNewRx = () => {
    navigate("/newrx");
    onClose(); // Close the modal after navigating
  };

  return (
    <div className="rx-item-container">
      <div className="search-bar">
        <SearchBar
          placeholder="Search for an Rx item"
          onSearch={handleSearch}
        />
      </div>
      <button type="button" onClick={goToNewRx} className="navigate-button">
        Add New Rx
      </button>
    </div>
  );
};

export default RxItem;
