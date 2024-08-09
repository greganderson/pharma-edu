import Home from "./pages/Home";
import NewDr from "./pages/NewDr";
import NewPatient from "./pages/NewPatient";
import NewRx from "./pages/NewRx";
import RxItem from "./pages/RxItem";

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
];

export default routes;
