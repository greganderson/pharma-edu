import React from "react";

type NavbarProps = {
  setActivePage: (page: string) => void;
};

const Nav: React.FC<NavbarProps> = ({ setActivePage }) => {
  return (
    <nav>
      <ul>
        <li><button onClick={() => setActivePage("Home")}>Home</button></li>
        <li><button onClick={() => setActivePage("NewDr")}>New Dr</button></li>
        <li><button onClick={() => setActivePage("NewRx")}>New Rx</button></li>
        <li><button onClick={() => setActivePage("RxItem")}>Rx Item</button></li>
        <li><button onClick={() => setActivePage("SigCode")}>Sig Code</button></li>
        <li><button onClick={() => setActivePage("X")}>X</button></li>
      </ul>
    </nav>
  );
};

export default Nav;
