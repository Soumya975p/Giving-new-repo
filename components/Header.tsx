'use client';

import { useState, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

interface HeaderProps {
  activeChapter?: number;
  setActiveChapter?: (chapter: number) => void;
  chaptersSectionRef?: React.RefObject<HTMLDivElement>;
  bonusSectionRef?: React.RefObject<HTMLDivElement>;
  heroSectionRef?: React.RefObject<HTMLDivElement>;
  exploreSectionRef?: React.RefObject<HTMLDivElement>;
}

export default function Header({
  activeChapter = 1,
  setActiveChapter = () => { },
  chaptersSectionRef,
  bonusSectionRef,
  heroSectionRef,
  exploreSectionRef,
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFundraisingExpanded, setIsFundraisingExpanded] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  const isFieldGuidePage = pathname === '/field-guide';

  return (
    <>
      {/* Global Sticky Header Right */}
      <div className={styles.headerRight}>
        <img
          src={isMenuOpen ? '/assets/menu_open.svg' : '/assets/menu.svg'}
          alt="Menu"
          className={`${styles.menuSvg} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Hero Header */}
      <header className={styles.heroHeader}>
        <div className={styles.logoArea}>
          <img
            src="/assets/logo_name.svg"
            alt="Giving Together Foundation"
            className={styles.logoImage}
          />
          <img
            src="/assets/logo_mobile.svg"
            alt="Giving Together Foundation"
            className={styles.logoImageMobile}
          />
        </div>
      </header>

      {/* Menu Overlay - Placed at root level for proper z-index stacking */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.menuOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              className={styles.menuContent}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.menuBody}>
                <div className={styles.menuLeft}>
                  <div className={styles.menuSection}>
                    <button
                      className={`${styles.menuSectionTitle} ${isFieldGuidePage ? styles.active : ''}`}
                      onClick={() => {
                        window.location.href = 'http://localhost:3001/field-guide';
                      }}
                    >
                      {isFieldGuidePage && <span className={styles.bullet}>◆</span>}
                      <span>Introduction</span>
                    </button>
                  </div>

                  <div className={styles.menuSection}>
                    <button
                      className={`${styles.menuSectionTitle} ${styles.withBullet}`}
                      onClick={() => {
                        setIsFundraisingExpanded(!isFundraisingExpanded);
                        setActiveChapter(1); // Reset to first chapter
                        chaptersSectionRef?.current?.scrollIntoView({
                          behavior: 'smooth',
                        });
                        setIsMenuOpen(false);
                      }}
                    >
                      <span className={styles.bullet}>◆</span>
                      <span>Fundraising</span>
                    </button>
                  </div>

                  <div className={styles.menuSection}>
                    <button
                      className={styles.menuSectionTitle}
                      onClick={() => {
                        exploreSectionRef?.current?.scrollIntoView({
                          behavior: 'smooth',
                        });
                        setIsMenuOpen(false);
                      }}
                    >
                      Volunteer Engagement
                    </button>
                  </div>
                </div>

                <div className={styles.menuRight}>
                  <div className={styles.chaptersList}>
                    {/* Chapter 1 */}
                    <div className={styles.chapterItem}>
                      <button
                        className={styles.chapterButton}
                        onClick={() => {
                          setActiveChapter(1);
                          chaptersSectionRef?.current?.scrollIntoView({
                            behavior: 'smooth',
                          });
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className={styles.chapterInfo}>
                          <div className={styles.chapterLabel}>
                            CH. I : TILLING THE SOIL
                          </div>
                          <div className={styles.chapterTitle}>
                            Network Expansion
                          </div>
                        </div>
                        <button
                          className={styles.chapterExpand}
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedChapter(
                              expandedChapter === 1 ? null : 1
                            );
                          }}
                        >
                          {expandedChapter === 1 ? '−' : '+'}
                        </button>
                      </button>
                      {expandedChapter === 1 && (
                        <div className={styles.chapterExpandedContent}>
                          <a href="#" className={styles.chapterSubItem}>
                            Network Mapping
                          </a>
                          <a href="#" className={styles.chapterSubItem}>
                            Stakeholder Analysis
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Chapter 2 */}
                    <div className={styles.chapterItem}>
                      <button
                        className={styles.chapterButton}
                        onClick={() => {
                          setActiveChapter(2);
                          chaptersSectionRef?.current?.scrollIntoView({
                            behavior: 'smooth',
                          });
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className={styles.chapterInfo}>
                          <div className={styles.chapterLabel}>
                            CH. II : THE PLANTING
                          </div>
                          <div className={styles.chapterTitle}>
                            First Donation
                          </div>
                        </div>
                        <button
                          className={styles.chapterExpand}
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedChapter(
                              expandedChapter === 2 ? null : 2
                            );
                          }}
                        >
                          {expandedChapter === 2 ? '−' : '+'}
                        </button>
                      </button>
                      {expandedChapter === 2 && (
                        <div className={styles.chapterExpandedContent}>
                          <a href="#" className={styles.chapterSubItem}>
                            First Contact Template
                          </a>
                          <a href="#" className={styles.chapterSubItem}>
                            Donation Receipt
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Chapter 3 */}
                    <div className={styles.chapterItem}>
                      <button
                        className={styles.chapterButton}
                        onClick={() => {
                          setActiveChapter(3);
                          chaptersSectionRef?.current?.scrollIntoView({
                            behavior: 'smooth',
                          });
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className={styles.chapterInfo}>
                          <div className={styles.chapterLabel}>
                            CHAPTER III: THE NURTURING
                          </div>
                          <div className={styles.chapterTitle}>
                            Stewarding Donors
                          </div>
                        </div>
                        <button
                          className={styles.chapterExpand}
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedChapter(
                              expandedChapter === 3 ? null : 3
                            );
                          }}
                        >
                          {expandedChapter === 3 ? '−' : '+'}
                        </button>
                      </button>
                      {expandedChapter === 3 && (
                        <div className={styles.chapterExpandedContent}>
                          <a href="#" className={styles.chapterSubItem}>
                            Segmentation & Profiling
                          </a>
                          <a href="#" className={styles.chapterSubItem}>
                            The Storytelling Bank
                          </a>
                          <a href="#" className={styles.chapterSubItem}>
                            The Communications Calendar
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Chapter 4 */}
                    <div className={styles.chapterItem}>
                      <button
                        className={styles.chapterButton}
                        onClick={() => {
                          setActiveChapter(4);
                          chaptersSectionRef?.current?.scrollIntoView({
                            behavior: 'smooth',
                          });
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className={styles.chapterInfo}>
                          <div className={styles.chapterLabel}>
                            CHAPTER IV: GROWTH
                          </div>
                          <div className={styles.chapterTitle}>
                            Donors to Champions
                          </div>
                        </div>
                        <button
                          className={styles.chapterExpand}
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedChapter(
                              expandedChapter === 4 ? null : 4
                            );
                          }}
                        >
                          {expandedChapter === 4 ? '−' : '+'}
                        </button>
                      </button>
                      {expandedChapter === 4 && (
                        <div className={styles.chapterExpandedContent}>
                          <a href="#" className={styles.chapterSubItem}>
                            Champion Engagement Plan
                          </a>
                          <a href="#" className={styles.chapterSubItem}>
                            Recognition Strategy
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Chapter 5 - Bonus */}
                    <div className={styles.chapterItem}>
                      <button
                        className={styles.chapterButton}
                        onClick={() => {
                          setIsChaptersSectionSticky?.(false);
                          bonusSectionRef?.current?.scrollIntoView({
                            behavior: 'smooth',
                          });
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className={styles.chapterInfo}>
                          <div className={styles.chapterLabel}>
                            CH. V : BONUS CHAPTER
                          </div>
                          <div className={styles.chapterTitle}>
                            Getting Your Team On Board
                          </div>
                        </div>
                        <button
                          className={styles.chapterExpand}
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedChapter(
                              expandedChapter === 5 ? null : 5
                            );
                          }}
                        >
                          {expandedChapter === 5 ? '−' : '+'}
                        </button>
                      </button>
                      {expandedChapter === 5 && (
                        <div className={styles.chapterExpandedContent}>
                          <a href="#" className={styles.chapterSubItem}>
                            Team Alignment Workshop
                          </a>
                          <a href="#" className={styles.chapterSubItem}>
                            Internal Communication
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <button className={styles.downloadAllButton}>
                    <span className={styles.downloadAllTitle}>
                      All Fundraising toolkits
                    </span>
                    <span className={styles.downloadAllSubtitle}>
                      ↓ DOWNLOAD ALL
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
