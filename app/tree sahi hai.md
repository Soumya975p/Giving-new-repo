'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './page.module.css'

interface Chapter {
  id: number
  title: string
  subtitle: string
  tabImage: string
  contentImage: string
  gradient: string
  tabGradient: string
  gridImage: string
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: 'I. Tilling the Soil',
    subtitle: 'Network Expansion',
    tabImage: '/assets/Tab 1.png',
    contentImage: '/assets/1.png',
    gradient: 'linear-gradient(135deg, #1eb59a 0%, #6fdc8c 50%, #a8e583 100%)',
    tabGradient: 'linear-gradient(135deg, #1eb59a 0%, #16a085 100%)',
    gridImage: '/assets/c1.png'
  },
  {
    id: 2,
    title: 'II. The Planting',
    subtitle: 'Building Connections',
    tabImage: '/assets/Tab 2.png',
    contentImage: '/assets/2.png',
    gradient: 'linear-gradient(135deg, #4dd4d4 0%, #5de8d5 50%, #3ababa 100%)',
    tabGradient: 'linear-gradient(135deg, #4dd4d4 0%, #3ababa 100%)',
    gridImage: '/assets/c2.png'
  },
  {
    id: 3,
    title: 'III. The Nurturing',
    subtitle: 'Stewarding Donors',
    tabImage: '/assets/Tab 3.png',
    contentImage: '/assets/3.png',
    gradient: 'linear-gradient(180deg, #0FB8C5 0%, #13D9E8 50%, #FFCD86 100%)',
    tabGradient: 'linear-gradient(180deg, #0FB8C5 0%, #13D9E8 100%)',
    gridImage: '/assets/c3.png'
  },
  {
    id: 4,
    title: 'IV. Growth',
    subtitle: 'Donors to Champions',
    tabImage: '/assets/Tab 4.png',
    contentImage: '/assets/4.png',
    gradient: 'linear-gradient(180deg, #315900 0%, #86A401 25%, #C9CD33 50%, #DCD647 75%, #FFEF3D 100%)',
    tabGradient: 'linear-gradient(180deg, #315900 0%, #B0D313 100%)',
    gridImage: '/assets/c4.png'
  }
]

