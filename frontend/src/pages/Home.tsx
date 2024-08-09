import React from "react";
import DixieTechLogo from "../assets/DixieTechLogo.png"; // Adjust the path as necessary

const Home: React.FC = () => {
  return (
    <div>
      <img src={DixieTechLogo} alt="Dixie Tech Logo" className="logo-image" />
    </div>
  );
};

export default Home;
