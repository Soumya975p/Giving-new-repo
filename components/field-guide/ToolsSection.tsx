import styles from './ToolsSection.module.css'

export default function ToolsSection() {
  return (
    <section className={styles.toolsSection}>
      {/* Grid Background Pattern */}
      <div className={styles.gridBackground}></div>

      <div className={styles.container}>
        {/* Top Box */}
        <div className={styles.topBox}>
          <p className={styles.mainText}>
            These tools are designed to close that gap by addressing real-world constraints like limited capacity and donor stewardship know-how.
          </p>
          <p className={styles.subLabel}>THESE TOOLS GIVE YOU EVERYTHING YOU NEED TO:</p>
        </div>

        {/* Tools Grid */}
        <div className={styles.toolsGrid}>
          {/* Decorative Elements */}
          <div className={styles.decorSquare1}></div>
          <div className={styles.decorSquare2}></div>
          <div className={styles.decorSquare3}></div>

          {/* Card 1 */}
          <div className={styles.toolCard} style={{ gridColumn: '1 / 3', gridRow: '1' }}>
            <p className={styles.cardText}>
              Move from reactive fundraising efforts to structured, repeatable approaches.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.toolCard} style={{ gridColumn: '2 / 4', gridRow: '2' }}>
            <p className={styles.cardText}>
              Build volunteer programs that create long-term champions
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.toolCard} style={{ gridColumn: '4 / 6', gridRow: '1' }}>
            <p className={styles.cardText}>
              Convert one-time givers into recurring supporters
            </p>
          </div>

          {/* Card 4 */}
          <div className={styles.toolCard} style={{ gridColumn: '5 / 7', gridRow: '2' }}>
            <p className={styles.cardText}>
              Strengthen internal fundraising and volunteer management capabilities with simple, proven systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
