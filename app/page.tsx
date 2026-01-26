'use client';

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import styles from './page.module.css'
import OptionContent from '../components/OptionContent'
import Chapter3OptionB from '../components/Chapter3OptionB'
import TabsSection from '../components/TabsSection'


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
    gradient: 'linear-gradient(90deg, #0FB8C5 0%, #93CD4D 100%)',
    tabGradient: 'linear-gradient(135deg, #1eb59a 0%, #16a085 100%)',
    gridImage: '/assets/c1.svg'
  },
  {
    id: 2,
    title: 'II. First Donation',
    subtitle: 'Building Connections',
    tabImage: '/assets/Tab 2.png',
    contentImage: '/assets/2.png',
    gradient: 'linear-gradient(45deg, #D349AE 0%, #0FB8C5 50%, #1BD5E4 100%)',
    tabGradient: 'linear-gradient(135deg, #4dd4d4 0%, #3ababa 100%)',
    gridImage: '/assets/c2.svg'
  },
  {
    id: 3,
    title: 'III. Stewarding Donors',
    subtitle: 'Nurturing relationships',
    tabImage: '/assets/Tab 3.png',
    contentImage: '/assets/3.png',
    // gradient: 'linear-gradient(180deg, #0FB8C5 0%, #13D9E8 100%)',
    gradient: 'radial-gradient(circle at bottom right, #FFCD86 10% , #13D9E8 )',
    tabGradient: 'linear-gradient(180deg, #0FB8C5 0%, #13D9E8 100%)',
    gridImage: '/assets/c3.svg'
  },
  {
    id: 4,
    title: 'IV. Donors to Champions',
    subtitle: 'Deepening involvement',
    tabImage: '/assets/Tab 4.png',
    contentImage: '/assets/4.png',
    gradient: 'linear-gradient(180deg, #FFEF3D 0%, #DCD647 20%, #C9CD33 40%, #8DA806 60%, #86A401 80%, #315900 100%)',
    tabGradient: 'linear-gradient(180deg, #315900 0%, #B0D313 100%)',
    gridImage: '/assets/c4.svg'
  }
]

// Animation Variants for the "Choose Option" text
const ctaVariants = {
  rest: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

// Animation for right arrow (Option A)
const arrowVariants = {
  rest: { x: 0 },
  hover: {
    x: 5,
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const,
      duration: 0.6
    }
  }
};

// Animation for left arrow (Option B)
const arrowLeftVariants = {
  rest: { x: 0 },
  hover: {
    x: -5,
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const,
      duration: 0.6
    }
  }
};

