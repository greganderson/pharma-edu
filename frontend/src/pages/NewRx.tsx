import React, { useState, useEffect } from 'react';
import { PatientBasics, Patient } from './Patient/PatientModels';
import styles from './NewRx.module.css';

const NewRx: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
    const [submitted, setSubmitted] = useState<boolean>(false);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch('http://localhost:8000/patients');
                if (response.ok) {
                    const data: Patient[] = await response.json();
                    setPatients(data);
                } else {
                    console.error('Failed to fetch patients');
                }
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredPatients([]);
        } else {
            const filtered = patients.filter(p =>
                `${p.first_name} ${p.last_name} ${p.date_of_birth}`
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            );
            setFilteredPatients(filtered);
        }
    }, [searchTerm, patients]);

    const handleSelectPatient = (patient: Patient) => {
        setSelectedPatient(patient);
        setSearchTerm('');
        setFilteredPatients([]);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };


    return (
        <main className={styles.mainNewRx}>
            <h1 className={styles.NewRx_h1}>New Rx</h1>
            <hr className={styles.hr}></hr>
            <form onSubmit={handleSubmit} className={styles.NewRxForm}>
                <table className={styles.enterPatientInfo}>
                    <tbody>
                    <tr>
                            <td>
                                <label htmlFor='patient'>Patient: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search by name or date of birth..."
                                />
                                {filteredPatients.length > 0 && (
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
                                )}
                                {searchTerm && filteredPatients.length === 0 && <p>No patients found</p>}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='prescriber'>Prescriber: </label>
                            </td>
                            <td>
                                <input type="text" id="prescriber" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='item'>Item: </label>
                            </td>
                            <td>
                                <input type="text" id="item" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='directions'>Directions: </label>
                            </td>
                            <td>
                                <textarea id="directions"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='allergies'>Allergies: </label>
                            </td>
                            <td>
                                <textarea id="allergies"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.techNquantity}>
                    <table className={styles.quantityTable}>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="qtyWritten">Quantity Written: </label>
                                </td>
                                <td>
                                    <input type="number" id="qtyWritten" />
                                </td>
                                <td>
                                    <label htmlFor="qtyDispensed">Quantity Dispensed: </label>
                                </td>
                                <td>
                                    <input type="number" id="qtyDispensed" />
                                </td>
                                <td>
                                    <label htmlFor="refills">Refills: </label>
                                </td>
                                <td>
                                    <input type="number" id="refills" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={styles.techInitials}>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor='techInitials'>Tech Initials:</label>
                                    <input type="text" id="techInitials" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                </form>

                <div className={styles.displayPatientInfo}>
                    {selectedPatient ? (
                        <div>
                            <h6>Patient Information: </h6>
                            <p>{selectedPatient.first_name} {selectedPatient.last_name}</p>
                            <p>{selectedPatient.date_of_birth}</p>
                            <p>{selectedPatient.street}</p>
                            <p>{selectedPatient.city}</p>
                            <p>{selectedPatient.state} {selectedPatient.zipcode}</p>
                            <p>{selectedPatient.phone_number}</p>
                        </div>
                    ) : (
                        <p>No patient selected</p>
                    )}
                </div>

                <form onSubmit={handleSubmit} className={styles.RxDateInfo}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='dateWritten'>Written: </label>
                            </td>
                            <td>
                                <input
                                    type="date"
                                    id="dateWritten"
                                    placeholder='Date Written'
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='dateDispensed'>Dispensed: </label>
                            </td>
                            <td>
                                <input
                                    type="date"
                                    id="dateDispensed"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='dateDiscard'>Discard: </label>
                            </td>
                            <td>
                                <input
                                    type="date"
                                    id="dateDiscard"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='dateExpire'>Rx Expire: </label>
                            </td>
                            <td>
                                <input
                                    type="date"
                                    id="dateExpire"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='rxNumber'>Rx Number: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="rxNumber"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div className={styles.displayRxScan}>
                <p>Scan Image</p>
            </div>

            <div className={styles.NewRxButtons}>
                <button type="submit">Save Rx</button>
                <button type='submit'>Print Label</button>
                <button type='submit'>Scan Rx</button>
            </div>
        </main>
    );
}

export default NewRx;
