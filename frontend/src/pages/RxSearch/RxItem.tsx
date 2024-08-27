import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import RxSearch from './RxSearch';
import AddMedication from './AddMedication';
import ViewMedication from './ViewMedication';
import UpdateMedication from './UpdateMedication';


const RxItem:React.FC = () => {
    return (
        <Routes>
            {/* Redirect from /rx-item to /rx-search */}
            <Route path="/" element={<Navigate to="/rx-item/rx-search" />} />
            <Route path="/rx-search" element={<RxSearch />} />
            <Route path="/add-medication" element={<AddMedication />} />
            <Route path="/view-medication/:rx_item_id" element={<ViewMedication />} />
            <Route path="/update-medication/:rx_item_id" element={<UpdateMedication />} />
        </Routes>
    );
}

export default RxItem;