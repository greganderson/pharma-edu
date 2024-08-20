import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import routes from "./routes";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to the Home Page";
        break;
      case "/addpatient":
        title = "Add Patient";
        metaDescription = "Add a new patient to the system.";
        break;
      case "/newpatient":
        title = "New Patient";
        metaDescription = "Add details for a new patient.";
        break;
      case "/newdr":
        title = "New Doctor";
        metaDescription = "Add details for a new doctor.";
        break;
      case "/newrx":
        title = "New Prescription";
        metaDescription = "Create a new prescription.";
        break;
      case "/newrx1":
        title = "New Prescription 1";
        metaDescription = "Create a new prescription (alternate version).";
        break;
      case "/patientprofile":  // Add this case for the PatientProfile route
        title = "Patient Profile";
        metaDescription = "View and manage patient profile details.";
        break;
      default:
        title = "App";
        metaDescription = "Application";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}

export default App;
