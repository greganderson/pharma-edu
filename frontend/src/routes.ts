import Home from "./pages/Home";
import NewDr from "./pages/NewDr";
import NewPatient from "./pages/NewPatient";
import NewRx from "./pages/NewRx";
import RxItem from "./pages/RxItem";
import SigCode from "./pages/SigCode";
import TechInitials from "./pages/TechInitials";
import X from "./pages/TechInitials";

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
    name: "NewPatient",
    path: "/newpatient",
    component: NewPatient,
  },
  {
    name: "NewDr",
    path: "/newdr",
    component: NewDr,
  },
  {
    name: "NewRx",
    path: "/newrx",
    component: NewRx,
  },
  {
    name: "RxItem",
    path: "/rxitem",
    component: RxItem,
  },
  {
    name: "SigCode",
    path: "/sigcode",
    component: SigCode,
  },
  {
    name: "TechInitials",
    path: "/techinitials",
    component: TechInitials,
  },
];

export default routes;
