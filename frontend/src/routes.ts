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

export default routes;
