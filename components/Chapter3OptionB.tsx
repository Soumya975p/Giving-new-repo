import React from 'react';
import { ArrowLeft } from 'lucide-react';
import styles from './Chapter3OptionB.module.css';
import ToolkitCard from './ToolkitCard';

interface Chapter3OptionBProps {
    onBack: () => void;
    onNext?: () => void;
    embedded?: boolean;
}

export default function Chapter3OptionB({ onBack, onNext, embedded = false }: Chapter3OptionBProps) {
    return (
        <div className={styles.optionContentWrapper}>
            {/* Sticky Header */}
            <div className={`${styles.stickyHeader} ${embedded ? styles.embeddedHeader : ''}`}>
                <button className={styles.backButton} onClick={onBack}>
                    <ArrowLeft size={16} />
                    <span>Back to scenario</span>
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
                        <div className={styles.studyBox}>
                            <span className={styles.studyLabel}>UDARTA:EG STUDY SHOWS</span>
                            <p className={styles.studyText}>
                                Sharing impact updates is
                                linked to an 11.3 percentage point
                                increase in recurring donors.
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
                        <ToolkitCard
                            toolkitNumber={2}
                            title="The Storytelling Bank"
                            description="A collection of stories to share with donors."
                            toolkiturl='https://drive.google.com/file/d/1E7BcCBWNd8wMrpZbNmjwYHjp5SXQ8wzH/view?usp=sharing'
                            backgroundImage="/assets/toolkit_base_card.svg"
                            designImage="/assets/toolkit_44.svg"
                            designVariant="tk4"
                        />
                    </div>

                    {/* Toolkit Card 2 - Segmentation & Profiling */}
                    <div className={styles.toolkitCard}>
                        <ToolkitCard
                            toolkitNumber={1}
                            title="Segmentation & Profiling"
                            toolkiturl='https://drive.google.com/file/d/1NwVk9MdQglzykCSP5_qj9RcVehPF1WIy/view?usp=sharing'
                            description="Tools to categorize and understand your donors."
                            backgroundImage="/assets/toolkit_base_card.svg"
                            designImage="/assets/toolkit_33.svg"
                            designVariant="tk3"
                        />
                    </div>

                    <div className={styles.lastCardWrapper}>
                        {/* Toolkit Card 3 - Communications Calendar */}
                        <div className={styles.toolkitCard}>
                            <ToolkitCard
                                toolkitNumber={3}
                                title="The Communications Calendar"
                                toolkiturl='https://drive.google.com/file/d/1qKrCcT-W78CKUanp8bExreUgfrbjoj9L/view?usp=sharing'
                                description="Plan your donor engagement throughout the year."
                                backgroundImage="/assets/toolkit_base_card.svg"
                                designImage="/assets/toolkit_55.svg"
                                designVariant="tk5"
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
