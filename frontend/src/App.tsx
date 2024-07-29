import React, { useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import NewDr from "./components/NewDr";
import NewRx from "./components/NewRx";
import RxItem from "./components/RxItem";
import SigCode from "./components/SigCode";
import X from "./components/X";

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('Home');

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Home />;
      case "NewDr":
        return <NewDr />;
      case "NewRx":
        return <NewRx />;
      case "RxItem":
        return <RxItem />;
      case "SigCode":
        return <SigCode />;
      case "X":
        return <X />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Nav setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
};

export default App;
