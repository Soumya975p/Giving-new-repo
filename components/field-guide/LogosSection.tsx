import React from 'react';
import styles from './LogosSection.module.css';

export default function LogosSection() {
    const logos = [
        { desktop: '/assets/logo1.png', mobile: '/assets/logo1_mobile.png' },
        { desktop: '/assets/logo2.png' },
        { desktop: '/assets/logo3.png' },
        { desktop: '/assets/logo4.png' },
        { desktop: '/assets/logo5.png' }
    ];

    return (
        <section className={styles.logosSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>This field guide was co-created by</h2>
                <div className={styles.logosContainer}>
                    {logos.map((logo, index) => (
                        <div key={index} className={styles.logoWrapper}>
                            <img
                                src={logo.desktop}
                                alt={`Partner logo ${index + 1}`}
                                className={`${styles.logo} ${logo.mobile ? styles.desktopOnly : ''}`}
                            />
                            {logo.mobile && (
                                <img
                                    src={logo.mobile}
                                    alt={`Partner logo ${index + 1} mobile`}
                                    className={`${styles.logo} ${styles.mobileOnly}`}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
