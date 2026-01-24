import React from 'react';
import styles from './TabsSection.module.css';

interface TabsSectionProps {
    activeChapter: number;
    onTabClick: (chapterId: number) => void;
}

const TabsSection: React.FC<TabsSectionProps> = ({ activeChapter, onTabClick }) => {
    const tabs = [
        { id: 1, svg: '/assets/chapter_1_tab.svg', label: 'I. Network Expansion' },
        { id: 2, svg: '/assets/chapter_2_tab.svg', label: 'II. First Donation' },
        { id: 3, svg: '/assets/chapter_3_tab (2).svg', label: 'III. Stewarding Donors' },
        { id: 4, svg: '/assets/chapter_4_tab.svg', label: 'IV. Donors to Champions' },
        { id: 5, svg: '/assets/chapter_bonus_tab.svg', label: 'V. Bonus Chapter' }
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
        </div>
    );
};

export default TabsSection;
