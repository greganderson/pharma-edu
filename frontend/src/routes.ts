import Home from "./pages/HomePage";
import AddPatient from "./pages/AddPatient";
import NewPatient from "./pages/NewPatient"; // Import the NewPatient component

interface PharmacyRoutes {
  name: string;
  path: string;
  component: React.FC;
}

const routes: PharmacyRoutes[] = [
  {
    name: "Home",
    path: "/",  // This corresponds to /pharma-edu/
    component: Home,
  },
  {
    name: "Add Patient",
    path: "/addpatient",  // This corresponds to /pharma-edu/addpatient
    component: AddPatient,
  },
  {
    name: "New Patient",
    path: "/newpatient",  // This corresponds to /pharma-edu/newpatient
    component: NewPatient,
  },
];

export default routes;
