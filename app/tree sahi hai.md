.wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background: transparent;
    /* Seamless integration */
    overflow: hidden;
}

/* Back Button */
.backButton {
    position: absolute;
    top: 24px;
    left: 60px;
    display: flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: none;
    color: #1a4d3a;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 8px 0;
    transition: opacity 0.2s;
    z-index: 100;
}

.backButton:hover {
    opacity: 0.7;
}

/* Header Section */
.headerSection {
    padding: 80px 60px 40px;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
}

.headerLabel {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #1a4d3a;
    margin: 0 0 12px 0;
    text-transform: uppercase;
}

.headerText {
    font-size: 16px;
    line-height: 1.6;
    color: #1a4d3a;
    margin: 0;
}

.toggleSwitch {
    width: 48px;
    height: 24px;
    background: rgba(26, 77, 58, 0.2);
    border-radius: 12px;
    position: relative;
    cursor: pointer;
    transition: background 0.3s;
}

.toggleKnob {
    width: 20px;
    height: 20px;
    background: #1a4d3a;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    right: 2px;
    transition: transform 0.3s;
}

/* Horizontal Scroll Container */
.horizontalScrollContainer {
    position: absolute;
    top: 160px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 30px 60px;
    /* Reduced horizontal padding to 30px */
}

/* ... existing scrollbar styles ... */

.horizontalScrollContainer::-webkit-scrollbar {
    height: 8px;
}

.horizontalScrollContainer::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.horizontalScrollContainer::-webkit-scrollbar-thumb {
    background: rgba(26, 77, 58, 0.3);
    border-radius: 4px;
}

.scrollContent {
    display: flex;
    gap: 30px;
    /* Reduced from 40px */
    height: 100%;
    align-items: flex-start;
    padding-top: 40px;
}

/* Content Cards */
.contentCard {
    min-width: 420px;
    max-width: 420px;
    padding: 36px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-height: 300px;
}

/* Flower Decoration */
.flowerDecoration {
    position: absolute;
    top: -25px;
    left: -57px;
    width: 90px;
    height: 600px;
    z-index: 10;
}

/* Yellow Bar Decoration */
.yellowBar {
    width: 60px;
    height: 6px;
    background: #FFEF3D;
    border-radius: 3px;
    position: absolute;
    top: 28px;
    right: 32px;
}

/* Green Circle Decoration */
.greenCircle {
    width: 32px;
    height: 32px;
    background: #86A401;
    border-radius: 50%;
    position: absolute;
    top: -8px;
    left: -8px;
}

/* Green Stick Decoration */
.greenStickWrapper {
    min-width: 80px;
    max-width: 80px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 0;
    flex-shrink: 0;
}

.greenStick {
    width: auto;
    height: 400px;
    object-fit: contain;
}

/* Story Text */
.storyTitle {
    font-family: 'DM Sans', sans-serif;
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    color: #1a4d3a;
    line-height: 120%;
    letter-spacing: -0.04em;
    margin: 0 0 8px 0;
}

.storyText {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: #1a4d3a;
    margin: 0;
}

/* Study Box */
.studyBox {
    background: #FFFFFF33;
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
}

.studyLabel {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    font-style: normal;
    line-height: 140%;
    letter-spacing: 0.1em;
    color: #1a4d3a;
    text-transform: uppercase;
}

.studyText {
    font-family: 'DM Sans', sans-serif;
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    line-height: 120%;
    letter-spacing: -0.04em;
    color: #1a4d3a;
    margin: 0;
}

/* Why Section */
.whySection {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
}

.whyLabel {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    color: #1a4d3a;
    text-transform: uppercase;
}

.whyText {
    font-family: 'DM Sans', sans-serif;
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    line-height: 120%;
    letter-spacing: -0.04em;
    color: #1a4d3a;
    margin: 0;
}

/* Toolkit Intro */
.toolkitIntro {
    position: relative;
    padding: 20px;
}

.toolkitIntroText {
    font-family: 'DM Sans', sans-serif;
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    line-height: 120%;
    letter-spacing: -0.04em;
    color: #1a4d3a;
    margin: 0;
}

/* Toolkit Cards */
.toolkitCard {
    min-width: 400px;
    max-width: 400px;
    height: 520px;
    position: relative;
    border-radius: 24px;
    overflow: visible;
    flex-shrink: 0;
}

.toolkitBg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 24px;
}

.toolkitInner {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    height: auto;
    max-width: 85%;
    pointer-events: none;
    z-index: 1;
}

.toolkitOverlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 32px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 70%, transparent 100%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 2;
    border-radius: 0 0 24px 24px;
}

.toolkitLabel {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #FFEF3D;
    text-transform: uppercase;
}

.toolkitTitle {
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    line-height: 1.2;
}

.toolkitDesc {
    font-size: 15px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
}

.toolkitButtons {
    display: flex;
    gap: 16px;
    margin-top: 16px;
}

.downloadButton,
.viewButton {
    padding: 12px 24px;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
}

.downloadButton {
    background: #ffffff;
    color: #1a4d3a;
}

.downloadButton:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
}

.viewButton {
    background: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;
}

.viewButton:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

/* Next Chapter Card */
.nextChapterCard {
    min-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
}

.nextChapterButton {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 40px;
    background: rgba(26, 77, 58, 0.9);
    color: #ffffff;
    border: none;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.nextChapterButton:hover {
    background: #1a4d3a;
    transform: translateX(5px);
}

.nextArrow {
    font-size: 24px;
    transition: transform 0.3s;
}

.nextChapterButton:hover .nextArrow {
    transform: translateX(5px);
}





import React from 'react';
import { ArrowLeft } from 'lucide-react';
import styles from './Chapter3OptionB.module.css';

interface Chapter3OptionBProps {
    onBack: () => void;
    embedded?: boolean;
}

export default function Chapter3OptionB({ onBack, embedded = false }: Chapter3OptionBProps) {
    return (
        <div className={styles.wrapper}>
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
                    <h4 className={styles.headerLabel}>CHAPTER III: STEWARDING DONORS</h4>
                    <p className={styles.headerText}>
                        Staying connected after the first gift builds trust. This chapter focuses on
                        how consistent, non-ask engagement helps donors feel involved and valued.
                    </p>
                </div>
            )}

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
