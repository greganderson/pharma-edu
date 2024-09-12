import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

// import { Prescriber } from '../Prescriber/PrescriberModels';
// import { RxItem } from '../RxSearch/RxItemModel';
// import { Patient } from '../Patient/PatientModels';
import styles from '../Rx.module.css';
import style from './ViewRx.module.css';

interface Prescription {
    rx_number: number;
    patient_id: number;
    prescriber_id: number;
    rx_item_id: number;
    status: string;
    directions?: string;
    quantity?: number;
    quantity_dispensed?: number;
    refills?: number;
    prescribed_date?: string;
    dispense_date?: string;
    discard_date?: string;
    expiration_date?: string;
    rx_item_name?: string;
    rx_item_strength?: string;
    tech_initials?:string;
}


const RefillRx: React.FC = () => {
    // States to manage form submission status and locking the form
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const location = useLocation(); // Hook to access the location state (i.e., data passed from previous page)
    const [isFormLocked, setIsFormLocked] = useState<boolean>(false);

    const { patient, prescription, prescriber } = location.state || {};
    const { rx_number } = useParams<{ rx_number: string }>();
    const [fetchedPrescription, setFetchedPrescription] = useState<Prescription | null>(prescription || null);
    const [fetchedPrescriber, setFetchedPrescriber] = useState<any | null>(prescriber || null);
    const [fetchedPatient, setFetchedPatient] = useState<any | null>(patient || null);
    const [fetchedItem, setFetchedItem] = useState<any | null>(prescription || null);


    // State to manage prescription data (including patient, prescriber, and item details)
    const [prescriptionData, setPrescriptionData] = useState({
        rx_number: fetchedPrescription ? fetchedPrescription.rx_number : null, // Prescription number
        patient_id: fetchedPatient ? fetchedPatient.id : null, // Patient ID (null if not selected)
        patient: "", // Patient name
        prescriber_id: fetchedPrescriber ? fetchedPrescriber.id : null, // Prescriber ID (null if not selected)
        prescriber: "", // Prescriber name
        prescribed_date: "", // Date when the prescription was prescribed
        dispense_date: "", // Date when the prescription was dispensed
        discard_date: "", // Discard date (if applicable)
        expiration_date: "", // Expiration date of the prescription
        rx_item_id: fetchedItem ? fetchedItem.id : null, // Rx item ID (null if not selected)
        rx_item: "", // Name of the Rx item
        dosage_form: "", // Form of the medication (tablet, liquid, etc.)
        strength: "", // Strength of the medication
        directions: "", // Directions for taking the medication
        quantity: 0, // Quantity of the medication
        quantity_dispensed: 0, // Quantity that was dispensed
        refills: 0, // Number of refills available
        tech_initials: "", // Initials of the technician handling the prescription
        prescription_status: "" // Status of the prescription (e.g., pending, completed)
    });

    // Function to send the prescription data to the server
    const postPrescription = async (prescriptionData: any) => {
        console.log("Post Prescription Data: ", prescriptionData);
        try {
            // POST request to the server
            const response = await fetch('http://localhost:8000/prescriptions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(prescriptionData), // Send prescription data as JSON
            });
    
            if (!response.ok) { // If response is not ok, handle the error
                const errorData = await response.json();
                console.log('Server response:', errorData);
                throw new Error(errorData.message || 'Failed to create prescription.');
            }
    
            return response.json(); // Return the server response
        } catch (error) {
            console.error('Error:', error);
            throw error; // Rethrow the error to handle it outside
        }
    };


    useEffect(() => {
        const fetchPrescription = async () => {
            if (rx_number && !fetchedPrescription) { // Only fetch if prescription isn't already fetched
                try {
                    const response = await fetch(`http://localhost:8000/prescriptions/${rx_number}`);
                    if (!response.ok) throw new Error('Failed to fetch prescription');
                    const data = await response.json();
                    setFetchedPrescription(data);
    
                    // Update prescriptionData with fetched values
                    setPrescriptionData((prevData) => ({
                        ...prevData,
                        refills: data.refills || 0,
                        prescribed_date: data.prescribed_date || '',
                        quantity: data.quantity || 0,
                    }));
                } catch (error) {
                    console.error('Error fetching prescription data:', error);
                }
            }
        };
    
        const fetchItem = async () => {
            if (fetchedPrescription?.rx_item_id && !fetchedItem) { // Only fetch if item isn't already fetched
                try {
                    const response = await fetch(`http://localhost:8000/rx-items/${fetchedPrescription.rx_item_id}`);
                    if (!response.ok) throw new Error('Failed to fetch rx-item');
                    const data = await response.json();
                    setFetchedItem(data);
                } catch (error) {
                    console.error('Error fetching rx-item data:', error);
                }
            }
        };
    
        const fetchPrescriber = async () => {
            if (fetchedPrescription?.prescriber_id && !fetchedPrescriber) { // Only fetch if prescriber isn't already fetched
                try {
                    const response = await fetch(`http://localhost:8000/prescribers/${fetchedPrescription.prescriber_id}`);
                    if (!response.ok) throw new Error('Failed to fetch prescriber');
                    const data = await response.json();
                    setFetchedPrescriber(data);
                } catch (error) {
                    console.error('Error fetching prescriber data:', error);
                }
            }
        };
    
        const fetchPatient = async () => {
            if (fetchedPrescription?.patient_id && !fetchedPatient) { // Only fetch if patient isn't already fetched
                try {
                    const response = await fetch(`http://localhost:8000/patients/${fetchedPrescription.patient_id}`);
                    if (!response.ok) throw new Error('Failed to fetch patient');
                    const data = await response.json();
                    setFetchedPatient(data);
                } catch (error) {
                    console.error('Error fetching patient data:', error);
                }
            }
        };
    
        fetchPrescription();
        if (fetchedPrescription) {
            fetchItem();
            fetchPrescriber();
            fetchPatient();
        }
    }, [rx_number, fetchedPrescription, fetchedItem, fetchedPrescriber, fetchedPatient]);


