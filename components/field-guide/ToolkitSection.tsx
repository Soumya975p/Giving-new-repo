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
           
            </div>
          </div>

          {/* Circle 2 */}
          <div
            className={`${styles.circle} ${activeCircle === 1 ? styles.circleVisible : styles.circleHidden}`}
            onClick={() => handleCircleClick(1)}
          >
            <div className={styles.circleContent}>
              <p className={styles.circleText}>
                Real examples<br />
                grounded in Indian<br />
                nonprofit realities
              </p>
            </div>
          </div>

          {/* Circle 3 */}
          <div
            className={`${styles.circle} ${activeCircle === 2 ? styles.circleVisible : styles.circleHidden}`}
            onClick={() => handleCircleClick(2)}
          >
            <div className={styles.circleContent}>
              <p className={styles.circleText}>
                Ready-to-use<br />
                tools and templates<br />
                that you can adopt<br />
                immediately
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
