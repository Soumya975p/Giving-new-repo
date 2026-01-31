import React from 'react';
import { ArrowLeft } from 'lucide-react';
import styles from './Chapter4OptionA.module.css';

interface Chapter4OptionAProps {
    onBack: () => void;
    onNext?: () => void;
    embedded?: boolean;
}

export default function Chapter4OptionA({ onBack, onNext, embedded = false }: Chapter4OptionAProps) {
    return (
        <div className={`${styles.wrapper} ${embedded ? styles.embedded : ''}`}>
            {/* Back Button - only show when not embedded */}
            {!embedded && (
                <button className={styles.backButton} onClick={onBack}>
                    <ArrowLeft size={16} />
                    <span>Back to scenario</span>
                </button>
            )}

            {/* Header Content - only show when not embedded */}
            {!embedded && (
                <div className={styles.headerSection}>
                    <h4 className={styles.headerLabel}>CHAPTER IV: DONORS TO CHAMPIONS</h4>
                    <p className={styles.headerText}>
                        When relationships are nurtured well, supporters deepen their involvement.
                        This chapter explores how donors grow into champions.
                    </p>
                </div>
            )}

            {/* Horizontal Scroll Container */}
            <div className={`${styles.horizontalScrollContainer} ${embedded ? styles.embeddedScroll : ''}`}>
                <div className={styles.scrollContent}>
                    {/* Card 1 - Main Content */}
                    <div className={styles.contentCard}>
                        <div className={styles.titleWrapper}>
                            <img
                                src="/assets/ch4_c1.png"
                                alt=""
                                className={styles.ch4C1}
                            />
                            <h2 className={styles.mainHeading}>You've unlocked growth!</h2>
                        </div>
                        <p className={styles.mainText}>
                            Nidhi increases her contribution to ₹4,000 and shares the campaign
                            with her network. A friend donates ₹2,000 based on her recommendation.
                        </p>
                    </div>



                    {/* Card 2 - What Changes Internally */}
                    <div className={styles.contentCard}>
                        <img src="/assets/ch4_c2.png" alt="" className={styles.ch4C2} />
                        <img src="/assets/ch4_c3.png" alt="" className={styles.ch4C3} />
                        <img src="/assets/ch4_c4.png" alt="" className={styles.ch4C4} />

                        <div className={styles.infoBlock1}>
                            <span className={styles.sectionLabel}>WHAT CHANGES INTERNALLY</span>
                            <h3 className={styles.sectionTitle}>
                                Nidhi moves into a High Potential donor segment.
                            </h3>
                        </div>
                        <div className={styles.infoBlock2}>
                            <p className={styles.infoText}>Her repeat donation improves retention metrics</p>
                        </div>
                        <div className={styles.infoBlock3}>
                            <p className={styles.infoText}>Network referrals expand reach without cold outreach</p>
                        </div>
                    </div>



                    {/* Card 3 - Why This Works */}
                    <div className={styles.contentCard}>
                        <div className={styles.whySection}>
                            <span className={styles.sectionLabel}>WHY THIS WORKS</span>
                            <h3 className={styles.sectionTitle}>
                                Donors who feel valued don't just give more they bring others with them.
                            </h3>
                            <div className={styles.toolkitPrompt}>

                                <p className={styles.toolkitPromptText}>
                                    We have two toolkits to help you track donor engagement and how to grow your network
                                </p>
                            </div>
                        </div>
                    </div>





                    {/* Next Chapter Button */}
                    {onNext && (
                        <div className={styles.nextChapterCard}>
                            <button className={styles.nextChapterButton} onClick={onNext}>
                                <span>Next Chapter</span>
                                <span className={styles.nextArrow}>→</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Decoration Images - Absolute Positioned */}
            <img src="/assets/ch4_c5.png" alt="" className={styles.ch4C5} />
            <img src="/assets/ch4_fill.png" alt="" className={styles.ch4Fill} />
            <img src="/assets/ch4_hollow.png" alt="" className={styles.ch4Hollow} />
        </div>
    );
}
