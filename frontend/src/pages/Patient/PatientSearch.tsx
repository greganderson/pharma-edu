import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from "../Search.module.css"

type Patient = {
    id: number;
    first_name: string;
    last_name: string;
    date_of_birth: string;
};


const PatientSearch:React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);

    // Use get_patients from /routers/patients.py
    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('/patients');
            const data = await response.json();
            setPatients(data);
        };

        fetchPatients();
    }, []);

    // Filter patients based on search term
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredPatients([]);
        } else {
            const filtered = patients.filter(patient =>
                `${patient.first_name} ${patient.last_name} ${patient.date_of_birth}`
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            );
            setFilteredPatients(filtered);
        }
    }, [searchTerm, patients]);

    const handleSelectPatient = (patient: Patient) => {


        // Handle the selection of a patient 
        

        console.log(`Selected patient: ${patient.first_name} ${patient.last_name}`);
    };


    return (
        <main className={styles.mainSearch}>
            <h2>Patient Search</h2>
            <label htmlFor='search'>Quick Search: </label>
            <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or date of birth..."
            />

            {/* Display the filtered list in a dropdown */}
            {filteredPatients.length > 0 && (
                <ul className={styles.dropdown}>
                    {filteredPatients.map((patient) => (
                        <li
                            key={patient.id}
                            onClick={() => handleSelectPatient(patient)}
                            className={styles.dropdownItem}
                        >
                            {patient.first_name} {patient.last_name} ({patient.date_of_birth})
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/patient/add-patient">
                <button type="button">Add New Patient</button>
            </Link>
        </main>
    );
}

export default PatientSearch;