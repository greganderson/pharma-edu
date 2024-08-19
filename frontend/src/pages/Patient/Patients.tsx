import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PatientSearch from './PatientSearch';
import ViewPatient from './ViewPatient';
import AddPatient from './AddPatient';

const Patient:React.FC = () => {
    return (
        <Routes>
            {/* Redirect from /patient to /patient-search */}
            <Route path="/" element={<Navigate to="/patient/patient-search" />} />
            <Route path="/patient-search" element={<PatientSearch />} />
            <Route path="/view-patient" element={<ViewPatient />} />
            <Route path="/add-patient" element={<AddPatient />} />
            {/* <Route path="/update-patient" element={<UpdatePatient />} /> */}
        </Routes>
    );
}

export default Patient;