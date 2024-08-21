import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from "./AddPrescriber.module.css";

const AddPerscriber:React.FC = () => {
    useEffect(() => {
        console.log("Add Prescriber Loaded");
      }, []);

    const [submitted, setSubmitted] = useState<boolean>(false);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className={styles.addPrescriberMain}>
            <h2 className={styles.AddPrescriber_h1}>Add Prescriber</h2>
            <form onSubmit={handleSubmit} className={styles.NewPresciberForm}>
                <div className={styles.gridContainer}>
                    {/* Left Column */}
                    <div className={styles.column}>
                        <table className={styles.enterNewPrescriber}>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor='LastName'>Last Name: </label>
                                    </td>
                                    <td>
                                        <input type="text" id="LastName" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='FirstName'>First Name: </label>
                                    </td>
                                    <td>
                                        <input type="text" id="FirstName" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='pType'>Physician Type: </label>
                                    </td>
                                    <td>
                                        <input type="text" id="pType" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='npi'>NPI Number: </label>
                                    </td>
                                    <td>
                                        <input id="npi"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='dea'>DEA: </label>
                                    </td>
                                    <td>
                                        <input type="text" id="dea" />
                                    </td>
                                </tr>
                                </tbody>
                                </table>
                            </div>
                    {/* Right Column */}
                    <div className={styles.column}>
                        <table className={styles.enterNewPrescriber}>
                            <tbody>
                            <tr>
                                <td>
                                    <label htmlFor='facility'>Facility: </label>
                                </td>
                                <td>
                                    <input type="text" id="facility" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='address'>Address: </label>
                                </td>
                                <td>
                                <input type="text" id="address" placeholder="Address Line 1"/>
                                <input type="text" id="addressLine2" placeholder="Address Line 2" />
                                <input type="text" id="addressLine3" placeholder="Address Line 3" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='phoneNumber'>Phone Number: </label>
                                </td>
                                <td>
                                    <input type="tel" id="phoneNumber" />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Link to="/prescriber/view-prescriber">
                        <button type="submit" className={styles.saveButton}>Save Prescriber</button>
                    </Link>
                </div>
            </form>
        </main>
    );
}

export default AddPerscriber;
