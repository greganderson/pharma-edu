import React from 'react';
import NavItem from './NavItem';

import styles from './Navigation.module.css';

const Navigation:React.FC = () => {

    return (
        <nav>
            <div className={styles.logo}></div>
            <ul className={styles.navButton}>
                <NavItem routeName="New Rx" path="/new-rx" />
                <NavItem routeName="Patient" path="/patient" />
                <NavItem routeName="Prescriber" path="/prescriber" />
                <NavItem routeName="Rx Item" path="/rx-item" />
                <NavItem routeName="Perscription Queue" path="/rx-queue" />
                <NavItem routeName="Logout" path="/login" />
            </ul>
        </nav>
    );
}

export default Navigation;
