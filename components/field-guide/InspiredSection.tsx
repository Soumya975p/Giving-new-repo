'use client'

import { useState } from 'react'
import inspiredStyles from './InspiredSection.module.css'
import styles from './FieldGuideHero.module.css'


export default function InspiredSection() {
  const [activeCard, setActiveCard] = useState(0)

  const cards = [
    {
      image: "/assets/card-1.png",
      color: "#D349AE"
    },
    {
      image: "/assets/card-2.png",
      color: "#0FB8C5"
    },
    {
      image: "/assets/card-3.png",
      color: "#93CD4D"
    }
  ]

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCard((prev) => (prev + 1) % cards.length)
  }

  const handleNavigateHome = () => {
    window.location.href = '/'
  }

  return (
    <div>
      <div
        className={`${styles.rightSide} m-d-block`}


      >
        <img src="/assets/brdr-radius.png" className="m-d-block" style={{ width: '100%' }} alt="" />
        <p className={styles.sectionLabel}>UDARTA:EG Action Field Guides</p>
        <p className={styles.description}>
          A guide to help nonprofits build reliable funding and engaged volunteer communities using what's already working across India.
        </p>

        <div className={styles.guidesSection}>
          <p className={styles.chooseLabel}><span></span> CHOOSE A FIELD GUIDE TO EXPLORE <span></span></p>
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
      </div>

      <section className={inspiredStyles.inspiredSection}>
        <div className={inspiredStyles.insCbContainerBg}>
          <div className={inspiredStyles.insCbContainer}>
            <div className={inspiredStyles.insCbTop}>
              <h2>Inspired by the GivingTuesday Data Commons' UDARTA:EG 2025 research, India's first collaborative study on everyday giving.</h2>
            </div>

            {/* Mobile Image - shown between text sections on mobile */}
            <div className={`${inspiredStyles.insCbMobileImage} m-d-block`} style={{width:'100%', marginLeft: '-20px'}}>
              <img src="/assets/inscbbtmbg.png" alt="Inspired section illustration" />
            </div>

            <div className={inspiredStyles.insCbBtm}>
              <h3>These guides translate sector-wide
                insights into simple, usable systems for nonprofits of all sizes.</h3>
              <p>The opportunity is real. Success with everyday giving isn't reserved for just the large organisations or those working on specific cause areas. It is accessible to any of us willing to build authentic community relationships - across causes, geographies, and organisation sizes.</p>
              <a href="https://www.givingtuesday.org/india/udarta-eg/report/" target='_blank' style={{ display: 'flex'}}>Read the research report  <img src="/assets/btn-arrow.png" alt=""style={{marginTop: '5px', marginLeft:'8px'}} /></a>
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
                      style={{ zIndex: 100 }}
                    >
                      <img
                        src="/assets/who-slider-next.png"
                        alt="Previous"
                        className={inspiredStyles.whoSliderPrev}
                      />
                    </button>

                    <div className={inspiredStyles.cardsContainer}>
                      {cards.map((card, index) => {
                        // Calculate position relative to active card
                        const position = (index - activeCard + cards.length) % cards.length;

                        return (
                          <div
                            key={index}
                            className={inspiredStyles.card}
                            style={{
                              zIndex: position === 0 ? 10 : position === 1 ? 5 : 1,
                              opacity: 1,
                              transform: position === 0 ? 'scale(1)' : position === 1 ? 'scale(0.95) translate(10px, 10px)' : 'scale(0.9) translate(20px, 20px)'
                            }}
                          >
                            <img
                              src={card.image}
                              alt={`Card ${index + 1}`}
                              className={inspiredStyles.cardImage}
                            />
                          </div>
                        )
                      })}
                    </div>

                    {/* Next Arrow */}
                    <button
                      className={inspiredStyles.sliderNextBtn}
                      onClick={handleNext}
                      aria-label="Next card"
                      style={{ zIndex: 100 }}
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
                <a href="https://www.givingtuesday.org/india/udarta-eg/report/" target='_blank' style={{ display: 'flex'}} className={inspiredStyles.reportLink}>Read the research report <img src="/assets/right-arrow-bg.png" style={{marginTop: '5px', marginLeft:'8px'}} alt="" /></a>
              </div>
            </div>

            {/* Bottom Quote Section */}
            {/* Bottom Quote Section */}
            <div className={inspiredStyles.quoteSection}>
               <h2 className={inspiredStyles.Title}>
          Insights from 300+ nonprofit peers reveal a common challenge
        </h2>
        <p className={inspiredStyles.Description}>
          <span className={inspiredStyles.pColor}>Despite valuing individual donors and volunteers, nonprofits</span> <span className={inspiredStyles.gColor}>struggle</span> to move beyond: One-time giving, ad-hoc outreach, and informal volunteering.
        </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
