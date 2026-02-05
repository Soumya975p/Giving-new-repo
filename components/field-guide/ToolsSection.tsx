import styles from './ToolsSection.module.css'

export default function ToolsSection() {
  return (
    <section className={styles.toolsSection} style={{ padding: 0, backgroundColor: 'transparent' }}>
      {/* Image Wrapper - positions content relative to image */}
      <div className={styles.imageWrapper}>
        {/* Desktop Image */}
        <img src="/assets/tools-section.png" className={styles.backgroundImageDesktop} alt="" />
        {/* Mobile Image - replace with your mobile image path */}
        <img src="/assets/mob-tools-section.png" className={styles.backgroundImageMobile} alt="" />

        {/* Top Box - positioned relative to image */}
        <div className={styles.topBox}>
          <p className={styles.mainText}>
            These tools are designed to close that gap by addressing real-world constraints like limited capacity and donor stewardship know-how.
          </p>
          <p className={styles.subLabel}>THESE TOOLS GIVE YOU EVERYTHING YOU NEED TO:</p>
        </div>

        {/* Card 1 */}
        <div className={`${styles.toolCard} ${styles.toolCard1}`}>
          <p className={styles.cardText}>
            Move from reactive fundraising efforts to structured, repeatable approaches.
          </p>
        </div>

        {/* Card 2 */}
        <div className={`${styles.toolCard} ${styles.toolCard2}`}>
          <p className={styles.cardText}>
            Build volunteer programs that create long-term champions
          </p>
        </div>

        {/* Card 3 */}
        <div className={`${styles.toolCard} ${styles.toolCard3}`}>
          <p className={styles.cardText}>
            Convert one-time givers into recurring supporters
          </p>
        </div>

        {/* Card 4 */}
        <div className={`${styles.toolCard} ${styles.toolCard4}`}>
          <p className={styles.cardText}>
            Strengthen internal fundraising and volunteer management capabilities with simple, proven systems.
          </p>
        </div>
      </div>
    </section>
  )
}
