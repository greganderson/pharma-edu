import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { PrescriberType, states } from "./PrescriberModels"
import styles from "./AddPrescriber.module.css";

const AddPerscriber:React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const [prescriberData, setPrescriberData] = useState({
        last_name: "",
        first_name: "",
        prescriber_type: "",
        facility: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        contact_number: "",
        dea: "",
        npi: ""
    });

    const navigate = useNavigate();

    const postPrescriber = async (prescriberData: any) => {
        try {
            const response = await fetch('http://localhost:8000/prescribers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(prescriberData),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create prescriber.');
            }
    
            return response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    // useEffect(() => {
    //     console.log("Add Prescriber Loaded");
    //   }, []);

      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
    
        try {
            const result = await postPrescriber(prescriberData);
            setSubmitted(true);
            const prescriber_id = result.prescriber_id;
            navigate(`/prescriber/view-prescriber/${prescriber_id}`); // Navigate to the view-prescriber page with the prescriber ID
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the prescriber.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = event.target;
        setPrescriberData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    return (
        <main className={styles.addPrescriberMain}>
            <h2 className={styles.AddPrescriber_h1}>Add Prescriber</h2>
            <hr className={styles.hr}></hr>
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
                                            value={prescriberData.last_name}
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
                                            value={prescriberData.first_name}
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
                                        <select 
                                            id="prescriber_type" 
                                            value={prescriberData.prescriber_type}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="" disabled></option>
                                            {PrescriberType.map((prescribertypes) => (
                                                <option key={prescribertypes} value={prescribertypes}>
                                                {prescribertypes}
                                            </option>
                                        ))}
                                        </select>
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
                                            value={prescriberData.dea}
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
                                        <label htmlFor='facility'>Facility: </label>
                                    </td>
                                    <td>
                                        <input type="text" id="facility"
                                            onChange={handleInputChange}
                                            value={prescriberData.facility}
                                            />
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
                                    <select
                                        id='state'
                                        value={prescriberData.state}
                                        onChange={handleInputChange}
                                        required
                                    >
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
                                            value={prescriberData.zipcode}
                                            onChange={handleInputChange}
                                            // required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='contact_number'>Phone Number: </label>
                                    </td>
                                    <td>
                                        <input type="tel" id="contact_number" 
                                        value={prescriberData.contact_number}
                                        onChange={handleInputChange}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button type="submit" disabled={isSubmitting} className={styles.saveButton}>
                        {isSubmitting ? 'Saving...' : 'Save Prescriber'}
                    </button>
                    <Link to="/prescriber/search-prescriber">
                        <button type="button">Cancel</button>
                    </Link>
                </div>
            </form>
        </main>
    );
}

export default AddPerscriber;
