import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import styles from './OptionContent.module.css';

interface ContentCard {
    id: number;
    type: 'text' | 'stat' | 'toolkit';
    floatingText?: string | React.ReactNode;
    decorationType?: 'flower' | 'circle' | 'bar';
    title?: string;
    content?: string;
    label?: string;
    stat?: string;
    statDescription?: string;
    toolkitTitle?: string;
    toolkitDescription?: string;
    toolkitImage?: string;
    // New: support for dynamic toolkit content
    toolkitInnerImage?: string;
    toolkitLabel?: string;
    // New: support for nested stat within text card
    showStatBelow?: boolean;
    statLabel?: string;
    // New: styling flags
    transparentBackground?: boolean;
    statBoxTransparent?: boolean;
    showStatIcons?: boolean;
}

interface OptionContentProps {
    chapterTitle: string;
    chapterSubtitle: string;
    contentCards: ContentCard[];
    onBack: () => void;
    onNext?: () => void; // Optional callback for next chapter
    backgroundColor?: string;
    flowerDecorImage?: string;
    firstCardOffset?: string;
}

export default function OptionContent({
    chapterTitle,
    chapterSubtitle,
    contentCards,
    onBack,
    onNext,
    backgroundColor = 'linear-gradient(180deg, #63C76B 0%, #17BABD 100%)',
    flowerDecorImage = '/assets/chapter_1/flower_left_optionA.svg',
    firstCardOffset = '0px'
}: OptionContentProps) {
    return (
        <div className={styles.optionContentWrapper} style={{ background: backgroundColor }}>
            {/* Decorative Elements */}
            <img src="/assets/chapter_1/fly_left_optionA.svg" alt="" className={styles.butterflyDecor} />
            <img src={flowerDecorImage} alt="" className={styles.flowerDecor} />

            {/* Sticky Header */}
            <div className={styles.stickyHeader}>
                <button className={styles.backButton} onClick={onBack}>
                    <ArrowLeft size={16} />
                    <span>Back to scenario</span>
                </button>

                <div className={styles.headerContent}>
                    <h4 className={styles.headerLabel}>{chapterTitle}</h4>
                    <p className={styles.headerText}>{chapterSubtitle}</p>
                </div>

                <div className={styles.scrollToggle}>
                    <span>Scroll</span>
                    <div className={styles.toggleSwitch}>
                        <div className={styles.toggleKnob}></div>
                    </div>
                </div>
            </div>

            {/* Horizontally Scrollable Content */}
            <div className={styles.horizontalScrollContainer}>
                <div className={styles.scrollContent}>
                    {contentCards.map((card, index) => (
                        <div
                            key={card.id}
                            className={styles.contentCard}
                            style={index === 0 ? { marginTop: firstCardOffset } : {}}
                        >
                            {card.decorationType && (
                                <div className={`${styles.decoration} ${styles[card.decorationType]}`}></div>
                            )}
                            {card.floatingText && (
                                <p className={styles.floatingText}>{card.floatingText}</p>
                            )}

                            {card.type === 'text' && (
                                <>
                                    {(card.title || card.content || card.label) && (
                                        <div className={styles.textCard}>
                                            {card.title && <h3 className={styles.cardTitle}>{card.title}</h3>}
                                            {card.content && <p className={styles.cardContent}>{card.content}</p>}
                                            {card.label && (
                                                <div className={styles.infoBox}>
                                                    <span className={styles.infoLabel}>{card.label}</span>
                                                    <p className={styles.infoText}>{card.content}</p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Nested stat box below floating text */}
                                    {card.showStatBelow && (
                                        <div
                                            className={styles.statCard}
                                            style={card.statBoxTransparent ? {
                                                background: 'rgba(0,0,0,0.2)',
                                                boxShadow: 'none',
                                                backdropFilter: 'blur(10px)',
                                                padding: '24px 30px',
                                                marginTop: '20px',
                                                borderRadius: '16px'
                                            } : {}}
                                        >
                                            <span className={styles.statLabel} style={card.statBoxTransparent ? { color: '#00F0FF', letterSpacing: '1px' } : {}}>{card.statLabel}</span>
                                            {card.showStatIcons !== false && (
                                                <div className={styles.statIcons}>
                                                    {[...Array(5)].map((_, i) => (
                                                        <div key={i} className={`${styles.statIcon} ${i < 4 ? styles.active : ''}`}></div>
                                                    ))}
                                                </div>
                                            )}
                                            <h3 className={styles.statNumber}>{card.stat}</h3>
                                            <p className={styles.statDescription}>{card.statDescription}</p>
                                        </div>
                                    )}
                                </>
                            )}

                            {card.type === 'stat' && (
                                <div className={styles.statCard}>
                                    <span className={styles.statLabel}>{card.label}</span>
                                    <div className={styles.statIcons}>
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className={`${styles.statIcon} ${i < 4 ? styles.active : ''}`}></div>
                                        ))}
                                    </div>
                                    <h3 className={styles.statNumber}>{card.stat}</h3>
                                    <p className={styles.statDescription}>{card.statDescription}</p>
                                </div>
                            )}


                            {card.type === 'toolkit' && (
                                <div className={styles.toolkitCard}>
                                    <div className={styles.toolkitImageWrapper}>
                                        {card.toolkitImage && (
                                            <img src={card.toolkitImage} alt={card.toolkitTitle} className={styles.toolkitImage} />
                                        )}
                                        <div className={styles.toolkitContent}>
                                            <img
                                                src={card.toolkitInnerImage || "/assets/network_mapping.png"}
                                                alt={card.toolkitTitle || "Toolkit"}
                                                className={styles.networkImage}
                                            />
                                        </div>
                                        <div className={styles.toolkitOverlay}>
                                            <span className={styles.toolkitLabel}>{card.toolkitLabel || "TOOLKIT #1"}</span>
                                            <h3 className={styles.toolkitTitle}>{card.toolkitTitle}</h3>
                                            <p className={styles.toolkitDesc}>{card.toolkitDescription}</p>
                                            <div className={styles.toolkitButtons}>
                                                <button className={styles.downloadButton}>Download ↓</button>
                                                <button className={styles.viewButton}>View toolkit →</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}


                            {/* Decorative elements */}
                            {index < contentCards.length - 1 && (
                                <div className={styles.connector}></div>
                            )}
                        </div>
                    ))}

                    {/* Next Chapter Button */}
                    {onNext && (
                        <div className={styles.nextChapterCard}>
                            <button className={styles.nextChapterButton} onClick={onNext}>
                                <span>Next chapter</span>
                                <span className={styles.nextArrow}>→</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
