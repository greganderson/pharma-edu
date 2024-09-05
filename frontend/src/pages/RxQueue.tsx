import React, { useEffect, useState } from 'react';

import styles from './RxQueue.module.css';

interface Prescription {
    rx_number: number;
    patient_id: number;
    rx_item: {
        name: string;
        strength: string;
    };
    status: string;
}

interface Patient {
    id: number;
    first_name: string;
    last_name: string;
}

const RxQueue: React.FC = () => {
    const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
    const [patients, setPatients] = useState<Patient[]>([]);
    const [tableData, setTableData] = useState<{ columns: string[], data: any[] }>({ columns: [], data: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all prescriptions
                const prescriptionsResponse = await fetch("/prescriptions");
                const prescriptionsData = await prescriptionsResponse.json();
                setPrescriptions(prescriptionsData);

                // Fetch all patients
                const patientsResponse = await fetch("/patients");
                const patientsData = await patientsResponse.json();
                setPatients(patientsData);

                // Prepare table data
                const columns = ['Prescription Item', 'Patient Name', 'Status'];
                const data = prescriptionsData.map((prescription: Prescription) => {
                    // Find patient name
                    const patient = patientsData.find((patient: Patient) => patient.id === prescription.patient_id);
                    const patientName = patient ? `${patient.first_name} ${patient.last_name}` : 'Unknown';

                    return {
                        'Prescription Item': `${prescription.rx_item.name} (${prescription.rx_item.strength})`,
                        'Patient Name': patientName,
                        'Status': prescription.status
                    };
                });

                setTableData({ columns, data });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className={styles.RxQueueMain}>
            <h1>Prescription Queue</h1>
            <hr className='hr'></hr>
            <div className={styles.RxQueueTable}>
                {tableData.columns.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                {tableData.columns.map((column, index) => (
                                    <th key={index}>{column}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {tableData.columns.map((column, colIndex) => (
                                        <td key={colIndex}>{row[column]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
        </main>
    );
}

export default RxQueue;