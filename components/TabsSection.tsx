import React from 'react';
import styles from './TabsSection.module.css';

interface TabsSectionProps {
    activeChapter: number;
    onTabClick: (chapterId: number) => void;
}

const TabsSection: React.FC<TabsSectionProps> = ({ activeChapter, onTabClick }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const tabs = [
        { id: 1, svg: activeChapter === 1 ? '/assets/chapter_!_tab_open.svg' : '/assets/chapter_1_tab.svg', label: 'I. Network Expansion', fullLabel: 'Chapter I : Tilling the Soil' },
        { id: 2, svg: activeChapter === 2 ? '/assets/chapter_2_tab_open.svg' : '/assets/chapter_2_tab.svg', label: 'II. First Donation', fullLabel: 'Chapter II : The Planting' },
        { id: 3, svg: activeChapter === 3 ? '/assets/chapter_3_tab_open.svg' : '/assets/chapter_3_tab (2).svg', label: 'III. Stewarding Donors', fullLabel: 'Chapter III : The Nurturing' },
        { id: 4, svg: activeChapter === 4 ? '/assets/chapter_4_tab_open.svg' : '/assets/chapter_4_tab.svg', label: 'IV. Donors to Champions', fullLabel: 'Chapter IV : Growth' },
        { id: 5, svg: activeChapter === 5 ? '/assets/bonus_chapter_tab_open.svg' : '/assets/chapter_bonus_tab.svg', label: 'V. Bonus Chapter', fullLabel: 'Chapter V : Bonus Chapter' }
    ];

    const activeTabLabel = tabs.find(t => t.id === activeChapter)?.label || 'Select a chapter';

    return (
        <>
            {/* Desktop Tabs */}
            <div className={styles.tabsContainer}>
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`${styles.tab} ${activeChapter === tab.id ? styles.activeTab : ''}`}
                        onClick={() => onTabClick(tab.id)}
                    >
                        <img
                            src={tab.svg}
                            alt={tab.label}
                            className={styles.tabImage}
                            onClick={(e) => {
                                e.stopPropagation();
                                onTabClick(tab.id);
                            }}
                        />
                        <span className={styles.tabLabel}>{tab.label}</span>
                    </div>
                ))}

                {/* INVISIBLE CLICK OVERLAY - Placed AFTER tabs to preserve :nth-child indices for CSS */}
                <div className={styles.clickOverlay}>
                    {tabs.map((tab) => (
                        <div
                            key={`click-zone-${tab.id}`}
                            className={styles.clickZone}
                            onClick={() => onTabClick(tab.id)}
                            title={tab.label}
                        />
                    ))}
                </div>
            </div>

            {/* Mobile Mobile Menu */}
            <div className={styles.mobileContainer}>
                {/* Mobile Tab Button */}
                <div className={styles.mobileTabButton} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <img src="/assets/mobile_tab.svg" alt="Mobile Tab" className={styles.mobileTabBg} />
                    <div className={styles.mobileTabContent}>
                        <span className={styles.mobileViewingText}>Viewing : </span>
                        <span className={styles.mobileActiveLabel}>{activeTabLabel.split('. ')[1]}</span>
                        <div className={styles.mobileChevron}>
                            {isMobileMenuOpen ? (
                                // Chevron Down
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            ) : (
                                // Chevron Up (default for opening upwards?) Actually design shows up arrow to open? No, design shows dropdown arrow when open. 
                                // User said "dropup opens". Let's assume Chevron Up to open, Down to close? Or standard accordion logic.
                                // Getting from image: Image shows a "Select a chapter" header with a Down arrow in a circle. And a "Viewing: Chapter I" with an Up arrow in a circle.
                                // Wait, the image shows the MENU OPEN state (white card) on the right, and the CLOSED state (dark green tab) on the left.
                                // Closed state (bottom left): "Viewing : Chapter I" with an UP arrow (blue circle).
                                // Open state (white card): "Select a chapter" with a DOWN arrow (grey circle).
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Dropup Menu */}
                {isMobileMenuOpen && (
                    <>
                        <div className={styles.mobileMenuOverlay} onClick={() => setIsMobileMenuOpen(false)} />
                        <div className={styles.mobileDropup}>
                            <div className={styles.mobileMenuHeader}>
                                <span>Select a chapter</span>
                                <div className={styles.mobileMenuClose} onClick={() => setIsMobileMenuOpen(false)}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                            </div>
                            <div className={styles.mobileMenuList}>
                                {tabs.map(tab => (
                                    <div
                                        key={tab.id}
                                        className={`${styles.mobileMenuItem} ${activeChapter === tab.id ? styles.mobileMenuItemActive : ''}`}
                                        onClick={() => {
                                            onTabClick(tab.id);
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: tab.fullLabel.replace(':', '<span style="font-weight:700">:') }} />
                                    </div>
                                ))}
                                <div className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>
                                    All Chapters
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default TabsSection;
