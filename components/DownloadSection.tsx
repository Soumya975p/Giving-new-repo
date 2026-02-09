'use client';

import { useState } from 'react';
import styles from './DownloadSection.module.css';
import PopupForm from './PopupForm';

interface DownloadSectionProps {
    className?: string;
}

export default function DownloadSection({ className }: DownloadSectionProps) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [toolkitUrl, setToolkitUrl] = useState<string>('');

    const COOKIE_NAME = "popup_form_submitted_v1";
    const DOWNLOAD_ALL_URL = 'https://drive.google.com/drive/folders/1w0CU1frY850hTcF0W0wojF6DDPK2xv9l?usp=sharing';

    const hasCookie = () => {
        if (typeof document !== 'undefined') {
            return document.cookie.split(";").some(c => c.trim().startsWith(COOKIE_NAME + "="));
        }
        return false;
    };

    const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const cookieExists = hasCookie();

        if (cookieExists) {
            window.open(DOWNLOAD_ALL_URL, '_blank', 'noopener,noreferrer');
        } else {
            setToolkitUrl(DOWNLOAD_ALL_URL);
            setIsPopupOpen(true);
        }
    };

    return (
        <section className={`${styles.downloadSection} ${className || ''}`}>
            {/* Background Image */}
            <img
                src="/assets/download_background.png"
                alt=""
                className={styles.downloadBackgroundImage}
            />
            <img
                src="/assets/downloads_background_mobile.svg"
                alt=""
                className={styles.downloadBackgroundImageMobile}
            />

            <div className={styles.downloadContent}>
                {/* Center Card */}
                <div className={styles.downloadCard}>
                    <div className={styles.downloadIcons}>
                        <img
                            src="/assets/downloas_icons.png"
                            alt="Download Icons"
                            className={styles.downloadIconsImage}
                        />
                    </div>

                    <div className={styles.downloadInfo}>
                        <h2 className={styles.downloadTitle}>Download the complete set of fundraising tools</h2>
                        <p className={styles.downloadDescription}>
                            All the tools in one place to start building a structured, relationship-led approach <br />
                            to engaging everyday givers – at your own pace, and with the resources that fit <br />
                            your organisation best.
                        </p>
                        <div className={styles.downloadButtons}>
                            {/* <button className={styles.downloadAllBtn} onClick={handleDownloadClick}>
                                <img
                                    src="/assets/download_all.svg"
                                    alt="Download all"
                                    className={styles.downloadAllImage}
                                />
                                <span className={styles.downloadAllImageWrap}>
                                    <span className={styles.diamond}>◆</span>
                                    <span className={styles.downloadAllText}>Download all</span>
                                    <span className={styles.diamond}>◆</span>
                                </span>
                                <img
                                    src="/assets/download_all_btn_mobile.svg"
                                    alt="Download all"
                                    className={styles.downloadAllImageMobile}
                                />
                            </button> */}
                            <a className={styles.downloadAllBtn} onClick={handleDownloadClick}>
                                <img
                                    src="/assets/get-all-toolkits.png"
                                    alt="Download all"
                                    className={styles.downloadAllImage}
                                />
                                <span className={styles.downloadAllImageWrap}>
                                    <span className={styles.diamond}>◆</span>
                                    <span className={styles.downloadAllText}>Get all toolkits</span>
                                    <span className={styles.diamond}>◆</span>
                                </span>
                                <img
                                    src="/assets/get-all-toolkits.png"
                                    alt="Download all"
                                    className={styles.downloadAllImageMobile}
                                />
                            </a>
                            {/* <button className={styles.viewAllBtn}>
                                <img src="/assets/view_doanload.svg" alt="View all" className={styles.viewAllImage} />
                                <span className={styles.viewAllMobileWrap}>
                                    <span className={styles.diamond}>◆</span>
                                    <span className={styles.downloadAllText}>View all</span>
                                    <span className={styles.viewAllArrowCircle}>
                                        <span className={styles.viewAllArrow}>→</span>
                                    </span>
                                </span>
                                <img
                                    src="/assets/view_all_btn_mobile.svg"
                                    alt="View all"
                                    className={styles.viewAllImageMobile}
                                />
                            </button> */}
                        </div>
                    </div>
                </div>

                {/* Right decorative plant */}

            </div>

            {/* Popup Form */}
            <PopupForm
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                toolkitUrl={toolkitUrl}
            />
        </section>
    );
}
