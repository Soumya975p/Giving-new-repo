'use client';

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { DM_Sans } from 'next/font/google'
import styles from './page.module.css'
import OptionContent from '../components/OptionContent'
import chapter2StylesA from '../components/Chapter2OptionA.module.css'
import chapter2StylesB from '../components/Chapter2OptionB.module.css'
import chapter3StylesA from '../components/Chapter3OptionA.module.css'
import chapter4StylesA from '../components/Chapter4OptionA.module.css'
import chapter4StylesB from '../components/Chapter4OptionB.module.css'
import chapter3StylesB from '../components/Chapter3OptionB.module.css'
// import Chapter3OptionB from '../components/Chapter3OptionB'
import Chapter4OptionA from '../components/Chapter4OptionA'
import TabsSection from '../components/TabsSection'
import Footer from '../components/Footer'
import Explore from '../components/Explore'
import Header from '../components/Header'
import BonusChapter from '../components/BonusChapter'
import DownloadSection from '../components/DownloadSection'


const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})


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
    gridImage: '/assets/ch1.png'
  },
  {
    id: 2,
    title: 'II. First Donation',
    subtitle: 'Building Connections',
    tabImage: '/assets/Tab 2.png',
    contentImage: '/assets/2.png',
    gradient: 'linear-gradient(45deg, #D349AE 0%, #0FB8C5 50%, #1BD5E4 100%)',
    tabGradient: 'linear-gradient(135deg, #4dd4d4 0%, #3ababa 100%)',
    gridImage: '/assets/ch2.png'
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
    gridImage: '/assets/ch3.png'
  },
  {
    id: 4,
    title: 'IV. Donors to Champions',
    subtitle: 'Deepening involvement',
    tabImage: '/assets/Tab 4.png',
    contentImage: '/assets/4.png',
    gradient: 'linear-gradient(180deg, #FFEF3D 0%, #DCD647 20%, #C9CD33 40%, #8DA806 60%, #86A401 80%, #315900 100%)',
    tabGradient: 'linear-gradient(180deg, #315900 0%, #B0D313 100%)',
    gridImage: '/assets/ch4.png'
  }
]

/* Animation Variants with type fix */
// Using explicit 'any' cast for ease to bypass current type mismatch for "cubic-bezier" string
const ctaVariants = {
  rest: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.3, ease: "easeOut" as any }
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as any }
  }
}

