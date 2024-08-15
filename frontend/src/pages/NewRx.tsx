import React, { useState } from 'react';

// import Modal from '../component/Modal'
import styles from './NewRx.module.css';

const NewRx:React.FC = () => {

    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className={styles.mainNewRx}>
            <h1 className={styles.NewRx_h1}>New Rx</h1>
            <form onSubmit={handleSubmit} className={styles.NewRxForm}>
                <table className={styles.enterPatientInfo}>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='patient'>Patient: </label>
                            </td>
                            <td>
                                <input type="text" id="patient" />
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
                                    <input type="text" id="qtyWritten" />
                                </td>
                                <td>
                                    <label htmlFor="qtyDispensed">Quantity Dispensed: </label>
                                </td>
                                <td>
                                    <input type="text" id="qtyDispensed" />
                                </td>
                                <td>
                                    <label htmlFor="refills">Refills: </label>
                                </td>
                                <td>
                                    <input type="text" id="refills" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={styles.techInitials}>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor='techInitials'>Tech Initials: </label>
                                    <input type="text" id="techInitials" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                </form>

                <div className={styles.displayPatientInfo}><h6>Patient Information: </h6></div>

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