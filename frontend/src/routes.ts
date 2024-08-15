<<<<<<< HEAD
import Home from "./pages/Home";
import NewRx from "./pages/NewRx";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";

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
    path: "/new-rx",
    component: NewRx,
  },
  {
    name: "Patients",
    path: "/patients",
    component: Patients,
  },
  {
    name: "Doctors",
    path: "/doctors",
    component: Doctors,
  },
];
=======
import NewRx from './pages/NewRx';
import Patients from './pages/Patients';
import Prescriber from "./pages/Prescriber/Prescriber";
import RxSearch from './pages/RxSearch';
import RxQueue from './pages/RxQueue';
import Login from './pages/Login';

interface PharmacyRoutes {
    routeName: string;
    path: string;
    component: React.FC;
}

const routes: PharmacyRoutes[] = [
    {
        routeName: "NewRx",
        path: "/new-rx",
        component: NewRx
    },
    {
        routeName: "Patients",
        path: "/patients",
        component: Patients
    },
    {
        routeName: "Prescriber",
        path: "/prescriber/*",
        component: Prescriber
    },
    {
        routeName: "RxSearch",
        path: "/rx-search",
        component: RxSearch
    },
    {
        routeName: "RxQueue",
        path: "/rx-queue",
        component: RxQueue
    },
    {
        routeName: "Logout",
        path: "/login",
        component: Login
    }

]
>>>>>>> 6856b3d (Add seperate pages)

export default routes;
