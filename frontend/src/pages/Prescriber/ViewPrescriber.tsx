import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Prescriber } from './PrescriberModels';
import style from "./ViewPrescriber.module.css";
import styles from "./Prescriber.module.css";


const ViewPrescriber:React.FC = () => {
    const { prescriber_id } = useParams<{ prescriber_id: string }>();
    console.log('Prescriber ID:', prescriber_id); 

    const [prescriber, setPrescriber] = useState<Prescriber | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchPrescriber = async () => {
            if (!prescriber_id) {
                console.error('Prescriber ID is missing');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:8000/prescribers/${prescriber_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Prescriber data:', data);
                setPrescriber(data);
            } catch (error) {
                console.error('Error fetching prescriber data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPrescriber();
    }, [prescriber_id]);

    if (loading) return <div>Loading Prescriber...</div>;
    if (!prescriber) return <div>Prescriber not found</div>;

    return (
            <main className={styles.addPrescriberMain}>
            <h2 className={styles.AddPrescriber_h1}>View Prescriber</h2>
            <hr className={styles.hr}></hr>
            <form className={styles.NewPresciberForm}>
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
                                            value={prescriber.last_name}
                                            readOnly
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
                                            value={prescriber.first_name}
                                            readOnly
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
                                            value={prescriber.prescriber_type}
                                            readOnly
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
                                            value={prescriber.npi}
                                            readOnly
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
                                            value={prescriber.dea}
                                            readOnly
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
                                        <label htmlFor='street'>Street Address: </label>
                                    </td>
                                    <td>
                                        <input
                                            id='street'
                                            type="text"
                                            value={prescriber.street}
                                            readOnly
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
                                            value={prescriber.city}
                                            readOnly
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
                                            value={prescriber.state}
                                            readOnly
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
                                            value={prescriber.zipcode}
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='contact_number'>Phone Number: </label>
                                    </td>
                                    <td>
                                        <input 
                                            type="tel" 
                                            id="contact_number"
                                            value={prescriber.contact_number}
                                            readOnly
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Link to={`/prescriber/update-prescriber/${prescriber_id}`}>
                        <button type="submit" className={styles.EditButton}>Edit Prescriber</button>
                    </Link>
                </div>
            </form>
        </main>
    );
}

export default ViewPrescriber;