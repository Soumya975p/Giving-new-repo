'use client';

import { forwardRef, useState, useEffect } from 'react';
import styles from './BonusChapter.module.css';
import ToolkitCard from './ToolkitCard';

interface BonusChapterProps {
    className?: string;
    onToolkitClick?: (url: string) => void;
}

const BonusChapter = forwardRef<HTMLDivElement, BonusChapterProps>(
    ({ className, onToolkitClick }, ref) => {
        const [isMobileCardFlipped, setIsMobileCardFlipped] = useState(false);
        const [isCardFlipped, setIsCardFlipped] = useState(false);
        const [isCardHovered, setIsCardHovered] = useState(false);

        const handleMobileClick = () => {
            setIsMobileCardFlipped(!isMobileCardFlipped);
        };

        const handleToolkitViewClick = (url: string) => {
            // Call the parent callback
            onToolkitClick?.(url);
        };

        // Scroll listener for card flip animation
        useEffect(() => {
            const handleScroll = () => {
                if (typeof ref === 'object' && ref?.current) {
                    const section = ref.current;
                    const rect = section.getBoundingClientRect();
                    const sectionTop = rect.top;
                    const windowHeight = window.innerHeight;

                    // Calculate how much the section has been scrolled into view
                    const scrolledIntoView = windowHeight - sectionTop;

                    // Flip card when scrolled 20px into the section
                    if (scrolledIntoView >= 20 && !isCardFlipped) {
                        setIsCardFlipped(true);
                    }
                }
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check initial state

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [ref, isCardFlipped]);

        return (
            <section
                className={`${styles.bonusSection} ${className || ''}`}
                ref={ref}
            >
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
                            As supporters move across stages, effective coordination between
                            programme, communications, and fundraising teams ensures consistency,, and trust.
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
                        {/* Desktop - Flip between stewardship card and toolkit */}
                        <div
                            className={`${styles.bonusCardWrapper} ${styles.desktopOnly} ${(isCardFlipped || isCardHovered) ? styles.cardHovered : ''}`}
                            onMouseEnter={() => setIsCardHovered(true)}
                            onMouseLeave={() => setIsCardHovered(false)}
                        >
                            <div className={`${styles.cardInner} ${(isCardFlipped || isCardHovered) ? styles.isFlipped : ''}`}>
                                {/* Stewardship Card - Front */}
                                <div className={styles.cardFront}>
                                    <div className={styles.originalCard}>
                                        <img
                                            src="/assets/bonus_flp_simple.png"
                                            alt="Stewardship is a team effort"
                                            className={styles.bonusCardImage}
                                        />
                                        <div className={styles.bonusCardTextOverlay}>
                                            <h3 className={styles.bonusCardOverlayTitle}>Stewardship is a team effort</h3>
                                            <p className={styles.bonusCardOverlayDesc}>A ready to use guide that helps fundraisers make the case for donor stewardship to their leadership and other team members.</p>

                                            <img
                                                src="/assets/bonus_flip_icon.png"
                                                alt="Bonus card icon"
                                                className={styles.bonusCardOverlayIcon}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Toolkit 8 - Back */}
                                <div className={styles.cardBack}>
                                    <div className={styles.toolkitCardContainer}>
                                        <ToolkitCard
                                            toolkitNumber={8}
                                            title="Getting Your Team On Board"
                                            description="A ready to use presentation that helps fundraisers make the case for donor stewardship to their leadership and other team members."
                                            toolkiturl="https://drive.google.com/file/d/1B6SFVhbtK44nZJFKqD_8v4udsCscReza/view?usp=sharing"
                                            backgroundImage="/assets/toolkit-8-img1.png"
                                            designImage="/assets/toolkit-8-img2.png"
                                            designVariant="tk8"
                                            backgroundVariant="tk8"
                                            disableRotation={true}
                                            onViewToolkit={() => handleToolkitViewClick('https://drive.google.com/file/d/1B6SFVhbtK44nZJFKqD_8v4udsCscReza/view?usp=sharing')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile card with flip */}
                        <div
                            className={`${styles.bonusCardWrapper} ${styles.mobileOnly}`}
                            onClick={handleMobileClick}
                        >
                            <div className={`${styles.cardInner} ${isMobileCardFlipped ? styles.isFlipped : ''}`}>
                                {/* Original Card - Mobile - Front */}
                                <div className={styles.cardFront}>
                                    <div className={styles.originalCard}>
                                        <img
                                            src="/assets/mobilee_bonus_card.png"
                                            alt="Stewardship is a team effort"
                                            className={styles.bonusCardImage}
                                        />
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
                                </div>

                                {/* Toolkit Card - Mobile - Back */}
                                <div className={styles.cardBack}>
                                    <div className={styles.toolkitCardContainer}>
                                        <ToolkitCard
                                            toolkitNumber={8}
                                            title="Getting Your Team On Board"
                                            description="A ready to use presentation that helps fundraisers make the case for donor stewardship to their leadership and other team members."
                                            toolkiturl="https://drive.google.com/file/d/1B6SFVhbtK44nZJFKqD_8v4udsCscReza/view?usp=sharing"
                                            backgroundImage="/assets/toolkit-8-img1.png"
                                            designImage="/assets/toolkit-8-img2.png"
                                            designVariant="tk8"
                                            backgroundVariant="tk8"
                                            disableRotation={true}
                                            onViewToolkit={() => handleToolkitViewClick('https://drive.google.com/file/d/1B6SFVhbtK44nZJFKqD_8v4udsCscReza/view?usp=sharing')}
                                        />
                                    </div>
                                </div>
                            </div>
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
            </section>
        );
    }
);

BonusChapter.displayName = 'BonusChapter';

export default BonusChapter;
