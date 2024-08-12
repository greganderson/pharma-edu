import React from 'react';
import NavItem from './NavItem';
// import route from "../routes";

import styles from './Navigation.module.css';

const Navigation:React.FC = () => {

    return (
        <nav>
            <div className={styles.logo}></div>
            <ul className={styles.navButton}>
                {/* <NavItem routeName='Home' path="/" /> */}
                <NavItem routeName="New Rx" path="/newrx" />
                <NavItem routeName="Patients" path="/patients" />
                <NavItem routeName="Perscriber" path="/perscriber" />
                <NavItem routeName="Rx Item" path="/rxsearch" />
                <NavItem routeName="Perscription Queue" path="/rxqueue" />
                <NavItem routeName="Logout" path="/login" />
            </ul>
        </nav>
    );
}

export default Navigation;



        // {routes.map((route, index) => (
        //   <NavItem key={index} name={route.name} path={route.path} />
        // ))}
