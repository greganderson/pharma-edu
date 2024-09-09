import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PatientBasics } from './Patient/PatientModels';
import styles from './RxQueue.module.css';

interface Prescription {
    rx_number: number;
    patient_id: number;
    rx_item_id: number;
    rx_item: {
        name: string;
        strength: string;
        dosage_form: string;
    };
    status: string;
    directions: string;
    prescribed_date: string;
    prescriber_id: number;
    quantity: number;
    quantity_dispensed: number;
    refills: number;
    tech_initials: string;
}

const RxQueue: React.FC = () => {
    const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);
    const [tableData, setTableData] = useState<{ columns: string[], data: any[] }>({ columns: [], data: [] });
    const [patientsData, setPatientsData] = useState<PatientBasics[]>([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all prescriptions
                const prescriptionsResponse = await fetch("http://localhost:8000/prescriptions");
                const prescriptionsData = await prescriptionsResponse.json();
                console.log("Prescription Data: ", prescriptionsData);

                // Fetch all patients
                const patientsResponse = await fetch("http://localhost:8000/patients");
                const patientsData = await patientsResponse.json();
                setPatientsData(patientsData);
                console.log("Patients Data: ", patientsData);

                // Fetch details for each prescription
                let updatedPrescriptions: Prescription[] = [];

                await Promise.all(prescriptionsData.map(async (prescription: any) => {
                    const statusResponse = await fetch(`http://localhost:8000/prescriptions/${prescription.rx_number}`);
                    const statusData = await statusResponse.json();
                    console.log("Status Data: ", statusData);

                    const rxItemId = statusData.rx_item_id;
                    if (!rxItemId) return;

                    const rxItemResponse = await fetch(`http://localhost:8000/rx-items/${rxItemId}`);
                    const rxItemData = await rxItemResponse.json();
                    console.log("Rx Item Data: ", rxItemData);

                    const patient_id = statusData.patient_id;
                    if (!patient_id) return;

                    updatedPrescriptions.push({
                        rx_number: prescription.rx_number,
                        patient_id: patient_id,
                        prescriber_id: statusData.prescriber_id,
                        rx_item_id: prescription.rx_item_id,
                        status: statusData.status,
                        directions: statusData.directions,
                        prescribed_date: statusData.prescribed_date,
                        quantity: statusData.quantity,
                        quantity_dispensed: statusData.quantity_dispensed,
                        refills: statusData.refills,
                        tech_initials: statusData.tech_initials,
                        rx_item: {
                            name: rxItemData.name,
                            strength: rxItemData.strength,
                            dosage_form: rxItemData.dosage_form
                        }
                    });
                }));

                console.log("UPDATED RX: ", updatedPrescriptions);

                // Check for status values and filter
                const filteredPrescriptions = updatedPrescriptions.filter((prescription: Prescription) => {
                    console.log('Filtering Prescription:', prescription);
                    return prescription.status === 'completed' || prescription.status === 'pending';
                });

                console.log("Filtered Prescriptions: ", filteredPrescriptions);

                const columns = ['Item', 'Patient Name', 'DOB', 'Status'];
                const data = filteredPrescriptions.map((prescription: Prescription) => {
                    const patient = patientsData.find((patient: PatientBasics) => patient.id === prescription.patient_id);
                    const patientName = patient ? `${patient.first_name} ${patient.last_name}` : 'Unknown';

                    return {
                        'Item': prescription.rx_item.name,
                        'Patient Name': patientName,
                        'DOB': patient ? patient.date_of_birth : 'Unknown',
                        'Status': prescription.status,
                        'rx_number': prescription.rx_number,
                        'patient_id': prescription.patient_id,
                        'prescriber_id': prescription.prescriber_id
                    };
                });

                setTableData({ columns, data });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleRowClick = (rowIndex: number) => {
        setSelectedPrescription(tableData.data[rowIndex]);
        console.log("Select Row: ", tableData.data[rowIndex]);
    };

    return (
        <main className={styles.RxQueueMain}>
            <h1>Prescription Queue</h1>
            <hr className={styles.hr} />
            <div className={styles.RxQueueTable}>
                {tableData.columns.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                {tableData.columns.map((column, index) => (
                                    <th className={styles.RxQueue_th}key={index}>{column}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className={styles.RxQueue_tbody}>
                            {tableData.data.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    onClick={() => handleRowClick(rowIndex)}
                                    className={`${styles.RxQueue_tr} ${selectedPrescription?.rx_number === row.rx_number ? styles.selectedRow : ''}`}
                                >
                                    {tableData.columns.map((column, colIndex) => (
                                        <td className={styles.RxQueue_td} key={colIndex}>{row[column]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
            <div className={styles.buttonContainer}>
                <Link
                    to={`/patient/view-rx/${selectedPrescription?.rx_number}`}
                    state={{
                        prescription: selectedPrescription,
                        patient: patientsData.find(patient => patient.id === selectedPrescription?.patient_id) || null,
                        prescriber: selectedPrescription ? {
                            id: selectedPrescription.prescriber_id,
                            tech_initials: selectedPrescription.tech_initials
                        } : null 
                    }}
                >
                    <button type="button" disabled={!selectedPrescription}>View Rx</button>
                </Link>
            </div>
        </main>
    );
};

export default RxQueue;