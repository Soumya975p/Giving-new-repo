'use client';

import React, { useEffect, useState } from 'react';
import styles from './PopupForm.module.css';

interface PopupFormProps {
    isOpen: boolean;
    onClose: () => void;
    toolkitUrl?: string;
}

const COOKIE_NAME = "popup_form_submitted_v1";

const hasCookie = () => {
    const exists = document.cookie.split(";").some(c => c.trim().startsWith(COOKIE_NAME + "="));
    console.log('PopupForm - Cookie check:', exists ? 'Found' : 'Not found', '- All cookies:', document.cookie);
    return exists;
};

const setCookie = () => {
    document.cookie = `${COOKIE_NAME}=true; max-age=86400; path=/; SameSite=Lax`;
    console.log('Cookie set:', COOKIE_NAME, '- Will expire in 24 hours');
};

export default function PopupForm({ isOpen, onClose, toolkitUrl }: PopupFormProps) {
    
    const [ready, setReady] = useState(false); // prevents flicker
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        organisation: '',
        email: ''
    });

    // Check if all fields are filled
    const isFormValid = formData.firstName.trim() !== '' &&
                        formData.lastName.trim() !== '' &&
                        formData.organisation.trim() !== '' &&
                        formData.email.trim() !== '';

    useEffect(() => {

        if (isOpen !== undefined) {
            setShowPopup(isOpen);
            setReady(true);
            return;
        }

        if (!hasCookie()) {
            setTimeout(() => {
                setShowPopup(true);
                setReady(true);
            }, 3000); // optional delay
        } else {
            setReady(true);
        }

    }, [isOpen]);

    const handleClose = () => {
        setShowPopup(false);
        onClose?.();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
        setLoading(true);
         const form = e.currentTarget;
         const formData = new FormData(form);
        setMessage("");
        try {
            const res = await fetch("https://givingtogetherfoundation.org/gtf/save.php", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                //body: JSON.stringify(formData),
                body: JSON.stringify({
                    firstName: formData.get("firstName"),
                    lastName: formData.get("lastName"),
                    email: formData.get("email"),
                    organisation: formData.get("organisation"),
                }),
            });

            if (!res.ok) {
                throw new Error(`Server responded with ${res.status}: ${res.statusText}`);
            }

            const text = await res.text(); // 👈 read as text first
            console.log("Server response:", text);

            let result;
            try {
                result = JSON.parse(text); // convert manually
            } catch (parseErr) {
                console.error("Failed to parse response as JSON:", text);
                throw new Error("Invalid server response");
            }
            if (result.status === "success") {
                setCookie();
                /*const date = new Date();
                date.setTime(date.getTime() + (24 * 60 * 60 * 1000)); // 24 hours
                document.cookie = `formSubmitted=true; expires=${date.toUTCString()}; path=/`;*/
                setMessage("✅ Form submitted successfully!");
                form.reset();
                setFormData({
                    firstName: "",
                    lastName: "",
                    organisation: "",
                    email: "",
                });
                setTimeout(() => {
                    document.querySelectorAll('[data-href]').forEach(el => {
                        const url = el.getAttribute('data-href');
                        if (url) {
                            el.setAttribute('href', url);
                            el.setAttribute('target', '_blank');
                            el.setAttribute('rel', 'noopener noreferrer');
                            el.removeAttribute('data-href');
                        }
                    });
                    // Open the specific toolkit URL if provided
                    if (toolkitUrl) {
                        window.open(toolkitUrl, '_blank', 'noopener,noreferrer');
                    }
                }, 0);
                setTimeout(() => {
                    setMessage("");
                    handleClose(); // Close popup after success message
                }, 2000);
            } else {
                setMessage("❌ Something went wrong.");
            }
            } catch (err) {
                console.error("Form submission error:", err);
                setMessage("⚠️ Could not save form data, but opening toolkit anyway...");

                // Set cookie even on error, so form doesn't show again
                setCookie();
                form.reset();
                setFormData({
                    firstName: "",
                    lastName: "",
                    organisation: "",
                    email: "",
                });

                // Even if the server fails, still open the toolkit
                setTimeout(() => {
                    if (toolkitUrl) {
                        window.open(toolkitUrl, '_blank', 'noopener,noreferrer');
                    }
                }, 500);

                setTimeout(() => {
                    setMessage("");
                    handleClose();
                }, 2000);
            } finally {
                setLoading(false);
            }
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
                            <p>{message}</p>
                            <button
                                type="submit"
                                className={`${styles.getToolkitBtn} ${isFormValid ? styles.active : ''}`}
                                disabled={!isFormValid}
                            >
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
