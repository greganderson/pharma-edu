import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from "./AddMedication.module.css";
import { deaSchedule, drugClass } from "./RxItemModal"


const AddMedication:React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const [itemData, setItemData] = useState({
        name: "",
        strength: "",
        ndc: "",
        expiration: "",
        lot_number: "",
        dea_schedule: "",
        drug_class: ""
    });

    const navigate = useNavigate();

    const postItem = async (itemData: any) => {
        try {
            const response = await fetch('http://localhost:8000/rx-items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemData),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create item.');
            }
    
            return response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
    
        try {
            const result = await postItem(itemData);
            setSubmitted(true);
            const rx_item_id = result.rx_item_id;
            navigate(`/rx-item/view-medication${rx_item_id}`); // Navigate to the view-prescriber page with the prescriber ID
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the Item.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = event.target;
        setItemData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    return (
        <main className={styles.addItemMain}>
        <h2 className={styles.AddItem_h1}>Add Medication</h2>
        <hr className={styles.hr}></hr>
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
                                        value={itemData.ndc}
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
                                        value={itemData.name}
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
                                        // value={itemData.brand}
                                        onChange={handleInputChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='drug_class'>Drug Class: </label>
                                </td>
                                <td>
                                <select 
                                    id="drug_class"
                                    value={itemData.drug_class}
                                    onChange={handleInputChange}
                                    required
                                >
                                <option value="" disabled>Select a Drug Class</option>
                                    {drugClass.map((drugclass) => (
                                        <option key={drugclass} value={drugclass}>
                                            {drugclass}
                                        </option>
                                    ))}
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='dea_schedule'>DEA Schedule: </label>
                                </td>
                                <td>
                                    <select  
                                        id="dea_schedule"
                                        value={itemData.dea_schedule}
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
                                value={itemData.strength}
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
                                value={itemData.lot_number}
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
                                value={itemData.expiration}
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
                    <button type="submit" disabled={isSubmitting} className={styles.saveItemButton}>
                        {isSubmitting ? 'Saving...' : 'Save Medication'}
                    </button>
                    <Link to="/rx-item/rx-search">
                        <button type="button">Cancel</button>
                    </Link>
            </div>
        </form>
    </main>
    );
}

export default AddMedication;