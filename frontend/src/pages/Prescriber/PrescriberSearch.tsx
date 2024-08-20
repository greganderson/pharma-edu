import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../component/Modal';
import styles from "../Search.module.css"


const PrescriberSearch:React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <Modal show={isModalOpen} onClose={closeModal}>
            <main className={styles.mainSearch}>
                <h2>Prescriber Search</h2>
                <label htmlFor='search'>Quick Search: </label>
                <input
                    type="text"
                    id="search"
                />
                <Link to="/prescriber/add-prescriber">
                    <button type="button">Add New Prescriber</button>
                </Link>
            </main>
        </Modal>
    );
}

export default PrescriberSearch;




