import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Prescriber } from '../Prescriber/PrescriberModels';
import { RxItem } from '../RxSearch/RxItemModel';
import { Patient } from '../Patient/PatientModels';
import styles from '../Rx.module.css';
import style from './ViewRx.module.css';


const RefillRx: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const location = useLocation();
    const [isFormLocked, setIsFormLocked] = useState<boolean>(false);

    // Patients
    const [patients, setPatients] = useState<Patient[]>([]);
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

    // Prescribers
    const [prescribers, setPrescribers] = useState<Prescriber[]>([]);
    const [selectedPrescriber, setSelectedPrescriber] = useState<Prescriber | null>(null);
    const [prescriberDetails, setPrescriberDetails] = useState<Prescriber | null>(null);

    // Rx Item
    const [searchTermItem, setSearchTermItem] = useState('');
    const [items, setItems] = useState<RxItem[]>([]);
    // const [item, setItem] = useState<RxItem[]>([]);
    // const [itemDetails, setItemDetails] = useState<RxItem | null>(null);
    const [selectedItem, setSelectedItem] = useState<RxItem | null>(null);

    // Prescription
    const [prescriptionData, setPrescriptionData] = useState({
        rx_number: "",
        patient_id: selectedPatient ? selectedPatient.id : null,
        patient: "",
        prescriber_id: selectedPrescriber ? selectedPrescriber.id : null,
        prescriber: "",
        prescribed_date: "",
        dispense_date: "",
        discard_date: "",
        expiration_date: "",
        rx_item_id: selectedItem ? selectedItem.rx_item_id : null, 
        rx_item: "",
        dosage_form: "",
        strength: "",
        directions: "",
        quantity: 0,
        quantity_dispensed: 0,
        refills: 0,
        tech_initials: "",
        prescription_status: ""
    });

    // Update prescription data when patient, prescriber, or item is selected
    useEffect(() => {
        setPrescriptionData(prevData => ({
            ...prevData,
            patient_id: selectedPatient ? selectedPatient.id : null,
            prescriber_id: selectedPrescriber ? selectedPrescriber.id : null,
            rx_item_id: selectedItem ? selectedItem.rx_item_id : null
        }));
    }, [selectedPatient, selectedPrescriber, selectedItem]);
    // console.log("Prescription Data Initially: ", prescriptionData);


    const postPrescription = async (prescriptionData: any) => {
        console.log("Post Prescription Data: ", prescriptionData);
        try {
            const response = await fetch('http://localhost:8000/prescriptions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(prescriptionData),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                console.log('Server response:', errorData);
                throw new Error(errorData.message || 'Failed to create prescription.');
            }
    
            return response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

//
// If the state is passed in from the previous page information will be loaded.
//
    
    // If state is passed, update the selected patient, prescriber, and item
    useEffect(() => {
        if (location.state) {
            const { patient, prescriber, prescription } = location.state;
            if (patient && patient.id) {
                setSelectedPatient(patient);
                setPrescriptionData(prevData => ({
                    ...prevData,
                    patient_id: patient.id,
                    patient: `${patient.first_name} ${patient.last_name}`,
                }));
            }
            if (prescriber) {
                setSelectedPrescriber(prescriber);
                setPrescriptionData(prevData => ({
                    ...prevData,
                    prescriber_id: prescriber.id,
                    prescriber: `${prescriber.first_name} ${prescriber.last_name}, ${prescriber.physician_type}`
                }));
            }
            if (prescription) {
                const itemDetails = `${prescription.rx_item_name} ${prescription.strength} ${prescription.rx_item_dosage_form}`;
                setSelectedItem(prescription);
                setPrescriptionData(prevData => ({
                    ...prevData,
                    rx_item_id: prescription.rx_item_id,
                    rx_number: prescription.rx_number,
                    rx_item: prescription.rx_item_name,
                    dosage_form: prescription.dosage_form,
                    strength: prescription.strength,
                    directions: prescription.directions,
                    quantity: prescription.quantity,
                    refills: prescription.refills,
                    prescribed_date: prescription.prescribed_date
                }));
                setSearchTermItem(itemDetails);
            }
        }
    }, [location.state]);


    useEffect(() => {
        console.log("Selected Item after setting:", selectedItem);
    }, [selectedItem]);

//
// Fetch
//

    // GET prescriber by ID from the ID that is passed in from RxHistory
    useEffect(() => {
        if (selectedPrescriber && selectedPrescriber.id) {
            const fetchPrescriberDetails = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/prescribers/${selectedPrescriber.id}`);
                    if (response.ok) {
                        const data: Prescriber = await response.json();
                        console.log("Prescriber Info", data);
                        setPrescriberDetails(data);
                        setPrescriptionData(prevData => ({
                            ...prevData,
                            prescriber_id: data.id,
                            prescriber: `${data.first_name} ${data.last_name} ${data.prescriber_type} ${data.dea}`
                        }));
                    } else {
                        console.error('Failed to fetch prescriber details');
                    }
                } catch (error) {
                    console.error('Error fetching prescriber details:', error);
                }
            };
            fetchPrescriberDetails();
        }
    }, [selectedPrescriber]);

    useEffect(() => {
        if (selectedItem && prescriptionData.rx_number) {
            const fetchRxDetails = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/prescriptions/${prescriptionData.rx_number}`);
                    if (response.ok) {
                        const data: RxItem = await response.json();
                        console.log("Rx Item Info:", data);
                        
                        if (data.rx_item_id) {
                            setPrescriptionData(prevData => ({
                                ...prevData,
                                rx_item_id: data.rx_item_id,
                                rx_item: data.name || prevData.rx_item,
                                dosage_form: data.dosage_form || prevData.dosage_form,
                                strength: data.strength || prevData.strength,
                                refills: data.refills || prevData.refills,
                                quantity: data.quantity || prevData.quantity,
                                prescribed_date: data.prescribed_date || prevData.prescribed_date
                            }));
                            console.log("Rx item ID matched.", data.rx_item_id, selectedItem?.rx_item_id);
                        } else {
                            console.log("Rx item ID does not match the selected item.", data.rx_item_id, selectedItem?.rx_item_id);
                        }
                    } else {
                        console.error('Failed to fetch rx item details');
                    }
                } catch (error) {
                    console.error('Error fetching rx item details:', error);
                }
            };
            fetchRxDetails();
        }
    }, [selectedItem, prescriptionData.rx_number]);


    useEffect(() => {
        if (selectedItem && prescriptionData.rx_item_id) {
            const fetchRxItemById = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/rx-items/${prescriptionData.rx_item_id}`);
                    if (response.ok) {
                        const data: RxItem = await response.json();
                        console.log("Fetch Rx Item by Id", data);

                        console.log("IS THE RX ITEM ID HERE?", data);
                        setPrescriptionData(prevData => ({
                            ...prevData,
                            rx_item_id: data.id,
                            rx_item: data.name,
                            dosage_form: data.dosage_form,
                            strength: data.strength,
                        }));
                    console.log("PRESCRIPTION DATA: ", prescriptionData);
                    } else {
                        console.error('Failed to fetch rx item details');
                    }
                } catch (error) {
                    console.error('Error fetching rx item details:', error);
                }
            };
            fetchRxItemById();
        }
    }, [selectedItem, prescriptionData.rx_item_id, selectedItem?.rx_item_id, prescriptionData.dosage_form, selectedItem?.dosage_form]);


    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch('http://localhost:8000/patients');
                if (response.ok) {
                    const data: Patient[] = await response.json();
                    setPatients(data);
                } else {
                    console.error('Failed to fetch patients');
                }
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, []);


    useEffect(() => {
        const fetchPrescribers = async () => {
            try {
                const response = await fetch('http://localhost:8000/prescribers');
                if (response.ok) {
                    const data: Prescriber[] = await response.json();
                    setPrescribers(data);
                } else {
                    console.error('Failed to fetch prescribers');
                }
            } catch (error) {
                console.error('Error fetching prescribers:', error);
            }
        };

        fetchPrescribers();
    }, []);


    useEffect(() => {
        const fetchRxItems = async () => {
            try {
                const response = await fetch('http://localhost:8000/rx-items');
                if (response.ok) {
                    const data: RxItem[] = await response.json();
                    setItems(data);
                } else {
                    console.error('Failed to fetch items');
                }
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchRxItems();
    }, []);


//
// HANDLERS
//


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = event.target;
        setPrescriptionData((prevData) => ({
            ...prevData,
            [id]: id === 'quantity_dispensed' || id === 'quantity' ? Number(value) : value
        }));
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
    
        const updatedPrescriptionData = {
            ...prescriptionData,
            prescription_status: "pending",
            refills: prescriptionData.refills - 1,
            rx_item_id: selectedItem?.rx_item_id || prescriptionData.rx_item_id,
            dosage_form: prescriptionData.dosage_form
        };
    
        console.log("Submitting prescription with pending status:", updatedPrescriptionData);
    
        const submitRx = async () => {
            try {
                const result = await postPrescription(updatedPrescriptionData);
                if (result && result.rx_number) {
                    setSubmitted(true);
                    setIsFormLocked(true);
                    alert(`Prescription Submitted. Rx Number: ${result.rx_number}`);
                    console.log(`Rx Number: ${result.rx_number}`);
                } else {
                    throw new Error("Rx number not received in the response.");
                }
            } catch (error) {
                console.log(updatedPrescriptionData);
                console.error('Error:', error);
                alert("An error occurred while creating the prescription.");
            } finally {
                setIsSubmitting(false);
            }
        };
    
        submitRx();
    };

    const handlePrintLabel = async () => {
        const updatedPrescriptionData = {
            ...prescriptionData,
            prescription_status: 'completed'
        };
        
        try {
            const response = await fetch(`http://localhost:8000/prescriptions/${prescriptionData.rx_number}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPrescriptionData),
            });
            
            if (response.ok) {
                alert(`Prescription printed. Rx Number: ${updatedPrescriptionData.rx_number}`);
            } else {
                const errorData = await response.json();
                console.error('Server response:', errorData);
                throw new Error(errorData.message || 'Failed to update prescription.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred while updating the prescription.");
        }
    };

    
    return (
        <main className={styles.mainNewRx}>
            <h1 className={styles.NewRx_h1}>Refill Rx</h1>
            <hr className={styles.hr}></hr>
            <form onSubmit={handleSubmit} className={styles.NewRxForm} autoComplete="off">
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
                                    value={selectedPatient ? `${selectedPatient.first_name} ${selectedPatient.last_name}` : ''}
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
                                    value={selectedPrescriber ? `${selectedPrescriber.first_name} ${selectedPrescriber.last_name}, ${selectedPrescriber.prescriber_type}` : ''}
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
                                    value={selectedItem ? `${prescriptionData.rx_item} ${prescriptionData.strength} ${prescriptionData.dosage_form}` : ''}
                                    // value={`${prescriptionData.rx_item} ${prescriptionData.strength} ${prescriptionData.dosage_form}`}
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
                                <label htmlFor='discard_date'>Discard: </label>
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
                    {selectedPatient ? (
                        <div>
                            <h6>Patient Information: </h6>
                            <p>Name: {selectedPatient.first_name} {selectedPatient.last_name}</p>
                            <p>DOB: {selectedPatient.date_of_birth}</p>
                            <p>Address: {selectedPatient.street}</p>
                            <p>{selectedPatient.city}, {selectedPatient.state} {selectedPatient.zipcode}</p>
                            <p>Phone #: {selectedPatient.phone_number}</p>
                        </div>
                    ) : (
                        <p>No patient selected</p>
                    )}
                </div>

                <div className={styles.displayPrescriberInfo}>
                    {prescriberDetails ? (
                        <div>
                            <h6>Prescriber Information: </h6>
                            <p>Name: {prescriberDetails.first_name} {prescriberDetails.last_name}, {prescriberDetails.prescriber_type}</p>
                            <p>DEA: {prescriberDetails.dea} &nbsp;&nbsp;&nbsp;&nbsp; NPI: {prescriberDetails.npi}</p>
                            <p>Address: {prescriberDetails.street}</p>
                            <p>{prescriberDetails.city}, {prescriberDetails.state} {prescriberDetails.zipcode}</p>
                            <p>Phone #: {prescriberDetails.contact_number}</p>
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