import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import routes from "./routes";
import DixieTechLogo from "./assets/DixieTechLogo.png";
import PatientProfile from "./pages/PatientProfile";
import AddNewPatient from "./pages/AddNewPatient";
import DoctorProfile from "./pages/DoctorProfile";
import RxItemProfile from "./pages/RxItemProfile";

const Header: React.FC = () => {
  const location = useLocation();
  const currentRoute = routes.find((route) => route.path === location.pathname);
  const title = currentRoute ? currentRoute.name : "Page Not Found"; // Default to a more descriptive title
  const isHomePage = location.pathname === "/";

  return (
    <div className="header">
      <h1>{title}</h1>
      {!isHomePage && (
        <img src={DixieTechLogo} alt="Dixie Tech Logo" className="small-logo" />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
        {/* Additional routes not included in the main navigation */}
        <Route path="/patientprofile" element={<PatientProfile />} />
        <Route path="/addnewpatient" element={<AddNewPatient />} />
        <Route path="/doctorprofile" element={<DoctorProfile />} />
        <Route path="/rxitemprofile" element={<RxItemProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
