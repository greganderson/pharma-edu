import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PrescriberSearch from './PrescriberSearch';
import ViewPrescriber from './ViewPrescriber';
import AddPrescriber from './AddPrescriber';
import UpdatePrescriber from './UpdatePrescriber';


const Prescriber: React.FC = () => {
    return (
        <Routes>
            {/* Redirect from /prescriber to /prescriber-search */}
            <Route path="/" element={<Navigate to="/prescriber/prescriber-search" />} />
            <Route path="/prescriber-search" element={<PrescriberSearch />} />
            <Route path="/view-prescriber/:prescriber_id" element={<ViewPrescriber />} />
            <Route path="/add-prescriber" element={<AddPrescriber />} />
            <Route path="/update-prescriber/:prescriber_id" element={<UpdatePrescriber />} />
        </Routes>
    );
}

export default Prescriber;


