import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
    show: boolean;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                {children}
            </div>
        </div>
    );
};

export default Modal; 





