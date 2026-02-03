import React from 'react';
import styles from './ToolkitCard.module.css';

interface ToolkitCardProps {
    toolkitNumber: number;
    title: string;
    description: string;
    backgroundImage: string;
    designImage: string;
    onDownload?: () => void;
    onViewToolkit?: () => void;
    disableRotation?: boolean;
    designVariant?: 'ch2' | 'tk3' | 'tk4' | 'tk5' | 'tk6' | 'tk7';
    backgroundVariant?: 'tk345' | 'tk6' | 'tk7';
}

export default function ToolkitCard({
    toolkitNumber,
    title,
    description,
    backgroundImage,
    designImage,
    onDownload,
    onViewToolkit,
    disableRotation = false,
    designVariant,
    backgroundVariant
}: ToolkitCardProps) {
    return (
        <div className={`${styles.toolkitCardWrapper} ${disableRotation ? styles.noRotate : ''} ${designVariant === 'ch2' ? styles.designCh2 : ''} ${designVariant === 'tk3' ? styles.designTk3 : ''} ${designVariant === 'tk4' ? styles.designTk4 : ''} ${designVariant === 'tk5' ? styles.designTk5 : ''} ${designVariant === 'tk6' ? styles.designTk6 : ''} ${designVariant === 'tk7' ? styles.designTk7 : ''} ${backgroundVariant === 'tk345' ? styles.backgroundTk345 : ''} ${backgroundVariant === 'tk6' ? styles.backgroundTk6 : ''} ${backgroundVariant === 'tk7' ? styles.backgroundTk7 : ''}`}>
            {/* Base Card */}
            <div className={styles.baseCard}>
                <img
                    src="/assets/toolkit_base_card.svg"
                    alt=""
                    className={styles.baseCardImage}
                />
            </div>

            {/* Content Container */}
            <div className={styles.contentContainer}>
                {/* Top Section: Background + Design */}
                <div className={styles.topSection}>
                    {/* Background Image */}
                    <img
                        src={backgroundImage}
                        alt=""
                        className={styles.backgroundImage}
                    />
                    {/* Design Overlay */}
                    <img
                        src={designImage}
                        alt=""
                        className={styles.designOverlay}
                    />
                </div>

                {/* Text Section */}
                <div className={styles.textSection}>
                    <span className={styles.toolkitLabel}>TOOLKIT #{toolkitNumber}</span>
                    <h3 className={styles.toolkitTitle}>{title}</h3>
                    <p className={styles.toolkitDescription}>{description}</p>
                </div>

                {/* Buttons Section */}
                <div className={styles.buttonsSection}>
                    <button className={styles.downloadButton} onClick={onDownload}>
                        <span>Download</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.downloadIcon}
                        >
                            <path
                                d="M8 12L8 3M8 12L4 8M8 12L12 8"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3 14H13"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                    <button className={styles.viewToolkitButton} onClick={onViewToolkit}>
                        <span>View toolkit</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.arrowIcon}
                        >
                            <path
                                d="M3 8H13M13 8L9 4M13 8L9 12"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
