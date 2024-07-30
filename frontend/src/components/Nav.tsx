import React from "react";
import routes from "../routes";
import NavItem from "./NavItem";

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        {
          routes.map(route => (
            <NavItem key={route.path} name={route.name} path={route.path} />
          ))
        }
      </ul>
    </nav>
  );
};

export default Nav;
