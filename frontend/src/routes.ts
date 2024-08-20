import Home from "./pages/HomePage";
import NewPatient from "./pages/NewPatient";
import PatientProfile from "./pages/PatientProfile";
import AddPatient from "./pages/AddPatient";
import NewDr from "./pages/NewDr";
import DoctorProfile from "./pages/DoctorProfile";
import RxItem from "./pages/RxItem";
import NewRx from "./pages/NewRx";
import RxItemProfile from "./pages/RxItemProfile";

interface PharmacyRoutes {
  name: string;
  path: string;
  component: React.FC;
}

const routes: PharmacyRoutes[] = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "New Patient",
    path: "/newpatient",
    component: NewPatient,
  },
  {
    name: "Add Patient",
    path: "/addpatient",
    component: AddPatient,
  },
  {
    name: "Patient Profile",
    path: "/patientprofile",
    component: PatientProfile,
  },
  {
    name: "New Doctor",
    path: "/newdr",
    component: NewDr,
  },
  {
    name: "Doctor Profile",
    path: "/doctorprofile",
    component: DoctorProfile,
  },
  {
    name: "Rx Item",
    path: "/rxitem",
    component: RxItem,
  },
  {
    name: "New Rx",
    path: "/newrx",
    component: NewRx,
  },
  {
    name: "Rx Item Profile",
    path: "/rxitemprofile",
    component: RxItemProfile,
  },
];

export default routes;
