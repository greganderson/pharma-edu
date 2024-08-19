import Home from "./pages/HomePage";
import AddPatient from "./pages/AddPatient";
import NewPatient from "./pages/NewPatient";
import NewDr from "./pages/NewDr";
import NewRx from "./components/NewRx";  // Import the NewRx component
import NewRx1 from "./components/NewRx1"; // Import the NewRx1 component

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
  {
    name: "New Doctor",
    path: "/newdr",  // This corresponds to /pharma-edu/newdr
    component: NewDr,
  },
  {
    name: "New Prescription",
    path: "/newrx",  // This corresponds to /pharma-edu/newrx
    component: NewRx,
  },
  {
    name: "New Prescription 1",
    path: "/newrx1",  // This corresponds to /pharma-edu/newrx1
    component: NewRx1,
  },
];

export default routes;
