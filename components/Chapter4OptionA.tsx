import React from 'react';
import { ArrowLeft } from 'lucide-react';
import styles from './Chapter4OptionA.module.css';
import ToolkitCard from './ToolkitCard';

interface Chapter4OptionAProps {
    onBack: () => void;
    onNext?: () => void;
    embedded?: boolean;
    onToolkitDownload?: () => void;
}

export default function Chapter4OptionA({ onBack, onNext, embedded = false, onToolkitDownload }: Chapter4OptionAProps) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div className={styles.optionContentWrapper}>
            {/* Left Side Plant Decoration with Hover Effects */}
            <div 
                className={styles.leftPlantDecor}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img 
                    src="/assets/left_plant_leaves.svg"
                    alt="Plant decoration"
                    className={styles.plantImage}
                />
                {isHovered && (
                    <>
                        <img 
                            src="/assets/chapter4/hover_fly_ch4.svg"
                            alt="Flying decoration"
                            className={styles.hoverFlyDecor}
                        />
                        <img 
                            src="/assets/chapter4/hover_hollow_ch4.svg"
                            alt="Hollow decoration"
                            className={styles.hoverHollowDecor}
                        />
                        <img 
                            src="/assets/chapter4/hover_fill_circle_ch4.svg"
                            alt="Fill decoration"
                            className={styles.hoverFillDecor}
                        />
                    </>
                )}
            </div>

            {/* Sticky Header */}
            <div className={`${styles.stickyHeader} ${embedded ? styles.embeddedHeader : ''}`}>
                <button className={styles.backButton} onClick={onBack}>
                    <ArrowLeft size={16} />
                    <span>Back to scenario</span>
                </button>

                {!embedded && (
                    <div className={styles.headerContent}>
                        <h4 className={styles.headerLabel}>CHAPTER IV: DONORS TO CHAMPIONS</h4>
                        <p className={styles.headerText}>
                            When relationships are nurtured well, supporters deepen their involvement.
                            This chapter explores how donors grow into champions.
                        </p>
                    </div>
                )}


            </div>

            <div className={styles.horizontalScrollContainer}>
                <div className={styles.scrollContent}>
                    {/* Card 1 - Story Card */}
                    <div className={styles.contentCard}>
                        <img
                            src="/assets/ch4_c1.png"
                            alt="Decoration"
                            className={styles.flowerDecoration}
                        />
                        <h3 className={styles.storyTitle}>You've unlocked growth!</h3>
                        <p className={styles.storyText}>
                            Nidhi increases her contribution to ₹4,000 and shares the campaign
                            with her network. A friend donates ₹2,000 based on her recommendation.
                        </p>
                    </div>

                    {/* Grouped cards for precise 20px gap control */}
                    <div className={styles.cardsGrouping}>
                        {/* Card 2 - Three Info Divisions */}
                        <div className={styles.contentCard}>
                            {/* Decorative images moved inside Card 2 */}
                            <img src="/assets/ch4_c2.png" alt="" className={styles.floatingDecor1} />
                            {/* <img src="/assets/ch4_c3.png" alt="" className={styles.floatingDecor2} />
                            <img src="/assets/ch4_c4.png" alt="" className={styles.floatingDecor3} /> */}

                            {/* Division 1 - Main heading */}
                            <div className={styles.infoDiv1}>
                                <div className={styles.divContent1}>
                                    <span className={styles.studyLabel}>WHAT CHANGES INTERNALLY</span>
                                    <p className={styles.divText1}>
                                        Nidhi moves into a High Potential donor segment.
                                    </p>
                                </div>
                            </div>

                            {/* Division 2 */}
                            <div className={styles.infoDiv2}>
                                <p className={styles.divText2}>
                                    Her repeat donation improves retention metrics
                                </p>
                            </div>

                            {/* Division 3 */}
                            <div className={styles.infoDiv3}>
                                <p className={styles.divText3}>
                                    Network referrals expand reach without cold outreach
                                </p>
                            </div>
                        </div>

                        {/* Card 3 - Why This Works + Toolkit Intro */}
                        <div className={styles.contentCard}>
                            <img
                                src="/assets/ch4_c5.png"
                                alt=""
                                className={styles.card3Decor}
                            />

                            <div className={styles.whySection}>
                                <span className={styles.whyLabel}>WHY THIS WORKS</span>
                                <p className={styles.whyText}>
                                    Donors who feel valued don't just give more —
                                    they bring others with them.
                                </p>
                            </div>

                            <div className={styles.toolkitIntro}>

                                <p className={styles.toolkitIntroText}>
                                    We have two toolkits to help you track
                                    donor engagement and how to grow
                                    your network
                                </p>
                            </div>
                        </div>

                        {/* Toolkit Card 1 */}
                        <div className={styles.toolkitCard}>
                            <ToolkitCard
                                toolkitNumber={6}
                                title="Donor Engagement Dashboard"
                                description="A one stop shop to show you how well your organisation is retaining and engaging its everyday givers."
                                backgroundImage="/assets/toolkit6/toolkit6_background.svg"
                                designImage="/assets/toolkit6/toolkit6_design.png"
                                disableRotation={true}
                                backgroundVariant="tk6"
                                designVariant="tk6"
                                onDownload={onToolkitDownload}
                                onViewToolkit={onToolkitDownload}
                            />
                        </div>

                        <div className={styles.lastCardWrapper}>
                            {/* Toolkit Card 2 */}
                            <div className={styles.toolkitCard}>
                                <ToolkitCard
                                    toolkitNumber={7}
                                    title="Supporter-Led Fundraising"
                                    description="A powerful toolkit to grow your network by creating champions for your cause."
                                    backgroundImage="/assets/toolkit7/toolkit7_background.svg"
                                    designImage="/assets/toolkit7/toolkit7_design.png"
                                    disableRotation={true}
                                    backgroundVariant="tk7"
                                    designVariant="tk7"
                                    onDownload={onToolkitDownload}
                                    onViewToolkit={onToolkitDownload}
                                />
                            </div>

                            {/* Next Chapter Button */}
                            {onNext && (
                                <div className={styles.nextChapterCard}>
                                    <img
                                        src="/assets/next_chapter_button.svg"
                                        alt="Next chapter"
                                        className={styles.nextChapterImage}
                                        onClick={onNext}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
