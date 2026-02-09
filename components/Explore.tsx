'use client';

import { useState } from 'react';
import styles from './Explore.module.css';

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
            <img
              src="/assets/explore.svg"
              alt=""
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                transform: `translate(${exploreCursorPos.x - 91.4}px, ${exploreCursorPos.y - 28}px)`, // Centered based on 182.79 / 2
                pointerEvents: 'none',
                zIndex: 9999,
                width: '182.79px',
                height: '56px',
              }}
            />
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
                src="/assets/into-folder.png"
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
                src="/assets/explore_volunteer_engagement.png"
                alt="Volunteer Engagement"
                className={styles.exploreCardImage}
                style={{ opacity: isExplore2Hovered ? 0 : 1 }}
              />
              <img
                src="/assets/volunteer_hover.png"
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
          </div>
        </div>
      </div>
    </>
  );
}
