import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from "./ViewPrescriber.module.css";
import styles from "./AddPrescriber.module.css";


const ViewPrescriber:React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
            <main className={styles.addPrescriberMain}>
            <h2 className={styles.AddPrescriber_h1}>View Prescriber</h2>
            <form onSubmit={handleSubmit} className={styles.NewPresciberForm}>
                <div className={styles.gridContainer}>
                    {/* Left Column */}
                    <div className={styles.column}>
                        <table className={style.enterNewPrescriber}>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor='LastName'>Last Name: </label>
                                    </td>
                                    <td>
                                        <input type="text" id="LastName" readOnly/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='FirstName'>First Name: </label>
                                    </td>
                                    <td>
                                        <input type="text" id="FirstName" readOnly/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='pType'>Physician Type: </label>
                                    </td>
                                    <td>
                                        <input type="text" id="pType" readOnly/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='npi'>NPI Number: </label>
                                    </td>
                                    <td>
                                        <input id="npi" type="text" readOnly />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='dea'>DEA: </label>
                                    </td>
                                    <td>
                                        <input type="text" id="dea" readOnly/>
                                    </td>
                                </tr>
                                </tbody>
                                </table>
                            </div>
                    {/* Right Column */}
                    <div className={styles.column}>
                        <table className={style.enterNewPrescriber}>
                            <tbody>
                            <tr>
                                <td>
                                    <label htmlFor='facility'>Facility: </label>
                                </td>
                                <td>
                                    <input type="text" id="facility" readOnly/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='address'>Address: </label>
                                </td>
                                <td>
                                <input type="text" id="address" readOnly/>
                                <input type="text" id="address" readOnly />
                                <input type="text" id="address" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='phoneNumber'>Phone Number: </label>
                                </td>
                                <td>
                                    <input type="tel" id="phoneNumber" readOnly/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Link to="/prescriber/update-prescriber">
                        <button type="submit" className={styles.EditButton}>Edit Prescriber</button>
                    </Link>
                </div>
            </form>
        </main>
    );
}

export default ViewPrescriber;