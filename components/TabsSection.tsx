import React from 'react';
import styles from './TabsSection.module.css';

interface TabsSectionProps {
    activeChapter: number;
    onTabClick: (chapterId: number) => void;
}

const TabsSection: React.FC<TabsSectionProps> = ({ activeChapter, onTabClick }) => {
    const tabs = [
        { id: 1, svg: activeChapter === 1 ? '/assets/chapter_!_tab_open.svg' : '/assets/chapter_1_tab.svg', label: 'I. Network Expansion' },
        { id: 2, svg: activeChapter === 2 ? '/assets/chapter_2_tab_open.svg' : '/assets/chapter_2_tab.svg', label: 'II. First Donation' },
        { id: 3, svg: activeChapter === 3 ? '/assets/chapter_3_tab_open.svg' : '/assets/chapter_3_tab (2).svg', label: 'III. Stewarding Donors' },
        { id: 4, svg: activeChapter === 4 ? '/assets/chapter_4_tab_open.svg' : '/assets/chapter_4_tab.svg', label: 'IV. Donors to Champions' },
        { id: 5, svg: activeChapter === 5 ? '/assets/bonus_chapter_tab_open.svg' : '/assets/chapter_bonus_tab.svg', label: 'V. Bonus Chapter' }
    ];

    return (
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
    );
};

export default TabsSection;
