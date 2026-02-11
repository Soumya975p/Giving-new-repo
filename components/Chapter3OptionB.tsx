import React from 'react';
import { ArrowLeft } from 'lucide-react';
import styles from './Chapter3OptionB.module.css';
import ToolkitCard from './ToolkitCard';

interface Chapter3OptionBProps {
    onBack: () => void;
    onNext?: () => void;
    embedded?: boolean;
    onToolkitDownload?: (url: string) => void;
    endImage?: string;
}

export default function Chapter3OptionB({ onBack, onNext, embedded = false, onToolkitDownload, endImage }: Chapter3OptionBProps) {
    return (
        <div className={styles.optionContentWrapper}>
            {/* Sticky Header */}
            <div className={`${styles.stickyHeader} ${embedded ? styles.embeddedHeader : ''}`}>
                <button className={styles.backButton} onClick={onBack}>
                    <span><img src="/assets/bc-icon.png" alt="" /> Back to scenario</span>
                </button>


                <img src="/assets/scroll.svg" alt="scroll" className={styles.scrollImage} />

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
                    {/* Card 1 - Story Card with Flower */}
                    <div className={styles.contentCard}>
                        <img
                            src="/assets/flower_chapter_4.svg"
                            alt="Flower decoration"
                            className={styles.flowerDecor}
                        />
                        <h3 className={styles.storyTitle}>Yes! <br />You will reach the people that care about the cause. The appeal feels more personal, more trusted.!</h3>
                        <p className={styles.storyText}>
                            Nidhi receives a photo of the lake being de-silted and understands how her contribution made a difference. Over time, she joins virtual events and stays engaged through regular, meaningful updates.
                        </p>
                    </div>

                    {/* Green Stick Decoration 1 - Moved here */}
                    <div className={styles.greenStickWrapper}>
                        <img
                            src="/assets/chapter_3_middlestick.svg"
                            alt=""
                            className={styles.greenStick}
                        />
                    </div>

                    {/* Card 2 - Study Box */}
                    <div className={styles.contentCard}>
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
                        <div className={styles.studyContainer2}>
                            <span className={styles.studyLabel}>UDARTA:EG STUDY SHOWS</span>
                            <p className={styles.studyText2}>
                                Sharing impact updates is
                                linked to an 11.3 percentage point
                                increase in percentage of
                                recurring donors
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
                        {/* <div className={styles.yellowBar}></div> */}

                        <div className={styles.whySection}>
                            <span className={styles.whyLabel}>WHY THIS WORKS</span>
                            <p className={styles.whyText}>
                                Regular, non-ask touchpoints help donors feel included in the journey - not contacted only when funds are needed.
                            </p>
                        </div>

                        <div className={styles.toolkitIntro}>
                            <img
                                src="/assets/ch_3_op2_greenstickdot.svg"
                                alt="Green stick dot decoration"
                                className={styles.greenStickDot}
                            />
                            <p className={styles.toolkitIntroText}>
                                Here are three toolkits
                            </p>
                        </div>
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

                    {/* Toolkit Card 2 - Segmentation & Profiling */}

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

                        {/* End Image */}
                        {endImage && (
                            <div className={styles.endImageCard}>
                                <img
                                    src={endImage}
                                    alt="Chapter end"
                                    className={styles.endImage}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
