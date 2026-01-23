import React from 'react';
import { ArrowLeft } from 'lucide-react';
import styles from './Chapter3OptionB.module.css';

interface Chapter3OptionBProps {
    onBack: () => void;
}

export default function Chapter3OptionB({ onBack }: Chapter3OptionBProps) {
    return (
        <div className={styles.wrapper}>
            {/* Back Button */}
            <button className={styles.backButton} onClick={onBack}>
                <ArrowLeft size={16} />
                <span>Back to scenario</span>
            </button>

            {/* Header Content */}
            <div className={styles.headerSection}>
                <h4 className={styles.headerLabel}>CHAPTER III: STEWARDING DONORS</h4>
                <p className={styles.headerText}>
                    Staying connected after the first gift builds trust. This chapter focuses on
                    how consistent, non-ask engagement helps donors feel involved and valued.
                </p>
            </div>

            {/* Horizontal Scroll Container */}
            <div className={styles.horizontalScrollContainer}>
                <div className={styles.scrollContent}>
                    {/* Card 1 - Story Card with Flower */}
                    <div className={styles.contentCard}>
                        <img
                            src="/assets/flower_chapter_4.svg"
                            alt="Flower decoration"
                            className={styles.flowerDecoration}
                        />
                        <h3 className={styles.storyTitle}>You're nurturing the relationship!</h3>
                        <p className={styles.storyText}>
                            Nidhi receives a photo of the lake being de-silted
                            and understands how her contribution made a
                            difference. Over time, she joins virtual events and
                            stays engaged through regular, meaningful
                            updates.
                        </p>
                    </div>

                    {/* Card 2 - Study Box */}
                    <div className={styles.contentCard}>
                        <div className={styles.studyBox}>
                            <span className={styles.studyLabel}>UDARTA:EG STUDY SHOWS</span>
                            <p className={styles.studyText}>
                                Sharing impact updates is
                                linked to an 11.3 percentage point
                                increase in recurring donors.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 - Why This Works + Toolkit Intro */}
                    <div className={styles.contentCard}>
                        <div className={styles.yellowBar}></div>

                        <div className={styles.whySection}>
                            <span className={styles.whyLabel}>WHY THIS WORKS</span>
                            <p className={styles.whyText}>
                                Regular, non-ask touchpoints
                                help donors feel included in the
                                journey – not contacted only
                                when funds are needed.
                            </p>
                        </div>

                        <div className={styles.toolkitIntro}>
                            <div className={styles.greenCircle}></div>
                            <p className={styles.toolkitIntroText}>
                                We created three toolkits that
                                will help you identify and
                                activate people, tell better
                                stories and organise your
                                communications calendar
                            </p>
                        </div>
                    </div>

                    {/* Toolkit Card 1 - The Storytelling Bank */}
                    <div className={styles.toolkitCard}>
                        <img src="/assets/Toolkit_4.svg" alt="Card background" className={styles.toolkitBg} />
                        <img src="/assets/Toolkit_4_inner.svg" alt="Decoration" className={styles.toolkitInner} />
                        <div className={styles.toolkitOverlay}>
                            <span className={styles.toolkitLabel}>TOOLKIT #4</span>
                            <h3 className={styles.toolkitTitle}>The Storytelling Bank</h3>
                            <p className={styles.toolkitDesc}>Build trust with donors through real stories saved and sorted systematically.</p>
                            <div className={styles.toolkitButtons}>
                                <button className={styles.downloadButton}>Download ↓</button>
                                <button className={styles.viewButton}>View toolkit →</button>
                            </div>
                        </div>
                    </div>

                    {/* Toolkit Card 2 - Segmentation & Profiling */}
                    <div className={styles.toolkitCard}>
                        <img src="/assets/Toolkit_3.svg" alt="Card background" className={styles.toolkitBg} />
                        <img src="/assets/Toolkit_3_inner.svg" alt="Decoration" className={styles.toolkitInner} />
                        <div className={styles.toolkitOverlay}>
                            <span className={styles.toolkitLabel}>TOOLKIT #3</span>
                            <h3 className={styles.toolkitTitle}>Segmentation & Profiling</h3>
                            <p className={styles.toolkitDesc}>The foundation for effective donor communication.</p>
                            <div className={styles.toolkitButtons}>
                                <button className={styles.downloadButton}>Download ↓</button>
                                <button className={styles.viewButton}>View toolkit →</button>
                            </div>
                        </div>
                    </div>

                    {/* Toolkit Card 3 - Communications Calendar */}
                    <div className={styles.toolkitCard}>
                        <img src="/assets/Toolkit_5.svg" alt="Card background" className={styles.toolkitBg} />
                        <div className={styles.toolkitOverlay}>
                            <span className={styles.toolkitLabel}>TOOLKIT #5</span>
                            <h3 className={styles.toolkitTitle}>Communications Calendar</h3>
                            <p className={styles.toolkitDesc}>A simple planning tool to keep outreach consistent, deliberate and aligned with donor preferences.</p>
                            <div className={styles.toolkitButtons}>
                                <button className={styles.downloadButton}>Download ↓</button>
                                <button className={styles.viewButton}>View toolkit →</button>
                            </div>
                        </div>
                    </div>

                    {/* Next Chapter Button */}
                    <div className={styles.nextChapterCard}>
                        <button className={styles.nextChapterButton}>
                            <span>Next chapter</span>
                            <span className={styles.nextArrow}>→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
