import React, { useState } from 'react';

import styles from './Login.module.css';
// import Modal from '../component/Modal'

const Login:React.FC = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => setIsModalOpen(true);
    // const closeModal = () => setIsModalOpen(false);

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        // <Modal show={isModalOpen} onClose={closeModal}>
            <main className={styles.mainBox}>
                <div className={styles.logo}></div>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <h1 className={styles.h1SignIn}>Pharmacy Technician Sign In</h1>
                    <div className={styles.inputFields}>
                        <label htmlFor='username'></label>
                        <input
                            type="text"
                            id="username"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setUsername(event.target.value)}
                            placeholder='Username'
                        />
                    </div>
                    <div className={styles.inputFields}>
                        <label htmlFor='password'></label>
                        <input
                            type="text"
                            id="password"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setPassword(event.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <div className={styles.LoginButton}>
                        <button type='submit'>Sign In</button>
                    </div>
                </form>
            </main>
        // </Modal>
    );
}

export default Login;