//
// HANDLERS
//


    // Handle changes to form inputs (input, textarea, or select elements)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = event.target; // Extract 'id' and 'value' from the input
        setPrescriptionData((prevData) => ({
            ...prevData,
            [id]: value // Dynamically update the prescription data based on the field's id
        }));
    };

    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission behavior
        setIsSubmitting(true); // Set the form submission status to 'true'

        // Prepare updated prescription data
        const updatedPrescriptionData = {
            ...prescriptionData,
            prescription_status: "pending", // Set prescription status to 'pending'
            refills: prescriptionData.refills - 1, // Decrease refills by 1
            rx_item_id: prescriptionData.rx_item_id, // Ensure the correct rx_item_id is used
            dosage_form: prescriptionData.dosage_form // Ensure dosage form is included
        };

        console.log("Submitting prescription with pending status:", updatedPrescriptionData);

        // Function to submit prescription asynchronously
        const submitRx = async () => {
            try {
                // Call postPrescription and handle the result
                const result = await postPrescription(updatedPrescriptionData);
                if (result && result.rx_number) {
                    setSubmitted(true); // Mark form as submitted
                    setIsFormLocked(true); // Lock the form from further editing
                    alert(`Prescription Submitted. Rx Number: ${result.rx_number}`); // Show success alert with Rx number
                    console.log(`Rx Number: ${result.rx_number}`);
                } else {
                    throw new Error("Rx number not received in the response."); // Handle case where Rx number is missing
                }
            } catch (error) {
                console.log(updatedPrescriptionData); // Log the prescription data for debugging
                console.error('Error:', error); // Log the error
                alert("An error occurred while creating the prescription."); // Show error alert to the user
            } finally {
                setIsSubmitting(false); // Set submission status back to 'false' after completion
            }
        };

        submitRx(); // Call the asynchronous function to submit the prescription
    };

    // Handle printing of prescription labels
    const handlePrintLabel = async () => {
        const updatedPrescriptionData = {
            ...prescriptionData,
            prescription_status: 'completed' // Set prescription status to 'completed' when printing
        };

        try {
            // Make a PATCH request to update the prescription with 'completed' status
            const response = await fetch(`http://localhost:8000/prescriptions/${prescriptionData.rx_number}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPrescriptionData), // Send updated prescription data
            });

            if (response.ok) {
                alert(`Prescription printed. Rx Number: ${updatedPrescriptionData.rx_number}`); // Show success message
            } else {
                const errorData = await response.json();
                console.error('Server response:', errorData); // Log server response in case of failure
                throw new Error(errorData.message || 'Failed to update prescription.');
            }
        } catch (error) {
            console.error('Error:', error); // Log any errors
            alert("An error occurred while updating the prescription."); // Show error alert to the user
        }
    };

    // Update prescription data when patient, prescriber, or item is selected
    useEffect(() => {
        setPrescriptionData(prevData => ({
            ...prevData,
            patient_id: fetchedPatient ? fetchedPatient.id : null, // Set patient ID if patient is selected
            prescriber_id: fetchedPrescriber ? fetchedPrescriber.id : null, // Set prescriber ID if prescriber is selected
            rx_item_id: fetchedItem ? fetchedItem.id : null // Set Rx item ID if an item is selected
        }));
    }, [fetchedPatient, fetchedPrescriber, fetchedItem]); // Runs when any of these dependencies change
    // console.log("Prescription Data Initially: ", prescriptionData);

    
    return (
        <main className={styles.mainNewRx}>
            <h1 className={styles.NewRx_h1}>Refill Rx</h1>
            <hr className={styles.hr}></hr>
            <form onSubmit={handleSubmit} className={styles.NewRxForm}>
                <table className={styles.enterPatientInfo}>
                    <tbody>
                    <tr>
                            <td>
                                <label htmlFor='patient'>Patient: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="search"
                                    value={fetchedPatient ? `${fetchedPatient.first_name} ${fetchedPatient.last_name}` : ''}
                                    placeholder="Search for a patient"
                                    readOnly
                                    className={style.readOnlyField}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='prescriber'>Prescriber: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="prescriber"
                                    value={fetchedPrescriber ? `${fetchedPrescriber.first_name} ${fetchedPrescriber.last_name}, ${fetchedPrescriber.prescriber_type}` : ''}
                                    readOnly
                                    className={style.readOnlyField}
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
                                    value={`${fetchedItem.name} ${fetchedItem.strength} ${fetchedItem.dosage_form}`}
                                    readOnly
                                    className={style.readOnlyField}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='directions'>Directions: </label>
                            </td>
                            <td>
                                <textarea id="directions" value={prescriptionData.directions}
                                    onChange={handleInputChange} disabled={isFormLocked}
                                    readOnly={isFormLocked} required>           
                                </textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.techNquantity}>
                    <table className={styles.quantityTable}>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="quantity">Quantity Written: </label>
                                </td>
                                <td>
                                    <input type="number" id="quantity" value={prescriptionData.quantity} 
                                        onChange={handleInputChange} readOnly className={style.readOnlyField}/>
                                </td>
                                <td>
                                    <label htmlFor="quantity_dispensed">Quantity Dispensed: </label>
                                </td>
                                <td>
                                    <input type="number" id="quantity_dispensed" value={prescriptionData.quantity_dispensed}
                                        onChange={handleInputChange} disabled={isFormLocked}
                                        readOnly={isFormLocked} required/>
                                </td>
                                <td>
                                    <label htmlFor="refills">Refills: </label>
                                </td>
                                <td>
                                    <input type="number" id="refills" value={prescriptionData.refills}
                                        onChange={handleInputChange} readOnly className={style.readOnlyField}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={styles.techInitials}>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor='tech_initials'>Tech Initials:</label>
                                </td>
                                <td>
                                    <input type="text" id="tech_initials" value={prescriptionData.tech_initials} 
                                        onChange={handleInputChange} disabled={isFormLocked}
                                        readOnly={isFormLocked} required/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.NewRxButtons}>
                {/* Save Rx button disappears after Rx has been saved */}
                {!submitted && (
                    <button type="submit">
                        {isSubmitting ? 'Saving...' : 'Save Rx'}
                    </button>
                )}
                {/* Render the Print Label button only after submission */}
                {submitted && (
                    <button type="button" onClick={handlePrintLabel}>
                        {isSubmitting ? 'Printing...' : 'Print Label'}
                    </button>
                )}
                </div>

                <table className={styles.RxDateInfo}>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='prescribed_date'>Written: </label>
                            </td>
                            <td>
                                <input
                                    type="date"
                                    id="prescribed_date"
                                    value={prescriptionData.prescribed_date}
                                    onChange={handleInputChange}
                                    readOnly
                                    className={style.readOnlyField}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='dispense_date'>Dispensed: </label>
                            </td>
                            <td>
                                <input
                                    type="date"
                                    id="dispense_date"
                                    value={prescriptionData.dispense_date}
                                    disabled={isFormLocked}
                                    readOnly={isFormLocked}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='discard_date'>Discard After: </label>
                            </td>
                            <td>
                                <input
                                    type="date"
                                    id="discard_date"
                                    value={prescriptionData.discard_date}
                                    disabled={isFormLocked}
                                    readOnly={isFormLocked}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='expiration_date'>Rx Expire: </label>
                            </td>
                            <td>
                                <input
                                    type="date"
                                    id="expiration_date"
                                    value={prescriptionData.expiration_date}
                                    onChange={handleInputChange}
                                    disabled={isFormLocked}
                                    readOnly={isFormLocked}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

                <div className={styles.displayPatientInfo}>
                    {fetchedPatient ? (
                        <div>
                            <h6>Patient Information: </h6>
                            <p>Name: {fetchedPatient.first_name} {fetchedPatient.last_name}</p>
                            <p>DOB: {fetchedPatient.date_of_birth}</p>
                            <p>Address: {fetchedPatient.street}</p>
                            <p>{fetchedPatient.city}, {fetchedPatient.state} {fetchedPatient.zipcode}</p>
                            <p>Phone #: {fetchedPatient.phone_number}</p>
                        </div>
                    ) : (
                        <p>No patient selected</p>
                    )}
                </div>

                <div className={styles.displayPrescriberInfo}>
                    {fetchedPrescriber ? (
                        <div>
                            <h6>Prescriber Information: </h6>
                            <p>Name: {fetchedPrescriber.first_name} {fetchedPrescriber.last_name}, {fetchedPrescriber.prescriber_type}</p>
                            <p>DEA: {fetchedPrescriber.dea} &nbsp;&nbsp;&nbsp;&nbsp; NPI: {fetchedPrescriber.npi}</p>
                            <p>Address: {fetchedPrescriber.street}</p>
                            <p>{fetchedPrescriber.city}, {fetchedPrescriber.state} {fetchedPrescriber.zipcode}</p>
                            <p>Phone #: {fetchedPrescriber.contact_number}</p>
                        </div>
                    ) : (
                        <p>No prescriber selected</p>
                    )}
                </div>
      
            <div className={styles.displayRxScan}>
                <p>Scan Image</p>
            </div>
            <div className={styles.scanButton}>
                {!submitted && (
                    <button type='button'>Scan Rx</button>
                )}
            </div>
        </main>
    );
}

export default RefillRx;