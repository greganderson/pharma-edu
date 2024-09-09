import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { PrescriberBasics } from './PrescriberModels';
import styles from "../Search.module.css"


const PrescriberSearch:React.FC = () => {
    const [prescribers, setPrescribers] = useState<PrescriberBasics[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPrescriber, setFilteredPrescribers] = useState<PrescriberBasics[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPrescribers = async () => {
            const response = await fetch('http://localhost:8000/prescribers');
            const data = await response.json();
            setPrescribers(data);
        };

        fetchPrescribers();
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredPrescribers([]);
        } else {
            const filtered = prescribers.filter(prescriber =>
                `${prescriber.first_name} ${prescriber.last_name} ${prescriber.dea}`
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            );
            setFilteredPrescribers(filtered);
        }
    }, [searchTerm, prescribers]);

    const handleSelectPrescriber = (prescriber: PrescriberBasics) => {
        console.log(`Selected prescriber: ${prescriber.first_name} ${prescriber.last_name}`);
        const prescriber_id = prescriber.id;
        navigate(`/prescriber/view-prescriber/${prescriber_id}`);
    };

    return (
        <main className={styles.mainSearch}>
            <h2>Prescriber Search</h2>
            <hr className={styles.hr}></hr>
            <div className={styles.container}>
                <label htmlFor='search'>Quick Search: </label>
                <div className={styles.inputDropdownMatch}>
                <input
                    type="text"
                    id="search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='Search by name or DEA...'
                    autoComplete="off"
                />
                {filteredPrescriber.length > 0 ? (
                    <ul className={styles.dropdown} role="listbox" title='dropdown'>
                        {filteredPrescriber.map((prescriber) => (
                            <li
                                key={prescriber.id}
                                onClick={() => handleSelectPrescriber(prescriber)}
                                className={styles.dropdownItem}
                                role="option"
                            >
                                {prescriber.first_name} {prescriber.last_name} (DEA: {prescriber.dea})
                            </li>
                        ))}
                    </ul>
                    ) : (
                        searchTerm && <p>No prescribers found...</p>
                    )}
                </div>
            </div>
            <div className={styles.ButtonContainer}>
                <Link to="/prescriber/add-prescriber">
                    <button type="button">Add New Prescriber</button>
                </Link>
            </div>
        </main>
    );
}

export default PrescriberSearch;




