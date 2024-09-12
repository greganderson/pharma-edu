import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PatientSearch from './PatientSearch';
import ViewPatient from './ViewPatient';
import AddPatient from './AddPatient';
import UpdatePatient from './UpdatePatient';
import RxHistory from './RxHistory';
import RefillRx from './RefillRx';
import ViewRx from './ViewRx';

const Patient:React.FC = () => {
    return (
        <Routes>
            {/* Redirect from /patient to /patient-search */}
            <Route path="/" element={<Navigate to="/patient/patient-search" />} />
            <Route path="/patient-search" element={<PatientSearch />} />
            <Route path="/view-patient/:patient_id" element={<ViewPatient />} />
            <Route path="/add-patient" element={<AddPatient />} />
            <Route path="/update-patient/:patient_id" element={<UpdatePatient />} />
            <Route path="/rx-history/:patient_id" element={<RxHistory />} />
            <Route path="/refill-rx/:rx_number" element={<RefillRx />} />
            <Route path="/view-rx/:rx_number" element={<ViewRx />} />
        </Routes>
    );
}

export default Patient;