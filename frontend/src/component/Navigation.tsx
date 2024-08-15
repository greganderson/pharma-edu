import React from 'react';
import NavItem from './NavItem';

import styles from './Navigation.module.css';

const Navigation:React.FC = () => {

    return (
        <nav>
            <div className={styles.logo}></div>
            <ul className={styles.navButton}>
                <NavItem routeName="New Rx" path="/new-rx" />
                <NavItem routeName="Patients" path="/patients" />
                <NavItem routeName="Prescriber" path="/prescriber" />
                <NavItem routeName="Rx Item" path="/rx-search" />
                <NavItem routeName="Perscription Queue" path="/rx-queue" />
                <NavItem routeName="Logout" path="/login" />
            </ul>
        </nav>
    );
}

export default Navigation;



        // {routes.map((route, index) => (
        //   <NavItem key={index} name={route.name} path={route.path} />
        // ))}
