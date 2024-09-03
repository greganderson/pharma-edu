import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PatientBasics } from './PatientModels';
import styles from "../Search.module.css";

const PatientSearch: React.FC = () => {
    const [patients, setPatients] = useState<PatientBasics[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPatients, setFilteredPatients] = useState<PatientBasics[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('http://localhost:8000/patients');
            const data = await response.json();
            setPatients(data);
        };

        fetchPatients();
    }, []);

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

    const handleSelectPatient = (patient: PatientBasics) => {
        console.log(`Selected patient: ${patient.first_name} ${patient.last_name}`);
        const patient_id = patient.id;
        navigate(`/patient/view-patient/${patient_id}`);
    };

    return (
        <main className={styles.mainSearch}>
            <h2>Patient Search</h2>
            <hr className={styles.hr} />
            <div className={styles.container}>
                <label htmlFor='search'>Quick Search: </label>
                <div className={styles.inputDropdownMatch}>
                    <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by name or date of birth..."
                    />

                    {filteredPatients.length > 0 ? (
                        <ul className={styles.dropdown} role="listbox" title='dropdown'>
                            {filteredPatients.map((patient) => (
                                <li
                                    key={patient.id}
                                    onClick={() => handleSelectPatient(patient)}
                                    className={styles.dropdownItem}
                                    role="option"
                                >
                                    {patient.first_name} {patient.last_name} (DOB: {patient.date_of_birth})
                                </li>
                            ))}
                        </ul>
                    ) : (
                        searchTerm && <p>No patients found</p>
                    )}
                </div>
            </div>
            <div className={styles.ButtonContainer}>
                <Link to="/patient/add-patient">
                    <button type="button">Add New Patient</button>
                </Link>
            </div>
        </main>
    );
};

export default PatientSearch;