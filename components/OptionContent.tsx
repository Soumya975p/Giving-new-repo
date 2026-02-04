import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import styles from './OptionContent.module.css';
import ToolkitCard from './ToolkitCard';

interface ContentCard {
    id: number;
    type: 'text' | 'stat' | 'toolkit';
    floatingText?: string | React.ReactNode;
    floatingTextLabel?: string;
    decorationType?: 'flower' | 'circle' | 'bar';
    decorationImage?: string;
    decorationImages?: string[]; // New: support for multiple decorations per card
    title?: string | React.ReactNode;
    content?: string | React.ReactNode;
    label?: string;
    stat?: string;
    statDescription?: string | React.ReactNode;
    toolkitTitle?: string;
    toolkitDescription?: string;
    toolkitImage?: string;
    // New: support for dynamic toolkit content
    toolkitInnerImage?: string;
    toolkitLabel?: string;
    toolkitNumber?: number;
    toolkitURL?: string;
    toolkitBackgroundImage?: string;
    toolkitDesignImage?: string;
    toolkitDisableRotation?: boolean;
    toolkitDesignVariant?: 'ch2' | 'tk3' | 'tk4' | 'tk5' | 'tk6' | 'tk7';
    toolkitBackgroundVariant?: 'tk345' | 'tk6' | 'tk7';
    onToolkitDownload?: () => void;
    onToolkitView?: () => void;
    // New: support for nested stat within text card
    showStatBelow?: boolean;
    statLabel?: string;
    // New: styling flags
    transparentBackground?: boolean;
    statBoxTransparent?: boolean;
    showStatIcons?: boolean;
    statIconImage?: string;
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
    embedded?: boolean;
    customStyles?: any;
    endImage?: string;
    optionId?: string;
    onToolkitDownload?: () => void; // Callback when toolkit download button is clicked
}