export default function Home() {
  const [activeChapter, setActiveChapter] = useState(1)
  const [scrollProgress, setScrollProgress] = useState(0)
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([])
  const activeChapterRef = useRef(activeChapter) // To track active chapter without dependency issues
  const chaptersSectionRef = useRef<HTMLDivElement>(null)
  const isScrollingRef = useRef(false)
  const scrollAccumulatorRef = useRef(0)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const scrollContainerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    activeChapterRef.current = activeChapter

    // Reset scroll position to left when chapter changes
    const newScrollContainer = scrollContainerRefs.current[activeChapter - 1]
    if (newScrollContainer) {
      newScrollContainer.scrollLeft = 0
    }
    setScrollProgress(0)
  }, [activeChapter])

  // Handle horizontal scroll animation based on scroll position
  useEffect(() => {
    const handleContentScroll = () => {
      const currentScrollContainer = scrollContainerRefs.current[activeChapter - 1]
      if (!currentScrollContainer) return

      const scrollLeft = currentScrollContainer.scrollLeft
      const maxScroll = currentScrollContainer.scrollWidth - currentScrollContainer.clientWidth

      if (maxScroll > 0) {
        const progress = scrollLeft / maxScroll
        setScrollProgress(progress)
      } else {
        setScrollProgress(0)
      }
    }

    const currentScrollContainer = scrollContainerRefs.current[activeChapter - 1]
    if (currentScrollContainer) {
      currentScrollContainer.addEventListener('scroll', handleContentScroll)
      handleContentScroll() // Initial check

      return () => {
        currentScrollContainer.removeEventListener('scroll', handleContentScroll)
      }
    }
  }, [activeChapter])

  const handleNextChapter = () => {
    if (activeChapter < chapters.length) {
      setActiveChapter(activeChapter + 1)
    }
  }

  // Handle wheel events for chapter transitions
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const chaptersSection = chaptersSectionRef.current
      if (!chaptersSection) return

      const sectionRect = chaptersSection.getBoundingClientRect()
      // Check if section is significantly visible (relaxed buffer to catch fast scrolls)
      const inChaptersSection = sectionRect.top <= 100 && sectionRect.bottom >= 100

      if (inChaptersSection) {
        const scrollDirection = e.deltaY > 0 ? 'down' : 'up'
        const currentChapter = activeChapterRef.current
        const currentScrollContainer = scrollContainerRefs.current[currentChapter - 1]

        // Check horizontal scroll capability
        let isHorizontallyScrolling = false
        if (currentScrollContainer) {
          // Check if we can scroll more to the right?
          // Use a small buffer (e.g. 5px) for float comparisons
          const maxScrollLeft = currentScrollContainer.scrollWidth - currentScrollContainer.clientWidth
          const canScrollRight = currentScrollContainer.scrollLeft < maxScrollLeft - 5
          const canScrollLeft = currentScrollContainer.scrollLeft > 5

          if (scrollDirection === 'down' && canScrollRight) {
            e.preventDefault()
            currentScrollContainer.scrollLeft += e.deltaY
            isHorizontallyScrolling = true

            // Reset chapter scroll accumulator because we are scrolling content
            scrollAccumulatorRef.current = 0
            return // Exit, don't change chapter
          }

          if (scrollDirection === 'up' && canScrollLeft) {
            e.preventDefault()
            currentScrollContainer.scrollLeft += e.deltaY
            isHorizontallyScrolling = true
            return
          }
        }

        // Change chapter based on scroll direction
        if (!isScrollingRef.current && !isHorizontallyScrolling) {
          // Scrolling down moves to next chapter
          if (scrollDirection === 'down' && currentChapter < chapters.length) {
            e.preventDefault()

            // Snap to section to ensure clean view
            chaptersSection.scrollIntoView({ behavior: 'smooth' })

            isScrollingRef.current = true
            scrollAccumulatorRef.current = 0

            // Immediately set next chapter
            const nextChapter = currentChapter + 1
            setActiveChapter(nextChapter)

            // Reset scroll position for new chapter
            setTimeout(() => {
              const newScrollContainer = scrollContainerRefs.current[nextChapter - 1]
              if (newScrollContainer) {
                newScrollContainer.scrollLeft = 0
              }
            }, 0)

            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
            scrollTimeoutRef.current = setTimeout(() => {
              isScrollingRef.current = false
            }, 800)
          }
          // Scrolling up moves to previous chapter
          else if (scrollDirection === 'up' && currentChapter > 1) {
            e.preventDefault()

            // Snap to section to ensure clean view
            chaptersSection.scrollIntoView({ behavior: 'smooth' })

            isScrollingRef.current = true
            scrollAccumulatorRef.current = 0

            // Immediately set previous chapter
            const prevChapter = currentChapter - 1
            setActiveChapter(prevChapter)

            // Reset scroll position for new chapter
            setTimeout(() => {
              const newScrollContainer = scrollContainerRefs.current[prevChapter - 1]
              if (newScrollContainer) {
                newScrollContainer.scrollLeft = 0
              }
            }, 0)

            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
            scrollTimeoutRef.current = setTimeout(() => {
              isScrollingRef.current = false
            }, 800)
          }
          else {
            // Reset accumulator if at boundaries
            scrollAccumulatorRef.current = 0
          }
        } else {
          // Block extra scrolls during transition
          e.preventDefault()
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [chapters.length])

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Header */}
        <header className={styles.heroHeader}>
          <div className={styles.logoArea}>
            <span className={styles.logoIcon}>🌱</span>
            <span className={styles.logoText}>GIVING<br />TOGETHER</span>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.fieldGuide}>◆ FUNDRAISING FIELD GUIDE</span>
            <span className={styles.menuDots}>⋮</span>
          </div>
        </header>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>Donor</span>
              <span className={styles.titleLine2}>Gardening</span>
            </h1>
          </div>

          <img
            src="/assets/hero background.svg"
            alt="Donor Gardening Tree"
            className={styles.heroBackgroundSvg}
          />

          <div className={styles.heroRight}>
            <h2 className={styles.heroSubtitle}>From Donation to Relationship</h2>
            <p className={styles.heroDescription}>
              Most nonprofits spend significant time and resources finding new donors. Yet research shows that acquiring a new donor costs <span className={styles.emphasis}>nearly ten times more</span> than continuing a relationship with someone who already believes in your work.
            </p>
            <p className={styles.heroDescription}>
              Drawing on insights from the UDARTA:EG study of 300+ <span className={styles.emphasis}>Indian nonprofits</span>, this guide offers toolkits to shift donor engagement from reactive to retention-focused.
            </p>
            <button className={styles.startButton}>
              <span>Start Journey</span>
              <span className={styles.buttonArrow}>→</span>
            </button>
          </div>
        </div>

        {/* Decorative dots pattern */}
        <div className={styles.dotsPattern}></div>

        {/* Bottom Section */}
        <div className={styles.heroBottom}>
          <p className={styles.cultivationLabel}>CULTIVATION IN ACTION</p>
          <h2 className={styles.heroBottomTitle}>
            A <span className={styles.highlight}>step by step guide</span><br />
            to donor engagement through<br />
            the journey of <span className={styles.highlight}>Nidhi</span>, our perennial<br />
            supporter.
          </h2>
          <p className={styles.heroBottomDesc}>
            Follow Nidhi's journey across four chapters to see how everyday giving can grow from a one-time transaction<br />
            into a lasting relationship. Each chapter blends real-world moments with practical tools to help nonprofits guide<br />
            donors naturally. Your donors may be at different stages of this journey—explore the chapters in any order that<br />
            serves you best.
          </p>

          <div className={styles.chapterSelectionWrapper}>
            <div className={styles.heroDividerLine}></div>
            <p className={styles.selectChapter}>Select a chapter to begin</p>

            <div className={styles.chapterGrid}>
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className={styles.gridColumn}
                  onClick={() => {
                    setActiveChapter(chapter.id)
                    chaptersSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <h4 className={styles.gridLabel}>
                    CHAPTER {chapter.id === 1 ? 'I' : chapter.id === 2 ? 'II' : chapter.id === 3 ? 'III' : 'IV'}: {chapter.id === 1 ? 'TILLING THE SOIL' : chapter.id === 2 ? 'THE PLANTING' : chapter.id === 3 ? 'THE NURTURING' : 'GROWTH'}
                  </h4>
                  <h3 className={styles.gridTitle}>
                    {chapter.id === 1 ? chapter.subtitle : chapter.id === 2 ? 'First Donation' : chapter.id === 3 ? 'Stewarding Donors' : 'Donors to Champions'}
                  </h3>
                  <img
                    src={chapter.gridImage}
                    alt={chapter.subtitle}
                    className={styles.gridImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* Chapters Section - Transform-based stacking */}
      < section className={styles.chaptersSection} ref={chaptersSectionRef} >
        {
          chapters.map((chapter, index) => {
            const isActive = activeChapter === chapter.id
            const isPast = activeChapter > chapter.id
            const isFuture = activeChapter < chapter.id

            return (
              <div
                key={chapter.id}
                ref={(el) => { chapterRefs.current[index] = el }}
                className={`${styles.chapterContainer} ${isActive ? styles.chapterActive : ''
                  } ${isPast ? styles.chapterPast : ''
                  } ${isFuture ? styles.chapterFuture : ''
                  }`}
                style={{
                  zIndex: chapter.id * 10,
                  transform: isFuture ? 'translateY(100%)' : 'translateY(0)',
                  transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div
                  className={styles.chapterPanel}
                  style={{
                    background: chapter.gradient,
                    clipPath: chapter.id === 1
                      ? 'polygon(3% 0%, 22% 0%, 25% 50px, 100% 50px, 100% 100%, 0% 100%, 0% 50px)'
                      : chapter.id === 2
                        ? 'polygon(28% 0%, 47% 0%, 50% 50px, 100% 50px, 100% 100%, 0% 100%, 0% 50px, 25% 50px)'
                        : chapter.id === 3
                          ? 'polygon(53% 0%, 72% 0%, 75% 50px, 100% 50px, 100% 100%, 0% 100%, 0% 50px, 50% 50px)'
                          : chapter.id === 4
                            ? 'polygon(78% 0%, 97% 0%, 100% 50px, 100% 100%, 0% 100%, 0% 50px, 75% 50px)'
                            : undefined
                  }}
                >
                  {/* Tab Section */}
                  <div className={styles.tabSection}>
                    <div className={styles.tabContainer}>
                      {chapter.id === 1 && (
                        <button type="button" className={styles.chapterTab} style={{ left: '0%', width: '25%', background: 'transparent', border: 'none', padding: 0 }} onClick={() => setActiveChapter(1)}>
                          <img src="/assets/Tab ch1.png" alt="Chapter 1" className={styles.tabImage} />
                          <span className={styles.tabText}>I. Tilling the Soil</span>
                        </button>
                      )}
                      {chapter.id === 2 && (
                        <button type="button" className={styles.chapterTab} style={{ left: '25%', width: '25%', background: 'transparent', border: 'none', padding: 0 }} onClick={() => setActiveChapter(2)}>
                          <img src="/assets/Tab ch2.png" alt="Chapter 2" className={styles.tabImage} />
                          <span className={styles.tabText}>II. The Planting</span>
                        </button>
                      )}
                      {chapter.id === 3 && (
                        <button type="button" className={styles.chapterTab} style={{ left: '50%', width: '25%', background: 'transparent', border: 'none', padding: 0 }} onClick={() => setActiveChapter(3)}>
                          <img src="/assets/Tab ch3.png" alt="Chapter 3" className={styles.tabImage} />
                          <span className={styles.tabText}>III. The Nurturing</span>
                        </button>
                      )}
                      {chapter.id === 4 && (
                        <button type="button" className={styles.chapterTab} style={{ left: '75%', width: '25%', background: 'transparent', border: 'none', padding: 0 }} onClick={() => setActiveChapter(4)}>
                          <img src="/assets/Tab ch4.png" alt="Chapter 4" className={styles.tabImage} />
                          <span className={styles.tabText}>IV. Growth</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={styles.contentSection}>
                    <div
                      className={styles.chapterContentSticky}
                      ref={(el) => { scrollContainerRefs.current[index] = el }}
                    >
                      <div
                        className={styles.scrollContainer}
                        style={{
                          transform: isActive ? `translateX(${-100 + (scrollProgress * 100)}px)` : 'translateX(0)',
                          transition: isActive ? 'none' : 'transform 0.3s ease'
                        }}
                      >
                        {/* Chapter Header */}
                        <div className={styles.chapterHeader}>
                          <p className={styles.chapterLabel}>
                            CHAPTER {chapter.id === 1 ? 'I' : chapter.id === 2 ? 'II' : chapter.id === 3 ? 'III' : 'IV'}: {chapter.id === 1 ? 'TILLING THE SOIL' : chapter.id === 2 ? 'THE PLANTING' : chapter.id === 3 ? 'THE NURTURING' : 'GROWTH'}
                          </p>
                          <h1 className={styles.chapterTitle}>
                            {chapter.id === 1 ? chapter.subtitle : chapter.id === 2 ? 'First Donation' : chapter.id === 3 ? 'Stewarding Donors' : 'Donors to Champions'}
                          </h1>
                          <p className={styles.chapterDescription}>
                            Before you ask for support, it helps to understand who is already around you.<br />
                            This chapter focuses on mapping your existing network so your fundraising begins<br />
                            with relationships, not cold outreach.
                          </p>
                        </div>

                        {/* Main Content Area */}
                        {chapter.id === 1 ? (
                          <div className={styles.contentArea}>
                            {/* Chapter 1 Content - Keep existing */}
                            <div className={styles.leftColumn}>
                              <div className={styles.flowchartItem}>
                                <div className={styles.diamondShape}></div>
                                <div className={styles.connectLine}></div>
                              </div>
                              <div className={styles.flowchartItem}>
                                <div className={styles.diamondShape}></div>
                                <div className={styles.connectLine}></div>
                                <div className={styles.flowText}>
                                  You may reach many people,<br />
                                  but responses are scattered. Most<br />
                                  donations are small, one-time, and<br />
                                  disconnected.
                                </div>
                              </div>
                              <div className={styles.flowchartItem}>
                                <div className={styles.diamondShape}></div>
                              </div>

                              <div className={styles.didYouKnowCard}>
                                <p className={styles.smallLabel}>DID YOU KNOW?</p>
                                <h3 className={styles.cardHeading}>It costs 10x more</h3>
                                <p className={styles.cardDescription}>
                                  To acquire a new donor than continuing<br />
                                  a relationship with someone who already<br />
                                  believes in your work.
                                </p>
                              </div>
                            </div>

                            <div className={styles.rightColumn}>
                              <div className={styles.lightbulbSection}>
                                <div className={styles.lightbulbIcon}>ðŸ’¡</div>
                                <div className={styles.lightbulbText}>
                                  Instead if you tapped into your<br />
                                  existing network you will reach the<br />
                                  people that care about the cause.<br />
                                  The appeal feels more personal,<br />
                                  more trusted.
                                </div>
                              </div>

                              <div className={styles.statsBox}>
                                <p className={styles.smallLabel}>UGARTA EG STUDY SHOWS</p>
                                <div className={styles.emojiRow}>ðŸŸ  ðŸŸ  ðŸŸ  ðŸ”¶</div>
                                <h3 className={styles.statsHeading}>60% of nonprofits</h3>
                                <p className={styles.statsDescription}>
                                  find outreach through existing networks to<br />
                                  be their most effective way of reaching new<br />
                                  supporters.
                                </p>
                              </div>
                            </div>

                            <div className={styles.verticalLine}></div>

                            <div className={styles.additionalContent}>
                              <p className={styles.additionalText}>
                                We have ma...<br />
                                simplify r...
                              </p>
                            </div>
                          </div>
                        ) : chapter.id === 2 ? (
                          <div className={styles.contentArea}>\n                        {/* Chapter 2 - Scenario Layout */}
                            <div className={styles.optionCard}>
                              <div className={styles.optionBadge}>OPTION A</div>
                              <p className={styles.optionText}>
                                Record her details in your<br />
                                database and acknowledge<br />
                                her support
                              </p>
                            </div>

                            <div className={styles.scenarioCard}>
                              <p className={styles.scenarioLabel}>SCENARIO 2</p>
                              <p className={styles.scenarioText}>
                                You reach out to Nidhi,<br />
                                someone you identified through<br />
                                your existing network. She<br />
                                becomes a first-time donor by<br />
                                contributing â‚¹2,500 via your<br />
                                crowdfunding campaign. What<br />
                                do you do next?
                              </p>
                              <div className={styles.scenarioDecoration}>
                                <div className={styles.decorativeSemicircle}></div>
                                <div className={styles.decorativeDiamond}></div>
                              </div>
                            </div>

                            <div className={styles.optionCard}>
                              <div className={styles.optionBadge}>OPTION B</div>
                              <p className={styles.optionText}>
                                No thank you or follow-ups.<br />
                                Accept the donation and<br />
                                move on.
                              </p>
                            </div>
                          </div>
                        ) : chapter.id === 3 ? (
                          <div className={styles.contentArea}>
                            {/* Chapter 3 - Scenario Layout */}
                            <div className={styles.optionCard}>
                              <div className={styles.optionBadge}>OPTION A</div>
                              <p className={styles.optionText}>
                                Reach out only when you<br />
                                need funds again
                              </p>
                            </div>

                            <div className={styles.scenarioCard}>
                              <p className={styles.scenarioLabel}>SCENARIO 3</p>
                              <p className={styles.scenarioText}>
                                Nidhi has already<br />
                                donated once. Two<br />
                                months have passed.<br />
                                What do you do next?
                              </p>
                              <div className={styles.scenarioDecoration}>
                                <div className={styles.decorativeCircles}>
                                  <div className={styles.decorativeCircle}></div>
                                  <div className={styles.decorativeCircle}></div>
                                  <div className={styles.decorativeCircle}></div>
                                </div>
                                <div className={styles.decorativeDiamond}></div>
                              </div>
                            </div>

                            <div className={styles.optionCard}>
                              <div className={styles.optionBadge}>OPTION B</div>
                              <p className={styles.optionText}>
                                Share impact and invite her<br />
                                to engage: Updates, events,<br />
                                conversations - without<br />
                                asking for money
                              </p>
                            </div>
                          </div>
                        ) : chapter.id === 4 ? (
                          <div className={styles.contentArea}>
                            {/* Chapter 4 - Scenario Layout */}
                            <div className={styles.optionCard}>
                              <div className={styles.optionBadge}>OPTION A</div>
                              <p className={styles.optionText}>
                                Treat Nidhi like any other<br />
                                donor and send a<br />
                                standard appeal
                              </p>
                            </div>

                            <div className={styles.scenarioCard}>
                              <p className={styles.scenarioLabel}>SCENARIO 4</p>
                              <p className={styles.scenarioText}>
                                A year has passed. Nidhi<br />
                                has stayed engaged and<br />
                                informed. Your annual<br />
                                crowdfunding campaign<br />
                                is live. What do you do?
                              </p>
                              <div className={styles.scenarioDecoration}>
                                <div className={styles.decorativeCirclesGrid}>
                                  <div className={styles.decorativeCircle}></div>
                                  <div className={styles.decorativeCircle}></div>
                                  <div className={styles.decorativeCircle}></div>
                                  <div className={styles.decorativeCircle}></div>
                                  <div className={styles.decorativeCircle}></div>
                                  <div className={styles.decorativeCircle}></div>
                                </div>
                                <div className={styles.decorativeDiamond}></div>
                              </div>
                            </div>

                            <div className={styles.optionCard}>
                              <div className={styles.optionBadge}>OPTION B</div>
                              <p className={styles.optionText}>
                                Invite her to give again - and<br />
                                share the cause with her<br />
                                network
                              </p>
                            </div>
                          </div>
                        ) : null}
                      </div>

                      {/* Next Chapter Button */}
                      {chapter.id < chapters.length && (
                        <button
                          className={styles.nextButton}
                          onClick={handleNextChapter}
                        >
                          <span>Next Chapter</span>
                          <span className={styles.arrow}>â†’</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </section >

      {/* Bonus Chapter Section */}
      < section className={styles.bonusSection} >
        <div className={styles.bonusContent}>
          <div className={styles.bonusLeft}>
            <div className={styles.bonusDiamond}></div>
            <p className={styles.bonusLabel}>BONUS CHAPTER</p>
            <h2 className={styles.bonusTitle}>
              No single team <span className={styles.bonusTitleHighlight}>owns</span><br />
              the donor experience
            </h2>
            <p className={styles.bonusText}>
              As supporters move across stages, effective coordination between<br />
              programme, communications, and fundraising teams enhances consistency,<br />
              continuity, and trust.
            </p>
            <div className={styles.bonusCallout}>
              <span className={styles.bonusDot}></span>
              <span className={styles.bonusCalloutText}>Check the toolkit to learn how to build this alignment.</span>
            </div>
          </div>
          <div className={styles.bonusRight}>
            <div className={styles.bonusCard}>
              <div className={styles.bonusCardInner}>
                <h3 className={styles.bonusCardTitle}>Stewardship is a<br />team effort</h3>
                <p className={styles.bonusCardText}>
                  A guide to help cross-functional<br />
                  teams collaborate to create better<br />
                  donor stewardship. The<br />
                  Fundraising Field Guide by<br />
                  Udarta.
                </p>
                <div className={styles.bonusCardPattern}>
                  <div className={styles.patternCircle} style={{ background: '#4dd4d4', top: '20%', left: '30%' }}></div>
                  <div className={styles.patternCircle} style={{ background: '#ff8da1', top: '40%', left: '50%' }}></div>
                  <div className={styles.patternCircle} style={{ background: '#b8e986', top: '60%', left: '35%' }}></div>
                  <div className={styles.patternTriangle}></div>
                </div>
                <div className={styles.bonusCardDimensions}>307.57 x 456.7</div>
              </div>
            </div>
            <div className={styles.bonusDotsPattern}>
              <div className={styles.bonusDotCircle} style={{ background: '#4dd4d4', top: '10%', left: '20%' }}></div>
              <div className={styles.bonusDotCircle} style={{ background: '#b8e986', top: '30%', right: '15%' }}></div>
              <div className={styles.bonusDotCircle} style={{ background: '#ff8da1', bottom: '20%', left: '10%' }}></div>
              <div className={styles.bonusDotCircle} style={{ background: '#4dd4d4', bottom: '10%', right: '25%' }}></div>
              <div className={styles.bonusDotCircle} style={{ background: '#b8e986', top: '50%', right: '5%' }}></div>
            </div>
          </div>
        </div>
      </section >

      {/* Footer Section */}
      < footer className={styles.footerSection} >
        <div className={styles.footerContent}>
          {/* Left Column - Logo & Description */}
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>
              <span className={styles.footerLogoIcon}>ðŸŒ±</span>
              <span className={styles.footerLogoText}>GIVING<br />TOGETHER</span>
            </div>
            <p className={styles.footerLogoSubtext}>FOUNDATION</p>
            <p className={styles.footerDescription}>
              Giving Together Foundation (GTF) is an<br />
              independent, India-led nonprofit committed to<br />
              building the infrastructure for everyday<br />
              generosity.
            </p>
            <div className={styles.footerMap}>
              <span className={styles.mapIcon}>ðŸ—ºï¸</span>
            </div>
            <p className={styles.footerLocation}>Based in India, working nationwide</p>
          </div>

          {/* Middle Column - Navigation */}
          <div className={styles.footerMiddle}>
            <div className={styles.footerNav}>
              <p className={styles.footerNavLink}>Home</p>
            </div>
            <div className={styles.footerResources}>
              <p className={styles.footerSectionTitle}>REPORTS & RESOURCES</p>
              <p className={styles.footerLink}>UDARTA:EG Field Guide</p>
              <p className={styles.footerSubLink}>Introduction</p>
              <p className={styles.footerSubLink}>Fundraising</p>
              <p className={styles.footerSubLink}>Volunteer Engagement</p>
              <p className={styles.footerLink}>UDARTA:EG Report</p>
              <p className={styles.footerLink}>Donor Motivation</p>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className={styles.footerRight}>
            <div className={styles.footerContact}>
              <p className={styles.footerSectionTitle}>EMAIL CONTACT</p>
              <p className={styles.footerEmail}>partnerships@givingtogetherfoundation.org</p>
            </div>
            <div className={styles.footerAddress}>
              <p className={styles.footerSectionTitle}>ADDRESS</p>
              <p className={styles.footerAddressText}>
                A-89, Ground Floor, Shastri Nagar, North West<br />
                Delhi, Delhi 110052, India
              </p>
            </div>
          </div>
        </div>

        {/* Get Involved Section */}
        <div className={styles.getInvolved}>
          <p className={styles.getInvolvedTitle}>GET INVOLVED</p>
          <div className={styles.getInvolvedForm}>
            <span>Hi, I'm </span>
            <input type="text" placeholder="your name" className={styles.formInput} />
            <span>, I'm from </span>
            <input type="text" placeholder="name of your organisation" className={styles.formInput} />
            <span>.</span>
          </div>
          <p className={styles.getInvolvedText}>
            I'd love to be a part of Giving Together Foundation's initiatives.
          </p>
          <div className={styles.getInvolvedEmail}>
            <span>I'm available on </span>
            <input type="email" placeholder="your email address" className={styles.formInput} />
            <span> if you need to reach out to me for updates & details.</span>
          </div>
          <button className={styles.subscribeButton}>
            Subscribe <span className={styles.subscribeArrow}>â†’</span>
          </button>
        </div>

        {/* Decorative Dots */}
        <div className={styles.footerDots}></div>
      </footer >
    </div >
  )
}


/* Page Wrapper - Scrollable */
.pageWrapper {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE/Edge */
  background: #12363B;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.pageWrapper::-webkit-scrollbar {
  display: none;
}

/* Hero Section */
.heroSection {
  width: 100%;
  min-height: 100vh;
  background: #12363B;
  position: relative;
  padding: 0;
  z-index: 1;
}

.heroHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  position: relative;
  z-index: 10;
}

.logoArea {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logoIcon {
  font-size: 24px;
}

.logoText {
  font-size: 10px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
  line-height: 1.2;
}

.headerRight {
  display: flex;
  align-items: center;
  gap: 20px;
}

.fieldGuide {
  font-size: 11px;
  font-weight: 600;
  color: #1eb59a;
  letter-spacing: 1px;
}

.menuDots {
  font-size: 20px;
  color: white;
  cursor: pointer;
}

.heroContent {
  display: flex;
  justify-content: space-between;
  padding: 40px 60px;
  position: relative;
  z-index: 5;
}

.heroLeft {
  flex: 1;
  position: relative;
  z-index: 10;
}

.heroTitle {
  margin: 0;
}

.titleLine1 {
  display: block;
  font-family: 'Zalando Sans Expanded', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 80px;
  line-height: 94%;
  letter-spacing: 0%;
  color: #ffffff;
}

.titleLine2 {
  display: block;
  font-family: 'Zalando Sans Expanded', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 80px;
  line-height: 94%;
  letter-spacing: 0%;
  background: radial-gradient(circle, #0FB8C5 0%, #93CD4D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  padding-bottom: 20px;
  /* Ensure descenders like 'g' are visible */
}

/* Hero Background SVG - Responsive & Centered */
.heroBackgroundSvg {
  position: absolute;
  top: 85vh;
  left: 50%;
  transform: translate(-50%, -45%);
  width: 100%;
  /* Reduced from 1200px to better fit standard screens */
  max-width: 95vw;
  /* Prevent horizontal scroll on smaller screens */
  height: auto;
  z-index: 1;
  /* Behind text */
  pointer-events: none;
  opacity: 1;
  transition: all 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 1400px) {
  .heroBackgroundSvg {
    width: 900px;
  }
}

@media (max-width: 1024px) {
  .heroBackgroundSvg {
    width: 700px;
    top: 87%;
    opacity: 0.6;
    /* Fade out slightly to improve text readability */
  }
}

@media (max-width: 768px) {
  .heroBackgroundSvg {
    width: 100%;
    top: 25%;
    transform: translate(-50%, 0);
    opacity: 0.2;
    /* Fade substantially on mobile */
  }
}

.heroRight {
  max-width: 380px;
  padding-top: 80px;
  position: relative;
  z-index: 10;
}

.heroSubtitle {
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-style: normal;
  /* "Medium" is usually font-weight 500 */
  font-size: 28px;
  line-height: 110%;
  letter-spacing: -0.03em;
  /* -3% of font size */
  color: white;
  margin-bottom: 20px;
}

.heroDescription {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;
  /* -2% of font size */
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  text-align: left;
}

.heroDescription em {
  color: #1eb59a;
  font-style: italic;
  font-weight: inherit;
}

.emphasis {
  color: #5dd9c4;
  font-weight: 600;
}

.startButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 177.79px;
  /* As specified */
  height: 56px;
  /* As specified */
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.4);
  /* border-width: 2px */
  border-radius: 60px;
  /* As specified */
  padding: 0 20px;
  /* Horizontal padding, height is fixed */
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 1;
}

.buttonArrow {
  background: #3dd9c4;
  color: #0d2b2e;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.startButton:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #3dd9c4;
}

.dotsPattern {
  position: absolute;
  bottom: 250px;
  left: 0;
  right: 0;
  height: 150px;
  background-image:
    radial-gradient(circle, #1eb59a 3px, transparent 3px),
    radial-gradient(circle, #3dd9c4 2px, transparent 2px),
    radial-gradient(circle, #5dd9c4 1.5px, transparent 1.5px),
    radial-gradient(circle, rgba(30, 181, 154, 0.6) 1px, transparent 1px);
  background-size: 40px 40px, 25px 25px, 15px 15px, 10px 10px;
  background-position: 0 0, 12px 12px, 6px 6px, 3px 3px;
  opacity: 0.5;
}

.heroBottom {
  text-align: center;
  padding: 60px 40px 80px;
  position: relative;
  z-index: 5;
  margin-top: 100vh;
}

.cultivationLabel {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #1eb59a;
  margin-bottom: 30px;
}

.heroBottomTitle {
  font-size: 36px;
  font-weight: 400;
  color: white;
  line-height: 1.4;
  margin-bottom: 30px;
}

.highlight {
  color: #a8e583;
}

.heroBottomDesc {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
}

.selectChapter {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

/* Chapters Section - Transform-based stacking */
.chaptersSection {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Each chapter container - absolutely positioned, stacked */
.chapterContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  will-change: transform;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Chapter states for visual feedback */
.chapterActive {
  /* Active chapter is fully visible */
  opacity: 1;
  visibility: visible;
}

.chapterPast {
  /* Past chapters stay underneath */
  pointer-events: none;
  opacity: 1;
  visibility: visible;
}

.chapterFuture {
  /* Future chapters are translated down, off-screen */
  pointer-events: none;
  opacity: 1;
  visibility: visible;
}

/* Chapter panel that fills viewport with depth shadow */
.chapterPanel {
  width: 100%;
  height: 100%;
  border-radius: 24px 24px 0 0;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 -20px 60px rgba(0, 0, 0, 0.4),
    0 -5px 20px rgba(0, 0, 0, 0.2);
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Content area inside panel */
.chapterContentSticky {
  width: 100%;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE/Edge */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.chapterContentSticky::-webkit-scrollbar {
  display: none;
}

.chaptersWrapper {
  position: relative;
  width: 100%;
}

.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #4a4a4a;
}

/* Top Bar - 4 Equal Sections */
.topBar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 2000;
  background: transparent;
  pointer-events: none;
  opacity: 0.85;
}

.topBar>* {
  pointer-events: auto;
}

/* Chapters Section */
.chaptersSection {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* Bottom Bar - 4 Equal Sections */
.bottomBar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  z-index: 2000;
  background: #4a4a4a;
}

.barSection {
  width: 25%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  top: 0;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.barSection:hover {
  opacity: 0.8;
}

.barImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}

.barText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  z-index: 10;
  white-space: nowrap;
  pointer-events: none;
  text-align: center;
}

.barLabel {
  font-size: 14px;
  font-weight: 600;
  color: white;
}

/* Chapter Panel */
.chapterPanel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Tab Section - Top area for tabs */
.tabSection {
  height: 50px;
  width: 100%;
  position: relative;
  background: transparent;
  flex-shrink: 0;
}

.tabContainer {
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
}

.horizontalBar {
  position: absolute;
  top: 0;
  height: 60px;
  background: transparent;
  border: none;
  z-index: 0;
}

.chapterTab {
  position: absolute;
  top: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s ease;
  z-index: 100;
  /* Increased z-index to ensure it sits on top */
  pointer-events: auto;
  /* Enable clicks even if parent is disabled */
}

.chapterTab:hover {
  opacity: 0.9;
}

.tabImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.tabText {
  position: relative;
  z-index: 2;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  white-space: nowrap;
}

/* Content Section - Bottom area for chapter content */
.contentSection {
  flex: 1;
  width: 100%;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
}

.chapterPanel.active {
  box-shadow: 0 -20px 80px rgba(0, 0, 0, 0.4);
}

.chapterPanel.past {
  filter: brightness(0.7);
  pointer-events: none;
}

.chapterPanel.future {
  cursor: pointer;
}

.chapterPanel.future:hover {
  transform: translateY(calc(100% - 80px)) !important;
}

/* Top Left Tab */
.topLeftTab {
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  backdrop-filter: none;
  padding: 12px 30px;
  border-radius: 0;
  font-size: 13px;
  font-weight: 600;
  color: white;
  z-index: 20;
  box-shadow: none;
}

/* Header Tab with Image */
.headerTabWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 65px;
  z-index: 15;
  cursor: pointer;
  transition: all 0.3s ease;
}

.headerTabImage {
  width: auto;
  height: 65px;
  display: block;
  object-fit: contain;
}

.headerTabText {
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
  font-size: 13px;
  font-weight: 600;
  color: #1a4d3a;
  letter-spacing: 0.5px;
  z-index: 2;
  white-space: nowrap;
}

.headerTabWrapper:hover {
  filter: brightness(1.05);
}

/* Chapter Content */
.chapterContent {
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease 0.2s;
  overflow: hidden;
}

.chapterContent.visible {
  opacity: 1;
  pointer-events: auto;
}

/* Scroll Container */
.scrollContainer {
  min-width: 100%;
  height: 100%;
  overflow: visible;
  padding: 50px 60px;
  display: flex;
  flex-direction: row;
  gap: 60px;
  align-items: center;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE/Edge */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollContainer::-webkit-scrollbar {
  display: none;
}

/* Chapter Header */
.chapterHeader {
  min-width: 600px;
  flex-shrink: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
}

.chapterLabel {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgba(26, 77, 58, 0.7);
  margin-bottom: 12px;
}

.chapterTitle {
  font-size: 48px;
  font-weight: 700;
  color: #1a4d3a;
  margin-bottom: 18px;
  line-height: 1.1;
  letter-spacing: -1px;
}

.chapterDescription {
  font-size: 14px;
  line-height: 1.6;
  color: #2d5f4e;
  font-weight: 400;
}

/* Main Content Area */
.contentArea {
  display: flex;
  gap: 60px;
  align-items: center;
  position: relative;
  padding: 0 40px;
  min-width: fit-content;
  height: 100%;
}

/* Left Column - Flowchart */
.leftColumn {
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 0 0 320px;
  min-width: 320px;
  align-self: center;
}

.flowchartItem {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
}

.diamondShape {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #e91e8c 0%, #ff6b9d 100%);
  transform: rotate(45deg);
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(233, 30, 140, 0.3);
}

.connectLine {
  position: absolute;
  left: 19px;
  top: 40px;
  width: 3px;
  height: 70px;
  background: linear-gradient(180deg, #e91e8c 0%, #f4d03f 100%);
}

.flowText {
  font-size: 15px;
  line-height: 1.5;
  color: #1a4d3a;
  font-weight: 500;
  padding-top: 5px;
}

/* Did You Know Card */
.didYouKnowCard {
  background: rgba(77, 166, 190, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 25px 30px;
  margin-top: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.smallLabel {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
}

.cardHeading {
  font-size: 22px;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
}

.cardDescription {
  font-size: 13px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.95);
}

/* Right Column */
.rightColumn {
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 0 0 380px;
  min-width: 380px;
  align-self: center;
}

.lightbulbSection {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.lightbulbIcon {
  font-size: 45px;
  flex-shrink: 0;
  filter: drop-shadow(0 4px 8px rgba(255, 193, 7, 0.4));
}

.lightbulbText {
  font-size: 15px;
  line-height: 1.6;
  color: #1a4d3a;
  font-weight: 500;
  padding-top: 8px;
}

/* Stats Card */
.statsBox {
  background: rgba(77, 166, 170, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 25px 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.emojiRow {
  font-size: 22px;
  margin-bottom: 12px;
  letter-spacing: 4px;
}

.statsHeading {
  font-size: 22px;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
}

.statsDescription {
  font-size: 13px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.95);
}

/* Vertical Divider */
.verticalLine {
  width: 3px;
  height: 350px;
  background: linear-gradient(180deg, rgba(255, 215, 0, 0.6) 0%, rgba(255, 215, 0, 0.3) 100%);
  flex-shrink: 0;
  align-self: center;
}

/* Additional Content */
.additionalContent {
  min-width: 250px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.additionalText {
  font-size: 16px;
  line-height: 1.6;
  color: #1a4d3a;
  font-weight: 600;
}

/* Chapter 2 - Scenario Layout */
.optionCard {
  min-width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px;
}

.optionBadge {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.9);
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.optionText {
  font-size: 18px;
  line-height: 1.6;
  color: white;
  font-weight: 400;
  text-align: center;
}

.scenarioCard {
  min-width: 380px;
  max-width: 380px;
  flex-shrink: 0;
  background: rgba(20, 60, 60, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.scenarioLabel {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  text-align: center;
}

.scenarioText {
  font-size: 16px;
  line-height: 1.7;
  color: white;
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px;
}

.scenarioDecoration {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.decorativeSemicircle {
  width: 140px;
  height: 70px;
  background: linear-gradient(180deg, #20a8a8 0%, #1a8888 100%);
  border-radius: 140px 140px 0 0;
}

.decorativeDiamond {
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #e91e8c 0%, #ff6b9d 100%);
  transform: rotate(45deg);
  box-shadow: 0 4px 15px rgba(233, 30, 140, 0.4);
}

/* Chapter 3 & 4 - Circle decorations */
.decorativeCircles {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
}

.decorativeCircle {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #20a8a8 0%, #1a8888 100%);
  border-radius: 50%;
}

.decorativeCirclesGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 10px;
}

.decorativeCirclesGrid .decorativeCircle {
  width: 50px;
  height: 50px;
}

/* Next Button */
.nextButton {
  position: fixed;
  bottom: 80px;
  right: 80px;
  background: linear-gradient(135deg, #1a4d3a 0%, #2d6b50 100%);
  border: none;
  border-radius: 50px;
  padding: 18px 40px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px rgba(26, 77, 58, 0.4);
  z-index: 50;
}

.nextButton:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 15px 40px rgba(26, 77, 58, 0.5);
}

.arrow {
  font-size: 20px;
  font-weight: 700;
  transition: transform 0.3s ease;
}

.nextButton:hover .arrow {
  transform: translateX(6px);
}

/* Bottom Navigation Tabs */
.bottomTabs {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 60px;
  z-index: 30;
}

.bottomTab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(26, 77, 58, 0.7);
  backdrop-filter: blur(10px);
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.bottomTab:last-child {
  border-right: none;
}

.bottomTab:hover {
  background: rgba(26, 77, 58, 0.85);
  color: white;
}

.bottomTabActive {
  background: rgba(26, 77, 58, 0.9);
  color: white;
  box-shadow: inset 0 3px 0 rgba(30, 181, 154, 0.8);
}

/* Responsive */
@media (max-width: 768px) {
  .chapterTab {
    width: 200px;
    height: 45px;
  }

  .tabTitle {
    font-size: 12px;
  }

  .chapterTitle {
    font-size: 32px;
  }

  .scrollContent {
    padding: 20px 25px;
    gap: 25px;
  }
}

/* Footer Section - Flows naturally after chapters */
.footerSection {
  width: 100%;
  background: linear-gradient(180deg, #0a2233 0%, #071a28 100%);
  padding: 60px 80px 40px;
  position: relative;
  z-index: 100;
  /* Above all chapter stacks */
}

.footerContent {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 60px;
}

.footerLeft {
  flex: 0 0 280px;
}

.footerLogo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}

.footerLogoIcon {
  font-size: 32px;
}

.footerLogoText {
  font-size: 18px;
  font-weight: 700;
  color: #3dd9c4;
  line-height: 1.1;
  letter-spacing: 2px;
}

.footerLogoSubtext {
  font-size: 10px;
  font-weight: 500;
  color: #3dd9c4;
  letter-spacing: 3px;
  margin-left: 45px;
  margin-bottom: 20px;
}

.footerDescription {
  font-size: 13px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 30px;
}

.footerMap {
  width: 150px;
  height: 80px;
  opacity: 0.3;
  margin-bottom: 10px;
}

.mapIcon {
  font-size: 60px;
  opacity: 0.5;
}

.footerLocation {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  gap: 8px;
}

.footerLocation::before {
  content: '📍';
  font-size: 14px;
}

.footerMiddle {
  flex: 0 0 250px;
}

.footerNav {
  margin-bottom: 30px;
}

.footerNavLink {
  font-size: 14px;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footerNavLink:hover {
  color: #3dd9c4;
}

.footerSectionTitle {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #3dd9c4;
  margin-bottom: 15px;
}

.footerLink {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footerLink:hover {
  color: #3dd9c4;
}

.footerSubLink {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
  margin-left: 15px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footerSubLink:hover {
  color: #3dd9c4;
}

.footerRight {
  flex: 0 0 300px;
}

.footerContact {
  margin-bottom: 30px;
}

.footerEmail {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
}

.footerAddress {
  margin-bottom: 20px;
}

.footerAddressText {
  font-size: 13px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
}

/* Get Involved Section */
.getInvolved {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 40px;
  margin-bottom: 60px;
}

.getInvolvedTitle {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #3dd9c4;
  margin-bottom: 25px;
}

.getInvolvedForm {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}

.formInput {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  font-size: 16px;
  padding: 5px 10px;
  outline: none;
  min-width: 120px;
  transition: border-color 0.3s ease;
}

.formInput::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.formInput:focus {
  border-bottom-color: #3dd9c4;
}

.getInvolvedText {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 15px;
}

.getInvolvedEmail {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}

.subscribeButton {
  background: transparent;
  border: none;
  color: #3dd9c4;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0;
  transition: all 0.3s ease;
}

.subscribeButton:hover {
  color: #5be8d5;
}

.subscribeArrow {
  width: 28px;
  height: 28px;
  background: #3dd9c4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a2233;
  font-size: 14px;
  transition: transform 0.3s ease;
}

.subscribeButton:hover .subscribeArrow {
  transform: translateX(5px);
}

.footerDots {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-image: radial-gradient(circle, #1eb59a 3px, transparent 3px),
    radial-gradient(circle, #b8e986 3px, transparent 3px),
    radial-gradient(circle, #3dd9c4 2px, transparent 2px);
  background-size: 40px 40px, 60px 60px, 25px 25px;
  background-position: 0 0, 20px 20px, 10px 10px;
  opacity: 0.6;
}


.heroBottom {
  width: 100%;
  max-width: 1200px;
  margin: 100px auto 0;
  text-align: center;
  position: relative;
  padding-bottom: 100px;
}

.cultivationLabel {
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 110%;
  letter-spacing: 0.12em;
  color: #0FB8C5;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.heroBottomTitle {
  font-family: 'Zalando Sans Expanded', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 52px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: white;
  text-align: center;
  margin-bottom: 30px;
}

.heroBottomDesc {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.7);
  max-width: 900px;
  margin: 0 auto 40px;
}

/* Chapter Selection Menu Grid */
.chapterSelectionWrapper {
  margin-top: 60px;
  width: 100%;
}

.heroDividerLine {
  width: 1px;
  height: 60px;
  border-left: 2px dashed #0FB8C5;
  margin: 0 auto 20px;
  opacity: 0.6;
}

.chapterGrid {
  width: 100vw;
  max-width: none;
  margin: 40px 0 0 calc(50% - 50vw);
  border-radius: 0;
  overflow: hidden;
  padding: 0;
  border: none;
  background-color: #12363B;
  display: flex;
  border-top: 1px solid rgba(80, 227, 194, 0.3);
}

.gridColumn {
  flex: 1;
  border-right: 1px solid rgba(80, 227, 194, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  cursor: pointer;
  transition: background 0.3s ease;
  position: relative;
}

.gridColumn:last-child {
  border-right: none;
}

.gridColumn:hover {
  background: rgba(255, 255, 255, 0.03);
}

.gridLabel {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #ff8da1;
  /* Pink accent */
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;
}

.gridTitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 28px;
  font-weight: 400;
  color: white;
  margin-bottom: 40px;
  text-align: center;
  line-height: 1.2;
}

.gridImage {
  width: 180px;
  height: 180px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.gridColumn:hover .gridImage {
  transform: scale(1.05);
}

/* Bonus Chapter Section */
.bonusSection {
  background: #0d3b3f;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

.bonusContent {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  padding: 0 40px;
}

.bonusLeft {
  flex: 1;
  position: relative;
}

.bonusDiamond {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff8da1 0%, #e91e8c 100%);
  transform: rotate(45deg);
  margin-bottom: 30px;
  position: relative;
}

.bonusDiamond::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: #0d3b3f;
  border-radius: 2px;
}

.bonusLabel {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #4dd4d4;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.bonusTitle {
  font-family: 'Zalando Sans Expanded', sans-serif;
  font-size: 48px;
  font-weight: 300;
  line-height: 1.1;
  color: #4dd4d4;
  margin-bottom: 30px;
}

.bonusTitleHighlight {
  color: white;
}

.bonusText {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}

.bonusCallout {
  display: flex;
  align-items: center;
  gap: 12px;
}

.bonusDot {
  width: 12px;
  height: 12px;
  background: #b8e986;
  border-radius: 50%;
  flex-shrink: 0;
}

.bonusCalloutText {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
}

.bonusRight {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bonusCard {
  width: 350px;
  height: 450px;
  background: linear-gradient(135deg, #b8e986 0%, #a8d975 100%);
  border-radius: 12px;
  padding: 40px 30px;
  position: relative;
  transform: rotate(-5deg);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.bonusCardInner {
  position: relative;
  z-index: 2;
}

.bonusCardTitle {
  font-family: 'Zalando Sans Expanded', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  line-height: 1.2;
}

.bonusCardText {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
}

.bonusCardPattern {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
}

.patternCircle {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  opacity: 0.9;
}

.patternTriangle {
  position: absolute;
  top: 40%;
  left: 45%;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 43px solid #ff8da1;
  transform: rotate(30deg);
}

.bonusCardDimensions {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: #e91e8c;
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 4px;
}

.bonusDotsPattern {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.bonusDotCircle {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  opacity: 0.6;
}


.gridCardContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.gridCardLabel {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #c54897;
  /* Pink/Purple accent */
  text-transform: uppercase;
  margin-bottom: 15px;
}

.gridCardTitle {
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  margin: 0 0 40px 0;
  line-height: 1.2;
}

.gridIconContainer {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Icons */

/* Card 1: Diamond */
.iconDiamondLarge {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #008080 0%, #1e5c5c 100%);
  /* Teal-ish gradient */
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.iconCenterSquare {
  width: 25px;
  height: 25px;
  background: linear-gradient(135deg, #ff8da1 0%, #d65db1 100%);
  /* Pink center */
  box-shadow: 0 0 10px rgba(214, 93, 177, 0.5);
}

/* Card 2: Cup / Semicircle */
.iconCupShape {
  width: 100px;
  height: 50px;
  background: linear-gradient(180deg, #137777 0%, #0d4d4d 100%);
  border-radius: 0 0 50px 50px;
  position: relative;
  margin-top: 25px;
  /* Offset for visual balance */
  display: flex;
  justify-content: center;
}

.iconCupShape::before {
  /* Top half illusion */
  content: '';
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 50px;
  background: linear-gradient(0deg, #189898 0%, #20b2b2 100%);
  border-radius: 0 0 50px 50px;
  transform: scaleY(-1);
  opacity: 0.8;
}

.iconCenterDiamond {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #e91e8c 0%, #ff6b9d 100%);
  transform: rotate(45deg);
  position: absolute;
  top: -10px;
  /* Center in the gap */
  z-index: 10;
  box-shadow: 0 0 10px rgba(233, 30, 140, 0.4);
}

/* Card 3: Clover */
.iconClover {
  width: 100px;
  height: 100px;
  position: relative;
}

.cloverCircle {
  width: 55px;
  height: 55px;
  background: linear-gradient(135deg, #189898 0%, #0d4d4d 100%);
  border-radius: 50%;
  position: absolute;
}

.iconCenterDiamondSmall {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #e91e8c 0%, #ff6b9d 100%);
  transform: rotate(45deg);
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -10px;
  z-index: 10;
  box-shadow: 0 0 10px rgba(233, 30, 140, 0.4);
}

/* Card 4: Grid Circles */
.iconGridCircles {
  width: 100px;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  position: relative;
}

.gridDotCircle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #189898 0%, #0d4d4d 100%);
}

.iconCenterDiamondLarge {
  width: 25px;
  height: 25px;
  background: linear-gradient(135deg, #ff8da1 0%, #d65db1 100%);
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -12.5px;
  /* Half height */
  margin-left: -12.5px;
  /* Half width */
  z-index: 10;
  box-shadow: 0 0 15px rgba(214, 93, 177, 0.6);
}