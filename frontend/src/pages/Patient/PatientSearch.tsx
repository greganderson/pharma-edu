import React from 'react';
import { Link } from 'react-router-dom';

import styles from "../Search.module.css"


const PatientSearch:React.FC = () => {
    return (
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
    );
}

export default PatientSearch;