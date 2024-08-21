import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './RxHistory.module.css'

const RxHistory:React.FC = () => {
    const [tableData, setTableData] = useState({ columns: [], data: [] });

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(""); // Adjust to backend API URL
        const data = await response.json();
        setTableData(data);
      };
  
      fetchData();
    }, []);

    return (
        <main className={styles.RxHistoryMain}>
            <h1>[Patient Name] Medication History</h1>
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
                    <p>Loading data...</p>
                )}
            </div>
            <div className={styles.buttonContainer}>
                <Link to="/new-rx">
                    <button type="button">Refill Rx</button>
                </Link>
                <Link to="/patient/view-patient">
                    <button type="button">View Patient</button>
                </Link>
            </div>

        </main>
    );
}

export default RxHistory;