const arrowVariants = {
  rest: { x: 0 },
  hover: {
    x: 5,
    transition: {
      duration: 0.4,
      ease: "easeInOut" as any,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}
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
  const [isCh3OptionAHovered, setIsCh3OptionAHovered] = useState(false)
  const [isCh3OptionBHovered, setIsCh3OptionBHovered] = useState(false)
  const [isExplore1Hovered, setIsExplore1Hovered] = useState(false) // Moved to Explore component
  const [isExplore2Hovered, setIsExplore2Hovered] = useState(false) // Moved to Explore component
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Moved to Header component
  const [isFundraisingExpanded, setIsFundraisingExpanded] = useState(false) // Moved to Header component
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null) // Moved to Header component
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([])
  const activeChapterRef = useRef(activeChapter) // To track active chapter without dependency issues
  const chaptersSectionRef = useRef<HTMLDivElement>(null)
  const isScrollingRef = useRef(false)
  const scrollAccumulatorRef = useRef(0)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const scrollContainerRefs = useRef<(HTMLDivElement | null)[]>([])
  // Scroll Reference for Bonus Section
  const bonusSectionRef = useRef<HTMLDivElement>(null);
  // Refs for center cards in each chapter
  const centerCardRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);

  // State for Custom Grid Cursor
  const [gridCursorPos, setGridCursorPos] = useState({ x: 0, y: 0 });
  const [showGridCursor, setShowGridCursor] = useState(false);

  // Explore cursor states moved to Explore component

  // State for scroll-triggered sticky chapters section
  const [isChaptersSectionSticky, setIsChaptersSectionSticky] = useState(false);

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


  // Intersection Observer for scroll-triggered sticky chapters section
  useEffect(() => {
    const chaptersSection = chaptersSectionRef.current;
    if (!chaptersSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When 10% of section is visible, trigger sticky
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            setIsChaptersSectionSticky(true);
            // Scroll the section into full view
            chaptersSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '0px'
      }
    );

    observer.observe(chaptersSection);

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div className={`${styles.pageWrapper} ${dmSans.className}`}>
      {/* Header with Logo and Menu */}
      <Header
        activeChapter={activeChapter}
        setActiveChapter={setActiveChapter}
        chaptersSectionRef={chaptersSectionRef}
        bonusSectionRef={bonusSectionRef}
      />

      {/* Hero Section */}
      <section className={styles.heroSection}>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>Donor</span>
              <span className={styles.titleLine2}>Gardening</span>
            </h1>
            <div className={styles.scrollIndicator}>
              <div className={styles.scrollDot}></div>
              <span>Scroll down</span>
            </div>
          </div>

          {/* Hero.png Image - Visible on mobile */}
          <img
            src="/assets/hero.png"
            alt="Donor Gardening Tree"
            className={styles.heroImageMobile}
          />

          <div className={styles.heroRight}>
            <h2 className={styles.heroSubtitle}>From Donation to Relationship</h2>
            <p className={styles.heroDescription}>
              Most nonprofits spend significant time and resources finding new donors. Yet research shows that acquiring a new donor costs <span className={styles.emphasis}>nearly ten times more</span> than continuing a relationship with someone who already believes in your work.
            </p>
            <p className={styles.heroDescription}>
              Drawing on insights from the UDARTA:EG study of 300+ <span className={styles.emphasis}>Indian nonprofits</span>, this guide offers toolkits to shift donor engagement from reactive to retention-focused.
            </p>
            <button className={styles.startButton} onClick={() => {
              chaptersSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <img src="/assets/start_button.svg" alt="Start Journey" className={styles.startButtonImage} />
            </button>
          </div>

          {/* Mobile Background Image - Bottom of hero section on mobile */}
          <img
            src="/assets/mobile_background_hero.svg"
            alt=""
            className={styles.mobileHeroBackground}
          />
        </div>

        {/* Desktop Hero Background - Restored */}
        <img
          src="/assets/hero.png"
          alt="Donor Gardening Tree"
          className={styles.heroBackgroundSvg}
        />

        {/* Decorative dots pattern */}
        <div className={styles.dotsPattern}></div>

        {/* Bottom Section */}
        <div className={styles.heroBottom}>
          <p className={styles.cultivationLabel}>CULTIVATION IN ACTION</p>
          <h2 className={styles.heroBottomTitle}>
            A <span className={styles.highlight}>step by step guide</span> <br />
            to donor engagement through <br />
            the journey of <span className={styles.highlight}>Nidhi</span>, our perennial <br />
            supporter.
          </h2>
          <p className={styles.heroBottomDesc}>
            Follow Nidhi's journey across four chapters to see how everyday giving can grow from a one-time transaction <br />
            into a lasting relationship. Each chapter blends real-world moments with practical tools to help nonprofits guide <br />
            donors naturally. Your donors may be at different stages of this journey—explore the chapters in any order that <br />
            serves you best.
          </p>

          <div className={styles.chapterSelectionWrapper}>
            {/* <div className={styles.heroDividerLine}></div> */}
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

      <section className={`${styles.chaptersSection} ${isChaptersSectionSticky ? styles.chaptersSectionSticky : ''}`} ref={chaptersSectionRef}>
        {/* Fixed Top Navigation */}
        <div className={styles.topNavigation}>
          <div className={styles.navLeft}>
            <button
              className={`${styles.navButton} ${styles.backToChaptersBtn}`}
              onClick={() => {
                // Scroll to top of chapters section
                chaptersSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg
                className={styles.navArrowIcon}
                width="10"
                height="13"
                viewBox="20 18 10 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="navArrowGradient" x1="20" y1="18" x2="30" y2="31" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0FB8C5" />
                    <stop offset="100%" stopColor="#93CD4D" />
                  </linearGradient>
                </defs>
                <path d="M20 22.7273L25 18M25 18L30 22.7273M25 18V31" strokeWidth="1.2" />
              </svg>
              <span className={styles.navText}>Back to all chapters</span>
            </button>
            <span className={styles.navDivider}>|</span>
            <button
              className={styles.navButton}
              onClick={() => {
                // For "View all toolkits", we'll scroll to the footer or a toolkits section if exists
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }
              }}
            >
              <span className={styles.navText}>VIEW ALL TOOLKITS</span>
            </button>
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
                        <div className={styles.chapter1Wrapper}>
                          <div className={styles.chapter1Header}>
                            {!selectedOption && (
                              <>
                                <h4 className={styles.ch1Label}>CHAPTER I: NETWORK EXPANSION</h4>
                                <h1 className={styles.ch1Title}>
                                  Before seeking support, understand who's already in your circle.<br />
                                  This chapter helps you map your existing network so fundraising starts<br />
                                  with relationships, not cold outreach.
                                </h1>
                                <p className={`${styles.ch1Instruction} ${styles.desktopOnly}`}>Select one of the two options to reveal the right way</p>
                              </>
                            )}
                          </div>

                          {selectedOption === 'A' ? (
                            <div style={{ flex: 1, width: '100%', position: 'relative' }}>
                              <OptionContent
                                embedded={true}
                                chapterTitle="CHAPTER I: NETWORK EXPANSION"
                                chapterSubtitle="Before seeking support, understand who's already in your circle. This chapter helps you map your existing network so fundraising starts with relationships, not cold outreach."
                                backgroundColor="transparent"
                                onBack={() => setSelectedOption(null)}
                                onNext={handleNextChapter}
                                optionId="ch1OptionA"
                                contentCards={[
                                  {
                                    id: 1,
                                    type: 'text',
                                    floatingTextLabel: "UDARTA:EG STUDY SHOWS",
                                    floatingText: "You may reach many people, but responses are scattered. Most donations are small, one-time, and disconnected.",
                                    decorationImages: [
                                      '/assets/chapter_1/fly_left_optionA.svg',
                                      '/assets/chapter_1/flower_left_optionA.svg',
                                      '/assets/chapter_1/hover_left_flower_leftmost_ch1.svg'
                                    ],
                                    label: '',
                                    title: '',
                                    content: '',
                                    showStatBelow: true,
                                    statLabel: 'DID YOU KNOW?',
                                    stat: 'It costs 10x more',
                                    statDescription: 'To acquire a new donor than continuing a relationship with someone who already believes in your work.',
                                    showStatIcons: false,
                                    statBoxTransparent: true
                                  },
                                  {
                                    id: 2,
                                    type: 'text',
                                    floatingText: "Instead, if you tapped into your existing network you will reach the people that care about the cause. The appeal feels more personal, more trusted.",
                                    decorationImage: '/assets/chapter_2_column2_1.svg',
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
                                    floatingText: (
                                      <>
                                        We've make a template<br />
                                        to simplify mapping your<br />
                                        network
                                      </>
                                    ),
                                    decorationImage: '/assets/chapter_2_column3_1.svg',
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
                                    toolkitImage: '/assets/toolkit1.svg'
                                  }
                                ]}
                              />
                            </div>
                          ) : selectedOption === 'B' ? (
                            <div style={{ flex: 1, width: '100%', position: 'relative' }}>
                              <OptionContent
                                embedded={true}
                                chapterTitle="CHAPTER I: NETWORK EXPANSION"
                                chapterSubtitle="Before seeking support, understand who's already in your circle. This chapter helps you map your existing network so fundraising starts with relationships, not cold outreach."
                                backgroundColor="transparent"
                                onBack={() => setSelectedOption(null)}
                                onNext={handleNextChapter}
                                optionId="ch1OptionB"
                                contentCards={[
                                  {
                                    id: 11,
                                    type: 'text',
                                    // floatingTextLabel: "UDARTA:EG STUDY SHOWS",
                                    floatingText: (
                                      <>
                                        Yes!<br />
                                        You will reach the people that care<br />
                                        about the cause. The appeal feels<br />
                                        more personal, more trusted.
                                      </>
                                    ),
                                    decorationImages: ['/assets/chapter_1_column1_2.svg'],
                                    label: '',
                                    title: '',
                                    content: '',
                                    showStatBelow: true,
                                    statLabel: 'UDARTA:EG STUDY SHOWS',
                                    stat: '60% of nonprofits',
                                    statDescription: 'find outreach through existing networks to be their most effective way of reaching new supporters'
                                  },
                                  {
                                    id: 12,
                                    type: 'text',
                                    floatingText: (
                                      <>
                                        We've make a template<br />
                                        to simplify mapping your<br />
                                        network
                                      </>
                                    ),
                                    decorationImages: [
                                      '/assets/chapter_2_column3_1.svg',
                                      '/assets/chapter_1_column2_1.svg'
                                    ],
                                    label: '',
                                    title: '',
                                    content: ''
                                  },
                                  {
                                    id: 13,
                                    type: 'toolkit',
                                    floatingText: "",
                                    decorationType: undefined,
                                    toolkitTitle: 'Network Mapping',
                                    toolkitDescription: 'A simple way to identify and activate people already connected to your cause',
                                    toolkitImage: '/assets/toolkit1.svg'

                                  }
                                ]}
                              />
                            </div>
                          ) : (
                            <div className={styles.scenarioContainer}>
                              <p className={`${styles.ch1Instruction} ${styles.mobileOnly}`} style={{ order: 2, width: '100%', textAlign: 'center', margin: '20px 0', color: '#fff' }}>
                                Select one of the two options to reveal the right way
                              </p>
                              {/* Option A */}
                              <motion.div
                                className={styles.optionColumnLeft}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onMouseEnter={() => {
                                  setIsOptionAHovered(true);
                                  // Rotate card away from hovered option
                                  const card = centerCardRefs.current[0];
                                  if (card) {
                                    card.style.transformOrigin = 'bottom left';
                                    card.style.transform = 'rotate(-15deg)';
                                  }
                                }}
                                onMouseLeave={() => {
                                  setIsOptionAHovered(false);
                                  const card = centerCardRefs.current[0];
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                onClick={() => setSelectedOption('A')}
                                style={{ cursor: 'pointer', marginTop: '30px' }}
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
                              <div className={styles.centerCard} ref={(el) => { centerCardRefs.current[0] = el }}>
                                <img
                                  src="/assets/chapter_1_card.svg"
                                  alt="Scenario 1 Card"
                                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                              </div>

                              {/* Option A Decorations (Visible on Hover) */}
                              <AnimatePresence>
                                {isOptionAHovered && (
                                  <>
                                    <motion.img
                                      key="flower-left-main"
                                      // src="/assets/chapter_1/flower_left_optionA.svg"
                                      alt=""
                                      className={styles.hoverFlowerLeftMain}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.4 }}
                                    />
                                    <motion.img
                                      key="left-flower"
                                      src="/assets/chapter_1/hover_left_flower_leftmost_ch1.svg"
                                      alt=""
                                      className={styles.hoverFlowerLeftmost}
                                      initial={{ opacity: 0, x: -50 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -50 }}
                                      transition={{ duration: 0.5 }}
                                    />
                                    <motion.img
                                      key="middle-flower"
                                      src="/assets/chapter_1/hover_left_flower_middle_ch1.svg"
                                      alt=""
                                      className={styles.hoverFlowerMiddle}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.1 }}
                                    />
                                    <motion.img
                                      key="rightmost-flower"
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
                                onMouseEnter={() => {
                                  setIsOptionBHovered(true);
                                  // Rotate card away from hovered option
                                  const card = centerCardRefs.current[0];
                                  if (card) {
                                    card.style.transformOrigin = 'bottom right';
                                    card.style.transform = 'rotate(15deg)';
                                  }
                                }}
                                onMouseLeave={() => {
                                  setIsOptionBHovered(false);
                                  const card = centerCardRefs.current[0];
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                onClick={() => setSelectedOption('B')}
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

                              {/* Option B Decorations (Visible on Hover) */}
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
                          )}
                        </div>
                      ) : chapter.id === 2 ? (
                        // Chapter 2 Specific Layout
                        <div className={styles.chapter1Wrapper}>
                          <div className={styles.chapter1Header}>
                            {!selectedOption && (
                              <>
                                <h4 className={styles.ch1Label}>CHAPTER II: FIRST DONATION</h4>
                                <h1 className={styles.ch1Title}>
                                  A first donation is more than a transaction. This chapter focuses on<br />
                                  how timely acknowledgment and simple follow-up can turn a first gift<br />
                                  into the beginning of a relationship.
                                </h1>
                                <p className={styles.ch1Instruction}>Select one of the two options to reveal the right way</p>
                              </>
                            )}
                          </div>

                          {selectedOption === 'A' ? (
                            <div style={{ flex: 1, width: '100%', position: 'relative' }}>
                              <OptionContent
                                embedded={true}
                                chapterTitle="CHAPTER II: FIRST DONATION"
                                chapterSubtitle="A first donation is more than a transaction. This chapter focuses on how timely acknowledgment and simple follow-up can turn a first gift into the beginning of a relationship."
                                backgroundColor="transparent"
                                onBack={() => setSelectedOption(null)}
                                onNext={handleNextChapter}
                                customStyles={chapter2StylesA}
                                contentCards={[
                                  {
                                    id: 1,
                                    type: 'text',
                                    floatingTextLabel: "UDARTA:EG STUDY SHOWS",
                                    floatingText: "When donors aren't acknowledged, potential ends early.",
                                    decorationImage: '/assets/chapter_2_column1_1.svg',
                                    label: '',
                                    title: '',
                                    content: '',
                                    showStatBelow: true,
                                    statLabel: 'DID YOU KNOW?',
                                    stat: 'Only 20%',
                                    statDescription: 'of first-time donors ever give again, while nearly 60% of repeat donors continue after their second gift.',
                                    statBoxTransparent: true,
                                    // statIconImage: '/assets/chapter_2_stat.svg'
                                  },
                                  {
                                    id: 2,
                                    type: 'text',
                                    floatingText: "Instead, you thank Nidhi within two days. She receives an 80G receipt and a clear message of appreciation.",
                                    decorationImage: '/assets/chapter_2_column2_1.svg',
                                    label: '',
                                    title: '',
                                    content: '',
                                    showStatBelow: true,
                                    statLabel: 'UDARTA:EG STUDY SHOWS',
                                    stat: '',
                                    statDescription: 'Acknowledging donations leads to a 20.3 percentage point increase in funds raised from everyday givers.',
                                    showStatIcons: false
                                  },
                                  {
                                    id: 3,
                                    type: 'text',
                                    floatingText: "",
                                    decorationImage: '/assets/chapter_2_column3_1.svg',
                                    label: '',
                                    title: "You didn't just raise funds.\nYou began a relationship!",
                                    content: 'We created a database template to help nonprofits to record, remember, and build continuity from the first gift.',
                                    transparentBackground: true
                                  },
                                  {
                                    id: 4,
                                    type: 'toolkit',
                                    toolkitLabel: 'TOOLKIT #1',
                                    toolkitTitle: 'Donor Database',
                                    toolkitDescription: 'How to record, remember, and build continuity from the first gift.',
                                    toolkitImage: '/assets/chapter2_option1_toolkit.svg'
                                  }
                                ]}
                              />
                            </div>
                          ) : selectedOption === 'B' ? (
                            <div style={{ flex: 1, width: '100%', position: 'relative' }}>
                              <OptionContent
                                embedded={true}
                                chapterTitle="CHAPTER II: FIRST DONATION"
                                chapterSubtitle="A first donation is more than a transaction. This chapter focuses on how timely acknowledgment and simple follow-up can turn a first gift into the beginning of a relationship."
                                backgroundColor="transparent"
                                onBack={() => setSelectedOption(null)}
                                onNext={handleNextChapter}
                                customStyles={chapter2StylesB}
                                flowerDecorImage="/assets/chapter_2_option_A.svg"
                                contentCards={[
                                  {
                                    id: 1,
                                    type: 'text',
                                    // floatingTextLabel: "UDARTA:EG STUDY SHOWS",
                                    floatingText: (
                                      <>
                                        You thank Nidhi within two days.<br />
                                        She receives an 80G receipt and a<br />
                                        clear message of appreciation.
                                      </>
                                    ),
                                    decorationType: 'circle',
                                    decorationImage: '/assets/chapter_2_option2.svg',
                                    label: '',
                                    title: '',
                                    content: '',
                                    showStatBelow: true,
                                    showStatIcons: false,
                                    statLabel: 'UDARTA:EG STUDY SHOWS',
                                    stat: '',
                                    statDescription: (
                                      <>
                                        Acknowledging donations leads to<br />
                                        a 20.3 percentage point increase<br />
                                        in funds raised from everyday<br />
                                        givers.
                                      </>
                                    )
                                  },
                                  {
                                    id: 2,
                                    type: 'text',
                                    floatingText: "",
                                    decorationImages: [
                                      '/assets/chapter_2_column3_1.svg',
                                      '/assets/ch2_fly.svg'
                                    ],
                                    label: '',
                                    title: (
                                      <>
                                        You didn't just raise funds.<br />
                                        You began a relationship!
                                      </>
                                    ),
                                    content: (
                                      <>
                                        We created a database template<br />
                                        to help nonprofits to record,<br />
                                        remember, and build continuity<br />
                                        from the first gift.
                                      </>
                                    ),
                                    transparentBackground: true
                                  },
                                  {
                                    id: 3,
                                    type: 'toolkit',
                                    toolkitLabel: 'TOOLKIT #1',
                                    toolkitTitle: 'Donor Database',
                                    toolkitDescription: 'How to record, remember, and build continuity from the first gift.',
                                    toolkitImage: '/assets/toolkit_22.svg'
                                  }
                                ]}
                              />
                            </div>
                          ) : (
                            // Chapter 2 Default View - just render scenario container, header is above
                            <div className={styles.scenarioContainer} style={{ marginTop: '10px' }}>
                              {/* Option A */}
                              <motion.div
                                className={styles.optionColumnLeft}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onMouseEnter={() => {
                                  setIsCh2OptionAHovered(true);
                                  const card = centerCardRefs.current[1];
                                  if (card) {
                                    card.style.transformOrigin = 'bottom left';
                                    card.style.transform = 'rotate(-15deg)';
                                  }
                                }}
                                onMouseLeave={() => {
                                  setIsCh2OptionAHovered(false);
                                  const card = centerCardRefs.current[1];
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                onClick={() => setSelectedOption('A')}
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
                              <div className={styles.centerCard} ref={(el) => { centerCardRefs.current[1] = el }}>
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
                                onMouseEnter={() => {
                                  setIsCh2OptionBHovered(true);
                                  const card = centerCardRefs.current[1];
                                  if (card) {
                                    card.style.transformOrigin = 'bottom right';
                                    card.style.transform = 'rotate(15deg)';
                                  }
                                }}
                                onMouseLeave={() => {
                                  setIsCh2OptionBHovered(false);
                                  const card = centerCardRefs.current[1];
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                onClick={() => setSelectedOption('B')}
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
                                      src="/assets/chapter2/fly_left_optionA_ch2.svg"
                                      alt=""
                                      className={styles.ch2HoverFly}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -20 }}
                                      transition={{ duration: 0.5, delay: 0.1 }}
                                    />
                                    <motion.img
                                      key="ch2-empty-bubble"
                                      src="/assets/chapter2/hover_left_bubble_empty_ch2.svg"
                                      alt=""
                                      className={styles.ch2HoverEmptyBubble}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.2 }}
                                    />
                                    <motion.img
                                      key="ch2-filled-bubble"
                                      src="/assets/chapter2/hover_left_bubble_filled_ch2.svg"
                                      alt=""
                                      className={styles.ch2HoverFilledBubble}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.25 }}
                                    />
                                    <motion.img
                                      key="ch2-image-left"
                                      src="/assets/chapter2/hover_left_image_1_ch2.svg"
                                      alt=""
                                      className={styles.ch2HoverImageLeft}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 10 }}
                                      transition={{ duration: 0.4, delay: 0.15 }}
                                    />
                                    <motion.img
                                      key="ch2-image-right"
                                      src="/assets/chapter2/hover_left_image_2_ch2.svg"
                                      alt=""
                                      className={styles.ch2HoverImageRight}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 10 }}
                                      transition={{ duration: 0.4, delay: 0.2 }}
                                    />
                                    <motion.img
                                      key="ch2-empty-bubble-2"
                                      src="/assets/chapter2/hover_left_bubble_empty_ch2.svg"
                                      alt=""
                                      className={styles.ch2HoverEmptyBubble2}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.3 }}
                                    />
                                    <motion.img
                                      key="ch2-filled-bubble-2"
                                      src="/assets/chapter2/hover_left_bubble_filled_ch2.svg"
                                      alt=""
                                      className={styles.ch2HoverFilledBubble2}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.35 }}
                                    />
                                  </>
                                )}
                              </AnimatePresence>

                              {/* Chapter 2 Option B Hover Decorations */}
                              <AnimatePresence>
                                {isCh2OptionBHovered && (
                                  <>
                                    <motion.img
                                      key="ch2-right-fly"
                                      src="/assets/chapter2/fly_left_optionA_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFly}
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 20 }}
                                      transition={{ duration: 0.5 }}
                                    />
                                    <motion.img
                                      key="ch2-right-image"
                                      src="/assets/chapter2/hover_right_image_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightImage}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.4, delay: 0.1 }}
                                    />
                                    <motion.img
                                      key="ch2-right-petal-1"
                                      src="/assets/chapter2/hover_right_petal_1_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFlowerPetal1}
                                      initial={{ opacity: 0, x: 10, y: 5 }}
                                      animate={{ opacity: 1, x: 0, y: 0 }}
                                      exit={{ opacity: 0, x: 10, y: 5 }}
                                      transition={{ duration: 0.4, delay: 0.15 }}
                                    />
                                    <motion.img
                                      key="ch2-right-petal-2"
                                      src="/assets/chapter2/hover_right_petal_2_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFlowerPetal2}
                                      initial={{ opacity: 0, x: 10, y: 5 }}
                                      animate={{ opacity: 1, x: 0, y: 0 }}
                                      exit={{ opacity: 0, x: 10, y: 5 }}
                                      transition={{ duration: 0.4, delay: 0.2 }}
                                    />
                                    <motion.img
                                      key="ch2-right-petal-3"
                                      src="/assets/chapter2/hover_right_petal_3_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFlowerPetal3}
                                      initial={{ opacity: 0, x: 10, y: 5 }}
                                      animate={{ opacity: 1, x: 0, y: 0 }}
                                      exit={{ opacity: 0, x: 10, y: 5 }}
                                      transition={{ duration: 0.4, delay: 0.25 }}
                                    />
                                    <motion.img
                                      key="ch2-right-flower-1"
                                      src="/assets/chapter2/hover_right_flower_1_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFlower1}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 20 }}
                                      transition={{ duration: 0.4, delay: 0.3 }}
                                    />
                                    <motion.img
                                      key="ch2-right-half-bottom"
                                      src="/assets/chapter2/hover_right_half_circle_bottom_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightHalfBottom}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.35 }}
                                    />
                                    <motion.img
                                      key="ch2-right-half-top"
                                      src="/assets/chapter2/hover_right_half_circle_top_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightHalfTop}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.4 }}
                                    />
                                    <motion.img
                                      key="ch2-right-stick"
                                      src="/assets/chapter2/hover_right_stick_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightStick}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 10 }}
                                      transition={{ duration: 0.4, delay: 0.45 }}
                                    />
                                  </>
                                )}
                              </AnimatePresence>
                            </div>
                          )}
                        </div>
                      ) : chapter.id === 3 ? (
                        // Chapter 3 Specific Layout - Persistent Header
                        <div className={styles.chapter1Wrapper}>
                          <div className={styles.chapter1Header}>
                            {!selectedOption && (
                              <>
                                <h4 className={styles.ch1Label}>CHAPTER III: STEWARDING DONORS</h4>
                                <h1 className={styles.ch1Title}>
                                  Staying connected after the first gift builds trust. This chapter focuses<br />
                                  on how consistent, non-ask engagement helps donors feel involved<br />
                                  and valued.
                                </h1>
                                <p className={styles.ch1Instruction}>Select one of the two options to reveal the right way</p>
                              </>
                            )}
                          </div>

                          {selectedOption === 'A' ? (
                            <div style={{
                              position: 'fixed',
                              top: '40px',
                              left: 0,
                              right: 0,
                              display: 'flex',
                              justifyContent: 'center',
                              zIndex: 10000,
                              pointerEvents: 'none'
                            }}>
                              <button
                                onClick={() => setSelectedOption(null)}
                                style={{
                                  pointerEvents: 'auto',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  background: 'transparent',
                                  border: 'none',
                                  color: '#1a4d3a',
                                  fontFamily: 'DM Sans, sans-serif',
                                  fontSize: '14px',
                                  fontWeight: 500,
                                  cursor: 'pointer',
                                  padding: 0
                                }}
                              >
                                <ArrowLeft size={16} />
                                <span>Back to scenario</span>
                              </button>
                            </div>
                          ) : selectedOption === 'B' ? (
                            // Chapter 3 Option B Content (without header, header is above)
                            <div style={{ flex: 1, width: '100%', position: 'relative' }}>
                              <OptionContent
                                embedded={true}
                                chapterTitle="CHAPTER III: STEWARDING DONORS"
                                chapterSubtitle="Staying connected after the first gift builds trust. This chapter focuses on how consistent, non-ask engagement helps donors feel involved and valued."
                                backgroundColor="transparent"
                                onBack={() => setSelectedOption(null)}
                                onNext={handleNextChapter}
                                // optionId="ch1OptionA"
                                customStyles={chapter3StylesB}
                                contentCards={[
                                  {
                                    id: 1,
                                    type: 'text',
                                    decorationImages: ['/assets/flower_chapter_4.svg'],
                                    title: "You're nurturing the relationship!",
                                    content: "Nidhi receives a photo of the lake being de-silted and understands how her contribution made a difference. Over time, she joins virtual events and stays engaged through regular, meaningful updates."
                                  },
                                  {
                                    id: 2,
                                    type: 'text',
                                    decorationImages: ['/assets/chapter_3_middlestick.svg'],
                                    showStatBelow: true,
                                    statLabel: "UDARTA:EG STUDY SHOWS",
                                    stat: "",
                                    statDescription: "Sharing impact updates is linked to an 11.3 percentage point increase in recurring donors.",
                                    showStatIcons: false
                                  },
                                  {
                                    id: 3,
                                    type: 'text',
                                    decorationImages: [
                                      '/assets/chapter_1_column2_1.svg',
                                      '/assets/chapter_3_middlestick.svg'
                                    ],
                                    // label: 'WHY THIS WORKS',
                                    content: "Regular, non-ask touchpoints help donors feel included in the journey – not contacted only when funds are needed.",
                                    floatingText: (
                                      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginTop: '10px' }}>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#93CD4D', flexShrink: 0, marginTop: '4px' }}></div>
                                        <span>We created three toolkits that will help you identify and activate people, tell better stories and organise your communications calendar</span>
                                      </div>
                                    )
                                  },
                                  {
                                    id: 4,
                                    type: 'toolkit',
                                    toolkitImage: '/assets/took4.svg'
                                  },
                                  {
                                    id: 5,
                                    type: 'toolkit',
                                    toolkitImage: '/assets/tool3.svg'
                                  },
                                  {
                                    id: 6,
                                    type: 'toolkit',
                                    toolkitImage: '/assets/tool5.svg'
                                  }
                                ]}
                              />
                            </div>
                          ) : (
                            // Chapter 3 Default View - just render scenario container, header is above
                            <div className={styles.scenarioContainer} style={{ marginTop: '10px' }}>
                              {/* Option A */}
                              <div
                                className={styles.optionColumnLeft}
                                onClick={() => setSelectedOption('A')}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#1a4d3a' }}>OPTION A</span>
                                <p className={styles.optionDesc} style={{ color: '#1a4d3a' }}>
                                  Reach out only when<br />
                                  you need funds again
                                </p>

                                {/* CTA */}
                                <div
                                  style={{
                                    marginTop: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    color: '#1a4d3a',
                                    fontWeight: 500
                                  }}
                                >
                                  <ArrowRight style={{ width: '20px', height: '20px' }} />
                                  <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '12px'
                                  }}>Choose Option</span>
                                </div>
                              </div>

                              {/* Center Card */}
                              <div className={styles.centerCard} ref={(el) => { centerCardRefs.current[2] = el }}>
                                <img
                                  src="/assets/chapter_3_card.svg"
                                  alt="Scenario 3 Card"
                                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                              </div>

                              {/* Option B */}
                              <div
                                className={styles.optionColumnRight}
                                onClick={() => setSelectedOption('B')}
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

                                {/* CTA */}
                                <div
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
                                  <ArrowLeft style={{ width: '20px', height: '20px' }} />
                                  <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '12px'
                                  }}>Choose Option</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : chapter.id === 4 ? (
                        // Chapter 4 Specific Layout - Persistent Header
                        <div className={styles.chapter1Wrapper}>
                          <div className={styles.chapter1Header}>
                            {!selectedOption && (
                              <>
                                <h4 className={styles.ch1Label}>CHAPTER IV: DONORS TO CHAMPIONS</h4>
                                <h1 className={styles.ch1Title}>
                                  When relationships are nurtured well, supporters deepen their involvement.<br />
                                  This chapter explores how donors grow into champions.
                                </h1>
                                <p className={styles.ch1Instruction}>Select one of the two options to reveal the right way</p>
                              </>
                            )}
                          </div>

                          {selectedOption === 'A' ? (
                            <Chapter4OptionA
                              embedded={true}
                              onBack={() => setSelectedOption(null)}
                              onNext={handleNextChapter}
                            />
                          ) : selectedOption === 'B' ? (
                            <div style={{
                              position: 'fixed',
                              top: '40px',
                              left: 0,
                              right: 0,
                              display: 'flex',
                              justifyContent: 'center',
                              zIndex: 10000,
                              pointerEvents: 'none'
                            }}>
                              <button
                                onClick={() => setSelectedOption(null)}
                                style={{
                                  pointerEvents: 'auto',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  background: 'transparent',
                                  border: 'none',
                                  color: '#1a4d3a',
                                  fontFamily: 'DM Sans, sans-serif',
                                  fontSize: '14px',
                                  fontWeight: 500,
                                  cursor: 'pointer',
                                  padding: 0
                                }}
                              >
                                <ArrowLeft size={16} />
                                <span>Back to scenario</span>
                              </button>
                            </div>
                          ) : (
                            // Chapter 4 Default View - Scenario Cards
                            <div className={styles.scenarioContainer} style={{ marginTop: '10px' }}>



                              {/* Option A */}
                              <div
                                className={styles.optionColumnLeft}
                                onClick={() => setSelectedOption('A')}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#1a4d3a' }}>OPTION A</span>
                                <p className={styles.optionDesc} style={{ color: '#1a4d3a' }}>
                                  Treat Nidhi like any<br />
                                  other donor and send a<br />
                                  standard appeal
                                </p>

                                {/* Static CTA */}
                                <div
                                  style={{
                                    marginTop: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    color: '#1a4d3a',
                                    fontWeight: 500
                                  }}
                                >
                                  <div>
                                    <ArrowRight style={{ width: '20px', height: '20px' }} />
                                  </div>
                                  <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '12px'
                                  }}>Choose Option</span>
                                </div>
                              </div>

                              {/* Center Card */}
                              <div className={styles.centerCard} ref={(el) => { centerCardRefs.current[3] = el }}>
                                <img
                                  src="/assets/chapter_4_card.svg"
                                  alt="Scenario 4 Card"
                                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                              </div>

                              {/* Option B */}
                              <div
                                className={styles.optionColumnRight}
                                onClick={() => setSelectedOption('B')}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#1a4d3a' }}>OPTION B</span>
                                <p className={styles.optionDesc} style={{ color: '#1a4d3a' }}>
                                  Invite her to give again –<br />
                                  and share the cause<br />
                                  with her network
                                </p>

                                {/* Static CTA */}
                                <div
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
                                  <div>
                                    <ArrowLeft style={{ width: '20px', height: '20px' }} />
                                  </div>
                                  <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '12px'
                                  }}>Choose Option</span>
                                </div>
                              </div>

                            </div>
                          )}
                        </div>
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
                                src="/assets/Bonus.png"
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
            if (chapterId === 5) {
              bonusSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
            } else {
              setActiveChapter(chapterId)
              chaptersSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        />

      </section >

      {/* Bonus Chapter Section */}
      <BonusChapter ref={bonusSectionRef} />

      {/* Download Section */}
      <DownloadSection />

      {/* Explore Grid Section */}
      <Explore />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
