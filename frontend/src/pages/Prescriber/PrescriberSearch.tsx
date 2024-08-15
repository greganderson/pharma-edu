import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// import AddPrescriber from './AddPrescriber';

import styles from "./PrescriberSearch.module.css"


const PrescriberSearch:React.FC = () => {
    useEffect(() => {
        console.log("Prescriber search is selected");
    }, []);
    return (
        <main className={styles.mainSearch}>
            <h2>Prescriber Search</h2>
            <label htmlFor='search'>Quick Search: </label>
            <input
                type="text"
                id="search"
            />
            <Link to="/add-prescriber">
                <button type="button">Add New Perscriber</button>
            </Link>
        </main>
    );
}

export default PrescriberSearch;