import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../component/Modal';
import styles from "../Search.module.css"

const RxSearch:React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(true);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <Modal show={isModalOpen} onClose={closeModal}>
            <main className={styles.mainSearch}>
                <h2>Rx Item Search</h2>
                <label htmlFor='search'>Quick Search: </label>
                <input
                    type="text"
                    id="search"
                />
                <Link to="/rx-item/add-medication">
                    <button type="button">Add New Medication</button>
                </Link>
            </main>
        </Modal>
    );
}

export default RxSearch;

