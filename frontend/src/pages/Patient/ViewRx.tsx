import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import styles from '../Rx.module.css';
import style from './ViewRx.module.css';
// import RxItem from '../RxSearch/RxItem';


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


const ViewRx: React.FC = () => {
    const { rx_number } = useParams<{ rx_number: string }>();
    const location = useLocation();
    const { patient, prescription, prescriber } = location.state || {};
    
    const [fetchedPrescription, setFetchedPrescription] = useState<Prescription | null>(prescription || null);
    const [fetchedPrescriber, setFetchedPrescriber] = useState<any | null>(prescriber || null);
    const [fetchedPatient, setFetchedPatient] = useState<any | null>(patient || null);
    const [fetchedItem, setFetchedItem] = useState<any | null>(prescription || null);

    // console.log(patient);
    // console.log(prescription);
    // console.log(prescriber);

    useEffect(() => {
        const fetchPrescription = async () => {
            if (rx_number) {
                try {
                    const response = await fetch(`http://localhost:8000/prescriptions/${rx_number}`);
                    if (!response.ok) throw new Error('Failed to fetch prescription');
                        const data = await response.json();
                        setFetchedPrescription(data);
                        // console.log(data);
                } catch (error) {
                    console.error('Error fetching prescription data:', error);
                }
            }
        };

        const fetchItem = async () => {
            if (fetchedPrescription?.rx_item_id) {
                try {
                    const response = await fetch(`http://localhost:8000/rx-items/${fetchedPrescription.rx_item_id}`);
                    if (!response.ok) throw new Error('Failed to fetch rx-item');
                    const data = await response.json();
                    setFetchedItem(data);
                    // console.log("Fetched Item: ", data);
                } catch (error) {
                    console.error('Error fetching rx-item data:', error);
                }
            }
        };
        const fetchPrescriber = async () => {
            if (fetchedPrescription?.prescriber_id) {
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
            if (fetchedPrescription?.patient_id) {
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
        fetchItem();
        fetchPrescriber();
        fetchPatient();
    }, [rx_number, fetchedPrescription]);


    const isButtonVisible = fetchedPrescription?.status === 'pending' || fetchedPrescription?.status === 'completed';

    const handleSellRx = async () => {
        if (fetchedPrescription) {
            try {
                const response = await fetch(`http://localhost:8000/prescriptions/${fetchedPrescription.rx_number}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...fetchedPrescription,
                        status: 'sold',
                    }),
                });
    
                if (!response.ok) throw new Error('Failed to update prescription status');
    
                // Update local state with the correct type
                setFetchedPrescription((prev: Prescription | null) => prev ? {
                    ...prev,
                    status: 'sold',
                } : null);
    
                alert('Prescription status updated to sold');
            } catch (error) {
                console.error('Error updating prescription status:', error);
                alert('Failed to update prescription status');
            }
        }
    };

    const handlePrintLabel = async () => {
        if (fetchedPrescription) {
            try {
                const response = await fetch(`http://localhost:8000/prescriptions/${fetchedPrescription.rx_number}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...fetchedPrescription,
                        status: 'completed',
                    }),
                });
    
                if (!response.ok) throw new Error('Failed to update prescription status');
    
                // Update local state with the correct type
                setFetchedPrescription((prev: Prescription | null) => prev ? {
                    ...prev,
                    status: 'completed',
                } : null);
    
                alert('Prescription status is complete. Ready to Print!');
            } catch (error) {
                console.error('Error updating prescription status:', error);
                alert('Failed to update prescription status');
            }
        }
    };
    
    // console.log("Fetched Item: ", fetchedItem);
    // console.log("Fetched Patient: ", fetchedPatient);
    // console.log("Fetched Prescriber: ", fetchedPrescriber);
    // console.log("Fetched Prescription: ", fetchedPrescription);

    return (
        <main className={styles.mainNewRx}>
            <h1 className={styles.NewRx_h1}>View Rx</h1>
            <hr className={styles.hr} />
            <form className={styles.NewRxForm} autoComplete="off">
                <table className={styles.enterPatientInfo}>
                    <tbody>
                        <tr>
                            <td><label htmlFor='patient'>Patient: </label></td>
                            <td>
                                <input
                                    type="text"
                                    id="patient"
                                    value={fetchedPatient ? `${fetchedPatient.first_name} ${fetchedPatient.last_name}` : ''}
                                    readOnly
                                    className={style.readOnlyField}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor='prescriber'>Prescriber: </label></td>
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
                            <td><label htmlFor='item'>Item: </label></td>
                            <td>
                                <input
                                    type="text"
                                    id="item"
                                    value={fetchedItem ? `${fetchedItem.name} ${fetchedItem.strength} ${fetchedItem.dosage_form}` : 'No item information'}
                                    readOnly
                                    className={style.readOnlyField}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor='directions'>Directions: </label></td>
                            <td>
                                <textarea
                                    id="directions"
                                    value={fetchedPrescription?.directions || ''}
                                    readOnly
                                    className={style.readOnlyField}
                                ></textarea>
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
                                    <input
                                        type="number"
                                        id="quantity"
                                        value={fetchedPrescription?.quantity || ''}
                                        readOnly
                                        className={style.readOnlyField}
                                    />
                                </td>
                                <td>
                                    <label htmlFor="quantity_dispensed">Quantity Dispensed: </label>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        id="quantity_dispensed"
                                        value={fetchedPrescription?.quantity_dispensed || ''}
                                        readOnly
                                        className={style.readOnlyField}
                                    />
                                </td>
                                <td>
                                    <label htmlFor="refills">Refills: </label>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        id="refills"
                                        value={fetchedPrescription?.refills || ''}
                                        readOnly
                                        className={style.readOnlyField}
                                    />
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
                                    <input
                                        type="text"
                                        id="tech_initials"
                                        value={fetchedPrescription?.tech_initials || ''}
                                        readOnly
                                        className={style.readOnlyField}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.NewRxButtons}>
                    <Link to={`/patient/rx-history/${fetchedPatient?.id}`}>
                        <button type="button">Patient Rx History</button>
                    </Link>
                    {/* <Link to={`/rx-queue`}>
                        <button type="button">Prescriptio Queue</button>
                    </Link> */}
                    {isButtonVisible && (
                        <button type='button' className={styles.actionButton} onClick={handleSellRx}>
                            Sell Rx
                        </button>
                    )}
                    {isButtonVisible && (
                        <button type='button' onClick={handlePrintLabel}>
                            Print Label
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
                                    value={fetchedPrescription?.prescribed_date || ''}
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
                                    value={fetchedPrescription?.dispense_date || ''}
                                    readOnly
                                    className={style.readOnlyField}
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
                                    value={fetchedPrescription?.discard_date || ''}
                                    readOnly
                                    className={style.readOnlyField}
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
                                    value={fetchedPrescription?.expiration_date || ''}
                                    readOnly
                                    className={style.readOnlyField}
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
                            <p>Name: {fetchedPrescriber?.first_name || 'N/A'} {fetchedPrescriber?.last_name || 'N/A'}, {fetchedPrescriber?.prescriber_type || 'N/A'}</p>
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
            {/* <div className={styles.scanButton}>
                <button type='submit'>Scan Rx</button>
            </div> */}
        </main>
    );
}

export default ViewRx;