import React from 'react';
import { Link } from 'react-router-dom';

import styles from "../Search.module.css"

const RxSearch:React.FC = () => {

    return (
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
    );
}

export default RxSearch;