export default function Home() {
  const [activeChapter, setActiveChapter] = useState(1)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null)
  const [isOptionAHovered, setIsOptionAHovered] = useState(false)
  const [isOptionBHovered, setIsOptionBHovered] = useState(false)
  const [isCh2OptionAHovered, setIsCh2OptionAHovered] = useState(false)
  const [isCh2OptionBHovered, setIsCh2OptionBHovered] = useState(false)
  const [isCh3OptionBHovered, setIsCh3OptionBHovered] = useState(false)
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([])
  const activeChapterRef = useRef(activeChapter) // To track active chapter without dependency issues
  const chaptersSectionRef = useRef<HTMLDivElement>(null)
  const isScrollingRef = useRef(false)
  const scrollAccumulatorRef = useRef(0)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const scrollContainerRefs = useRef<(HTMLDivElement | null)[]>([])
  // Scroll Reference for Bonus Section
  const bonusSectionRef = useRef<HTMLDivElement>(null);

  // State for Custom Grid Cursor
  const [gridCursorPos, setGridCursorPos] = useState({ x: 0, y: 0 });
  const [showGridCursor, setShowGridCursor] = useState(false);

  useEffect(() => {
    activeChapterRef.current = activeChapter

    // Reset scroll position to left when chapter changes
    const newScrollContainer = scrollContainerRefs.current[activeChapter - 1]
    if (newScrollContainer) {
      newScrollContainer.scrollLeft = 0
    }
    setScrollProgress(0)

    // Reset selected option after chapter transition animation completes
    // Delay to avoid visual flash during transition
    const resetTimeout = setTimeout(() => {
      setSelectedOption(null)
    }, 100) // Small delay to let transition start

    return () => clearTimeout(resetTimeout)
  }, [activeChapter])

  // Navigate to next chapter
  const handleNextChapter = () => {
    if (activeChapter < chapters.length) {
      setActiveChapter(activeChapter + 1)
    }
  }

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




  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Header */}
        <header className={styles.heroHeader}>
          <div className={styles.logoArea}>
            <img src="/assets/logo_name.svg" alt="Giving Together Foundation" className={styles.logoImage} />
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

        <img
          src="/assets/hero background.svg"
          alt="Donor Gardening Tree"
          className={styles.heroBackgroundSvg}
        />

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

            <div
              className={styles.chapterGrid}
              style={{ cursor: 'none' }}
              onMouseEnter={() => setShowGridCursor(true)}
              onMouseLeave={() => setShowGridCursor(false)}
              onMouseMove={(e) => {
                setGridCursorPos({ x: e.clientX, y: e.clientY });
              }}
            >
              {/* Custom Cursor Element */}
              {showGridCursor && (
                <img
                  src="/assets/grid_hover.svg"
                  alt=""
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    transform: `translate(${gridCursorPos.x - 90}px, ${gridCursorPos.y - 28}px)`, // Centered
                    pointerEvents: 'none',
                    zIndex: 9999,
                    width: '181px',
                    height: '57px',
                  }}
                />
              )}
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

      <section className={styles.chaptersSection} ref={chaptersSectionRef}>
        {/* Fixed Top Navigation */}
        <div className={styles.topNavigation}>
          <div className={styles.navLeft}>
            <span className={styles.navArrow}>↑</span>
            <span className={styles.navText}>Back to all chapters</span>
            <span className={styles.navDivider}>|</span>
            <span className={styles.navText}>View all toolkits</span>
          </div>
        </div>

        {chapters.map((chapter, index) => {
          const isActive = activeChapter === chapter.id
          const isPast = activeChapter > chapter.id
          const isFuture = activeChapter < chapter.id

          return (
            <div
              key={chapter.id}
              ref={(el) => { chapterRefs.current[index] = el }}
              className={`${styles.chapterContainer} ${isActive ? styles.chapterActive : ''} ${isPast ? styles.chapterPast : ''} ${isFuture ? styles.chapterFuture : ''}`}
              style={{
                zIndex: chapter.id * 10,
                transform: isFuture ? 'translateY(100%)' : 'translateY(0)',
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div
                className={styles.chapterPanel}
                style={{
                  background: chapter.gradient
                }}
              >
                {/* Content Section */}
                <div className={styles.contentSection}>
                  <div
                    className={styles.chapterContentSticky}
                    ref={(el) => { scrollContainerRefs.current[index] = el }}
                  >
                    <div className={styles.scrollContainer}>

                      {/* Chapter 1 Specific Layout */}
                      {chapter.id === 1 ? (
                        selectedOption === 'A' ? (
                          <OptionContent
                            chapterTitle="CHAPTER I: NETWORK EXPANSION"
                            chapterSubtitle="Before seeking support, understand who's already in your circle. This chapter helps you map your existing network so fundraising starts with relationships, not cold outreach."
                            backgroundColor="linear-gradient(180deg, #63C76B 0%, #17BABD 100%)"
                            onBack={() => setSelectedOption(null)}
                            onNext={handleNextChapter}

                            contentCards={[
                              {
                                id: 1,
                                type: 'text',
                                floatingText: "You may reach many people, but responses are scattered. Most donations are small, one-time, and disconnected.",
                                decorationType: 'flower',
                                label: 'DID YOU KNOW?',
                                title: 'It costs 10x more',
                                content: 'To acquire a new donor than continuing a relationship with someone who already believes in your work.'
                              },
                              {
                                id: 2,
                                type: 'text',
                                floatingText: "Instead, if you tapped into your existing network you will reach the people that care about the cause. The appeal feels more personal, more trusted.",
                                decorationType: 'circle',
                                label: '',
                                title: '',
                                content: '',
                                // Nested stat box below the floating text
                                showStatBelow: true,
                                statLabel: 'UDARTA:EG STUDY SHOWS',
                                stat: '60% of nonprofits',
                                statDescription: 'find outreach through existing networks to be their most effective way of reaching new supporters'
                              },
                              {
                                id: 3,
                                type: 'text',
                                floatingText: "We've make a template to simplify mapping your network",
                                decorationType: 'bar',
                                label: '',
                                title: '',
                                content: ''
                              },
                              {
                                id: 4,
                                type: 'toolkit',
                                floatingText: "",
                                decorationType: undefined,
                                toolkitTitle: 'Network Mapping',
                                toolkitDescription: 'A simple way to identify and activate people already connected to your cause',
                                toolkitImage: '/assets/toolkit_card.svg'
                              }
                            ]}
                          />
                        ) : selectedOption === 'B' ? (
                          <OptionContent
                            chapterTitle="CHAPTER I: NETWORK EXPANSION"
                            chapterSubtitle="Before seeking support, understand who's already in your circle. This chapter helps you map your existing network so fundraising starts with relationships, not cold outreach."
                            backgroundColor="linear-gradient(180deg, #63C76B 0%, #17BABD 100%)"
                            onBack={() => setSelectedOption(null)}
                            onNext={handleNextChapter}

                            contentCards={[
                              {
                                id: 1,
                                type: 'text',
                                floatingText: "Yes! You will reach the people that care about the cause. The appeal feels more personal, more trusted.",
                                decorationType: 'flower',
                                label: 'UDARTA:EG STUDY SHOWS',
                                title: '60% of nonprofits',
                                content: 'find outreach through existing networks to be their most effective way of reaching new supporters'
                              },
                              {
                                id: 2,
                                type: 'text',
                                floatingText: "We've make a template to simplify mapping your network",
                                decorationType: 'bar',
                                label: '',
                                title: '',
                                content: ''
                              },
                              {
                                id: 3,
                                type: 'toolkit',
                                floatingText: "",
                                decorationType: undefined,
                                toolkitTitle: 'Network Mapping',
                                toolkitDescription: 'A simple way to identify and activate people already connected to your cause',
                                toolkitImage: '/assets/toolkit_card.svg'
                              }
                            ]}
                          />
                        ) : (
                          <div className={styles.chapter1Wrapper}>
                            <div className={styles.chapter1Header}>
                              <h4 className={styles.ch1Label}>CHAPTER I: NETWORK EXPANSION</h4>
                              <h1 className={styles.ch1Title}>
                                Before seeking support, understand who's already in your circle.<br />
                                This chapter helps you map your existing network so fundraising starts<br />
                                with relationships, not cold outreach.
                              </h1>
                              <p className={styles.ch1Instruction}>Select one of the two options to reveal the right way</p>
                            </div>


                            <div className={styles.scenarioContainer}>
                              {/* Option A */}
                              <motion.div
                                className={styles.optionColumnLeft}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onClick={() => setSelectedOption('A')}
                                onMouseEnter={(e) => {
                                  setIsOptionAHovered(true);
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) {
                                    card.style.transformOrigin = 'bottom left';
                                    card.style.transform = 'rotate(-15deg)';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  setIsOptionAHovered(false);
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel}>OPTION A</span>
                                <p className={styles.optionDesc}>
                                  Find new donors and<br />
                                  send appeal to random<br />
                                  people
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    color: '#1a4d3a',
                                    fontWeight: 500
                                  }}
                                >
                                  <motion.div variants={arrowVariants}>
                                    <ArrowRight style={{ width: '20px', height: '20px' }} />
                                  </motion.div>
                                  <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '12px'
                                  }}>Choose Option</span>
                                </motion.div>
                              </motion.div>

                              {/* Center Card - Dark */}
                              <div className={styles.centerCard}>
                                <img
                                  src="/assets/chapter_1_card.svg"
                                  alt="Scenario 1 Card"
                                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                              </div>

                              {/* Hover Decorations for Option A */}
                              <AnimatePresence>
                                {isOptionAHovered && (
                                  <>
                                    <motion.img
                                      key="flower-leftmost"
                                      src="/assets/chapter_1/hover_left_flower_leftmost_ch1.svg"
                                      alt=""
                                      className={styles.hoverFlowerLeftmost}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 20 }}
                                      transition={{ duration: 0.4 }}
                                    />
                                    <motion.img
                                      key="flower-middle"
                                      src="/assets/chapter_1/hover_left_flower_middle_ch1.svg"
                                      alt=""
                                      className={styles.hoverFlowerMiddle}
                                      initial={{ opacity: 0, y: 15 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 15 }}
                                      transition={{ duration: 0.4, delay: 0.1 }}
                                    />
                                    <motion.img
                                      key="flower-rightmost"
                                      src="/assets/chapter_1/hover_left_flower_rightmost_ch1.svg"
                                      alt=""
                                      className={styles.hoverFlowerRightmost}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.15 }}
                                    />
                                    <motion.img
                                      key="petal"
                                      src="/assets/chapter_1/hover_left_petal_chapter1.svg"
                                      alt=""
                                      className={styles.hoverPetal}
                                      initial={{ opacity: 0, rotate: -20, y: -10 }}
                                      animate={{ opacity: 1, rotate: 0, y: 0 }}
                                      exit={{ opacity: 0, rotate: -20, y: -10 }}
                                      transition={{ duration: 0.4, delay: 0.05 }}
                                    />
                                    <motion.img
                                      key="fly"
                                      src="/assets/chapter_1/fly_left_optionA.svg"
                                      alt=""
                                      className={styles.hoverFly}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -20 }}
                                      transition={{ duration: 0.5, delay: 0.2 }}
                                    />
                                  </>
                                )}
                              </AnimatePresence>

                              {/* Option B */}
                              <motion.div
                                className={styles.optionColumnRight}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onClick={() => setSelectedOption('B')}
                                onMouseEnter={(e) => {
                                  setIsOptionBHovered(true);
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) {
                                    card.style.transformOrigin = 'bottom right';
                                    card.style.transform = 'rotate(15deg)';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  setIsOptionBHovered(false);
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel}>OPTION B</span>
                                <p className={styles.optionDesc}>
                                  Tap into your existing<br />
                                  network – Connections<br />
                                  of volunteers,<br />
                                  champions & donors
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    color: '#1a4d3a',
                                    fontWeight: 500,
                                    flexDirection: 'row-reverse'
                                  }}
                                >
                                  <motion.div variants={arrowLeftVariants}>
                                    <ArrowLeft style={{ width: '20px', height: '20px' }} />
                                  </motion.div>
                                  <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '12px'
                                  }}>Choose Option</span>
                                </motion.div>
                              </motion.div>

                              {/* Option B Hover Decorations */}
                              <AnimatePresence>
                                {isOptionBHovered && (
                                  <>
                                    <motion.img
                                      key="right-flower-top"
                                      src="/assets/chapter_1/hover_right_flower_1_top_ch1.svg"
                                      alt=""
                                      className={styles.hoverRightFlowerTop}
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 20 }}
                                      transition={{ duration: 0.4 }}
                                    />
                                    <motion.img
                                      key="right-flower-bottom"
                                      src="/assets/chapter_1/hover_right_flower_2_right_ch1.svg"
                                      alt=""
                                      className={styles.hoverRightFlowerBottom}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 20 }}
                                      transition={{ duration: 0.4, delay: 0.1 }}
                                    />
                                    <motion.img
                                      key="right-fly"
                                      src="/assets/chapter_1/fly_left_optionA.svg"
                                      alt=""
                                      className={styles.hoverRightFly}
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 20 }}
                                      transition={{ duration: 0.5, delay: 0.15 }}
                                    />
                                  </>
                                )}
                              </AnimatePresence>
                            </div>

                            {/* Tabs Section Removed from here */}
                          </div>
                        )
                      ) : chapter.id === 2 ? (
                        // Chapter 2 Specific Layout
                        selectedOption === 'A' ? (
                          <OptionContent
                            chapterTitle="CHAPTER II: FIRST DONATION"
                            chapterSubtitle="A first donation is more than a transaction. This chapter focuses on how timely acknowledgment and simple follow-up can turn a first gift into the beginning of a relationship."
                            backgroundColor="linear-gradient(225deg, #1BD5E4, #0FB8C5, #D349AE)"
                            onBack={() => setSelectedOption(null)}
                            onNext={handleNextChapter}
                            contentCards={[
                              {
                                id: 1,
                                type: 'text',
                                floatingText: "You thank Nidhi within two days. She receives an 80G receipt and a clear message of appreciation.",
                                decorationType: 'circle',
                                label: '',
                                title: '',
                                content: '',
                                // Nested stat box
                                showStatBelow: true,
                                statLabel: 'UDARTA:EG STUDY SHOWS',
                                stat: 'Acknowledging donations leads to a 20.3 percentage point increase in funds raised from everyday givers.',
                                statDescription: '',
                                statBoxTransparent: true,
                                showStatIcons: false
                              },
                              {
                                id: 2,
                                type: 'text',
                                floatingText: (
                                  <>
                                    You didn&apos;t just raise funds.<br />
                                    You began a relationship!
                                    <br /><br />
                                    We created a database template<br />
                                    to help nonprofits to record,<br />
                                    remember, and build continuity<br />
                                    from the first gift.
                                  </>
                                ),
                                decorationType: 'bar',
                                label: '',
                                title: '',
                                content: '',
                                transparentBackground: true
                              },
                              {
                                id: 3,
                                type: 'toolkit',
                                floatingText: "",
                                decorationType: undefined,
                                toolkitLabel: 'TOOLKIT #1',
                                toolkitTitle: 'Donor Database',
                                toolkitDescription: 'How to record, remember, and build continuity from the first gift.',
                                toolkitImage: '/assets/toolkit_card.svg',
                                toolkitInnerImage: '/assets/chapter_2_toolkit.svg'
                              }
                            ]}
                          />
                        ) : selectedOption === 'B' ? (
                          <OptionContent
                            chapterTitle="CHAPTER II: FIRST DONATION"
                            chapterSubtitle="A first donation is more than a transaction. This chapter focuses on how timely acknowledgment and simple follow-up can turn a first gift into the beginning of a relationship."
                            backgroundColor="linear-gradient(225deg, #1BD5E4, #0FB8C5, #D349AE)"
                            onBack={() => setSelectedOption(null)}
                            onNext={handleNextChapter}
                            flowerDecorImage="/assets/chapter_2_option_A.svg"
                            firstCardOffset="140px"
                            contentCards={[
                              {
                                id: 1,
                                type: 'text',
                                floatingText: "You accepted the donation but didn't follow up.",
                                decorationType: 'circle',
                                label: '',
                                title: '',
                                content: 'Without engagement, the donor relationship ends here.'
                              }
                            ]}
                          />
                        ) : (
                          // Chapter 2 Default View
                          <div className={styles.chapter1Wrapper} style={{ justifyContent: 'flex-start' }}>
                            <div className={styles.chapter1Header} style={{ marginBottom: '40px' }}>
                              <h4 className={styles.ch1Label}>CHAPTER II: FIRST DONATION</h4>
                              <h1 className={styles.ch1Title}>
                                A first donation is more than a transaction. This chapter focuses on<br />
                                how timely acknowledgment and simple follow-up can turn a first gift<br />
                                into the beginning of a relationship.
                              </h1>
                              <p className={styles.ch1Instruction}>Select one of the two options to reveal the right way</p>
                            </div>


                            <div className={styles.scenarioContainer}>
                              {/* Option A */}
                              <motion.div
                                className={styles.optionColumnLeft}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onClick={() => setSelectedOption('A')}
                                onMouseEnter={(e) => {
                                  setIsCh2OptionAHovered(true);
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) {
                                    card.style.transformOrigin = 'bottom left';
                                    card.style.transform = 'rotate(-15deg)';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  setIsCh2OptionAHovered(false);
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#ffffff' }}>OPTION A</span>
                                <p className={styles.optionDesc}>
                                  Record her details in<br />
                                  your database and<br />
                                  acknowledge her<br />
                                  support
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    color: '#ffffff',
                                    fontWeight: 500
                                  }}
                                >
                                  <motion.div variants={arrowVariants}>
                                    <ArrowRight style={{ width: '20px', height: '20px' }} />
                                  </motion.div>
                                  <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '12px'
                                  }}>Choose Option</span>
                                </motion.div>
                              </motion.div>

                              {/* Center Card - Dark */}
                              <div className={styles.centerCard}>
                                <img
                                  src="/assets/chapter_2_card.svg"
                                  alt="Scenario 2 Card"
                                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                              </div>

                              {/* Option B */}
                              <motion.div
                                className={styles.optionColumnRight}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onClick={() => setSelectedOption('B')}
                                onMouseEnter={(e) => {
                                  setIsCh2OptionBHovered(true);
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) {
                                    card.style.transformOrigin = 'bottom right';
                                    card.style.transform = 'rotate(15deg)';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  setIsCh2OptionBHovered(false);
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#ffffff' }}>OPTION B</span>
                                <p className={styles.optionDesc}>
                                  No thank you or follow-<br />
                                  ups. Accept the<br />
                                  donation and move on.
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    color: '#ffffff',
                                    fontWeight: 500,
                                    flexDirection: 'row-reverse'
                                  }}
                                >
                                  <motion.div variants={arrowLeftVariants}>
                                    <ArrowLeft style={{ width: '20px', height: '20px' }} />
                                  </motion.div>
                                  <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '12px'
                                  }}>Choose Option</span>
                                </motion.div>
                              </motion.div>

                              {/* Chapter 2 Option A Hover Decorations */}
                              <AnimatePresence>
                                {isCh2OptionAHovered && (
                                  <>
                                    <motion.img
                                      key="ch2-lamp"
                                      src="/assets/chapter2/hover_left_lamp_ch2.svg"
                                      alt=""
                                      className={styles.ch2HoverLamp}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 20 }}
                                      transition={{ duration: 0.4 }}
                                    />
                                    <motion.img
                                      key="ch2-fly"
                                      src="/assets/chapter2/hover_fly_left.svg"
                                      alt=""
                                      className={styles.ch2HoverFly}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -20 }}
                                      transition={{ duration: 0.5, delay: 0.1 }}
                                    />
                                    <motion.img
                                      key="ch2-empty-bubble"
                                      src="/assets/chapter2/empty_bubble.svg"
                                      alt=""
                                      className={styles.ch2HoverEmptyBubble}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.15 }}
                                    />
                                    <motion.img
                                      key="ch2-filled-bubble"
                                      src="/assets/chapter2/filled_bubble.svg"
                                      alt=""
                                      className={styles.ch2HoverFilledBubble}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.2 }}
                                    />
                                    <motion.img
                                      key="ch2-image-left"
                                      src="/assets/chapter2/hover_image_left_ch2.svg"
                                      alt=""
                                      className={styles.ch2HoverImageLeft}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 20 }}
                                      transition={{ duration: 0.4, delay: 0.05 }}
                                    />
                                    <motion.img
                                      key="ch2-image-right"
                                      src="/assets/chapter2/hover_image_right_ch2.svg"
                                      alt=""
                                      className={styles.ch2HoverImageRight}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 20 }}
                                      transition={{ duration: 0.4, delay: 0.1 }}
                                    />
                                    <motion.img
                                      key="ch2-empty-bubble-2"
                                      src="/assets/chapter2/empty_bubble.svg"
                                      alt=""
                                      className={styles.ch2HoverEmptyBubble2}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.25 }}
                                    />
                                    <motion.img
                                      key="ch2-filled-bubble-2"
                                      src="/assets/chapter2/filled_bubble.svg"
                                      alt=""
                                      className={styles.ch2HoverFilledBubble2}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.3 }}
                                    />
                                  </>
                                )}
                              </AnimatePresence>

                              {/* Chapter 2 Option B Hover Decorations */}
                              <AnimatePresence>
                                {isCh2OptionBHovered && (
                                  <>
                                    <motion.img
                                      key="ch2b-fly"
                                      src="/assets/chapter2/hover_fly_right_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFly}
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 20 }}
                                      transition={{ duration: 0.5, delay: 0.1 }}
                                    />
                                    <motion.img
                                      key="ch2b-petal1"
                                      src="/assets/chapter2/hover_right_flower_petal1_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFlowerPetal1}
                                      initial={{ opacity: 0, y: -20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -20 }}
                                      transition={{ duration: 0.4 }}
                                    />
                                    <motion.img
                                      key="ch2b-petal2"
                                      src="/assets/chapter2/hover_right_flower_petal2_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFlowerPetal2}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.15 }}
                                    />
                                    <motion.img
                                      key="ch2b-petal3"
                                      src="/assets/chapter2/hover_right_flower_petal3_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFlowerPetal3}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.2 }}
                                    />
                                    <motion.img
                                      key="ch2b-flower1"
                                      src="/assets/chapter2/hover_right_flower1_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFlower1}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 20 }}
                                      transition={{ duration: 0.4, delay: 0.05 }}
                                    />
                                    <motion.img
                                      key="ch2b-halfbottom"
                                      src="/assets/chapter2/hover_right_halfbottom_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightHalfBottom}
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      transition={{ duration: 0.3, delay: 0.1 }}
                                    />
                                    <motion.img
                                      key="ch2b-halftop"
                                      src="/assets/chapter2/hover_right_halftop_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightHalfTop}
                                      initial={{ opacity: 0, y: -15 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -15 }}
                                      transition={{ duration: 0.3, delay: 0.15 }}
                                    />
                                    <motion.img
                                      key="ch2b-stick"
                                      src="/assets/chapter2/hover_right_stick_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightStick}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 20 }}
                                      transition={{ duration: 0.4, delay: 0.1 }}
                                    />
                                  </>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        )

                      ) : chapter.id === 3 ? (
                        // Chapter 3 Specific Layout
                        selectedOption === 'A' ? (
                          <div className={styles.ch3OptionAWrapper}>
                            {/* Top Navigation */}
                            <div className={styles.ch3NavContainer}>
                              <button className={styles.ch3NavButton}>↑ Back to all chapters</button>
                              <div className={styles.ch3NavDivider}>|</div>
                              <button className={styles.ch3NavButton}>View all toolkits</button>
                            </div>

                            {/* Main Content */}
                            <div className={styles.ch3OptionAContent}>
                              <h4 className={styles.ch3OptionALabel}>CHAPTER III: STEWARDING DONORS</h4>
                              <h1 className={styles.ch3OptionATitle}>
                                Staying connected after the first gift builds trust. This chapter focuses<br />
                                on how consistent, non-ask engagement helps donors feel involved<br />
                                and valued.
                              </h1>

                              {/* Back to Scenario Button - Centered */}
                              <button
                                className={styles.ch3CenteredBackBtn}
                                onClick={() => setSelectedOption(null)}
                              >
                                ← Back to scenario
                              </button>
                            </div>
                          </div>
                        ) : selectedOption === 'B' ? (
                          <Chapter3OptionB onBack={() => setSelectedOption(null)} />
                        ) : (
                          // Chapter 3 Default View
                          <div className={styles.chapter1Wrapper} style={{ justifyContent: 'flex-start' }}>
                            <div className={styles.chapter1Header} style={{ marginBottom: '40px' }}>
                              <h4 className={styles.ch1Label}>CHAPTER III: STEWARDING DONORS</h4>
                              <h1 className={styles.ch1Title}>
                                Staying connected after the first gift builds trust. This chapter focuses<br />
                                on how consistent, non-ask engagement helps donors feel involved<br />
                                and valued.
                              </h1>
                              <p className={styles.ch1Instruction}>Select one of the two options to reveal the right way</p>
                            </div>


                            <div className={styles.scenarioContainer}>
                              {/* Option A */}
                              <motion.div
                                className={styles.optionColumnLeft}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onClick={() => setSelectedOption('A')}
                                onMouseEnter={(e) => {
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) {
                                    card.style.transformOrigin = 'bottom left';
                                    card.style.transform = 'rotate(-15deg)';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#1a4d3a' }}>OPTION A</span>
                                <p className={styles.optionDesc} style={{ color: '#1a4d3a' }}>
                                  Reach out only when<br />
                                  you need funds again
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    color: '#1a4d3a',
                                    fontWeight: 500
                                  }}
                                >
                                  <motion.div variants={arrowVariants}>
                                    <ArrowRight style={{ width: '20px', height: '20px' }} />
                                  </motion.div>
                                  <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '12px'
                                  }}>Choose Option</span>
                                </motion.div>
                              </motion.div>

                              {/* Center Card */}
                              <div className={styles.centerCard}>
                                <img
                                  src="/assets/chapter_3_card.svg"
                                  alt="Scenario 3 Card"
                                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                              </div>

                              {/* Option B */}
                              <motion.div
                                className={styles.optionColumnRight}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onClick={() => setSelectedOption('B')}
                                onMouseEnter={(e) => {
                                  setIsCh3OptionBHovered(true);
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) {
                                    card.style.transformOrigin = 'bottom right';
                                    card.style.transform = 'rotate(15deg)';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  setIsCh3OptionBHovered(false);
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#1a4d3a' }}>OPTION B</span>
                                <p className={styles.optionDesc} style={{ color: '#1a4d3a' }}>
                                  Share impact and invite<br />
                                  her to engage. Updates,<br />
                                  events, conversations –<br />
                                  without asking for<br />
                                  money
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    color: '#1a4d3a',
                                    fontWeight: 500,
                                    flexDirection: 'row-reverse'
                                  }}
                                >
                                  <motion.div variants={arrowLeftVariants}>
                                    <ArrowLeft style={{ width: '20px', height: '20px' }} />
                                  </motion.div>
                                  <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '12px'
                                  }}>Choose Option</span>
                                </motion.div>
                              </motion.div>

                              {/* Chapter 3 Option B Hover Decorations */}
                              <AnimatePresence>
                                {isCh3OptionBHovered && (
                                  <>
                                    <motion.img
                                      key="ch3b-fly"
                                      src="/assets/chapter3/hover_fly_ch3.svg"
                                      alt=""
                                      className={styles.ch3RightFly}
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 20 }}
                                      transition={{ duration: 0.5, delay: 0.1 }}
                                    />
                                    <motion.img
                                      key="ch3b-right-flower"
                                      src="/assets/chapter3/hover_right_flower_ch3.svg"
                                      alt=""
                                      className={styles.ch3RightFlower}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 20 }}
                                      transition={{ duration: 0.4, delay: 0.05 }}
                                    />
                                    <motion.img
                                      key="ch3b-diamond"
                                      src="/assets/chapter3/hover_diamond_bottom_ch3.svg"
                                      alt=""
                                      className={styles.ch3DiamondBottom}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.15 }}
                                    />
                                    <motion.img
                                      key="ch3b-topsection"
                                      src="/assets/chapter3/hover_topsection_ch3.svg"
                                      alt=""
                                      className={styles.ch3TopSection}
                                      initial={{ opacity: 0, y: -20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -20 }}
                                      transition={{ duration: 0.4 }}
                                    />
                                    <motion.img
                                      key="ch3b-left-flower"
                                      src="/assets/chapter3/hover_left_flower_ch3.svg"
                                      alt=""
                                      className={styles.ch3LeftFlower}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 20 }}
                                      transition={{ duration: 0.4, delay: 0.1 }}
                                    />
                                  </>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        )
                      ) : chapter.id === 4 ? (
                        // Chapter 4 Specific Layout
                        selectedOption === 'A' ? (
                          // Chapter 4 Option A - Horizontally Scrollable Content
                          <div className={styles.ch4OptionAWrapper}>
                            {/* Back to Scenario Button */}
                            <button
                              className={styles.backToScenarioBtn}
                              onClick={() => setSelectedOption(null)}
                            >
                              ← Back to scenario
                            </button>

                            {/* Horizontally Scrollable Container */}
                            <div className={styles.ch4ScrollContainer}>
                              {/* Section 1: You've unlocked growth! */}
                              <div className={styles.ch4Section1}>
                                {/* Balloon decorations */}
                                <div className={styles.ch4BalloonDecor}>
                                  <div className={styles.ch4BalloonLarge}></div>
                                  <div className={styles.ch4BalloonSmall}></div>
                                  <div className={styles.ch4BalloonLine}></div>
                                </div>

                                <div className={styles.ch4GrowthContent}>
                                  <h2 className={styles.ch4GrowthTitle}>You've unlocked growth!</h2>
                                  <p className={styles.ch4GrowthDesc}>
                                    Nidhi increases her contribution to ₹4,000 and<br />
                                    shares the campaign with her network. A friend<br />
                                    donates ₹2,000 based on her recommendation.
                                  </p>
                                </div>

                                {/* Circle decorations */}
                                <div className={styles.ch4CircleDecor1}></div>
                                <div className={styles.ch4CircleDecor2}></div>
                              </div>

                              {/* Vertical Divider Bar */}
                              <div className={styles.ch4VerticalBar}></div>

                              {/* Section 2: WHAT CHANGES INTERNALLY */}
                              <div className={styles.ch4Section2}>
                                {/* Decorative bars */}
                                <div className={styles.ch4DecorBars}>
                                  <div className={styles.ch4DecorBar1}></div>
                                  <div className={styles.ch4DecorBar2}></div>
                                  <div className={styles.ch4DecorBar3}></div>
                                </div>

                                <div className={styles.ch4ChangesContent}>
                                  <p className={styles.ch4SectionLabel}>WHAT CHANGES INTERNALLY</p>
                                  <h3 className={styles.ch4ChangesTitle}>
                                    Nidhi moves into a High Potential<br />
                                    donor segment.
                                  </h3>

                                  <div className={styles.ch4BulletList}>
                                    <div className={styles.ch4BulletItem}>
                                      <span className={styles.ch4BulletDot} style={{ background: 'linear-gradient(180deg, #0FB8C5, #1BD5E4)' }}></span>
                                      <p>Her repeat donation improves<br />retention metrics</p>
                                    </div>
                                    <div className={styles.ch4BulletItem}>
                                      <span className={styles.ch4BulletDot} style={{ background: 'linear-gradient(180deg, #93CD4D, #B8E986)' }}></span>
                                      <p>Network referrals expand reach without<br />cold outreach</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Section 3: WHY THIS WORKS */}
                              <div className={styles.ch4Section3}>
                                {/* Decorative diamond/arrow */}
                                <div className={styles.ch4DiamondDecor}>
                                  <img src="/assets/chapter4/decorative_arrows.svg" alt="" className={styles.ch4Arrows} />
                                </div>

                                <div className={styles.ch4WhyContent}>
                                  <p className={styles.ch4SectionLabel}>WHY THIS WORKS</p>
                                  <h3 className={styles.ch4WhyTitle}>
                                    Donors who feel valued don't<br />
                                    just give more – they bring<br />
                                    others with them.
                                  </h3>

                                  <div className={styles.ch4ToolkitIntro}>
                                    <span className={styles.ch4YellowDiamond}></span>
                                    <p>
                                      We have two toolkits to help<br />
                                      you track donor engagement<br />
                                      and how to grow your network
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Section 4: Toolkit Cards */}
                              <div className={styles.ch4ToolkitSection}>
                                {/* Toolkit Card 1 */}
                                <div className={styles.ch4ToolkitCard}>
                                  <img
                                    src="/assets/toolkit_6.svg"
                                    alt="Toolkit #6"
                                    className={styles.ch4ToolkitImage}
                                  />
                                  <div className={styles.ch4ToolkitContent}>
                                    <p className={styles.ch4ToolkitLabel}>TOOLKIT #6</p>
                                    <h4 className={styles.ch4ToolkitTitle}>Donor Engagement<br />Dashboard</h4>
                                    <p className={styles.ch4ToolkitDesc}>
                                      A one stop shop to show you how well your<br />
                                      organisation is retaining and engaging its<br />
                                      everyday givers.
                                    </p>
                                    <div className={styles.ch4ToolkitActions}>
                                      <button className={styles.ch4DownloadBtn}>
                                        Download <span>↓</span>
                                      </button>
                                      <button className={styles.ch4ViewBtn}>
                                        View toolkit →
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                {/* Toolkit Card 2 */}
                                <div className={styles.ch4ToolkitCard}>
                                  <img
                                    src="/assets/toolkit_7.svg"
                                    alt="Toolkit #7"
                                    className={styles.ch4ToolkitImage}
                                  />
                                  <div className={styles.ch4ToolkitContent}>
                                    <p className={styles.ch4ToolkitLabel}>TOOLKIT #7</p>
                                    <h4 className={styles.ch4ToolkitTitle}>Supporter-Led<br />Fundraising</h4>
                                    <p className={styles.ch4ToolkitDesc}>
                                      A powerful toolkit to grow your network by<br />
                                      creating champions for your cause.
                                    </p>
                                    <div className={styles.ch4ToolkitActions}>
                                      <button className={styles.ch4DownloadBtn}>
                                        Download <span>↓</span>
                                      </button>
                                      <button className={styles.ch4ViewBtn}>
                                        View toolkit →
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Decorative circles on right edge */}
                              <div className={styles.ch4RightDecor}>
                                <div className={styles.ch4DecorCircle1}></div>
                                <div className={styles.ch4DecorCircle2}></div>
                                <div className={styles.ch4DecorDiamond}></div>
                              </div>
                            </div>

                            {/* Next Chapter Button */}
                            <button className={styles.ch4NextChapterBtn} onClick={handleNextChapter}>
                              <span className={styles.ch4NextDiamond}>◆</span>
                              Next chapter
                            </button>
                          </div>
                        ) : selectedOption === 'B' ? (
                          <div className={styles.ch4OptionBWrapper}>
                            {/* Top Navigation */}
                            <div className={styles.ch4NavContainer}>
                              <button className={styles.ch4NavButton}>↑ Back to all chapters</button>
                              <div className={styles.ch4NavDivider}>|</div>
                              <button className={styles.ch4NavButton}>View all toolkits</button>
                            </div>

                            {/* Main Content */}
                            <div className={styles.ch4OptionBContent}>
                              <h4 className={styles.ch4OptionBLabel}>CHAPTER IV: DONORS TO CHAMPIONS</h4>
                              <h1 className={styles.ch4OptionBTitle}>
                                When relationships are nurtured well, supporters deepen<br />
                                their involvement. This chapter explores how donors grow<br />
                                into champions.
                              </h1>

                              {/* Back to Scenario Button - Centered */}
                              <button
                                className={styles.ch4CenteredBackBtn}
                                onClick={() => setSelectedOption(null)}
                              >
                                ← Back to scenario
                              </button>
                            </div>
                          </div>
                        ) : (
                          // Chapter 4 Default View
                          <div className={styles.chapter1Wrapper} style={{ justifyContent: 'flex-start' }}>
                            <div className={styles.chapter1Header} style={{ marginBottom: '40px' }}>
                              <h4 className={styles.ch1Label}>CHAPTER IV: DONORS TO CHAMPIONS</h4>
                              <h1 className={styles.ch1Title}>
                                When relationships are nurtured well, supporters deepen their involvement.<br />
                                This chapter explores how donors grow into champions.
                              </h1>
                              <p className={styles.ch1Instruction}>Select one of the two options to reveal the right way</p>
                            </div>


                            <div className={styles.scenarioContainer}>
                              {/* Option A */}
                              <motion.div
                                className={styles.optionColumnLeft}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onClick={() => setSelectedOption('A')}
                                onMouseEnter={(e) => {
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) {
                                    card.style.transformOrigin = 'bottom left';
                                    card.style.transform = 'rotate(-15deg)';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#1a4d3a' }}>OPTION A</span>
                                <p className={styles.optionDesc} style={{ color: '#1a4d3a' }}>
                                  Treat Nidhi like any<br />
                                  other donor and send a<br />
                                  standard appeal
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    color: '#1a4d3a',
                                    fontWeight: 500
                                  }}
                                >
                                  <motion.div variants={arrowVariants}>
                                    <ArrowRight style={{ width: '20px', height: '20px' }} />
                                  </motion.div>
                                  <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '12px'
                                  }}>Choose Option</span>
                                </motion.div>
                              </motion.div>

                              {/* Center Card */}
                              <div className={styles.centerCard}>
                                <img
                                  src="/assets/chapter_4_card.svg"
                                  alt="Scenario 4 Card"
                                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                              </div>

                              {/* Option B */}
                              <motion.div
                                className={styles.optionColumnRight}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onClick={() => setSelectedOption('B')}
                                onMouseEnter={(e) => {
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) {
                                    card.style.transformOrigin = 'bottom right';
                                    card.style.transform = 'rotate(15deg)';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  const parent = e.currentTarget.parentElement;
                                  const card = parent?.querySelector(`.${styles.centerCard}`) as HTMLElement;
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#1a4d3a' }}>OPTION B</span>
                                <p className={styles.optionDesc} style={{ color: '#1a4d3a' }}>
                                  Invite her to give again –<br />
                                  and share the cause<br />
                                  with her network
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    color: '#1a4d3a',
                                    fontWeight: 500,
                                    flexDirection: 'row-reverse'
                                  }}
                                >
                                  <motion.div variants={arrowLeftVariants}>
                                    <ArrowLeft style={{ width: '20px', height: '20px' }} />
                                  </motion.div>
                                  <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '12px'
                                  }}>Choose Option</span>
                                </motion.div>
                              </motion.div>
                            </div>
                          </div>
                        )
                      ) : chapter.id === 5 ? (
                        // Chapter 5 Bonus Chapter Layout
                        <div className={styles.chapter1Wrapper} style={{ justifyContent: 'center', alignItems: 'center' }}>
                          <div className={styles.bonusChapterContent}>
                            <h4 className={styles.ch1Label} style={{ textAlign: 'center', color: '#ffffff' }}>V. BONUS CHAPTER</h4>
                            <h1 className={styles.ch1Title} style={{ textAlign: 'center', color: '#ffffff', marginBottom: '40px' }}>
                              Stewardship is a Team Effort
                            </h1>
                            <p className={styles.ch1Instruction} style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '60px', maxWidth: '800px' }}>
                              As supporters move across stages, effective coordination between programme,
                              communications, and fundraising teams enhances consistency, continuity, and trust.
                            </p>

                            {/* Bonus Card Image */}
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
                              <img
                                src="/assets/Bonus Chapter - Flip.svg"
                                alt="Stewardship is a team effort"
                                style={{ maxWidth: '400px', width: '100%', height: 'auto' }}
                              />
                            </div>

                            <div className={styles.bonusCallout} style={{
                              background: 'rgba(255, 255, 255, 0.15)',
                              padding: '20px 30px',
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '15px',
                              maxWidth: '600px',
                              margin: '0 auto'
                            }}>
                              <span style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: '#93CD4D',
                                flexShrink: 0
                              }}></span>
                              <span style={{ color: '#ffffff', fontSize: '16px' }}>
                                Check the toolkit to learn how to build this alignment.
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Default Layout for other chapters
                        <div className={styles.contentArea}>
                          <div className={styles.chapterHeader}>
                            <p className={styles.chapterLabel}>
                              CHAPTER {chapter.id === 1 ? 'I' : chapter.id === 2 ? 'II' : chapter.id === 3 ? 'III' : 'IV'}: {chapter.id === 1 ? 'TILLING THE SOIL' : chapter.id === 2 ? 'THE PLANTING' : chapter.id === 3 ? 'THE NURTURING' : 'GROWTH'}
                            </p>
                            <h1 className={styles.chapterTitle}>{chapter.title}</h1>
                          </div>
                          {/* Keep existing content logic or placeholders for other chapters */}
                          <div className={styles.tempContent}>Content for {chapter.title}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div >
          )
        })}

        {/* TabsSection Updated with Bonus Logic */}
        <TabsSection
          activeChapter={activeChapter}
          onTabClick={(chapterId) => {
            setActiveChapter(chapterId)
            if (chapterId === 5) {
              bonusSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
            } else {
              chaptersSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        />

      </section >

      {/* Bonus Chapter Section */}
      <section className={styles.bonusSection} ref={bonusSectionRef}>
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
            <img
              src="/assets/Bonus Chapter - Flip.svg"
              alt="Stewardship is a team effort"
              className={styles.bonusCardImage}
            />
            <div className={styles.bonusDotsPattern}>
              <img
                src="/assets/Group 326.svg"
                alt=""
                className={styles.bonusDotsImage}
              />
            </div>
          </div>
        </div>
      </section >

      {/* Download Section */}
      <section className={styles.downloadSection}>
        {/* Background Image */}
        <img
          src="/assets/download_background.svg"
          alt=""
          className={styles.downloadBackgroundImage}
        />

        <div className={styles.downloadContent}>
          {/* Left decorative plant */}
          <div className={styles.leftPlant}>
            <div className={styles.plantStem}></div>
            <div className={styles.plantFlower}>
              <div className={styles.flowerPetal}></div>
              <div className={styles.flowerPetal}></div>
              <div className={styles.flowerPetal}></div>
              <div className={styles.flowerPetal}></div>
            </div>
            <div className={styles.plantDots}>
              <div className={styles.plantDot}></div>
              <div className={styles.plantDot}></div>
              <div className={styles.plantDot}></div>
            </div>
          </div>

          {/* Center Card */}
          <div className={styles.downloadCard}>
            <div className={styles.downloadIcons}>
              <img
                src="/assets/icons_download.svg"
                alt="Download Icons"
                className={styles.downloadIconsImage}
              />
            </div>
            <h2 className={styles.downloadTitle}>Download the complete fundraising set</h2>
            <p className={styles.downloadDescription}>
              All the tools in one place to start building a structured, relationship-led approach<br />
              to engaging everyday givers – at your own pace, and with the resources that fit<br />
              your organisation best.
            </p>
            <div className={styles.downloadButtons}>
              <button className={styles.downloadAllBtn}>
                <span>✦</span>
                <span>Download all</span>
              </button>
              <button className={styles.viewAllBtn}>
                <span>View all</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right decorative plant */}
          <div className={styles.rightPlant}>
            <div className={styles.plantStem}></div>
            <div className={styles.plantCircles}>
              <div className={styles.plantCircle}></div>
              <div className={styles.plantCircle}></div>
              <div className={styles.plantCircle}></div>
            </div>
          </div>
        </div>

      </section>

      {/* Explore Grid Section */}
      <div className={styles.exploreSection}>
        <div className={styles.exploreHeader}>
          <span className={styles.exploreLabel}>FOLLOW ALONG</span>
          <h2 className={styles.exploreTitle}>Explore the other sections</h2>
        </div>

        <div className={styles.folderContainer}>

          {/* Folder Card 1 */}
          <div className={styles.folderCard}>
            <div className={styles.folderContent}>
              <span className={styles.folderLabel}>UDARTA:EG FIELD GUIDE</span>
              <h3 className={styles.folderTitle}>Introduction</h3>
            </div>
            {/* SVG Outline for Folder Shape */}
            <svg className={styles.folderSvg} viewBox="0 0 600 420" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="chapter1Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#63C76B" />
                  <stop offset="100%" stopColor="#17BABD" />
                </linearGradient>
              </defs>
              {/* Back/Peeking Folder Outline */}
              <path
                d="M20 30 C20 20 30 10 40 10 L410 10 C420 10 430 15 435 20 L455 50 C460 55 470 55 475 55 L560 55 C570 55 580 65 580 75 L580 390 C580 400 570 410 560 410 L40 410 C30 410 20 400 20 390 Z"
                fill="none"
                stroke="#2a6f5f"
                strokeWidth="2"
                opacity="0.4"
                transform="translate(10, 5) rotate(1, 300, 200)"
              />
              {/* Main Folder Outline */}
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
              {/* Back/Peeking Folder Outline */}
              <path
                d="M20 30 C20 20 30 10 40 10 L410 10 C420 10 430 15 435 20 L455 50 C460 55 470 55 475 55 L560 55 C570 55 580 65 580 75 L580 390 C580 400 570 410 560 410 L40 410 C30 410 20 400 20 390 Z"
                fill="none"
                stroke="#2a6f5f"
                strokeWidth="2"
                opacity="0.4"
                transform="translate(10, 5) rotate(1, 300, 200)"
              />
              {/* Main Folder Outline */}
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

      {/* Footer Section */}
      {/* Footer Section */}
      <footer className={styles.footerSection}>
        <div className={styles.footerContainer}>

          {/* LEFT COLUMN: Brand & Info */}
          <div className={styles.footerLeftColumn}>
            <div className={styles.footerLogo}>
              <img src="/assets/logo_name.svg" alt="Giving Together Foundation" className={styles.footerLogoImage} />
            </div>

            <p className={styles.footerDescription}>
              Giving Together Foundation (GTF) is an<br />
              independent, India-led nonprofit committed to<br />
              building the infrastructure for everyday generosity.
            </p>

            <div className={styles.footerMapContainer}>
              {/* India Map Image */}
              <img
                src="/assets/based_in_india.svg"
                alt="Based in India Map"
                className={styles.footerMapImage}
              />
              <p className={styles.footerLocationText}>Based in India, working nationwide</p>
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className={styles.footerRightColumn}>

            {/* ROW 1: Get Involved Form */}
            <div className={styles.getInvolvedRow}>
              <p className={styles.getInvolvedLabel}>GET INVOLVED</p>
              <div className={styles.getInvolvedForm}>
                <div className={styles.formLine}>
                  Hi, I'm <input type="text" placeholder="Merlyn Fernandes" className={styles.inlineInput} />, I'm from <input type="text" placeholder="Giving Together Foundation" className={styles.inlineInput} />.
                </div>
                <div className={styles.formLine}>
                  I'd love to be a part of Giving Together Foundation's initiatives.
                </div>
                <div className={styles.formLine}>
                  I'm available on <input type="email" placeholder="m.fernandes@email.com" className={styles.inlineInput} /> if you need to reach out to me for updates & details.
                </div>
              </div>
              <button className={styles.subscribeBtn}>
                Subscribe <span className={styles.btnArrow}>→</span>
              </button>
            </div>

            {/* ROW 2: Navigation Grid */}
            <div className={styles.footerLinksGrid}>
              {/* Col 1: Home */}
              <div className={styles.footerGridCol} style={{ borderLeft: '2px solid #0FB8C5' }}>
                <p className={styles.footerColTitle}>HOME</p>
                <ul className={styles.footerLinkList}>
                  <li><a href="#">Who is this for?</a></li>
                  <li><a href="#">Tools and toolkits</a></li>
                </ul>
              </div>

              {/* Col 2: Reports */}
              <div className={styles.footerGridCol} style={{ borderLeft: '2px solid #0FB8C5' }}>
                <p className={styles.footerColTitle}>REPORTS & RESOURCES</p>
                <ul className={styles.footerLinkList}>
                  <li><a href="#">UDARTA:EG Field Guide</a></li>
                  <li className={styles.indentedItem}><a href="#">Fundraising</a></li>
                  <li className={styles.indentedItem}><a href="#">Volunteer Engagement</a></li>
                  <li className={styles.arrowItem}><a href="#">UDARTA:EG Report ↗</a></li>
                  <li><a href="#">Donor Motivation</a></li>
                </ul>
              </div>

              {/* Col 3: Email */}
              <div className={styles.footerGridCol}>
                <p className={styles.footerColTitle}>EMAIL CONTACT</p>
                <a href="mailto:partnerships@givingtogetherfoundation.org" className={styles.contactLink}>
                  partnerships@givingtogetherfoundation.org
                </a>

                {/* Address placed below email in same visual column area usually, or separate */}
                <div className={styles.addressBlock}>
                  <p className={styles.footerColTitle} style={{ marginTop: '40px' }}>ADDRESS</p>
                  <p className={styles.addressText}>
                    A-89, Ground Floor, Shastri Nagar, North West<br />
                    Delhi, Delhi 110052, India
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
        {/* Decorative Circles */}
        <div className={styles.footerDecorCircle1}></div>
        <div className={styles.footerDecorCircle2}></div>

        {/* Footer Background Pattern */}
        <img
          src="/assets/footer_background.svg"
          alt=""
          className={styles.footerBackgroundPattern}
        />
      </footer>
    </div >
  )
}
