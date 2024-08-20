import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import { useModal } from './ModalContext';
import Modal from '../../component/Modal';

import styles from "../Search.module.css"


const PatientSearch:React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <Modal show={isModalOpen} onClose={closeModal}>
            <main className={styles.mainSearch}>
                <h2>Patient Search</h2>
                <label htmlFor='search'>Quick Search: </label>
                <input
                    type="text"
                    id="search"
                />
                <Link to="/patient/add-patient">
                    <button type="button">Add New Patient</button>
                </Link>
            </main>
        </Modal>
    );
}

export default PatientSearch;