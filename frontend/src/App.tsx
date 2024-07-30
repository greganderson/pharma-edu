import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import NewDr from "./components/NewDr";
import NewRx from "./components/NewRx";
import RxItem from "./components/RxItem";
import SigCode from "./components/SigCode";
import X from "./components/X";

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newdr" element={<NewDr />} />
        <Route path="/newrx" element={<NewRx />} />
        <Route path="/rxitem" element={<RxItem />} />
        <Route path="/sigcode" element={<SigCode />} />
        <Route path="/x" element={<X />} />
      </Routes>
    </Router>
  );
};

export default App;
