import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './ViewPatients.module.css';

const ViewPatient:React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className={styles.PatientMain}>
            <h1 className={styles.Patient_h1}>View Patient</h1>
            <hr></hr>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.PatientGridContainer}>
                    <div>
                        <h3>General Information</h3>
                        <table className={styles.tableContainer1}>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor='lastName'>Last Name: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="lastName"
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='firstName'>First Name: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="firstName"
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='dob'>DOB: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="dob"
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='address'>Address: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="address"
                                            readOnly
                                        />
                                        <input
                                            type="text"
                                            id="address"
                                            readOnly
                                        />
                                        <input
                                            type="text"
                                            id="address"
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='phoneNumber'>Phone Number: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='primaryDoc'>Primary Physician: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="primaryDoc"
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='allergies'>Allergies: </label>
                                    </td>
                                    <td>
                                        <textarea
                                            id="allergies"
                                            readOnly
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3>Insurance Information</h3>
                        <table className={styles.tableContainer2}>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor='insuranceName'>Insurance Name: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="insuranceName"
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='insuranceId'>Insurance Id: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="insuranceId"
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='bin'>BIN: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            id="bin"
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='pcn'>PCN: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="pcn"
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='group'>Group Id: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="group"
                                            readOnly
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Link to="/patient/rx-history">
                        <button type='button'>Rx History</button>
                    </Link>
                    <Link to="/patient/update-patient">
                        <button type='submit'>Edit Patient</button>
                    </Link>
                    <Link to="/new-rx">
                        <button type='submit'>New Rx</button>
                    </Link>
                </div>
            </form>
        </main>
    );
}

export default ViewPatient;
