import React, { useState } from 'react';

import styles from './Login.module.css';

const Login:React.FC = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main>
            <div className={styles.logo}></div>
            <form onSubmit={handleSubmit}>
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
    );
}

export default Login;