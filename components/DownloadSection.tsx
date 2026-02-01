'use client';

import styles from './DownloadSection.module.css';

interface DownloadSectionProps {
    className?: string;
}

export default function DownloadSection({ className }: DownloadSectionProps) {
    return (
        <section className={`${styles.downloadSection} ${className || ''}`}>
            {/* Background Image */}
            <img
                src="/assets/download_background.svg"
                alt=""
                className={styles.downloadBackgroundImage}
            />

            <div className={styles.downloadContent}>
                {/* Decorative Petals */}
                <img
                    src="/assets/download_petal.svg"
                    alt=""
                    className={styles.downloadPetal1}
                />
                <img
                    src="/assets/download_petal.svg"
                    alt=""
                    className={styles.downloadPetal2}
                />
                <img
                    src="/assets/download_petal.svg"
                    alt=""
                    className={styles.downloadPetal3}
                />
                <img
                    src="/assets/download_petal.svg"
                    alt=""
                    className={styles.downloadPetal4}
                />

                {/* Decorative Balls */}
                <img
                    src="/assets/download_section_ball.svg"
                    alt=""
                    className={styles.downloadBall1}
                />
                <img
                    src="/assets/download_section_ball.svg"
                    alt=""
                    className={styles.downloadBall2}
                />

                {/* Decorative Sticks */}
                {/* <img
          src="/assets/download_petal_stick.svg"
          alt=""
          className={styles.downloadStick1}
        />
        <img
          src="/assets/download_petal_stick.svg"
          alt=""
          className={styles.downloadStick2}
        />
        <img
          src="/assets/download_petal_stick.svg"
          alt=""
          className={styles.downloadStick3}
        />
        <img
          src="/assets/download_petal_stick.svg"
          alt=""
          className={styles.downloadStick4}
        /> */}


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
                        <h2 className={styles.downloadTitle}>Download the complete fundraising set</h2>
                        <p className={styles.downloadDescription}>
                            All the tools in one place to start building a structured, relationship-led approach <br />
                            to engaging everyday givers – at your own pace, and with the resources that fit <br />
                            your organisation best.
                        </p>
                        <div className={styles.downloadButtons}>
                            <button className={styles.downloadAllBtn}>
                                <img src="/assets/download.svg" alt="Download all" className={styles.downloadAllImage} />
                            </button>
                            <button className={styles.viewAllBtn}>
                                <img src="/assets/view_doanload.svg" alt="View all" className={styles.viewAllImage} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right decorative plant */}

            </div>

        </section>
    );
}
