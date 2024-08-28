import React from 'react';
import { Link } from 'react-router-dom';

import styles from "../Search.module.css"


const PrescriberSearch:React.FC = () => {
    return (
        <main className={styles.mainSearch}>
            <h2>Prescriber Search</h2>
            <hr className={styles.hr}></hr>
            <div className={styles.container}>
                <label htmlFor='search'>Quick Search: </label>
                <input
                    type="text"
                    id="search"
                    placeholder='Search by name or DEA...'
                />
            </div>
            <Link to="/prescriber/add-prescriber">
                <button type="button">Add New Prescriber</button>
            </Link>
        </main>
    );
}

export default PrescriberSearch;




