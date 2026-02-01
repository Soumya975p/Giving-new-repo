'use client'

import { motion } from 'framer-motion'
import styles from './FieldGuideHero.module.css'

export default function FieldGuideHero() {
  return (
    <motion.section
      className={styles.heroSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.heroContent}>
        {/* Left Side */}
        <motion.div
          className={styles.leftSide}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={styles.mainTitle}>
            Unlock the Power of
          </h1>
          <h2 className={styles.mainSubtitle}>
            Everyday <span>Giving</span>
          </h2>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className={`${styles.rightSide} d-d-block`}

          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className={styles.sectionLabel}>UDARTA:EG Action Field Guides</p>
          <p className={styles.description}>
            A guide to help nonprofits build reliable funding and engaged volunteer communities using what's already working across India.
          </p>

          <div className={styles.guidesSection}>
            <p className={styles.chooseLabel}>CHOOSE A FIELD GUIDE TO EXPLORE <span></span></p>
            <div className={styles.guideButtons}>
              <button className={styles.guideButton}>
                <span> <img
                                  src="/assets/btn-diamond.png"
                                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                /> Fundraising  <img
                                   src="/assets/btn-diamond.png"
                                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                /></span>
              </button>
              <button className={styles.guideButton}>
                <span> <img
                                   src="/assets/btn-diamond.png"
                                  style={{ objectFit: 'contain' }}
                                /> Volunteer Engagement  <img
                                   src="/assets/btn-diamond.png"
                                  style={{  objectFit: 'contain' }}
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
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
