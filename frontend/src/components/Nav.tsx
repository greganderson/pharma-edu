import React from "react";
import NavItem from "./NavItem";

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <NavItem name="Home" path="/" />
        <NavItem name="NewDr" path="/NewDr" />
        <NavItem name="NewRx" path="/NewRx" />
        <NavItem name="RxItem" path="/RxItem" />
        <NavItem name="SigCode" path="/SigCode" />
        <NavItem name="X" path="/X" />
      </ul>
    </nav>
  );
};

export default Nav;
