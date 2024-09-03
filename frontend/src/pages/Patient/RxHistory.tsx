import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import styles from './RxHistory.module.css'
import { Patient } from "./PatientModels";

const RxHistory:React.FC = () => {
    const [tableData, setTableData] = useState({ columns: [], data: [] });
    const { patient_id } = useParams<{ patient_id: string }>();
    const navigate = useNavigate();
    const [patient, setPatient] = useState<Patient | null>(null);
    

    // Use get_prescriptions in /routers/prescriptions.py
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("/prescriptions"); 
        const data = await response.json();
        setTableData(data);
      };
  
      fetchData();
    }, []);

    return (
        <main className={styles.RxHistoryMain}>
            <h1>[Patient Name] Medication History</h1>
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