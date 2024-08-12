import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button type="submit" onClick={onClose} className={styles.modalClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;   