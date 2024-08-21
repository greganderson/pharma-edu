import PatientSearch from "./pages/PatientSearch";
import NewPrescription from "./pages/NewPrescription";
import Doctors from "./pages/Doctors";
import MedSearch from "./pages/MedSearch";
import Queue from "./pages/Queue";
import PatientProfile from "./pages/PatientProfile";

interface NavBarLinks {
    link: string;
    path: string;
    component: React.FC;
}

const routes: NavBarLinks[]= [ 
    {link:"Prescriptions", path:"/new_prescription", component: NewPrescription}, 
    {link:"Queue", path:"/queue", component: Queue},
    {link:"Patient Search", path:"/patient_Search", component: PatientSearch},
    {link:"Doctors", path:"/doctors", component: Doctors},
    {link:"Medication", path:"/med_search", component: MedSearch},
]

export default routes