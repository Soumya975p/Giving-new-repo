'use client'

import { motion } from 'framer-motion'
import styles from './FieldGuideHero.module.css'

export default function FieldGuideHero() {
  const handleNavigateHome = () => {
    window.location.href = '/'
  }

  return (
    <motion.section
      className={styles.heroSection}
    >
      <div className={styles.heroContent}>
        {/* Left Side */}
        <motion.div
          className={styles.leftSide}

        >
          {/* Fly Icon - Mobile Only */}
          <div className={`${styles.flyIcon} m-d-block`}>
            <img
              src="/assets/fg-fly-hero.svg"
              alt="Flying icon"
              width="32"
              height="32"
            />
          </div>

          <h1 className={styles.mainTitle}>
            Unlock the Power of
          </h1>
          <img
            src="/assets/ed-giving.png"
            alt="Everyday Giving Icon"
            className={styles.edGivingIcon}
          />
          <h2 className={styles.mainSubtitle}>
            Everyday <span>Giving</span>
          </h2>

          {/* Mobile Scroll Indicator */}
          <div className={`${styles.scrollIndicator} m-d-block`}>
            <img
              src="/assets/scroll_down.svg"
              alt="Scroll down"
              className={styles.scrollArrow}
            />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className={`${styles.rightSide} d-d-block`}
        >
          <p className={styles.sectionLabel}>UDARTA:EG Action Field Guides</p>
          <p className={styles.description}>
            A guide to help nonprofits build reliable funding and engaged volunteer communities using what's already working across India.
          </p>

          <div className={styles.guidesSection}>
            <p className={styles.chooseLabel}>CHOOSE A FIELD GUIDE TO EXPLORE <span></span></p>
            <div className={styles.guideButtons}>
              <button
                type="button"
                className={styles.guideButton}
                onClick={handleNavigateHome}
              >
                <span style={{ pointerEvents: 'none' }}>
                  <img
                    src="/assets/btn-diamond.png"
                    style={{ objectFit: 'contain', pointerEvents: 'none' }}
                    alt=""
                  /> Fundraising
                  <img
                    src="/assets/btn-diamond.png"
                    style={{ objectFit: 'contain', pointerEvents: 'none' }}
                    alt=""
                  />
                </span>
              </button>
              <button className={styles.guideButton}>
                <span> <img
                  src="/assets/btn-diamond.png"
                  style={{ objectFit: 'contain' }}
                /> Volunteer Engagement  <img
                    src="/assets/btn-diamond.png"
                    style={{ objectFit: 'contain' }}
                  /></span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className={styles.backgroundDecor}>
        <div className={styles.gradientCircle1}></div>
        <div className={styles.gradientCircle2}></div>
      </div>

      {/* Bottom Hero Image */}
      <motion.div
        className={styles.bottomImageContainer}
      >
        <img
          src="/assets/fg-unlock-power.png"
          alt="Unlock Power"
          className={`${styles.bottomHeroImage} d-d-block`}
        />
        <img
          src="/assets/mob-fg-unlock-power.png"
          alt="Unlock Power"
          className={`${styles.bottomHeroImage} m-d-block`}
        />
      </motion.div>
    </motion.section>
  )
}
