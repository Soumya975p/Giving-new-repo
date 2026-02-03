'use client';

import React, { useState } from 'react';
import styles from './PopupForm.module.css';

interface PopupFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        organisation: '',
        email: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={styles.popupOverlay} onClick={onClose}>
            <div className={styles.popupCard} onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className={styles.closeButton} onClick={onClose}>
                    CLOSE
                </button>

                {/* Header Text */}
                <div className={styles.popupHeader}>
                    <h2 className={styles.popupTitle}>Help us keep your garden growing</h2>
                    <p className={styles.popupDescription}>
                        So we can share the right tools at the right time—and keep improving this guide for others like you.
                    </p>
                </div>

                {/* Content Container */}
                <div className={styles.popupContent}>
                    {/* Left Side - Design */}
                    <div className={styles.designContainer}>
                        <img
                            src="/assets/popup_design.svg"
                            alt="Popup Design"
                            className={styles.designImage}
                        />
                    </div>

                    {/* Right Side - Form */}
                    <div className={styles.formContainer}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formField}>
                                <div className={styles.inputWrapper}>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder=" "
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={styles.formInput}
                                        required
                                    />
                                    <span className={`${styles.formLabel} ${styles.formLabelStrong}`}>First name</span>
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <div className={styles.inputWrapper}>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder=" "
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={styles.formInput}
                                        required
                                    />
                                    <span className={`${styles.formLabel} ${styles.formLabelStrong}`}>Last name</span>
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <div className={styles.inputWrapper}>
                                    <input
                                        type="text"
                                        name="organisation"
                                        placeholder=" "
                                        value={formData.organisation}
                                        onChange={handleInputChange}
                                        className={styles.formInput}
                                        required
                                    />
                                    <span className={`${styles.formLabel} ${styles.formLabelStrong}`}>Organisation</span>
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <div className={styles.inputWrapper}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder=" "
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={styles.formInput}
                                        required
                                    />
                                    <span className={`${styles.formLabel} ${styles.formLabelStrong}`}>Email id</span>
                                </div>
                            </div>
                            <button type="submit" className={styles.getToolkitBtn}>
                                <span>◆</span>
                                <span>Get toolkit</span>
                                <span>◆</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
