'use client'

import { useState } from 'react'
import styles from './ToolkitSection.module.css'

export default function ToolkitSection() {
  const [activeCircle, setActiveCircle] = useState(0)

  const handleCircleClick = (index: number) => {
    setActiveCircle(index)
  }

  return (
    <section className={styles.toolkitSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.label}>TOOLKIT & TOOLS</p>
          <h2 className={styles.title}>From Insight to Impact</h2>
          <p className={styles.subtitle}>Unlock each field guide to get:</p>
        </div>

        {/* Three Circles */}
        <div className={styles.circlesContainer}>
          {/* Circle 1 */}
          <div
            className={`${styles.circle} ${activeCircle === 0 ? styles.circleVisible : styles.circleHidden}`}
            onClick={() => handleCircleClick(0)}
          >
            <div className={styles.circleContent}>
              <p className={styles.circleText}>
                Step-by-step<br />
                action frameworks
              </p>
              <img src="/assets/circleContent1.png" className={styles.circleImage1} alt="" />
            </div>
          </div>

          {/* Circle 2 */}
          <div
            className={`${styles.circle} ${styles.circle2} ${activeCircle === 1 ? styles.circleVisible : styles.circleHidden}`}
            onClick={() => handleCircleClick(1)}
          >
            <div className={styles.circleContent}>
              <p className={styles.circleText}>
                Real examples<br />
                grounded in Indian<br />
                nonprofit realities
              </p>
              <img src="./assets/circleContent2.png" className={styles.circleImage2} alt="" />
            </div>
          </div>

          {/* Circle 3 */}
          <div
            className={`${styles.circle} ${styles.circle3} ${activeCircle === 2 ? styles.circleVisible : styles.circleHidden}`}
            onClick={() => handleCircleClick(2)}
          >
            <div className={styles.circleContent}>
              <p className={styles.circleText}>
                Ready-to-use<br />
                tools and templates<br />
                that you can adopt<br />
                immediately
              </p>
              <img src="./assets/circleContent3.png" className={styles.circleImage3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
