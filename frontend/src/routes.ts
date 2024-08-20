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
    name: "New Rx",
    path: "/newrx",
    component: NewRx,
  },
  {
    name: "New Patient",
    path: "/newpatient",
    component: NewPatient,
  },
  {
    name: "New Dr",
    path: "/newdr",
    component: NewDr,
  },
  {
    name: "Rx Item",
    path: "/rxitem",
    component: RxItem,
  },
  {
    name: "Add Patient",
    path: "/addpatient",
    component: AddPatient,
  },
  {
    name: "Doctor Profile",
    path: "/doctorprofile",
    component: DoctorProfile,
  },
  {
    name: "Patient Profile",
    path: "/patientprofile",
    component: PatientProfile,
  },
  {
    name: "Rx Item Profile",
    path: "/rxitemprofile",
    component: RxItemProfile,
  },
];

export default routes;
