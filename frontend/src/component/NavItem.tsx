import React from "react";
import { Link } from "react-router-dom";
// import Modal from "./Modal";


interface NavItemProps {
    routeName: string;
    path: string;
}

const NavItem: React.FC<NavItemProps> = ( {routeName, path })  => {
    return (
        <li>
            <Link to={path}> {routeName} </Link>
        </li>
    );
}

export default NavItem;
