import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { states } from "./PatientModels";
import styles from './Patients.module.css';

const AddPatient: React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const [patientData, setPatientData] = useState({
        last_name: "",
        first_name: "",
        date_of_birth: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        phone_number: "",
        allergies: "",
        insurance_name: "",
        insurance_member_id: "",
        insurance_rx_bin: "",
        insurance_rx_pcn: "",
        insurance_group_number: "",
        insurance_person_code: ""
    });

    const navigate = useNavigate();

    const postPatient = async (patientData: any) => {
        try {
            const response = await fetch('http://localhost:8000/patients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(patientData),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create patient.');
            }
    
            return response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = event.target;
        setPatientData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
    
        try {
            const result = await postPatient(patientData);
            setSubmitted(true);
            const patient_id = result.patient_id;
            navigate(`/patient/view-patient/${patient_id}`); // Navigate to the view-patient page with the patient ID
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the patient.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className={styles.PatientMain}>
            <h1 className={styles.Patient_h1}>Add Patient</h1>
            <hr className={styles.hr}></hr>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.PatientGridContainer}>
                    <div>
                        <h3>General Information</h3>
                        <table className={styles.tableContainer1}>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor='last_name'>Last Name: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="last_name"
                                            value={patientData.last_name}
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
                                            type="text"
                                            id="first_name"
                                            value={patientData.first_name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='date_of_birth'>DOB: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="date"
                                            id="date_of_birth"
                                            value={patientData.date_of_birth}
                                            onChange={handleInputChange}
                                            required
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
                                            value={patientData.street}
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
                                            value={patientData.city}
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
                                    <select
                                        id='state'
                                        value={patientData.state}
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
                                            value={patientData.zipcode}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='phone_number'>Phone Number: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="phone_number"
                                            value={patientData.phone_number}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='allergies'>Allergies: </label>
                                    </td>
                                    <td>
                                        <textarea
                                            id="allergies"
                                            value={patientData.allergies}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.insuranceInfo}>
                        <h3>Insurance Information</h3>
                        <table className={styles.tableContainer2}>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor='insurance_name'>Insurance Name: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="insurance_name"
                                            value={patientData.insurance_name}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='insurance_member_id'>Insurance Id: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="insurance_member_id"
                                            value={patientData.insurance_member_id}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='insurance_rx_bin'>BIN: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            id="insurance_rx_bin"
                                            value={patientData.insurance_rx_bin}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='insurance_rx_pcn'>PCN: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="insurance_rx_pcn"
                                            value={patientData.insurance_rx_pcn}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='insurance_group_number'>Group Id: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="insurance_group_number"
                                            value={patientData.insurance_group_number}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='insurance_person_code'>Person Code: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="insurance_person_code"
                                            value={patientData.insurance_person_code}
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
                    {isSubmitting ? 'Saving...' : 'Save Patient'}
                </button>
                    <Link to="/patient/search-patient">
                        <button type="button" >Cancel</button>
                    </Link>
                </div>
            </form>
        </main>
    );
}

export default AddPatient;