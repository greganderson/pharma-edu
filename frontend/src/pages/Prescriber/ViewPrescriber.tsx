import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import style from "./ViewPrescriber.module.css";
import styles from "./AddPrescriber.module.css";


const ViewPrescriber:React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);
    // const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const [prescriberData, setPrescriberData] = useState({
        last_name: "",
        first_name: "",
        prescriber_type: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        contact_number: "",
        dea: "",
        npi: ""
    });

    useEffect(() => {
        console.log("Add Prescriber Loaded");
      }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const handleInputChange = () => {
        console.log("handle input");
    };

    return (
            <main className={styles.addPrescriberMain}>
            <h2 className={styles.AddPrescriber_h1}>View Prescriber</h2>
            <hr className='hr'></hr>
            <form onSubmit={handleSubmit} className={styles.NewPresciberForm}>
                <div className={styles.gridContainer}>
                    {/* Left Column */}
                    <div className={styles.column}>
                        <table className={style.enterNewPrescriber}>
                        <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor='last_name'>Last Name: </label>
                                    </td>
                                    <td>
                                        <input 
                                            id="last_name" 
                                            type="text"
                                            value={prescriberData.last_name}
                                            onChange={handleInputChange}
                                            // required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='first_name'>First Name: </label>
                                    </td>
                                    <td>
                                        <input 
                                            id="first_name" 
                                            type="text"
                                            value={prescriberData.first_name}
                                            onChange={handleInputChange}
                                            // required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='prescriber_type'>Physician Type: </label>
                                    </td>
                                    <td>
                                        <input 
                                            id="prescriber_type" 
                                            type="text"
                                            value={prescriberData.prescriber_type}
                                            onChange={handleInputChange}
                                            // required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='npi'>NPI Number: </label>
                                    </td>
                                    <td>
                                        <input 
                                            id="npi" 
                                            type="text"
                                            value={prescriberData.npi}
                                            onChange={handleInputChange}
                                            // required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='dea'>DEA: </label>
                                    </td>
                                    <td>
                                        <input 
                                            id="dea" 
                                            type="text"
                                            value={prescriberData.dea}
                                            onChange={handleInputChange}
                                            // required
                                        />
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
                                        <input type="text" id="facility" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='street'>Street Address: </label>
                                    </td>
                                    <td>
                                        <input
                                            id='street'
                                            type="text"
                                            value={prescriberData.street}
                                            onChange={handleInputChange}
                                            // required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='city'>City: </label>
                                    </td>
                                    <td>
                                        <input
                                            id='city'
                                            type="text"
                                            value={prescriberData.city}
                                            onChange={handleInputChange}
                                            // required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='state'>State: </label>
                                    </td>
                                    <td>
                                        <input
                                            id='state'
                                            type="text"
                                            value={prescriberData.state}
                                            onChange={handleInputChange}
                                            // required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='zipcode'>Zip Code: </label>
                                    </td>
                                    <td>
                                        <input
                                            id='zipcode'
                                            type="text"
                                            value={prescriberData.zipcode}
                                            onChange={handleInputChange}
                                            // required
                                        />
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
                    <Link to="/prescriber/update-prescriber">
                        <button type="submit" className={styles.EditButton}>Edit Prescriber</button>
                    </Link>
                </div>
            </form>
        </main>
    );
}

export default ViewPrescriber;