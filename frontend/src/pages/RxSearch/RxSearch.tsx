import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { RxItemBasics } from './RxItemModel';
import styles from "../Search.module.css"

const RxSearch:React.FC = () => {
    const [rxItems, setRxItems] = useState<RxItemBasics[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRxItem, setFilteredRxItem] = useState<RxItemBasics[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRxItems = async () => {
            const response = await fetch('http://localhost:8000/rx-items');
            const data = await response.json();
            setRxItems(data);
        };

        fetchRxItems();
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredRxItem([]);
        } else {
            const filtered = rxItems.filter(rxItem =>
                `${rxItem.name}`
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            );
            setFilteredRxItem(filtered);
        }
    }, [searchTerm, rxItems]);

    const handleSelectRxItem = (rxItem: RxItemBasics) => {
        console.log(`Selected Rx Item: ${rxItem.name}`);
        const rx_item_id = rxItem.id;
        navigate(`/rx-item/view-medication/${rx_item_id}`);
    };

    return (
        <main className={styles.mainSearch}>
            <h2>Rx Item Search</h2>
            <hr className={styles.hr}></hr>
            <div className={styles.container}>
                <label htmlFor='search'>Quick Search: </label>
                <div className={styles.inputDropdownMatch}>
                    <input
                        type="text"
                        id="search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Search by name...'
                    />
                     {filteredRxItem.length > 0 ? (
                        <ul className={styles.dropdown} role="listbox" title='dropdown'>
                            {filteredRxItem.map((rxItem) => (
                                <li
                                    key={rxItem.id}
                                    onClick={() => handleSelectRxItem(rxItem)}
                                    className={styles.dropdownItem}
                                    role="option"
                                >
                                    {rxItem.name} {rxItem.strength} {rxItem.dosage_form}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        searchTerm && <p>No Rx Item found...</p>
                    )}
                </div>
            </div>
            <div className={styles.ButtonContainer}>
                <Link to="/rx-item/add-medication">
                    <button type="button">Add New Medication</button>
                </Link>
            </div>
        </main>
    );
}

export default RxSearch;

