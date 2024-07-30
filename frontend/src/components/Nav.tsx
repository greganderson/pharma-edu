import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/newdr">New Dr</Link></li>
        <li><Link to="/newrx">New Rx</Link></li>
        <li><Link to="/rxitem">Rx Item</Link></li>
        <li><Link to="/sigcode">Sig Code</Link></li>
        <li><Link to="/x">X</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
