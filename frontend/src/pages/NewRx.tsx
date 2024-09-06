import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Prescriber } from './Prescriber/PrescriberModels';
import { RxItem } from './RxSearch/RxItemModel';
import { Patient } from './Patient/PatientModels';
import styles from './NewRx.module.css';

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
        status: ""
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

    // If patient data is passed via state, use it
    useEffect(() => {
        if (location.state && location.state.patient) {
            setSelectedPatient(location.state.patient);
        }
    }, [location.state]);


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
                    setSearchTermPatient(`${patient.first_name} ${patient.last_name}`);
                    setPrescriptionData(prevData => ({
                        ...prevData,
                        patient_id: patient.id,
                        patient: `${patient.first_name} ${patient.last_name} ${patient.date_of_birth}`
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
        setSearchTermPrescriber(`${prescriber.first_name} ${prescriber.last_name} ${prescriber.prescriber_type} ${prescriber.dea}`);
        setSelectedPrescriber(prescriber);
        setPrescriptionData((prevData) => ({
            ...prevData,
            prescriber_id: prescriber.id,
            prescriber: `${prescriber.first_name} ${prescriber.last_name} ${prescriber.prescriber_type} ${prescriber.dea}`
        }));
        setFilteredPrescribers([]);
    };


    const handleSelectItem = (rx_item: RxItem) => {
        console.log('Selected Rx Item:', rx_item);
        setSearchTermItem(`${rx_item.name} ${rx_item.strength}`);
        setSelectedItem(rx_item);
        setPrescriptionData((prevData) => ({
            ...prevData,
            rx_item_id: rx_item.id,
            rx_item: `${rx_item.name} ${rx_item.strength}`
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
            status: "pending"
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
                                                {patient.first_name} {patient.last_name} (DOB: {patient.date_of_birth})
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
                                                {rx_item.name} {rx_item.strength}
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
                    <button type='submit'>Print Label</button>
                </div>
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

                <form onSubmit={handleSubmit} className={styles.RxDateInfo}>
                <table>
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
            <div className={styles.displayRxScan}>
                <p>Scan Image</p>
            </div>
            <div className={styles.scanButton}>
                <button type='submit'>Scan Rx</button>
            </div>
        </main>
    );
}

export default NewRx;
