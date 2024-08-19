import NewRx from './pages/NewRx';
import Patient from './pages/Patient/Patients';
import Prescriber from "./pages/Prescriber/Prescriber";
import RxItem from './pages/RxSearch/RxItem';
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
        routeName: "Patient",
        path: "/patient/*",
        component: Patient
    },
    {
        routeName: "Prescriber",
        path: "/prescriber/*",
        component: Prescriber
    },
    {
        routeName: "RxItem",
        path: "/rx-item/*",
        component: RxItem
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