export default function OptionContent({
    chapterTitle,
    chapterSubtitle,
    contentCards,
    onBack,
    onNext,
    backgroundColor = 'linear-gradient(180deg, #63C76B 0%, #17BABD 100%)',
    // flowerDecorImage = '/assets/chapter_1/flower_left_optionA.svg',
    firstCardOffset = '0px',
    embedded = false,
    customStyles,
    endImage,
    optionId,
    onToolkitDownload
}: OptionContentProps) {
    const s = customStyles || styles;

    return (
        <div className={`${s.optionContentWrapper} ${embedded ? s.embedded : ''} ${optionId ? s[optionId] : ''}`} style={{ background: backgroundColor }}>
            {/* Decorative Elements */}
            <img src="/assets/chapter_1/fly_left_optionA.svg" alt="" className={s.butterflyDecor} />
            {/* <img src={flowerDecorImage} alt="" className={s.flowerDecor} /> */}

            {/* Sticky Header */}
            <div className={`${s.stickyHeader} ${embedded ? s.embeddedHeader : ''}`}>
                <button className={s.backButton} onClick={onBack}>
                    <ArrowLeft size={16} />
                    <span>Back to chapters</span>
                </button>

                {!embedded && (
                    <div className={s.headerContent}>
                        <h4 className={s.headerLabel}>{chapterTitle}</h4>
                        <p className={s.headerText}>{chapterSubtitle}</p>
                    </div>
                )}


            </div>

            {/* Horizontally Scrollable Content */}
            <div className={s.horizontalScrollContainer}>
                <div className={s.scrollContent}>
                    {contentCards.map((card, index) => {
                        // Determine if this is the last card and we have a next action
                        const isLastCard = index === contentCards.length - 1;
                        const showNextButtonWithCard = isLastCard && onNext;

                        // specialized rendering for toolkit cards using ToolkitCard component
                        let cardContent;
                        if (card.type === 'toolkit') {
                            // Use new ToolkitCard component if background and design images are provided
                            if (card.toolkitBackgroundImage && card.toolkitDesignImage) {
                                cardContent = (
                                    <div key={card.id} className={`${s.toolkitCard} ${s[`toolkit-${card.id}`]}`}>
                                        <ToolkitCard
                                            toolkitNumber={card.toolkitNumber || 1}
                                            title={card.toolkitTitle || 'Toolkit'}
                                            description={card.toolkitDescription || ''}
                                            toolkiturl={card.toolkitURL || ''}
                                            backgroundImage={card.toolkitBackgroundImage}
                                            designImage={card.toolkitDesignImage}
                                            onDownload={card.onToolkitDownload}
                                            onViewToolkit={card.onToolkitView}
                                            disableRotation={card.toolkitDisableRotation}
                                            designVariant={card.toolkitDesignVariant}
                                            backgroundVariant={card.toolkitBackgroundVariant}
                                        />
                                    </div>
                                );
                            } else {
                                // Fallback to old toolkit image rendering
                                cardContent = (
                                    <div key={card.id} className={`${s.toolkitCard} ${s[`toolkit-${card.id}`]}`}>
                                        {card.toolkitImage && (
                                            <img src={card.toolkitImage} alt={card.toolkitTitle || "Toolkit"} className={s.toolkitImage} />
                                        )}
                                    </div>
                                );
                            }
                        } else {
                            // Regular content card rendering
                            cardContent = (
                                <div
                                    key={card.id}
                                    className={s.contentCard}
                                    style={index === 0 ? { marginTop: firstCardOffset } : {}}
                                >
                                    {card.decorationImages ? (
                                        card.decorationImages.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt=""
                                                className={`${s.decorationImage} ${s[`decor-${card.id}-${i}`]}`}
                                            />
                                        ))
                                    ) : card.decorationImage ? (
                                        <img src={card.decorationImage} alt="" className={s.decorationImage} />
                                    ) : card.decorationType ? (
                                        <div className={`${s.decoration} ${s[card.decorationType]}`}></div>
                                    ) : null}

                                    {card.floatingText && (
                                        <div className={s.floatingTextContainer}>
                                            {card.floatingTextLabel && <span className={s.floatingTextLabel}>{card.floatingTextLabel}</span>}
                                            <p className={s.floatingText}>{card.floatingText}</p>
                                        </div>
                                    )}

                                    {card.type === 'text' && (
                                        <>
                                            {(card.title || card.content || card.label) && (
                                                <div
                                                    className={s.textCard}
                                                    style={card.transparentBackground ? {
                                                        background: 'transparent',
                                                        boxShadow: 'none',
                                                        border: 'none',
                                                        padding: 0
                                                    } : {}}
                                                >
                                                    {card.title && <h3 className={s.cardTitle}>{card.title}</h3>}
                                                    {card.content && <p className={s.cardContent}>{card.content}</p>}
                                                    {card.label && (
                                                        <div className={s.infoBox}>
                                                            <span className={s.infoLabel}>{card.label}</span>
                                                            <p className={s.infoText}>{card.content}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

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
                                                    <span className={s.statLabel} style={card.statBoxTransparent ? { color: '#00F0FF', letterSpacing: '1px' } : {}}>{card.statLabel}</span>
                                                    {card.showStatIcons !== false && (
                                                        <img
                                                            src={card.statIconImage || "/assets/stat_icons.svg"}
                                                            alt="Stat icons"
                                                            className={s.statIconsImage}
                                                        />
                                                    )}
                                                    <h3 className={s.statNumber}>{card.stat}</h3>
                                                    <p className={s.statDescription}>{card.statDescription}</p>
                                                </div>
                                            )}
                                        </>
                                    )}

                                    {card.type === 'stat' && (
                                        <div className={s.statCard}>
                                            <span className={s.statLabel}>{card.label}</span>
                                            <div className={s.statIcons}>
                                                {[...Array(5)].map((_, i) => (
                                                    <div key={i} className={`${s.statIcon} ${i < 4 ? s.active : ''}`}></div>
                                                ))}
                                            </div>
                                            <h3 className={s.statNumber}>{card.stat}</h3>
                                            <p className={s.statDescription}>{card.statDescription}</p>
                                        </div>
                                    )}

                                    {/* Decorative elements */}
                                    {index < contentCards.length - 1 && (
                                        <div className={s.connector}></div>
                                    )}
                                </div>
                            );
                        }

                        if (showNextButtonWithCard) {
                            return (
                                <div key={`wrapper-${card.id}`} className={s.lastCardWrapper}>
                                    {cardContent}
                                    <div className={s.nextChapterCard}>
                                        <img
                                            src="/assets/next_chapter_button.svg"
                                            alt="Next chapter"
                                            className={s.nextChapterImage}
                                            onClick={onNext}
                                        />
                                    </div>
                                </div>
                            );
                        }

                        return cardContent;
                    })}

                    {/* End Image */}
                    {endImage && (
                        <div className={s.endImageCard}>
                            <img
                                src={endImage}
                                alt="Chapter end"
                                className={s.endImage}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
