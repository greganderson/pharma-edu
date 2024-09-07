import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Prescriber } from './Prescriber/PrescriberModels';
import { RxItem } from './RxSearch/RxItemModel';
import { Patient } from './Patient/PatientModels';
import styles from './Rx.module.css';

const NewRx: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const location = useLocation();

    // Patients
    const [searchTermPatient, setSearchTermPatient] = useState('');
    const [patients, setPatients] = useState<Patient[]>([]);
    const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

    // Prescribers
    const [searchTermPrescriber, setSearchTermPrescriber] = useState('');
    const [prescribers, setPrescribers] = useState<Prescriber[]>([]);
    const [filteredPrescribers, setFilteredPrescribers] = useState<Prescriber[]>([]);
    const [selectedPrescriber, setSelectedPrescriber] = useState<Prescriber | null>(null);

    // Rx Item
    const [searchTermItem, setSearchTermItem] = useState('');
    const [items, setItems] = useState<RxItem[]>([]);
    const [filteredItems, setFilteredItems] = useState<RxItem[]>([]);
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
        rx_item_id: selectedItem ? selectedItem.id : null, 
        rx_item: "",
        directions: "",
        quantity: 0,
        quantity_dispensed: 0,
        refills: 0,
        tech_initials: "",
        prescription_status: ""
    });


    useEffect(() => {
        console.log("Updating prescription data with selected patient/prescriber/item");
        setPrescriptionData(prevData => ({
            ...prevData,
            patient_id: selectedPatient ? selectedPatient.id : null,
            prescriber_id: selectedPrescriber ? selectedPrescriber.id : null,
            rx_item_id: selectedItem ? selectedItem.id : null
        }));
    }, [selectedPatient, selectedPrescriber, selectedItem]);


    const postPrescription = async (prescriptionData: any) => {
        console.log("Prescription Data: ", prescriptionData);
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

    // If patient data is passed via state, use it
    useEffect(() => {
        if (location.state && location.state.patient) {
            setSelectedPatient(location.state.patient);
        }
    }, [location.state]);

//
// Fetch
//


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
// FILTER
//

    useEffect(() => {
        if (searchTermPatient.trim() === '') {
            setFilteredPatients([]);
        } else {
            const filtered = patients.filter(patient =>
                `${patient.first_name} ${patient.last_name} ${patient.date_of_birth}`
                    .toLowerCase()
                    .includes(searchTermPatient.toLowerCase())
            );
            setFilteredPatients(filtered);
        }
    }, [searchTermPatient, patients]);


    useEffect(() => {
        if (searchTermPrescriber.trim() === '') {
            setFilteredPrescribers([]);
        } else {
            const filteredPrescribers = prescribers.filter(prescriber =>
                `${prescriber.first_name} ${prescriber.last_name} ${prescriber.dea}`
                    .toLowerCase()
                    .includes(searchTermPrescriber.toLowerCase())
            );
            setFilteredPrescribers(filteredPrescribers);
        }
    }, [searchTermPrescriber, prescribers]);


    useEffect(() => {
        if (searchTermItem.trim() === '') {
            setFilteredItems([]);
        } else {
            const filteredItems = items.filter(item =>
                `${item.name} ${item.strength}`
                    .toLowerCase()
                    .includes(searchTermItem.toLowerCase())
            );
            setFilteredItems(filteredItems);
        }
    }, [searchTermItem, items]);

//
// HANDLERS
//

    const handleSelectPatient = (patient: Patient) => {
        console.log('Selected Patient:', patient);
        
        const fetchPatientId = async () => {
            try {
                const response = await fetch(`http://localhost:8000/patients/${patient.id}`);
                if (response.ok) {
                    const data: Patient = await response.json();
                    setSelectedPatient(data);
                    setSearchTermPatient(`${patient.first_name} ${patient.last_name} ${patient.date_of_birth}`);
                    setPrescriptionData(prevData => ({
                        ...prevData,
                        patient_id: patient.id,
                        patient: `${patient.first_name} ${patient.last_name}`
                    }));
                } else {
                    console.error('Failed to fetch patients');
                }
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };
        fetchPatientId();
        setFilteredPatients([]);
    };


    const handleSelectPrescriber = (prescriber: Prescriber) => {
        console.log('Selected Prescriber:', prescriber);
        const fetchPrescriberId = async () => {
            try {
                const response = await fetch(`http://localhost:8000/prescribers/${prescriber.id}`);
                if (response.ok) {
                    const data: Prescriber = await response.json();
                    setSelectedPrescriber(data);
                    setSearchTermPrescriber(`${prescriber.first_name} ${prescriber.last_name} ${prescriber.prescriber_type} ${prescriber.dea}`);
                    setPrescriptionData((prevData) => ({
                        ...prevData,
                        prescriber_id: prescriber.id,
                        prescriber: `${prescriber.first_name} ${prescriber.last_name} ${prescriber.prescriber_type} ${prescriber.dea}`
                    }));
                } else { 
                    console.error("Failed to fetch prescriber");
                }
            } catch (error) {
                console.error("Error fetching prescribers: ", error);
            }
        };
        fetchPrescriberId();
        setFilteredPrescribers([]);
    };


    const handleSelectItem = (rx_item: RxItem) => {
        console.log('Selected Rx Item:', rx_item);
        setSearchTermItem(`${rx_item.name} ${rx_item.strength} ${rx_item.dosage_form}`);
        setSelectedItem(rx_item);
        setPrescriptionData((prevData) => ({
            ...prevData,
            rx_item_id: rx_item.id,
            rx_item: `${rx_item.name} ${rx_item.strength} ${rx_item.dosage_form}`
        }));
        setFilteredItems([]);
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = event.target;
        setPrescriptionData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
    
        const updatedPrescriptionData = {
            ...prescriptionData,
            prescription_status: "pending"
        };
    
        console.log("Submitting prescription with pending status:", updatedPrescriptionData);
    
        const submitRx = async () => {
            try {
                const result = await postPrescription(updatedPrescriptionData);
                if (result && result.rx_number) {
                    setSubmitted(true);
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

    // const handleSaveRx = async () => {
    //     setIsSubmitting(true);
    //     const updatedPrescriptionData = {
    //         ...prescriptionData,
    //         status: "pending" // Set the status to pending for Save Rx
    //     };
    
    //     try {
    //         const result = await postPrescription(updatedPrescriptionData);
    //         if (result && result.rx_number) {
    //             setSubmitted(true);
    //             alert(`Prescription Submitted. Rx Number: ${result.rx_number}`);
    //             console.log(`Rx Number: ${result.rx_number}`);
    //         } else {
    //             throw new Error("Rx number not received in the response.");
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //         alert("An error occurred while saving the prescription.");
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };
    
    const handlePrintLabel = async () => {
        // setIsSubmitting(true);
        const updatedPrescriptionData = {
            ...prescriptionData,
            prescription_status: "completed" // Set status to completed for Print Label
        };
        console.log(updatedPrescriptionData);
        alert(`Prescription printed. Rx Number: ${updatedPrescriptionData.rx_number}`)
    };
    
    //     try {
    //         if (prescriptionData.rx_number) {
    //             alert(`Prescription printed. Rx Number: ${prescriptionData.rx_number}`);
    //         } else {
    //             throw new Error("Error while printing.");
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //         alert("An error occurred while printing the label.");
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };


    return (
        <main className={styles.mainNewRx}>
            <h1 className={styles.NewRx_h1}>New Rx</h1>
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
                                    value={searchTermPatient}
                                    onChange={(e) => setSearchTermPatient(e.target.value)}
                                    placeholder="Search by name or date of birth..."
                                />
                                {filteredPatients.length > 0 && (
                                    <ul className={styles.dropdown} role="listbox" title='dropdown'>
                                        {filteredPatients.map((patient) => (
                                            <li
                                                key={patient.id}
                                                onClick={() => handleSelectPatient(patient)}
                                                className={styles.dropdownItem}
                                                role="option"
                                            >
                                                {patient.first_name} {patient.last_name} DOB: {patient.date_of_birth}
                                            </li>
                                        ))}
                                    </ul>
                                )}
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
                                    value={searchTermPrescriber}
                                    onChange={(e) => setSearchTermPrescriber(e.target.value)}
                                    placeholder='Search by name or DEA#...'
                                />
                                {filteredPrescribers.length > 0 && (
                                    <ul className={styles.dropdown} role="listbox" title="dropdown">
                                        {filteredPrescribers.map((prescriber) => (
                                            <li
                                                key={prescriber.id}
                                                onClick={() => handleSelectPrescriber(prescriber)}
                                                className={styles.dropdownItem}
                                                role="option"
                                            >
                                                {prescriber.first_name} {prescriber.last_name} {prescriber.prescriber_type} (DEA: {prescriber.dea})
                                            </li>
                                        ))}
                                    </ul>
                                )}
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
                                    value={searchTermItem}
                                    onChange={(e) => setSearchTermItem(e.target.value)}
                                    placeholder='Search by name...'
                                />
                                {filteredItems.length > 0 && (
                                    <ul className={styles.dropdown} role="listbox" title="dropdown">
                                        {filteredItems.map((rx_item) => (
                                            <li
                                                key={rx_item.id}
                                                onClick={() => handleSelectItem(rx_item)}
                                                className={styles.dropdownItem}
                                                role="option"
                                            >
                                                {rx_item.name} {rx_item.strength} {rx_item.dosage_form}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='directions'>Directions: </label>
                            </td>
                            <td>
                                <textarea id="directions" value={prescriptionData.directions}
                                    onChange={handleInputChange} required>           
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
                                        onChange={handleInputChange} required/>
                                </td>
                                <td>
                                    <label htmlFor="quantity_dispensed">Quantity Dispensed: </label>
                                </td>
                                <td>
                                    <input type="number" id="quantity_dispensed" value={prescriptionData.quantity_dispensed}
                                        onChange={handleInputChange} required/>
                                </td>
                                <td>
                                    <label htmlFor="refills">Refills: </label>
                                </td>
                                <td>
                                    <input type="number" id="refills" value={prescriptionData.refills}
                                        onChange={handleInputChange} required/>
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
                                        onChange={handleInputChange} required/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.NewRxButtons}>
                    <button type="submit">{isSubmitting ? 'Saving...' : 'Save Rx'}</button>
                    <button type="button" onClick={handlePrintLabel}>
                    {isSubmitting ? 'Printing...' : 'Print Label'}
                    </button>
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
                    {selectedPrescriber ? (
                        <div>
                            <h6>Prescriber Information: </h6>
                            <p>Name: {selectedPrescriber.first_name} {selectedPrescriber.last_name}, {selectedPrescriber.prescriber_type}</p>
                            <p>DEA: {selectedPrescriber.dea}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NPI: {selectedPrescriber.npi}</p>
                            <p>Address: {selectedPrescriber.street}</p>
                            <p>{selectedPrescriber.city}, {selectedPrescriber.state} {selectedPrescriber.zipcode}</p>
                            <p>Phone #: {selectedPrescriber.contact_number}</p>
                        </div>
                    ) : (
                        <p>No prescriber selected</p>
                    )}
                </div>
      
            <div className={styles.displayRxScan}>
                <p>Scan Image</p>
            </div>
            <div className={styles.scanButton}>
                <button type='button'>Scan Rx</button>
            </div>
        </main>
    );
}

export default NewRx;
