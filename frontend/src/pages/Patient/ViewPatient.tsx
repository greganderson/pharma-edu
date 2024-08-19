import React, { useState } from 'react';

import styles from './ViewPatients.module.css';

const ViewPatient:React.FC = () => {
        const [submitted, setSubmitted] = useState<boolean>(false);

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setSubmitted(true);
        };
    
        return (
            <main>
            <h1>View Patient</h1>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div>
                    <div>
                        <h3>General Information</h3>
                        <table className={styles.tableContainer}>
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
                                        />
                                        <input
                                            type="text"
                                            id="address"
                                        />
                                        <input
                                            type="text"
                                            id="address"
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
                                        <input
                                            type="text"
                                            id="allergies"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.tableContainer}>
                        <h3>Insurance Information</h3>
                        <table>
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
                    <button type='submit'>Current Rx</button>
                    <button type='submit'>Edit Patient</button>
                    <button type='submit'>New Rx</button>
                </div>
            </form>
        </main>

    );
}

export default ViewPatient;