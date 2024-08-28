import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { RxItem, deaSchedule } from './RxItemModal';
import styles from "./AddMedication.module.css";


const UpdateMedication:React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const { rx_item_id } = useParams<{ rx_item_id: string }>();
    const [rxitem, setRxItem] = useState<RxItem | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

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
                setRxItem(data);
            } catch (error) {
                console.error('Error fetching rx item data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRxItem();
    }, [rx_item_id]);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = event.target;
        setRxItem((prevRxItem) => ({
            ...prevRxItem!,
            [id]: value
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        if (!rx_item_id) {
            console.error('Rx Item ID is missing');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/rx-items/${rx_item_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(rxitem)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            setSubmitted(true);
            navigate(`/rx-item/view-medication/${rx_item_id}`);
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while updating the rx item.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) return <div>Loading Rx Item...</div>;
    if (!rxitem) return <div>Rx Item not found</div>;

    return (
        <main className={styles.addItemMain}>
        <h2 className={styles.AddItem_h1}>Update Medication</h2>
        <hr className='hr'></hr>
        <form onSubmit={handleSubmit} className={styles.addRxForm}>
        <div className={styles.gridContainerItem}>
                {/* Left Column */}
                <div className={styles.itemColumn}>
                    <table className={styles.enterNewItem}>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor='ndc'>NDC: </label>
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        id="ndc"
                                        value={rxitem.ndc}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='name'>Name: </label>
                                </td>
                                <td>
                                    <input type="text" id="name"
                                        value={rxitem.name}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </td>
                            </tr>
                            {/* <tr>
                                <td>
                                    <label htmlFor='manufacturer'>Manufacturer: </label>
                                </td>
                                <td>
                                    <input type="text" id="manufacturer" 
                                        // value={itemData.manufacturer}
                                        onChange={handleInputChange}
                                        required />
                                </td>
                            </tr> */}
                            <tr>
                                <td>
                                    <label htmlFor='itemBrand'>Brand/Generic: </label>
                                </td>
                                <td>
                                    <input 
                                        type='text'
                                        id="itemBrand"
                                        // value={rxitem.brand}
                                        onChange={handleInputChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='dea_schedule'>DEA Schedule: </label>
                                </td>
                                <td>
                                    <select  
                                        id="dea_schedule"
                                        value={rxitem.dea_schedule}
                                        onChange={handleInputChange}
                                        required 
                                    >
                                    <option value="" disabled>Select a DEA Schedule</option>
                                    {deaSchedule.map((deaschedule) => (
                                        <option key={deaschedule} value={deaschedule}>
                                            {deaschedule}
                                        </option>
                                    ))}
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                            </table>
                        </div>
                {/* Right Column */}
                <div className={styles.ItemColumn2}>
                <table className={styles.enterNewItem}>
                        <tbody>
                        <tr>
                            <td>
                                <label htmlFor='dosage'>Dosage Form: </label>
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    id="dosage"
                                    // value={itemData.dosage}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='strength'>Strength: </label>
                            </td>
                            <td>
                            <input 
                                type="text" 
                                id="strength" 
                                value={rxitem.strength}
                                onChange={handleInputChange}
                                required 
                            />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='lot_number'>Lot Number: </label>
                            </td>
                            <td>
                            <input type="text" id="lot_number" 
                                value={rxitem.lot_number}
                                onChange={handleInputChange}
                                required 
                            />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='expiration'>Expiration: </label>
                            </td>
                            <td>
                            <input type="date" id="expiration" 
                                value={rxitem.expiration}
                                onChange={handleInputChange}
                                required 
                            />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='otc'>Sold OTC: </label>
                            </td>
                            <td>
                                <input type="checkbox" id="otc" className={styles.OTC} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.buttonContainer}>
            <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Saving...' : 'Save Rx Item'}
                </button>
            </div>
        </form>
    </main>
    );
}

export default UpdateMedication;