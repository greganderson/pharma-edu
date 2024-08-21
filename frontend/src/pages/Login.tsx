import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';
import Modal from '../component/Modal'

const Login:React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);

        // validation or authentication logic here

        // Until Validation is added simply click the Sign In button to leave the page


        setIsModalOpen(false);
        navigate('/rx-queue'); // Redirect to Prescription Queue after login authentication
    };

    return (
        <Modal show={isModalOpen}>
            <main className={styles.mainBox}>
                <div className={styles.logo}></div>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <h1 className={styles.h1SignIn}>Pharmacy Sign In</h1>
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
                        <button type='submit' className={styles.SignInButton}>Sign In</button>
                    </div>
                </form>
            </main>
        </Modal>
    );
}

export default Login;

