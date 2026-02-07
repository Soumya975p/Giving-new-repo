import React from 'react';
import { ArrowLeft } from 'lucide-react';
import styles from './Chapter3OptionA.module.css';
import ToolkitCard from './ToolkitCard';

interface Chapter3OptionAProps {
    onBack: () => void;
    onNext?: () => void;
    embedded?: boolean;
    onToolkitDownload?: (url: string) => void;
}

export default function Chapter3OptionA({ onBack, onNext, embedded = false, onToolkitDownload }: Chapter3OptionAProps) {
    return (
        <div className={styles.optionContentWrapper}>
            {/* Sticky Header */}
            <div className={`${styles.stickyHeader} ${embedded ? styles.embeddedHeader : ''}`}>
                <button className={styles.backButton} onClick={onBack}>
                    <span><img src="/assets/bc-icon.png" alt="" /> Back to scenario</span>
                </button>

                {!embedded && (
                    <div className={styles.headerContent}>
                        <h4 className={styles.headerLabel}>CHAPTER III: STEWARDING DONORS</h4>
                        <p className={styles.headerText}>
                            Staying connected after the first gift builds trust. This chapter focuses on
                            how consistent, non-ask engagement helps donors feel involved and valued.
                        </p>
                    </div>
                )}
            </div>

            {/* Horizontal Scroll Container */}
            <div className={`${styles.horizontalScrollContainer} ${embedded ? styles.embeddedScroll : ''}`}>
                <div className={styles.scrollContent}>
                    {/* Card 1 - Problem Statement with Box */}
                    <div className={styles.contentCard}>
                        <img
                            src="/assets/chapter_1/flower_left_optionA.svg"
                            alt="Flower decoration"
                            className={styles.flowerDecor}
                        />
                        <img
                            src="/assets/chapter_1/mob-flower_left_optionA.png"
                            alt="Flower decoration mobile"
                            className={styles.flowerDecorMobile}
                        />
                        <img
                            src="/assets/chapter_1/fly_left_optionA.svg"
                            alt="Fly decoration"
                            className={styles.flyDecor}
                        />
                        <img
                            src="/assets/chapter_1/hover_left_flower_leftmost_ch1.svg"
                            alt="Hover flower decoration"
                            className={styles.hoverFlowerDecor}
                        />
                        <p className={styles.problemText}>
                            You may reach many people, but the response may not be strong because they may not feel personally connected to the cause or your organisation. Most donations are small, one-time and disconnected.
                        </p>
                        <div className={styles.didYouKnowSection}>
                            <span className={styles.didYouKnowLabel}>DID YOU KNOW?</span>
                            <p className={styles.didYouKnowText}>
                                <span className={styles.didYouKnowHighlight}>It costs 10x more</span>
                                <br />
                                <span className={styles.didYouKnowSubtext}>To acquire a new donor than continuing a relationship with someone who already believes in our work.</span>
                            </p>
                        </div>
                    </div>

                    {/* Green Stick Decoration 1 - Moved here */}
                    <div className={styles.greenStickWrapper}>
                        <img
                            src="/assets/chapter_2_column2_1.svg"
                            alt=""
                            className={styles.card2design}
                        />
                    </div>

                    {/* Card 2 - Solution Text with Study Boxes */}
                    <div className={styles.contentCard}>
                        <div className={styles.solutionTextSection}>
                            <p className={styles.solutionText}>
                                Instead tap into your existing supporters – they are your best ambassadors. They've already shown trust in you and can authentically share your impact with people who share similar values.
                            </p>
                        </div>
                        <div className={styles.studyContainer1}>
                            <span className={styles.studyLabel}>UDARTA:EG STUDY SHOWS</span>
                            <img
                                src="/assets/ch3_op3_icon.svg"
                                alt="Study indicators"
                                className={styles.studyIcon}
                            />
                            <p className={styles.studyText1}>
                                60% of nonprofits
                            </p>
                            <p className={styles.studySubtext1}>
                                find outreach through existing networks to
                                be their most effective way of reaching new
                                supporters
                            </p>
                        </div>
                    </div>

                    {/* Green Stick Decoration 2 - Moved here */}
                    <div className={styles.greenStickWrapper}>
                        <img
                            src="/assets/chapter_3_middlestick.svg"
                            alt=""
                            className={styles.greenStick}
                        />
                    </div>

                    {/* Card 3 - Why This Works + Toolkit Intro */}
                    <div className={styles.contentCard}>
                            <p className={styles.whyText}>
                                Here is a toolkit to guide you and your team through a simple, effective and proven network mapping exercise.
                            </p>

                        {/*  */}
                    </div>

                    <div className={styles.toolkitCard}>
                        <ToolkitCard
                            toolkitNumber={3}
                            title="Segmentation & Profiling"
                            toolkiturl='https://docs.google.com/spreadsheets/d/1pVwzkSRwiibOMbvlyN9fHeReSVzq4wHB/edit?usp=sharing&ouid=114110917274284408501&rtpof=true&sd=true'
                            description="Tools to categorize and understand your donors."
                            backgroundImage="/assets/toolkit3_background.svg"
                            designImage="/assets/toolkit3_design.png"
                            designVariant="tk3"
                            onViewToolkit={() => onToolkitDownload?.('https://docs.google.com/spreadsheets/d/1pVwzkSRwiibOMbvlyN9fHeReSVzq4wHB/edit?usp=sharing&ouid=114110917274284408501&rtpof=true&sd=true')}
                        />
                    </div>

                    {/* Toolkit Card 1 - The Storytelling Bank */}
                    <div className={styles.toolkitCard}>
                        <ToolkitCard
                            toolkitNumber={4}
                            title="The Storytelling Bank"
                            description="A collection of stories to share with donors."
                            toolkiturl='https://docs.google.com/spreadsheets/d/1ZTATFrOS2l36KOk8FWKtQOvOnWRPizl4rb956zgj7tA/edit?usp=sharing'
                            backgroundImage="/assets/toolkit4_background.svg"
                            designImage="/assets/toolkit4_design.png"
                            designVariant="tk4"
                            onViewToolkit={() => onToolkitDownload?.('https://docs.google.com/spreadsheets/d/1ZTATFrOS2l36KOk8FWKtQOvOnWRPizl4rb956zgj7tA/edit?usp=sharing')}
                        />
                    </div>

                    <div className={styles.lastCardWrapper}>
                        {/* Toolkit Card 3 - Communications Calendar */}
                        <div className={styles.toolkitCard}>
                            <ToolkitCard
                                toolkitNumber={5}
                                title="The Communications Calendar"
                                toolkiturl='https://docs.google.com/spreadsheets/d/1mJU8N9rpZNs1dXz4O8HZNNeBxbTnxV-aIRGIjAVrvDc/edit?usp=sharing'
                                description="Plan your donor engagement throughout the year."
                                backgroundImage="/assets/toolkit5_background.svg"
                                designImage="/assets/toolkit5_design.png"
                                designVariant="tk5"
                                onViewToolkit={() => onToolkitDownload?.('https://docs.google.com/spreadsheets/d/1mJU8N9rpZNs1dXz4O8HZNNeBxbTnxV-aIRGIjAVrvDc/edit?usp=sharing')}
                            />
                        </div>

                        {/* Next Chapter Button */}
                        <div className={styles.nextChapterCard}>
                            {onNext && (
                                <img
                                    src="/assets/next_chapter_button.svg"
                                    alt="Next chapter"
                                    className={styles.nextChapterImage}
                                    onClick={onNext}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
