import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from "./AddMedication.module.css";


const UpdateMedication:React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className={styles.addItemMain}>
        <h2 className={styles.AddItem_h1}>Update Medication</h2>
        <form onSubmit={handleSubmit} className={styles.addRxForm}>
            <div className={styles.gridContainerItem}>
                {/* Left Column */}
                <div className={styles.itemColumn}>
                    <table className={styles.enterNewItem}>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor='ndc'>NDC: </label>
                                </td>
                                <td>
                                    <input type="text" id="ndc" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='Name'>Name: </label>
                                </td>
                                <td>
                                    <input type="text" id="Name" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='manufacturer'>Manufacturer: </label>
                                </td>
                                <td>
                                    <input type="text" id="manufacturer" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='itemBrand'>Brand/Generic: </label>
                                </td>
                                <td>
                                    <input id="itemBrand"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='drugClass'>Drug Class: </label>
                                </td>
                                <td>
                                    <input type="text" id="drugClass" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='dea'>DEA Schedule: </label>
                                </td>
                                <td>
                                    <input type="text" id="dea" />
                                </td>
                            </tr>
                            </tbody>
                            </table>
                        </div>
                {/* Right Column */}
                <div className={styles.ItemColumn2}>
                    <table className={styles.enterNewItem}>
                        <tbody>
                        <tr>
                            <td>
                                <label htmlFor='dosage'>Dosage Form: </label>
                            </td>
                            <td>
                                <input type="text" id="dosage" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='strength'>Strength: </label>
                            </td>
                            <td>
                            <input type="text" id="strength" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='lotNumber'>Lot Number: </label>
                            </td>
                            <td>
                            <input type="text" id="lotNumber" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='expire'>Expiration: </label>
                            </td>
                            <td>
                            <input type="text" id="expire" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='otc'>Sold OTC: </label>
                            </td>
                            <td>
                                <input type="checkbox" id="otc" className={styles.OTC} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Link to="/rx-item/view-medication">
                    <button type="submit" className={styles.saveItemButton}>Save Medication</button>
                </Link>
            </div>
        </form>
    </main>
    );
}

export default UpdateMedication;