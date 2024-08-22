import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './AddPatients.module.css';

const AddPatient:React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);

    const [patientData, setPatientData] = useState({
        lastName: "",
        firstName: "",
        dob: "",
        address: ["", "", ""],
        phoneNumber: "",
        primaryDoc: "",
        allergies: "",
        insuranceName: "",
        insuranceId: "",
        bin: "",
        pcn: "",
        group: ""
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className={styles.PatientMain}>
            <h1 className={styles.Patient_h1}>Add Patient</h1>
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
                                            placeholder='Address Line 1'
                                        />
                                        <input
                                            type="text"
                                            id="address"
                                            placeholder='Address Line 2'
                                        />
                                        <input
                                            type="text"
                                            id="address"
                                            placeholder='Address Line 3'
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
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Link to="/patient/view-patient">
                        <button type="button">Save Patient</button>
                    </Link>
                </div>
            </form>
        </main>
    );
}

export default AddPatient;