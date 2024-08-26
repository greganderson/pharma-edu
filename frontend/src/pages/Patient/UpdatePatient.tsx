import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './AddPatients.module.css';

interface Patient {
    last_name: string;
    first_name: string;
    date_of_birth: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;
    phone_number: string;
    allergies: string;
    insurance_name: string;
    insurance_member_id: string;
    insurance_rx_bin: string;
    insurance_rx_pcn: string;
    insurance_group_number: string;
}

const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID",
    "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS",
    "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
    "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV",
    "WI", "WY"
];

const UpdatePatient: React.FC = () => {
    const { patient_id } = useParams<{ patient_id: string }>();
    const navigate = useNavigate();
    const [patient, setPatient] = useState<Patient | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    useEffect(() => {
        const fetchPatient = async () => {
            if (!patient_id) {
                console.error('Patient ID is missing');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:8000/patients/${patient_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setPatient(data);
            } catch (error) {
                console.error('Error fetching patient data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPatient();
    }, [patient_id]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = event.target;
        setPatient((prevPatient) => ({
            ...prevPatient!,
            [id]: value
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        if (!patient_id) {
            console.error('Patient ID is missing');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/patients/${patient_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(patient)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            setSubmitted(true);
            navigate(`/patient/view-patient/${patient_id}`);
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while updating the patient.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) return <div>Loading Patient...</div>;
    if (!patient) return <div>Patient not found</div>;

    return (
        <main className={styles.PatientMain}>
            <h1 className={styles.Patient_h1}>Update Patient</h1>
            <hr></hr>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.PatientGridContainer}>
                    {/* General Information */}
                    <div>
                        <h3>General Information</h3>
                        <table className={styles.tableContainer1}>
                            <tbody>
                                <tr>
                                    <td><label htmlFor='last_name'>Last Name: </label></td>
                                    <td><input type="text" id="last_name" value={patient.last_name} onChange={handleInputChange} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='first_name'>First Name: </label></td>
                                    <td><input type="text" id="first_name" value={patient.first_name} onChange={handleInputChange} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='date_of_birth'>DOB: </label></td>
                                    <td><input type="text" id="date_of_birth" value={patient.date_of_birth} onChange={handleInputChange} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='street'>Street Address: </label></td>
                                    <td><input id='street' type="text" value={patient.street} onChange={handleInputChange} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='city'>City: </label></td>
                                    <td><input id='city' type="text" value={patient.city} onChange={handleInputChange} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='state'>State: </label></td>
                                    <td>
                                        <select id='state' value={patient.state} onChange={handleInputChange} required>
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
                                    <td><label htmlFor='zipcode'>Zip Code: </label></td>
                                    <td><input id='zipcode' type="text" value={patient.zipcode} onChange={handleInputChange} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='phone_number'>Phone Number: </label></td>
                                    <td><input type="tel" id="phone_number" value={patient.phone_number} onChange={handleInputChange} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='allergies'>Allergies: </label></td>
                                    <td><textarea id="allergies" value={patient.allergies} onChange={handleInputChange} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Insurance Information */}
                    <div>
                        <h3>Insurance Information</h3>
                        <table className={styles.tableContainer2}>
                            <tbody>
                                <tr>
                                    <td><label htmlFor='insurance_name'>Insurance Name: </label></td>
                                    <td><input type="text" id="insurance_name" value={patient.insurance_name} onChange={handleInputChange} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='insurance_member_id'>Insurance Id: </label></td>
                                    <td><input type="text" id="insurance_member_id" value={patient.insurance_member_id} onChange={handleInputChange} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='insurance_rx_bin'>BIN: </label></td>
                                    <td><input type="number" id="insurance_rx_bin" value={patient.insurance_rx_bin} onChange={handleInputChange} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='insurance_rx_pcn'>PCN: </label></td>
                                    <td><input type="text" id="insurance_rx_pcn" value={patient.insurance_rx_pcn} onChange={handleInputChange} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='insurance_group_number'>Group Id: </label></td>
                                    <td><input type="text" id="insurance_group_number" value={patient.insurance_group_number} onChange={handleInputChange} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'Save Patient'}</button>
                </div>
            </form>
        </main>
    );
}

export default UpdatePatient;