import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './ViewPatients.module.css';
import styles from "./AddPatients.module.css";

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

const ViewPatient: React.FC = () => {
    const { patient_id } = useParams<{ patient_id: string }>();
    console.log('Patient ID:', patient_id); 
    const [patient, setPatient] = useState<Patient | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

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
                console.log('Patient data:', data);
                setPatient(data);
            } catch (error) {
                console.error('Error fetching patient data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPatient();
    }, [patient_id]);

    if (loading) return <div>Loading Patient...</div>;
    if (!patient) return <div>Patient not found</div>;

    return (
        <main className={styles.PatientMain}>
            <h1 className={styles.Patient_h1}>View Patient</h1>
            <hr></hr>
            <form className={styles.formContainer}>
                <div className={styles.PatientGridContainer}>
                    <div className={style.table}>
                        <h3>General Information</h3>
                        <table className={styles.tableContainer1}>
                            <tbody>
                                <tr>
                                    <td><label htmlFor='last_name'>Last Name: </label></td>
                                    <td><input type="text" id="last_name" value={patient.last_name} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='first_name'>First Name: </label></td>
                                    <td><input type="text" id="first_name" value={patient.first_name} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='date_of_birth'>DOB: </label></td>
                                    <td><input type="text" id="date_of_birth" value={patient.date_of_birth} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='street'>Street Address: </label></td>
                                    <td><input id='street' type="text" value={patient.street} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='city'>City: </label></td>
                                    <td><input id='city' type="text" value={patient.city} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='state'>State: </label></td>
                                    <td><input id='state' value={patient.state} disabled /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='zipcode'>Zip Code: </label></td>
                                    <td><input id='zipcode' type="text" value={patient.zipcode} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='phone_number'>Phone Number: </label></td>
                                    <td><input type="tel" id="phone_number" value={patient.phone_number} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='allergies'>Allergies: </label></td>
                                    <td><textarea id="allergies" value={patient.allergies} readOnly /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={style.table}>
                        <h3>Insurance Information</h3>
                        <table className={styles.tableContainer2}>
                            <tbody>
                                <tr>
                                    <td><label htmlFor='insurance_name'>Insurance Name: </label></td>
                                    <td><input type="text" id="insurance_name" value={patient.insurance_name} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='insurance_member_id'>Insurance Id: </label></td>
                                    <td><input type="text" id="insurance_member_id" value={patient.insurance_member_id} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='insurance_rx_bin'>BIN: </label></td>
                                    <td><input type="number" id="insurance_rx_bin" value={patient.insurance_rx_bin} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='insurance_rx_pcn'>PCN: </label></td>
                                    <td><input type="text" id="insurance_rx_pcn" value={patient.insurance_rx_pcn} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='insurance_group_number'>Group Id: </label></td>
                                    <td><input type="text" id="insurance_group_number" value={patient.insurance_group_number} readOnly /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Link to={`/patient/rx-history`}>
                        <button type='button'>Rx History</button>
                    </Link>
                    <Link to={`/patient/update-patient/${patient_id}`}>
                        <button type='button'>Edit Patient</button>
                    </Link>
                    <Link to="/new-rx">
                        <button type='button'>New Rx</button>
                    </Link>
                </div>
            </form>
        </main>
    );
}

export default ViewPatient;
