import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

import styles from './RxHistory.module.css';
import { Patient } from "./PatientModels";

interface Prescription {
    id: number;
    rx_item_name: string;
    rx_item_strength: string;
    quantity: number;
    refills: number;
    prescribed_date: string;
    prescription_status: string;
}

interface TableData {
    columns: (keyof Prescription)[];
    data: Prescription[];
}

const RxHistory: React.FC = () => {
    const [patient, setPatient] = useState<Patient | null>(null);
    const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);
    const { patient_id } = useParams<{ patient_id: string }>();
    const location = useLocation();

    const [tableData, setTableData] = useState<TableData>({
        columns: ['rx_item_name', 'rx_item_strength', 'quantity', 'refills', 'prescribed_date', 'prescription_status'],
        data: [],
    });

    const columnHeaders: { [key: string]: string } = {
        rx_item_name: 'Item Name',
        rx_item_strength: 'Strength',
        quantity: 'Quantity',
        refills: 'Refills',
        prescribed_date: 'Date Written',
        prescription_status: 'Status'
    };

    useEffect(() => {
        if (location.state && location.state.patient) {
            setPatient(location.state.patient);
        }
    }, [location.state]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const patientResponse = await fetch(`http://localhost:8000/patients/${patient_id}`);
                const patientData = await patientResponse.json();
                console.log(patientData);
                setPatient(patientData);

                const prescriptions = patientData.prescriptions.map((prescription: Prescription) => ({
                    id: prescription.id,
                    rx_item_name: prescription.rx_item_name,
                    rx_item_strength: prescription.rx_item_strength,
                    quantity: prescription.quantity,
                    refills: prescription.refills,
                    prescribed_date: prescription.prescribed_date,
                    prescription_status: prescription.prescription_status
                }));

                setTableData({
                    columns: ['rx_item_name', 'rx_item_strength', 'quantity', 'refills', 'prescribed_date', 'prescription_status'],
                    data: prescriptions,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (patient_id) {
            fetchData();
        }
    }, [patient_id]);

    const handleRowClick = (rowIndex: number) => {
        setSelectedPrescription(tableData.data[rowIndex]);
    };

    return (
        <main className={styles.RxHistoryMain}>
            <h1>{patient ? `${patient.first_name} ${patient.last_name} Medication History` : 'Loading...'}</h1>
            <hr className='hr'></hr>

            <div>
                {tableData.data.length > 0 ? (
                    <table className={styles.RxHistoryTable}>
                        <thead>
                            <tr>
                                {tableData.columns.map((column, index) => (
                                    <th className={styles.RxHistory_th} key={index}>{columnHeaders[column]}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className={styles.RxHistory_tbody}>
                            {tableData.data.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className={`${styles.RxHistory_tr} ${selectedPrescription === row ? styles.selected : ''}`}
                                    onClick={() => handleRowClick(rowIndex)}
                                >
                                    {tableData.columns.map((column, colIndex) => (
                                        <td className={styles.RxHistory_td} key={colIndex}>{row[column]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No prescriptions available</p>
                )}
            </div>
            <div className={styles.buttonContainer}>
                <Link
                    to={`/patient/refill-rx/${patient_id}`}
                    state={{ patient, prescription: selectedPrescription }}
                >
                    <button type="button" disabled={!selectedPrescription}>Refill Rx</button>
                </Link>
                <Link
                    to={`/patient/view-rx/${patient_id}`}
                    state={{ patient, prescription: selectedPrescription }}
                >
                    <button type="button" disabled={!selectedPrescription}>View Rx</button>
                </Link>
                <Link to={`/patient/view-patient/${patient_id}`}>
                    <button type="button">View Patient</button>
                </Link>
            </div>
        </main>
    );
}

export default RxHistory;