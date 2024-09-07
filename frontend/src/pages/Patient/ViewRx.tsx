import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

import styles from '../Rx.module.css';
import style from './ViewRx.module.css';

const ViewRx: React.FC = () => {
    const { rx_number } = useParams<{ rx_number: string }>();
    const location = useLocation();

    const { patient, prescription, prescriber } = location.state || {};
    const [fetchedPrescription, setFetchedPrescription] = useState<any | null>(null);
    const [fetchedPrescriber, setFetchedPrescriber] = useState<any | null>(null);

    console.log('Location state:', location.state);
    console.log('Prescription rx_number:', prescription?.rx_number);
    console.log('Prescriber ID:', prescriber?.id);

    useEffect(() => {
        const fetchPrescription = async () => {
            if (prescription?.rx_number) {
                try {
                    const response = await fetch(`http://localhost:8000/prescriptions/${rx_number}`);
                    console.log('Prescription response status:', response.status);
                    const data = await response.json();
                    console.log('Fetched Prescription Data:', data);
                    setFetchedPrescription(data);
                } catch (error) {
                    console.error('Error fetching prescription data:', error);
                }
            }
        };

        fetchPrescription();
    }, [prescription, rx_number]);

    useEffect(() => {
        const fetchPrescriber = async () => {
            if (prescriber?.id) {
                try {
                    console.log('Fetching prescriber data for ID:', prescriber.id);
                    const response = await fetch(`http://localhost:8000/prescribers/${prescriber.id}`);
                    console.log('Prescriber response status:', response.status);
                    const data = await response.json();
                    console.log('Fetched Prescriber Data:', data);
                    setFetchedPrescriber(data);
                } catch (error) {
                    console.error('Error fetching prescriber data:', error);
                }
            } else {
                console.error('Prescriber ID is missing');
            }
        };

        fetchPrescriber();
    }, [prescriber]);

    useEffect(() => {
        console.log('Fetched Prescription updated:', fetchedPrescription);
        console.log('Fetched Prescriber updated:', fetchedPrescriber);
    }, [fetchedPrescription, fetchedPrescriber]);

    
    return (
        <main className={styles.mainNewRx}>
            <h1 className={styles.NewRx_h1}>View Rx</h1>
            <hr className={styles.hr}></hr>
            <form className={styles.NewRxForm}>
            <table className={styles.enterPatientInfo}>
                    <tbody>
                        <tr>
                            <td><label htmlFor='patient'>Patient: </label></td>
                            <td>
                                <input
                                    type="text"
                                    id="patient"
                                    value={patient ? `${patient.first_name} ${patient.last_name}` : ''}
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
                                    value={prescriber ? `${prescriber.first_name} ${prescriber.last_name}, ${prescriber.prescriber_type}` : ''}
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
                                    value={prescription ? `${prescription.rx_item_name} ${prescription?.rx_item_strength}` : ''}
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
                                    value={prescription?.directions || ''}
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
                                    <input type="number" id="quantity" value={prescription.quantity} 
                                        readOnly className={style.readOnlyField}/>
                                </td>
                                <td>
                                    <label htmlFor="quantity_dispensed">Quantity Dispensed: </label>
                                </td>
                                <td>
                                    <input type="number" id="quantity_dispensed" value={prescription.quantity_dispensed}
                                        readOnly className={style.readOnlyField}/>
                                </td>
                                <td>
                                    <label htmlFor="refills">Refills: </label>
                                </td>
                                <td>
                                    <input type="number" id="refills" value={prescription.refills}
                                       readOnly className={style.readOnlyField}/>
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
                                    <input type="text" id="tech_initials" value={prescription.tech_initials} 
                                        readOnly className={style.readOnlyField} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.NewRxButtons}>
                    <Link to={`/patient/rx-history/${patient?.id}`}>
                        <button type="button">Cancel</button>
                    </Link>
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
                                    value={prescription.prescribed_date}
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
                                    value={prescription.dispense_date}
                                    readOnly className={style.readOnlyField}
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
                                    value={prescription.discard_date}
                                    readOnly className={style.readOnlyField}
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
                                    value={prescription.expiration_date}
                                    readOnly className={style.readOnlyField}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

                <div className={styles.displayPatientInfo}>
                    {patient ? (
                        <div>
                            <h6>Patient Information: </h6>
                            <p>Name: {patient.first_name} {patient.last_name}</p>
                            <p>DOB: {patient.date_of_birth}</p>
                            <p>Address: {patient.street}</p>
                            <p>{patient.city}, {patient.state} {patient.zipcode}</p>
                            <p>Phone #: {patient.phone_number}</p>
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
            <div className={styles.scanButton}>
                <button type='submit'>Scan Rx</button>
            </div>
        </main>
    );
}

export default ViewRx;