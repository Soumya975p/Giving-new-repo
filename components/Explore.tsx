'use client';

import { useState } from 'react';
import styles from './Explore.module.css';
import pageStyles from '../app/page.module.css';

export default function Explore() {
  const [isExplore1Hovered, setIsExplore1Hovered] = useState(false);
  const [isExplore2Hovered, setIsExplore2Hovered] = useState(false);
  const [exploreCursorPos, setExploreCursorPos] = useState({ x: 0, y: 0 });
  const [showExploreCursor, setShowExploreCursor] = useState(false);

  const handleNavigateFieldGuide = () => {
    window.location.href = '/field-guide';
  };

  const handleNavigateHome = () => {
    window.location.href = '/';
  };

  return (
    <>
      {/* Explore Grid Section */}
      <div className={styles.exploreSection}>
        <div className={styles.exploreHeader}>
          <span className={styles.exploreLabel}>FOLLOW ALONG</span>
          <h2 className={styles.exploreTitle}>Choose the Path That Fits Your Work</h2>
          <p className={styles.subtitle}>Explore the Field Guides and discover how to turn community generosity into sustained mission success.</p>

        </div>

        <div
          className={styles.exploreGrid}
          onMouseMove={(e) => {
            setExploreCursorPos({ x: e.clientX, y: e.clientY });
          }}
        >
          {/* Custom Explore Cursor Button */}
          {showExploreCursor && (
            <div
              className={pageStyles.glassButton}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                transform: `translate(${exploreCursorPos.x - 90}px, ${exploreCursorPos.y - 28}px)`,
                pointerEvents: 'none',
                zIndex: 9999,
              }}
            >
              <span className={`${pageStyles.diamond} ${pageStyles.left}`}></span>
              <span className={pageStyles.btnText}>Explore</span>
              <span className={`${pageStyles.diamond} ${pageStyles.right}`}></span>
            </div>
          )}

          <div
            className={`${styles.exploreCardBase} ${styles.exploreCard1}`}
            onClick={handleNavigateFieldGuide}
            style={{ cursor: 'pointer' }}
          >
            <div
              className={styles.hoverTrigger}
              onMouseEnter={() => {
                setIsExplore1Hovered(true);
                setShowExploreCursor(true);
              }}
              onMouseLeave={() => {
                setIsExplore1Hovered(false);
                setShowExploreCursor(false);
              }}
            />
            {/* Desktop Version */}
            <div className={styles.desktopOnly}>
              <img
                src="/assets/Into-folder.png"
                alt="Introduction"
                className={styles.exploreCardImage}
                style={{ opacity: isExplore1Hovered ? 0 : 1 }}
              />
              <img
                src="/assets/intro-folder-active.png"
                alt="Introduction Hover"
                className={styles.exploreHoverImage}
                style={{ opacity: isExplore1Hovered ? 1 : 0 }}
              />
            </div>
            {/* Mobile Version - Static */}
            <img
              src="/assets/intro-mobile.png"
              alt="Introduction Mobile"
              className={`${styles.exploreCardImage} ${styles.mobileOnly}`}
            />
            {/* Text Overlay */}
            <div className={styles.introTextContainer} data-hovered={isExplore1Hovered}>
              <span className={styles.introLabel}>UDARTA-EG FIELD GUIDE</span>
              <h3 className={styles.introTitle}>Introduction</h3>
              <p className={styles.introDescription}>
                Unlock the power of everyday giving using what's already working across India.
              </p>
            </div>
          </div>

          <div
            className={`${styles.exploreCardBase} ${styles.exploreCard2}`}
            onClick={handleNavigateHome}
            style={{ cursor: 'pointer' }}
          >
            <div
              className={styles.hoverTrigger}
              onMouseEnter={() => {
                setIsExplore2Hovered(true);
                setShowExploreCursor(true);
              }}
              onMouseLeave={() => {
                setIsExplore2Hovered(false);
                setShowExploreCursor(false);
              }}
            />
            {/* Desktop Version */}
            <div className={styles.desktopOnly}>
              <img
                src="/assets/Into-folder.png"
                alt="Volunteer Engagement"
                className={styles.exploreCardImage}
                style={{ opacity: isExplore2Hovered ? 0 : 1 }}
              />
              <img
                src="/assets/intro-folder-active.png"
                alt="Volunteer Engagement Hover"
                className={styles.exploreHoverImage}
                style={{ opacity: isExplore2Hovered ? 1 : 0 }}
              />
            </div>
            {/* Mobile Version - Static */}
            <img
              src="/assets/mobile_explore_vol.png"
              alt="Volunteer Engagement Mobile"
              className={`${styles.exploreCardImage} ${styles.mobileOnly}`}
            />
            <div className={styles.introTextContainer} data-hovered={isExplore2Hovered}>
              <span className={styles.introLabel}>UDARTA-EG FIELD GUIDE</span>
              <h3 className={styles.introTitle}>Volunteer Engagement</h3>
              <p className={styles.introDescription}>
                Coming Soon <br />
                <span> <br /></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
