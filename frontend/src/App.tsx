import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NewDr from "./pages/NewDr";
import NewRx from "./pages/NewRx";
import RxItem from "./pages/RxItem";
import SigCode from "./pages/SigCode";
import X from "./pages/X";

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
