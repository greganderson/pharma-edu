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

    // Prevent closing when clicking inside the modal content
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={handleContentClick}>
                <button type="button" onClick={onClose} className={styles.modalClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal; 





