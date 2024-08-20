import Home from "./pages/HomePage/HomePage";
import NewDr from "./pages/NewDr/NewDr";
import NewPatient from "./pages/NewPatient/NewPatient";
import NewRx from "./pages/NewRx/NewRx";
import RxItem from "./pages/RxItem/RxItem";
import AddPatient from "./pages/AddPatient/AddPatient";
import DoctorProfile from "./pages/DoctorProfile/DoctorProfile";
import PatientProfile from "./pages/PatientProfile/PatientProfile";
import RxItemProfile from "./pages/RxItemProfile/RxItemProfile";

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
