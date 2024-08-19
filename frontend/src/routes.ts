import Home from "./pages/HomePage";
import AddPatient from "./pages/AddPatient";

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
];

export default routes;
