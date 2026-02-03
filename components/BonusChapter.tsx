'use client';

import { forwardRef } from 'react';
import styles from './BonusChapter.module.css';

interface BonusChapterProps {
    className?: string;
}

const BonusChapter = forwardRef<HTMLDivElement, BonusChapterProps>(
    ({ className }, ref) => {
        return (
            <section className={`${styles.bonusSection} ${className || ''}`} ref={ref}>
                <div className={styles.bonusContent}>
                    <div className={styles.bonusLeft}>
                        <img
                            src="/assets/bonus_chapter_flower.svg"
                            alt=""
                            className={styles.bonusFlowerImage}
                        />
                        <img
                            src="/assets/bonus_dot.svg"
                            alt=""
                            className={styles.bonusFlowerDot}
                        />
                        <p className={styles.bonusLabel}>BONUS CHAPTER</p>
                        {/* Desktop Title */}
                        <h2 className={`${styles.bonusTitle} ${styles.desktopOnly}`}>
                            <span className={styles.bonusTitleHighlight}>No single team</span> owns<br />
                            the donor experience
                        </h2>
                        {/* Mobile Title with specific breaks */}
                        <h2 className={`${styles.bonusTitle} ${styles.mobileOnly}`}>
                            <span className={styles.bonusTitleHighlight}>No single team</span><br />
                            owns the donor<br />
                            experience
                        </h2>

                        {/* Desktop Text */}
                        <p className={`${styles.bonusText} ${styles.desktopOnly}`}>
                            As supporters move across stages, effective coordination between<br />
                            programme, communications, and fundraising teams ensures consistency,<br />
                            continuity, and trust.
                        </p>
                        {/* Mobile Text with specific breaks */}
                        <p className={`${styles.bonusText} ${styles.mobileOnly}`}>
                            As supporters move across stages, effective<br />
                            coordination between programme,<br />
                            communications, and fundraising teams<br />
                            ensures consistency, continuity, and trust.
                        </p>
                        <div className={styles.bonusCallout}>
                            {/* <span className={styles.bonusDot}></span> */}
                            <span className={styles.bonusCalloutText}>Check the toolkit to learn how to build this alignment.</span>
                        </div>
                    </div>
                    <div className={styles.bonusRight}>
                        <div className={`${styles.bonusCardWrapper} ${styles.desktopOnly}`}>
                            <img
                                src="/assets/Bonus_flp_simple.png"
                                alt="Stewardship is a team effort"
                                className={styles.bonusCardImage}
                            />
                            <div className={styles.bonusCardTextOverlay}>
                                <h3 className={styles.bonusCardOverlayTitle}>Stewardship is a team effort</h3>
                                <p className={styles.bonusCardOverlayDesc}> A ready to use guide that helps fundraisers make the case for donor stewardship to their leadership and other team members.</p>
                               
                                <img
                                    src="/assets/bonus_flip_icon.png"
                                    alt="Bonus card icon"
                                    className={styles.bonusCardOverlayIcon}
                                />
                            </div>
                        </div>
                        <div className={`${styles.bonusCardWrapper} ${styles.mobileOnly}`}>
                            <img
                                src="/assets/mobilee_bonus_card.png"
                                alt="Stewardship is a team effort"
                                className={styles.bonusCardImage}
                            />
                            {/* <img
                                src="/assets/bonus_card_icon.png"
                                alt="Bonus card icon"
                                className={styles.bonusCardMobileIcon}
                            /> */}
                            <div className={styles.bonusCardTextOverlay}>
                                <h3 className={styles.bonusCardOverlayTitle}>Stewardship is a team effort</h3>
                                <p className={styles.bonusCardOverlayDesc}>A ready to use presentation that helps fundraisers make the case for donor stewardship to their leadership and other team members.</p>
                                <img
                                    src="/assets/bonus_flip_icon.png"
                                    alt="Bonus card icon"
                                    className={styles.bonusCardOverlayIcon}
                                />
                            </div>
                        </div>
                        <div className={styles.bonusDotsPattern}>
                            <img
                                src="/assets/bonus_background.png"
                                alt=""
                                className={`${styles.bonusDotsImage} ${styles.desktopOnly}`}
                            />
                            <img
                                src="/assets/mobile_bonus_background.png"
                                alt=""
                                className={`${styles.bonusDotsImage} ${styles.mobileOnly}`}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
);

BonusChapter.displayName = 'BonusChapter';

export default BonusChapter;
