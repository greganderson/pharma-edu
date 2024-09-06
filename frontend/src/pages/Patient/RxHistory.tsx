import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

import styles from './RxHistory.module.css';
import { Patient } from "./PatientModels";

const RxHistory: React.FC = () => {
    const [tableData, setTableData] = useState({ columns: [], data: [] });
    // const [loading, setLoading] = useState<boolean>(true);
    const [patient, setPatient] = useState<Patient | null>(null);
    const [allPrescriptions, setAllPrescriptions] = useState([]);
    const { patient_id } = useParams<{ patient_id: string }>();
    const location = useLocation();
    // const navigate = useNavigate();

    useEffect(() => {
        if (location.state && location.state.patient) {
            setPatient(location.state.patient);
        }
    }, [location.state]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const prescriptionsResponse = await fetch("http://localhost:8000/prescriptions");
                const prescriptionsData = await prescriptionsResponse.json();
                console.log("Prescription Data: ", prescriptionsData)
                setAllPrescriptions(prescriptionsData);

                const patientResponse = await fetch(`http://localhost:8000/patients/${patient_id}`)
                const patientData = await patientResponse.json();
                console.log("Patient Data: ", patientData);
                setPatient(patientData);
                
                // setTableData({ columns: ['item', 'status'], data: patientPrescriptions });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [patient_id]);

    return (
        <main className={styles.RxHistoryMain}>
            {/* <h1>[Patient Name] Medication History</h1> */}
            <h1>{patient ? `${patient.first_name} ${patient.last_name} Medication History` : 'Loading...'}</h1>
            <hr className='hr'></hr>
            <div>
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
                    <p>Loading Prescriptions...</p>
                )}
            </div>
            <div className={styles.buttonContainer}>
                <Link to="/new-rx">
                    <button type="button">Refill Rx</button>
                </Link>
                <Link to={`/patient/view-patient/${patient_id}`}>
                    <button type="button">View Patient</button>
                </Link>
            </div>
        </main>
    );
}

export default RxHistory;