import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from "./AddMedication.module.css";
import style from "./ViewMedication.module.css";


const ViewMedication:React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className={styles.addItemMain}>
        <h2 className={styles.AddItem_h1}>View Medication</h2>
        <form onSubmit={handleSubmit} className={styles.addRxForm}>
            <div className={styles.gridContainerItem}>
                {/* Left Column */}
                <div className={styles.itemColumn}>
                    <table className={style.enterNewItem}>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor='ndc'>NDC: </label>
                                </td>
                                <td>
                                    <input type="text" id="ndc" readOnly/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='Name'>Name: </label>
                                </td>
                                <td>
                                    <input type="text" id="Name" readOnly/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='manufacturer'>Manufacturer: </label>
                                </td>
                                <td>
                                    <input type="text" id="manufacturer" readOnly/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='itemBrand'>Brand/Generic: </label>
                                </td>
                                <td>
                                    <input id="itemBrand" type='text' readOnly/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='drugClass'>Drug Class: </label>
                                </td>
                                <td>
                                    <input type="text" id="drugClass" readOnly/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='dea'>DEA Schedule: </label>
                                </td>
                                <td>
                                    <input type="text" id="dea" readOnly/>
                                </td>
                            </tr>
                            </tbody>
                            </table>
                        </div>
                {/* Right Column */}
                <div className={styles.ItemColumn2}>
                    <table className={style.enterNewItem}>
                        <tbody>
                        <tr>
                            <td>
                                <label htmlFor='dosage'>Dosage Form: </label>
                            </td>
                            <td>
                                <input type="text" id="dosage" readOnly/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='strength'>Strength: </label>
                            </td>
                            <td>
                            <input type="text" id="strength" readOnly/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='lotNumber'>Lot Number: </label>
                            </td>
                            <td>
                            <input type="text" id="lotNumber" readOnly/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='expire'>Expiration: </label>
                            </td>
                            <td>
                            <input type="text" id="expire" readOnly/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='otc'>Sold OTC: </label>
                            </td>
                            <td>
                                <input type="checkbox" id="otc" className={styles.OTC} readOnly/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Link to="/rx-item/update-medication">
                    <button type="submit" className={styles.saveItemButton}>Edit Medication</button>
                </Link>
            </div>
        </form>
    </main>
    );
}

export default ViewMedication;