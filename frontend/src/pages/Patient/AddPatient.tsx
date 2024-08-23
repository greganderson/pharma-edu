import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './AddPatients.module.css';

const AddPatient: React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [patientData, setPatientData] = useState({
        lastName: "",
        firstName: "",
        dob: "",
        address: ["", "", ""],
        phoneNumber: "",
        allergies: "",
        insuranceName: "",
        insuranceId: "",
        bin: "",
        pcn: "",
        group: ""
    });

    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string, addressIndex?: number) => {
        if (fieldName === "address" && addressIndex !== undefined) {
            const updatedAddress = [...patientData.address];
            updatedAddress[addressIndex] = event.target.value;
            setPatientData({ ...patientData, address: updatedAddress });
        } else {
            setPatientData({ ...patientData, [fieldName]: event.target.value });
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('/patients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(patientData)
            });

            if (response.ok) {
                setSubmitted(true);
                alert('Patient created successfully!');
                // Redirect or clear the form
                navigate('/patient/view-patient'); // Redirect to a different page on success
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                alert('Failed to create patient.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the patient.');
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
                                            value={patientData.lastName}
                                            onChange={(e) => handleInputChange(e, "lastName")}
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
                                            type="text"
                                            id="first_name"
                                            value={patientData.firstName}
                                            onChange={(e) => handleInputChange(e, "firstName")}
                                            // required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='date_of_birth'>DOB: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="date_of_birth"
                                            value={patientData.dob}
                                            onChange={(e) => handleInputChange(e, "dob")}
                                            // required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='address'>Address: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder='Street Address'
                                            value={patientData.address[0]}
                                            onChange={(e) => handleInputChange(e, "street", 0)}
                                            // required
                                        />
                                        <input
                                            type="text"
                                            placeholder='City'
                                            value={patientData.address[1]}
                                            onChange={(e) => handleInputChange(e, "city", 1)}
                                            // required
                                        />
                                        <input
                                            type="text"
                                            placeholder='State'
                                            value={patientData.address[2]}
                                            onChange={(e) => handleInputChange(e, "state", 2)}
                                        />
                                        <input
                                            type="text"
                                            placeholder='Zipcode'
                                            value={patientData.address[2]}
                                            onChange={(e) => handleInputChange(e, "zipcode", 3)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='phoneNumber'>Phone Number: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            value={patientData.phoneNumber}
                                            onChange={(e) => handleInputChange(e, "phoneNumber")}
                                            // required
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
                                            onChange={(e) => handleInputChange(e, "allergies")}
                                            // required
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
                                        <label htmlFor='insuranceName'>Insurance Name: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="insuranceName"
                                            value={patientData.insuranceName}
                                            onChange={(e) => handleInputChange(e, "insuranceName")}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='insuranceId'>Insurance Id: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="insuranceId"
                                            value={patientData.insuranceId}
                                            onChange={(e) => handleInputChange(e, "insuranceId")}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='bin'>BIN: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            id="bin"
                                            value={patientData.bin}
                                            onChange={(e) => handleInputChange(e, "bin")}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='pcn'>PCN: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="pcn"
                                            value={patientData.pcn}
                                            onChange={(e) => handleInputChange(e, "pcn")}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor='group'>Group Id: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="group"
                                            value={patientData.group}
                                            onChange={(e) => handleInputChange(e, "group")}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button type="submit">Save Patient</button>
                    <Link to="/patient/view-patient">
                        <button type="button" >Cancel</button>
                    </Link>
                </div>
            </form>
        </main>
    );
}

export default AddPatient;