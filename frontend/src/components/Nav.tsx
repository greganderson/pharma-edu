import React from "react";
import NavItem from "./NavItem";
import routes from "../routes";

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        {routes.map((route, index) => (
          <NavItem key={index} name={route.name} path={route.path} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
