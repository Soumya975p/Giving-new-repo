'use client';

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
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
    gradient: 'linear-gradient(135deg, #13D9E8 0%, #FFCD86 100%)',
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
  const bonusSectionRef = useRef<HTMLElement>(null)

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
                        selectedOption === 'B' ? (
                          <Chapter3OptionB onBack={() => setSelectedOption(null)} />
                        ) : selectedOption === 'A' ? (
                          <div className={styles.tempContent}>Option A Content Placeholder for Ch 3</div>
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

                      ) : chapter.id === 3 ? (
                        // Chapter 3 Specific Layout
                        selectedOption === 'A' ? (
                          <OptionContent
                            chapterTitle="CHAPTER III: THE NURTURING"
                            chapterSubtitle="Scenario 3 Placeholder"
                            backgroundColor="linear-gradient(225deg, #1BD5E4, #0FB8C5, #D349AE)" // Using consistent background
                            onBack={() => setSelectedOption(null)}
                            onNext={handleNextChapter}
                            contentCards={[]} // Empty content as requested
                          />
                        ) : selectedOption === 'B' ? (
                          <div className={styles.tempContent}>Option B Content Placeholder for Ch 3</div>
                        ) : (
                          // Chapter 3 Default View (Scenario Selection)
                          <div className={styles.chapter1Wrapper} style={{ justifyContent: 'flex-start' }}>
                            <div className={styles.chapter1Header} style={{ marginBottom: '40px' }}>
                              <h4 className={styles.ch1Label}>CHAPTER III: THE NURTURING</h4>
                              <h1 className={styles.ch1Title}>
                                Scenario Description Placeholder<br />
                                (Please provide text)
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
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#ffffff' }}>OPTION A</span>
                                <p className={styles.optionDesc}>Option A Description</p>
                                <motion.div variants={ctaVariants} style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '12px', color: '#ffffff', fontWeight: 500 }}>
                                  <motion.div variants={arrowVariants}><ArrowRight style={{ width: '20px', height: '20px' }} /></motion.div>
                                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px' }}>Choose Option</span>
                                </motion.div>
                              </motion.div>

                              {/* Center Card */}
                              <div className={styles.centerCard}>
                                {/* Placeholder image or re-use card svg */}
                                <div style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }}></div>
                              </div>

                              {/* Option B */}
                              <motion.div
                                className={styles.optionColumnRight}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onClick={() => setSelectedOption('B')}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#ffffff' }}>OPTION B</span>
                                <p className={styles.optionDesc}>Option B Description</p>
                                <motion.div variants={ctaVariants} style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '12px', color: '#ffffff', fontWeight: 500, flexDirection: 'row-reverse' }}>
                                  <motion.div variants={arrowLeftVariants}><ArrowLeft style={{ width: '20px', height: '20px' }} /></motion.div>
                                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px' }}>Choose Option</span>
                                </motion.div>
                              </motion.div>
                            </div>
                          </div>
                        )
                      ) : chapter.id === 4 ? (
                        // Chapter 4 Specific Layout
                        selectedOption ? (
                          <div className={styles.tempContent}>Option Content Placeholder for Ch 4</div>
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
              <div className={styles.iconShape} style={{ background: '#e91e8c' }}></div>
              <div className={styles.iconShape} style={{ background: '#4dd4d4' }}></div>
              <div className={styles.iconShape} style={{ background: '#0d4d4d' }}></div>
              <div className={styles.iconShape} style={{ background: '#4dd4d4' }}></div>
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

        {/* Bottom decorative dots */}
        <div className={styles.bottomDots}>
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className={styles.bottomDot}
              style={{
                left: `${(i * 1.5) % 100}%`,
                bottom: `${Math.random() * 60}px`,
                background: i % 3 === 0 ? '#b8e986' : i % 3 === 1 ? '#4dd4d4' : '#0d4d4d',
                opacity: Math.random() * 0.6 + 0.3,
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`
              }}
            ></div>
          ))}
        </div>
      </section>

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
              building the infrastructure for everyday generosity.
            </p>
            <div className={styles.footerMap}>
              <span className={styles.mapIcon}>ðŸ—ºï¸</span>
            </div>
            <p className={styles.footerLocation}>Based in India, working nationwide</p>
          </div>

          {/* Middle Column - Navigation */}
          <div className={styles.footerMiddle}>
            <div className={styles.footerNav}>
              <p className={styles.footerNavTitle}>HOME</p>
              <p className={styles.footerNavLink}>Who is this for?</p>
              <p className={styles.footerNavLink}>Tools and toolkits</p>
            </div>
            <div className={styles.footerResources}>
              <p className={styles.footerSectionTitle}>REPORTS & RESOURCES</p>
              <p className={styles.footerLink}>UDARTA:EG Field Guide</p>
              <p className={styles.footerSubLink}>Fundraising</p>
              <p className={styles.footerSubLink}>Volunteer Engagement</p>
              <p className={styles.footerLink}>UDARTA:EG Report →</p>
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
            <input type="text" placeholder="Merlyn Fernandes" className={styles.formInput} />
            <span>, I'm from </span>
            <input type="text" placeholder="Giving Together Foundation" className={styles.formInput} />
            <span>.</span>
          </div>
          <p className={styles.getInvolvedText}>
            I'd love to be a part of Giving Together Foundation's initiatives.
          </p>
          <div className={styles.getInvolvedEmail}>
            <span>I'm available on </span>
            <input type="email" placeholder="m.fernandes@email.com" className={styles.formInput} />
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







page.module.css
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
  position: relative;
  display: block;
  width: 100%;
  max-width: 95vw;
  height: auto;
  margin: -70vh auto 0;
  z-index: 1;
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

/* .dotsPattern {
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
} */

.heroBottom {
  width: 100%;
  max-width: 1200px;
  margin: -140px auto 0;
  text-align: center;
  position: relative;
  padding-bottom: 100px;
  z-index: 5;
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
  min-height: 100vh;
  position: relative;
  /* overflow: hidden; Removed to allow scrolling if content overflows */
}

/* Each chapter container - absolutely positioned, stacked */
.chapterContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
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
  overflow: visible;
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
  overflow: visible;
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bonusCardImage {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 500px;
  object-fit: contain;
  filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.3));
}

.bonusDotsPattern {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bonusDotsImage {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.8;
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
  position: relative;
  display: block;
  width: 100%;
  max-width: 95vw;
  height: auto;
  margin: -70vh auto 0;
  z-index: 1;
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

/* .dotsPattern {
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
} */

.heroBottom {
  width: 100%;
  max-width: 1200px;
  margin: -140px auto 0;
  text-align: center;
  position: relative;
  padding-bottom: 100px;
  z-index: 5;
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
  min-height: 100vh;
  min-height: 130vh;
  position: sticky;
  top: 0;
  /* overflow: hidden; Removed */
  z-index: 50;
  /* Ensure it floats over hero content if needed, waiting for scroll */
}

/* Each chapter container - absolutely positioned, stacked */
.chapterContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
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
  overflow: visible;
  /* box-shadow:
    0 -20px 60px rgba(0, 0, 0, 0.4),
    0 -5px 20px rgba(0, 0, 0, 0.2); */
  box-shadow: none;
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
  overflow-y: visible;
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
  width: 100%;
  height: 50px;
  z-index: 2000;
  background: transparent;
  pointer-events: none;
  opacity: 0.85;
  display: flex;
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
  position: relative;
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
  /* box-shadow: 0 -20px 80px rgba(0, 0, 0, 0.4); */
  box-shadow: none;
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

/* =========================================
   NEW CHAPTER 1 REDESIGN STYLES
   ========================================= */

/* Fixed Top Navigation */
.topNavigation {
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 100;
  display: flex;
  align-items: center;
}

.navLeft {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 24px;
  background: rgba(26, 77, 58, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.navArrow {
  font-size: 16px;
  color: white;
}

.navText {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: white;
  cursor: pointer;
}

.navDivider {
  color: rgba(255, 255, 255, 0.4);
  margin: 0 5px;
}

/* Chapter 1 Specific Layout */
.chapter1Wrapper {
  width: 100%;
  height: 108%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Centered vertically roughly or with padding */
  padding-top: 20px;
  padding-top: 100px;
  /* Reduced from 60px to move everything up */
  position: relative;
  box-sizing: border-box;
  justify-content: flex-start;
  /* Ensure content starts from top but allows centering via auto margins if needed */
  overflow: hidden;
}

.chapter1Header {
  text-align: center;
  margin-bottom: 20px;
  margin-bottom: 30px;
  /* Reduced from 40px */
  position: relative;
  z-index: 10;
  padding: 0 20px;
  padding: 0 10px;
  /* Reduced side padding slightly */
}

.ch1Label {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-size: 16px;
  /* Slightly smaller */
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 140%;
  letter-spacing: 0.1em;
  color: #1a4d3a;
  text-transform: uppercase;
  margin-bottom: 8px;
  text-align: center;
  margin-bottom: 16px;
  /* Reduced from 12px */
  opacity: 0.6;
}

.ch1Title {
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  /* Reduced from 32px to save significant space */
  font-weight: 400;
  line-height: 1.3;
  /* Reduced from 28px to save significant space */
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.03em;
  color: #1a4d3a;
  margin-bottom: 10px;
  text-align: center;
  margin-bottom: 60px;
  /* Reduced from 20px */
  max-width: 800px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.ch1Instruction {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  /* Reduced from 15px */
  color: #1a4d3a;
  font-style: italic;
  opacity: 0.6;
}

/* Scenario Container */
.scenarioContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  gap: 40px;
  /* Reduced from 20px */
  width: 100%;
  max-width: 1250px;
  /* Increased from 1100px */
  margin-top: 20px;
  /* Positive margin to prevent overlapping */
  position: relative;
}

/* Hover Decorations for Chapter 1 Option A */
.hoverFlowerLeftmost {
  position: absolute;
  bottom: -225px;
  left: -45px;
  width: 125px;
  height: 400px;
  pointer-events: none;
  z-index: 5;
  transform: translateX(-100px);
}

.hoverFlowerMiddle {
  position: absolute;
  bottom: -150px;
  left: 90px;
  width: 60px;
  height: auto;
  pointer-events: none;
  z-index: 6;
}

.hoverFlowerRightmost {
  position: absolute;
  bottom: -100px;
  left: 180px;
  width: 50px;
  height: auto;
  pointer-events: none;
  z-index: 7;
}

.hoverPetal {
  position: absolute;
  top: -60px;
  left: -100px;
  width: 250px;
  height: auto;
  pointer-events: none;
  z-index: 8;
}

.hoverFly {
  position: absolute;
  top: -20px;
  left: 25%;
  width: 50px;
  height: auto;
  pointer-events: none;
  z-index: 9;
}

/* Hover Decorations for Chapter 1 Option B (Right Side) */
.hoverRightFlowerTop {
  position: absolute;
  top: 250px;
  right: -30px;
  width: 200px;
  height: auto;
  pointer-events: none;
  z-index: 5;
}

.hoverRightFlowerBottom {
  position: absolute;
  bottom: -20px;
  right: 150px;
  width: 150px;
  height: auto;
  pointer-events: none;
  z-index: 6;
}

.hoverRightFly {
  position: absolute;
  top: -20px;
  right: 50px;
  width: 50px;
  height: auto;
  pointer-events: none;
  z-index: 7;
}

/* Chapter 2 Hover Decorations - Option A (Left Side) */
.ch2HoverLamp {
  position: absolute;
  bottom: -60px;
  left: -70px;
  width: 150px;
  height: auto;
  pointer-events: none;
  z-index: 5;
}

.ch2HoverFly {
  position: absolute;
  top: 0;
  left: 300px;
  width: 50px;
  height: auto;
  pointer-events: none;
  z-index: 6;
}

.ch2HoverEmptyBubble {
  position: absolute;
  top: -120px;
  left: 45px;
  width: 60px;
  height: auto;
  pointer-events: none;
  z-index: 4;
}

.ch2HoverFilledBubble {
  position: absolute;
  top: -70px;
  left: 100px;
  width: 60px;
  height: auto;
  pointer-events: none;
  z-index: 5;
}

.ch2HoverImageLeft {
  position: absolute;
  bottom: -120px;
  left: 10px;
  width: 80px;
  height: auto;
  pointer-events: none;
  z-index: 6;
}

.ch2HoverImageRight {
  position: absolute;
  bottom: -70px;
  left: 100px;
  width: 80px;
  height: auto;
  pointer-events: none;
  z-index: 5;
}

.ch2HoverEmptyBubble2 {
  position: absolute;
  top: 255px;
  left: 30%;
  width: 50px;
  height: auto;
  pointer-events: none;
  z-index: 4;
}

.ch2HoverFilledBubble2 {
  position: absolute;
  top: 210px;
  left: 32%;
  width: 50px;
  height: auto;
  pointer-events: none;
  z-index: 5;
}

/* Chapter 2 Hover Decorations - Option B (Right Side) */
.ch2RightFly {
  position: absolute;
  top: 70%;
  right: 350px;
  width: 50px;
  height: auto;
  pointer-events: none;
  z-index: 6;
}

.ch2RightImage {
  position: absolute;
  top: 50px;
  right: -30px;
  width: 80px;
  height: auto;
  pointer-events: none;
  z-index: 5;
}

.ch2RightFlowerPetal1 {
  position: absolute;
  top: 0px;
  right: 30px;
  width: 70px;
  height: auto;
  pointer-events: none;
  z-index: 6;
}

.ch2RightFlowerPetal2 {
  position: absolute;
  top: 220px;
  right: -55px;
  width: 15px;
  height: auto;
  pointer-events: none;
  z-index: 6;
}

.ch2RightFlowerPetal3 {
  position: absolute;
  top: 240px;
  right: -38px;
  width: 15px;
  height: auto;
  pointer-events: none;
  z-index: 6;
}

.ch2RightFlower1 {
  position: absolute;
  bottom: -100px;
  right: -20px;
  width: 110px;
  height: auto;
  pointer-events: none;
  z-index: 7;
}

.ch2RightHalfBottom {
  position: absolute;
  top: -22px;
  right: 250px;
  width: 50px;
  height: auto;
  pointer-events: none;
  z-index: 5;
}

.ch2RightHalfTop {
  position: absolute;
  top: -50px;
  right: 250px;
  width: 50px;
  height: auto;
  pointer-events: none;
  z-index: 5;
}

.ch2RightStick {
  position: absolute;
  bottom: -110px;
  right: -40px;
  width: 80px;
  height: auto;
  pointer-events: none;
  z-index: 4;
}

/* Chapter 3 Hover Decorations - Option B (Right Side) */
.ch3RightFly {
  position: absolute;
  top: -80px;
  right: 350px;
  width: 50px;
  height: auto;
  pointer-events: none;
  z-index: 6;
}

.ch3RightFlower {
  position: absolute;
  bottom: -10px;
  right: -65px;
  width: 70px;
  height: auto;
  pointer-events: none;
  z-index: 7;
  transform: translateY(120px);
}

.ch3DiamondBottom {
  position: absolute;
  bottom: -40px;
  right: -60px;
  width: 200px;
  height: auto;
  pointer-events: none;
  z-index: 5;
}

.ch3TopSection {
  position: absolute;
  top: -90px;
  right: -120px;
  width: 250px;
  height: auto;
  pointer-events: none;
  z-index: 6;
}

.ch3LeftFlower {
  position: absolute;
  bottom: -120px;
  right: 60px;
  width: 70px;
  height: auto;
  pointer-events: none;
  z-index: 7;
}

/* Side Options */
.optionColumnLeft,
.optionColumnRight {
  flex: 1;
  max-width: 360px;
  /* Increased from 280px */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.optionColumnRight {
  align-items: flex-end;
  text-align: right;
  /* Image shows left aligned text for both options mostly */
}

.optionLabel {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 13px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.1em;
  color: #1a4d3a;
  opacity: 0.6;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.optionDesc {
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-size: 24px;
  /* Reduced from 24px */
  font-weight: 400;
  line-height: 1.3;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.03em;
  color: #1a4d3a;
  text-align: inherit;
}

/* Center Card - Dark */
/* Center Card - Dark */
.centerCard {
  width: 340px;
  height: 400px;
  width: 320px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* Box shadow removed as it might be in SVG or we can re-add if needed */
  /* box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25); */
  flex-shrink: 0;
  background: transparent;
  /* Ensure no background interferes */
  padding: 0;
  border-radius: 0;
  transition: transform 0.8s ease-out;
  transform-style: preserve-3d;
}

.cardScenarioLabel {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 30px;
  text-transform: uppercase;
}

.cardQuestion {
  font-family: 'DM Sans', sans-serif;
  font-size: 26px;
  font-weight: 400;
  line-height: 1.3;
  color: white;
  text-align: center;
  margin-bottom: auto;
}

.cardGraphic {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.triangleBig {
  width: 0;
  height: 0;
  border-left: 160px solid transparent;
  border-right: 160px solid transparent;
  border-bottom: 110px solid rgba(31, 163, 163, 0.6);
  /* Blueish */
  position: absolute;
  bottom: 0;
}

.triangleSmall {
  width: 0;
  height: 0;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 35px solid #ff6b9d;
  /* Pinkish */
  position: relative;
  z-index: 2;
  margin-bottom: 0;
}

/* Fixed Bottom Navigation */
.bottomNavContainer {
  position: fixed;
  /* Fixed to viewport to stay visible */
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

.bottomNavContainer>* {
  pointer-events: auto;
}

.switchChaptersPill {
  background: #152c33;
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  padding: 8px 24px;
  border-radius: 20px;
  margin-bottom: -15px;
  /* Pull down into tabs slightly or sit on top */
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transform: translateY(50%);
}

.bottomTabsWrapper {
  display: flex;
  width: 100%;
  height: 70px;
  /* Slightly taller */
  background: #1fa3a3;
  /* Base color */
}

.bottomTab {
  flex: 1;
  background: #39b5a9;
  /* Base teal */
  border: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #0f353a;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  margin-left: -20px;
  /* Overlap */
  padding-left: 30px;
  z-index: 1;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
}

.bottomTab:first-child {
  margin-left: 0;
  padding-left: 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

/* Specific colors to create the gradient effect across tabs */
.bottomTab:nth-child(1) {
  background-color: #5ccd95;
}

.bottomTab:nth-child(2) {
  background-color: #3bbcb3;
}

.bottomTab:nth-child(3) {
  background-color: #26aeb8;
}

.bottomTab:nth-child(4) {
  background-color: #2fb0b5;
}

.bottomTab:nth-child(5) {
  background-color: #31b3bb;
}

/* Bonus */

/* Active state */
.activeBottomTab {
  background: linear-gradient(90deg, #93CD4D 0%, #0FB8C5 100%) !important;
  /* Gradient as requested */
  /* Wait user said "colors #0FB8C5 and #93CD4D which is from left to right" */
  background: linear-gradient(90deg, #0FB8C5 0%, #93CD4D 100%) !important;
  z-index: 10;
  font-weight: 700;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
  color: #103035;
}

/* =========================================
   FOOTER SECTION STYLES
   ========================================= */

.footerSection {
  width: 100%;
  background: #041A1D;
  padding: 80px 60px 40px;
  position: relative;
  overflow: hidden;
}

.footerContent {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;
  margin-bottom: 80px;
}

/* Left Column - Logo & Description */
.footerLeft {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footerLogo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 5px;
}

.footerLogoIcon {
  font-size: 32px;
}

.footerLogoText {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 1.5px;
  line-height: 1.3;
}

.footerLogoSubtext {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 15px 0;
}

.footerDescription {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 30px 0;
}

.footerMap {
  width: 120px;
  height: 80px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.mapIcon {
  font-size: 40px;
  opacity: 0.6;
}

.footerLocation {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* Middle Column - Navigation & Resources */
.footerMiddle {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.footerNav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footerNavTitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #0FB8C5;
  margin: 0 0 5px 0;
}

.footerNavLink {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footerNavLink:hover {
  color: #0FB8C5;
}

.footerResources {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footerSectionTitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #0FB8C5;
  margin: 0 0 5px 0;
}

.footerLink {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footerLink:hover {
  color: #0FB8C5;
}

.footerSubLink {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  padding-left: 15px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footerSubLink:hover {
  color: #0FB8C5;
}

/* Right Column - Contact & Address */
.footerRight {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.footerContact {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footerEmail {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  word-break: break-word;
}

.footerAddress {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footerAddressText {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Get Involved Section - Full Width */
.getInvolved {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.getInvolvedTitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #0FB8C5;
  margin: 0 0 25px 0;
}

.getInvolvedForm {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
}

.getInvolvedText {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin: 15px 0;
}

.getInvolvedEmail {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
}

.formInput {
  background: transparent;
  border: none;
  border-bottom: 1px solid #0FB8C5;
  color: #0FB8C5;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  padding: 4px 8px;
  outline: none;
  min-width: 150px;
  transition: border-color 0.3s ease;
}

.formInput::placeholder {
  color: #0FB8C5;
  opacity: 0.8;
}

.formInput:focus {
  border-bottom-color: #93CD4D;
}

.subscribeButton {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.subscribeButton:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #0FB8C5;
}

.subscribeArrow {
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #0FB8C5;
  border-radius: 50%;
  color: #0d4d4d;
}

/* Decorative Dots */
.footerDots {
  position: absolute;
  bottom: 20px;
  right: 60px;
  width: 100px;
  height: 100px;
  opacity: 0.3;
  pointer-events: none;