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
                    {/* Card 1 - Success Badge Card */}
                    <div className={styles.contentCard}>
                        <div className={styles.successBadge}>
                            {/* <div className={styles.badgeIcon}>✓</div> */}
                            {/* <span className={styles.badgeText}>You've unlocked growth!</span> */}
                        </div>
                        <h2 className={styles.mainHeading}>You've unlocked growth!</h2>
                        <p className={styles.mainText}>
                            Nidhi increases her contribution to ₹4,000 and shares the campaign 
                            with her network. A friend donates ₹2,000 based on her recommendation.
                        </p>
                        <img
                            src="/assets/chapter_1/fly_left_optionA.svg"
                            alt="Butterfly decoration"
                            className={styles.butterflyDecoration}
                        />
                        {/* <img
                            src="/assets/flower_chapter_4.svg"
                            alt="Flower decoration"
                            className={styles.flowerDecoration}
                        /> */}
                    </div>

                    {/* Green Stick Decoration 1 */}
                    <div className={styles.greenStickWrapper}>
                        <img
                            src="/assets/chapter_3_middlestick.svg"
                            alt=""
                            className={styles.greenStick}
                        />
                    </div>

                    {/* Card 2 - What Changes Internally */}
                    <div className={styles.contentCard}>
                        <div className={styles.infoSection}>
                            <span className={styles.sectionLabel}>WHAT CHANGES INTERNALLY</span>
                            <h3 className={styles.sectionTitle}>
                                Nidhi moves into a High Potential donor segment.
                            </h3>
                            <ul className={styles.bulletList}>
                                <li>Her repeat donation improves retention metrics</li>
                                <li>Network referrals expand reach without cold outreach</li>
                            </ul>
                        </div>
                        <img
                            src="/assets/chapter_2_column2_1.svg"
                            alt="Decoration"
                            className={styles.decorationImage}
                        />
                    </div>

                    {/* Green Stick Decoration 2 */}
                    <div className={styles.greenStickWrapper}>
                        <img
                            src="/assets/chapter_3_middlestick.svg"
                            alt=""
                            className={styles.greenStick}
                        />
                    </div>

                    {/* Card 3 - Why This Works */}
                    <div className={styles.contentCard}>
                        <div className={styles.yellowBar}></div>
                        <div className={styles.whySection}>
                            <span className={styles.sectionLabel}>WHY THIS WORKS</span>
                            <h3 className={styles.sectionTitle}>
                                Donors who feel valued don't just give more – they bring others with them.
                            </h3>
                            <div className={styles.toolkitPrompt}>
                                <span className={styles.triangleIcon}>▲</span>
                                <p className={styles.toolkitPromptText}>
                                    We have two toolkits to help you track donor engagement and how to grow your network
                                </p>
                            </div>
                        </div>
                        <img
                            src="/assets/chapter_2_column3_1.svg"
                            alt="Decoration"
                            className={styles.decorationImage}
                        />
                    </div>

                    {/* Green Stick Decoration 3 */}
                    <div className={styles.greenStickWrapper}>
                        <img
                            src="/assets/chapter_3_middlestick.svg"
                            alt=""
                            className={styles.greenStick}
                        />
                    </div>

                    {/* Toolkit Card 1 - Donor Engagement Dashboard */}
                    <div className={styles.toolkitCard}>
                        <div className={styles.toolkitImageWrapper}>
                            <img 
                                src="/assets/toolkit66.svg" 
                                alt="Toolkit" 
                                className={styles.toolkitImage}
                            />
                        </div>
                        <div className={styles.toolkitOverlay}>
                            <span className={styles.toolkitLabel}>TOOLKIT</span>
                            <h4 className={styles.toolkitTitle}>Donor Engagement Dashboard</h4>
                            <p className={styles.toolkitDesc}>
                                A one stop shop to show you how well your organisation is retaining 
                                and engaging its everyday givers.
                            </p>
                            <div className={styles.toolkitButtons}>
                                <button className={styles.downloadButton}>
                                    <span>↓</span>
                                    <span>Download</span>
                                </button>
                                <button className={styles.viewButton}>View</button>
                            </div>
                        </div>
                    </div>

                    {/* Green Stick Decoration 4 */}
                    <div className={styles.greenStickWrapper}>
                        <img
                            src="/assets/chapter_3_middlestick.svg"
                            alt=""
                            className={styles.greenStick}
                        />
                    </div>

                    {/* Toolkit Card 2 - Supporter-Led Fundraising */}
                    <div className={styles.toolkitCard}>
                        <div className={styles.toolkitImageWrapper}>
                            <img 
                                src="/assets/toolkit_77.svg" 
                                alt="Toolkit" 
                                className={styles.toolkitImage}
                            />
                        </div>
                        <div className={styles.toolkitOverlay}>
                            <span className={styles.toolkitLabel}>TOOLKIT</span>
                            <h4 className={styles.toolkitTitle}>Supporter-Led Fundraising</h4>
                            <p className={styles.toolkitDesc}>
                                A powerful toolkit to grow your network by creating champions for your cause.
                            </p>
                            <div className={styles.toolkitButtons}>
                                <button className={styles.downloadButton}>
                                    <span>↓</span>
                                    <span>Download</span>
                                </button>
                                <button className={styles.viewButton}>View</button>
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
        </div>
    );
}
