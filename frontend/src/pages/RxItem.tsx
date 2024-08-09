import React from "react";
import SearchBar from "../components/SearchBar";

const RxItem: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for Rx item", query);
  };

  return (
    <div>
      <SearchBar placeholder="Search for an Rx item" onSearch={handleSearch} />
    </div>
  );
};

export default RxItem;
