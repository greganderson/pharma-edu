import React, { useEffect, useState } from 'react';

import styles from './RxQueue.module.css'

const RxQueue:React.FC = () => {
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