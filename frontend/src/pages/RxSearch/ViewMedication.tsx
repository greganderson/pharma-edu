import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { RxItem } from "./RxItemModal";
import styles from "./AddMedication.module.css";
import style from "./ViewMedication.module.css";


const ViewMedication:React.FC = () => {
    const { rx_item_id } = useParams<{ rx_item_id: string }>();
    console.log('Rx Item ID:', rx_item_id); 

    const [rxitem, setRxItem] = useState<RxItem | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchRxItem = async () => {
            if (!rx_item_id) {
                console.error('Rx Item ID is missing');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:8000/rx-items/${rx_item_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Rx Item data:', data);
                setRxItem(data);
            } catch (error) {
                console.error('Error fetching rx item data:', error);
            } finally {
                setLoading(false);
            }
        };

    fetchRxItem();
    }, [rx_item_id]);

    if (loading) return <div>Loading Rx Item...</div>;
    if (!rxitem) return <div>Rx Item not found</div>;

    return (
        <main className={styles.addItemMain}>
        <h2 className={styles.AddItem_h1}>View Medication</h2>
        <hr className='hr'></hr>
        <form className={styles.addRxForm}>
            <div className={styles.gridContainerItem}>
                {/* Left Column */}
                <div className={styles.itemColumn}>
                    <table className={style.enterNewItem}>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor='ndc'>NDC: </label>
                                </td>
                                <td>
                                    <input type="text" 
                                        id="ndc" 
                                        value={rxitem.ndc}
                                        readOnly
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='name'>Name: </label>
                                </td>
                                <td>
                                    <input type="text" 
                                        id="name" 
                                        value={rxitem.name}
                                        readOnly
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='manufacturer'>Manufacturer: </label>
                                </td>
                                <td>
                                    <input type="text" 
                                        id="manufacturer" 
                                        // value={rxitem.manufacturer}
                                        readOnly
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='item_brand'>Brand/Generic: </label>
                                </td>
                                <td>
                                    <input id="item_brand" 
                                        type='text' 
                                        // value={rxitem.item_brand}
                                        readOnly
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='dea_schedule'>DEA Schedule: </label>
                                </td>
                                <td>
                                    <input type="text" 
                                        id="dea_schedule" 
                                        value={rxitem.dea_schedule}
                                        readOnly
                                    />
                                </td>
                            </tr>
                            </tbody>
                            </table>
                        </div>
                {/* Right Column */}
                <div className={styles.ItemColumn2}>
                    <table className={style.enterNewItem}>
                        <tbody>
                        <tr>
                            <td>
                                <label htmlFor='dosage'>Dosage Form: </label>
                            </td>
                            <td>
                                <input type="text" 
                                    id="dosage" 
                                    // value={rxitem.dosage}
                                    readOnly
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='strength'>Strength: </label>
                            </td>
                            <td>
                            <input type="text" 
                                id="strength" 
                                value={rxitem.strength}
                                readOnly
                            />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='lot_number'>Lot Number: </label>
                            </td>
                            <td>
                            <input type="text" 
                                id="lot_number" 
                                value={rxitem.lot_number}
                                readOnly
                            />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='expiration'>Expiration: </label>
                            </td>
                            <td>
                            <input type="date" 
                                id="expiration" 
                                value={rxitem.expiration}
                                readOnly
                            />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='otc'>Sold OTC: </label>
                            </td>
                            <td>
                                <input type="checkbox" 
                                    id="otc" 
                                    className={styles.OTC} 
                                    // value={rxitem.otc}
                                    readOnly
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Link to={`/rx-item/update-medication/${rx_item_id}`}>
                    <button type="submit" className={styles.saveItemButton}>Edit Medication</button>
                </Link>
            </div>
        </form>
    </main>
    );
}

export default ViewMedication;