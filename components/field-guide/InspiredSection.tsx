'use client'

import { useState } from 'react'
import inspiredStyles from './InspiredSection.module.css'
import styles from './FieldGuideHero.module.css'


export default function InspiredSection() {
  const [activeCard, setActiveCard] = useState(0)

  const cards = [
    {
      image: "/assets/slider1.png",
      color: "#D349AE"
    },
    {
      image: "/assets/slider1.png",
      color: "#0FB8C5"
    },
    {
      image: "/assets/slider1.png",
      color: "#93CD4D"
    }
  ]

  const handlePrevious = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length)
  }

  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % cards.length)
  }

  return (
    <div>
    <div
          className={`${styles.rightSide} m-d-block`}

         
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
        </div>
        
    <section className={inspiredStyles.inspiredSection}>
        <div className={inspiredStyles.insCbContainerBg}>
        <div className={inspiredStyles.insCbContainer}>
            <div className={inspiredStyles.insCbTop}>
            <h2>Inspired by the GivingTuesday Data Commons' research study, UDARTA:EG study [2025],
India's first collaborative research on everyday giving.</h2>
          </div>
          <div className={inspiredStyles.insCbBtm}>
          <h3>These guides translate sector-wide
insights into simple, usable systems for nonprofits of all sizes.</h3>
<p>The opportunity is real, proven, that success isn't reserved for just the a few organisations; it is accessible to any of us willing to build authentic community relationships - across causes, geographies, and organisation sizes.</p>
<a href="">Read the research report  <img src="./assets/btn-arrow.png" alt="" /></a>
</div>
        </div>
        </div>
      <div className={inspiredStyles.inspiredSectionBg}>
      
      <div className={inspiredStyles.container}>
        {/* Top Section - Who is this for */}
        <div className={inspiredStyles.topSection}>
        
          <div className={inspiredStyles.circleContainer}>
          <div className={inspiredStyles.circleContent}>

            <p className={inspiredStyles.whoLabel}>WHO IS THIS FOR</p>
            <h2 className={inspiredStyles.whoTitle}>
              If you work with or wish to work with everyday givers this field guide is for you
            </h2>

            {/* Cards Slider */}
            <div className={inspiredStyles.cardWrapper}>
              {/* Previous Arrow */}
              <button
                className={inspiredStyles.sliderPrevBtn}
                onClick={handlePrevious}
                aria-label="Previous card"
              >
                <img
                  src="/assets/who-slider-next.png"
                  alt="Previous"
                  className={inspiredStyles.whoSliderPrev}
                />
              </button>

              {/* Cards Container */}
              <div className={inspiredStyles.cardsContainer}>
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`${inspiredStyles.card} ${index === activeCard ? inspiredStyles.cardActive : ''}`}
                    style={{ transform: `translateX(-${activeCard * 100}%)` }}
                  >
                    <img
                      src={card.image}
                      alt={`Card ${index + 1}`}
                      className={inspiredStyles.cardImage}
                    />
                  </div>
                ))}
              </div>

              {/* Next Arrow */}
              <button
                className={inspiredStyles.sliderNextBtn}
                onClick={handleNext}
                aria-label="Next card"
              >
                <img
                  src="/assets/who-slider-next.png"
                  alt="Next"
                  className={inspiredStyles.whoSliderNext}
                />
              </button>
            </div>
          </div>
          </div>
        </div>

        {/* Stats and Text Section */}
        <div className={inspiredStyles.statsSection}>
          {/* Left - Stat with Icon */}
          <div className={inspiredStyles.statLeft}>
            
            <p className={inspiredStyles.statText}>
              Over 90% of nonprofits* find fundraising and volunteer engagement from everyday givers worthwhile.
            </p>
            <p className={inspiredStyles.statCitation}>
              *98% and 93% respectively. Sourced from UDARTA:EG report
            </p>
          </div>

          {/* Right - Description */}
          <div className={inspiredStyles.statRight}>
            <p className={inspiredStyles.descText}>
              These aren't just metrics, they represent flexible operational funding, lifelong advocates, and invested communities that amplify your mission.
            </p>
            <a href="#" className={inspiredStyles.reportLink}>Read the research report →</a>
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className={inspiredStyles.quoteSection}>
          <p className={inspiredStyles.quoteText}>
            The real gap isn't <span>commitment.</span><br />
            It is strategy, systems, capabilities and time.
          </p>
        </div>
      </div>
      </div> 
    </section>
    </div>
  )
}
