<<<<<<< HEAD
import React from "react";

const NewRx: React.FC = () => {
  return <h1>New Rx</h1>;
};

export default NewRx;
=======
import React, { useState } from 'react';

import styles from './NewRx.module.css';

const NewRx:React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main>
            <h1>New Rx</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='patient'>Patient: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="patient"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='perscriber'>Perscriber: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="perscriber"
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
                        <tr>
                            <td>
                                <label htmlFor='item'>Item: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="item"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='sigcode'>Sig Code: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="sigcode"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='instructions'>Instructions: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="instructions"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className={styles.quantityTable}>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='qtyWritten'>Quantity Written: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="qtyWritten"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='qtyDispensed'>Quantity Dispensed: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="qtyDispensed"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='refills'>Refills: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="refills"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='techInitials'>Tech Initials: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="techInitials"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className={styles.displayPatientInfo}></div>

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
                                    type="date"
                                    id="rxNumber"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <div className={styles.displayRxScan}></div>

            <button type='submit'>Print Label</button>
            <button type='submit'>Scan Rx</button>
        </main>
    );
}

export default NewRx;
>>>>>>> 6856b3d (Add seperate pages)
