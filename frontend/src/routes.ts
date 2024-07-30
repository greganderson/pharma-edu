import Home from "./pages/Home";
import NewDr from "./pages/NewDr";
import NewRx from "./pages/NewRx";
import RxItem from "./pages/RxItem";
import SigCode from "./pages/SigCode";
import X from "./pages/X";

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
    name: "X",
    path: "/x",
    component: X,
  },
];

export default routes;
