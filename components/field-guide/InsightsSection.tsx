import styles from './InsightsSection.module.css'

export default function InsightsSection() {
  return (
    <section className={styles.insightsSection}>
      <div className={styles.container}>
        <h2 className={styles.insightsTitle}>
          Insights from 300+ nonprofit peers reveal a common challenge
        </h2>
        <p className={styles.insightsDescription}>
          <span className='p-color'>Despite valuing individual donors and volunteers, nonprofits</span> <span className='g-color'>struggle</span> to move beyond: One-time giving, ad-hoc outreach, and informal volunteering.
        </p>
      </div>
    </section>
  )
}
