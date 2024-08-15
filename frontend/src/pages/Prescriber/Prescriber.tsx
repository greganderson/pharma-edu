import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PrescriberSearch from './PrescriberSearch';
import ViewPrescriber from './ViewPrescriber';
import AddPrescriber from './AddPrescriber';
import UpdatePrescriber from './UpdatePrescriber';



// interface PrescriberRoutes {
//     routeName: string;
//     path: string;
//     component: React.FC;
// }

// const routes: PrescriberRoutes[] = [
//     {
//         routeName: "PrescriberSearch",
//         path: "/prescriber-search",
//         component: PrescriberSearch
//     },
//     {
//         routeName: "ViewPrescriber",
//         path: "/view-prescriber",
//         component: ViewPrescriber
//     },
//     {
//         routeName: "AddPrescriber",
//         path: "/add-prescriber",
//         component: AddPrescriber
//     },
//     {
//         routeName: "UpdatePrescriber",
//         path: "/update-prescriber",
//         component: UpdatePrescriber
//     }
// ]

// const Prescriber:React.FC = () => {

//     return (
//         <Routes>
//             <Route path="/" element={<Navigate to="/perscriber-search" />} />
//             {routes.map((route) => (
//                 <Route
//                 key={route.routeName}
//                 path={route.path}
//                 element={<route.component />}
//                 />
//             ))}
//         </Routes>
//     );
// }

const Prescriber: React.FC = () => {
    return (
        <Routes>
            {/* Redirect from /prescriber to /prescriber-search */}
            <Route path="/" element={<Navigate to="/prescriber/prescriber-search" />} />
            <Route path="/prescriber-search" element={<PrescriberSearch />} />
            <Route path="/view-prescriber" element={<ViewPrescriber />} />
            <Route path="/add-prescriber" element={<AddPrescriber />} />
            <Route path="/update-prescriber" element={<UpdatePrescriber />} />
        </Routes>
    );
}

export default Prescriber;


