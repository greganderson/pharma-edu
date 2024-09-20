import React from "react";
import routes from "../../routes";
import NavItem from "../NavItem/NavItem";
import DixieTechLogo from "../../assets/DixieTechLogo.png";
import ModalButtons from "../ModalButtons/ModalButtons";
import "./Nav.css";

const Nav: React.FC = () => {
  // Filter out routes that shouldn't appear in the navigation bar
  const navRoutes = routes.filter(
    (route) =>
      ![
        "Add Patient",
        "Patient Profile",
        "Doctor Profile",
        "Rx Item Profile",
      ].includes(route.name)
  );

  return (
    <nav>
      <div className="nav-logo">
        <img src={DixieTechLogo} alt="Dixie Tech Logo" className="small-logo" />
      </div>
      <ul>
        {navRoutes.map((route) => (
          <NavItem key={route.path} name={route.name} path={route.path} />
        ))}
        <ModalButtons />
      </ul>
    </nav>
  );
};

export default Nav;
