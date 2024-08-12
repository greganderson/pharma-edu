import Home from "./pages/Home";
import NewDr from "./pages/NewDr";
import NewPatient from "./pages/NewPatient";
import NewRx from "./pages/NewRx";
import RxItem from "./pages/RxItem";
import AddNewPatient from "./pages/AddNewPatient";
import DoctorProfile from "./pages/DoctorProfile";
import PatientProfile from "./pages/PatientProfile";
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
    name: "Add New Patient",
    path: "/addnewpatient",
    component: AddNewPatient,
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
