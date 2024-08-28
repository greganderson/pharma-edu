import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Prescriber, states } from './PrescriberModels';
import styles from "./Prescriber.module.css";


const UpdatePerscriber:React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const { prescriber_id } = useParams<{ prescriber_id: string }>();
    const [prescriber, setPrescriber] = useState<Prescriber | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();


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
                setPrescriber(data);
            } catch (error) {
                console.error('Error fetching prescriber data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPrescriber();
    }, [prescriber_id]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = event.target;
        setPrescriber((prevPrescriber) => ({
            ...prevPrescriber!,
            [id]: value
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        if (!prescriber_id) {
            console.error('Prescriber ID is missing');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/prescribers/${prescriber_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(prescriber)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            setSubmitted(true);
            navigate(`/prescriber/view-prescriber/${prescriber_id}`);
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while updating the prescriber.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) return <div>Loading Prescriber...</div>;
    if (!prescriber) return <div>Prescriber not found</div>;

    return (
            <main className={styles.addPrescriberMain}>
            <h2 className={styles.AddPrescriber_h1}>Update Prescriber</h2>
            <hr className='hr'></hr>
            <form onSubmit={handleSubmit} className={styles.NewPresciberForm}>
                <div className={styles.gridContainer}>
                    {/* Left Column */}
                    <div className={styles.column}>
                        <table className={styles.enterNewPrescriber}>
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
                                            onChange={handleInputChange}
                                            required
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
                                            onChange={handleInputChange}
                                            required
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
                                            onChange={handleInputChange}
                                            required
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
                                            onChange={handleInputChange}
                                            required
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
                                            onChange={handleInputChange}
                                            required
                                        />
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
                                        <label htmlFor='street'>Street Address: </label>
                                    </td>
                                    <td>
                                        <input
                                            id='street'
                                            type="text"
                                            value={prescriber.street}
                                            onChange={handleInputChange}
                                            required
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
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='state'>State: </label>
                                    </td>
                                    <td>
                                        <select id='state' value={prescriber.state} onChange={handleInputChange} required>
                                            <option value="" disabled>Select a state</option>
                                            {states.map((state) => (
                                                <option key={state} value={state}>
                                                    {state}
                                                </option>
                                            ))}
                                        </select>
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
                                            onChange={handleInputChange}
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
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Saving...' : 'Save Prescriber'}
                </button>
                    {/* <Link to="/prescriber/update-prescriber/:">
                        <button type="submit" className={styles.EditButton}>Edit Prescriber</button>
                    </Link> */}
                </div>
            </form>
        </main>
    );
}

export default UpdatePerscriber;