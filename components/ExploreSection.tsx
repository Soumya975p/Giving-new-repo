import styles from '../app/page.module.css'

export default function ExploreSection() {
  return (
    <div className={styles.exploreSection}>
      <div className={styles.exploreHeader}>
        <span className={styles.exploreLabel}>FOLLOW ALONG</span>
        <h2 className={styles.exploreTitle}>Explore the other sections</h2>
      </div>

      <div className={styles.folderContainer}>
        {/* Folder Card 1 */}
        <div
          className={styles.folderCard}
          onClick={() => window.location.href = 'http://localhost:3001/field-guide'}
          style={{ cursor: 'pointer' }}
        >
          <div className={styles.folderContent}>
            <span className={styles.folderLabel}>UDARTA:EG FIELD GUIDE</span>
            <h3 className={styles.folderTitle}>Introduction</h3>
          </div>
          <svg className={styles.folderSvg} viewBox="0 0 600 420" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="chapter1Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#63C76B" />
                <stop offset="100%" stopColor="#17BABD" />
              </linearGradient>
            </defs>
            <path
              d="M20 30 C20 20 30 10 40 10 L410 10 C420 10 430 15 435 20 L455 50 C460 55 470 55 475 55 L560 55 C570 55 580 65 580 75 L580 390 C580 400 570 410 560 410 L40 410 C30 410 20 400 20 390 Z"
              fill="none"
              stroke="#2a6f5f"
              strokeWidth="2"
              opacity="0.4"
              transform="translate(10, 5) rotate(1, 300, 200)"
            />
            <path
              className={styles.folderFrontPath}
              d="M10 20 C10 10 20 0 30 0 L400 0 C410 0 420 5 425 10 L445 40 C450 45 460 45 465 45 L550 45 C560 45 570 55 570 65 L570 380 C570 390 560 400 550 400 L30 400 C20 400 10 390 10 380 Z"
              fill="none"
              stroke="#2a6f5f"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Folder Card 2 */}
        <div className={styles.folderCard}>
          <div className={styles.folderContent}>
            <span className={styles.folderLabel}>UDARTA:EG FIELD GUIDE ON</span>
            <h3 className={styles.folderTitle}>Volunteer Engagement</h3>
          </div>
          <svg className={styles.folderSvg} viewBox="0 0 600 420" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="chapter1Gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#63C76B" />
                <stop offset="100%" stopColor="#17BABD" />
              </linearGradient>
            </defs>
            <path
              d="M20 30 C20 20 30 10 40 10 L410 10 C420 10 430 15 435 20 L455 50 C460 55 470 55 475 55 L560 55 C570 55 580 65 580 75 L580 390 C580 400 570 410 560 410 L40 410 C30 410 20 400 20 390 Z"
              fill="none"
              stroke="#2a6f5f"
              strokeWidth="2"
              opacity="0.4"
              transform="translate(10, 5) rotate(1, 300, 200)"
            />
            <path
              className={styles.folderFrontPath}
              d="M10 20 C10 10 20 0 30 0 L400 0 C410 0 420 5 425 10 L445 40 C450 45 460 45 465 45 L550 45 C560 45 570 55 570 65 L570 380 C570 390 560 400 550 400 L30 400 C20 400 10 390 10 380 Z"
              fill="none"
              stroke="#2a6f5f"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
