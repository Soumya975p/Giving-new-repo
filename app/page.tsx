'use client';

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { DM_Sans } from 'next/font/google'
import styles from './page.module.css'
import OptionContent from '../components/OptionContent'
import PopupForm from '../components/PopupForm'
import chapter2StylesA from '../components/Chapter2OptionA.module.css'
import chapter2StylesB from '../components/Chapter2OptionB.module.css'
import chapter3StylesA from '../components/Chapter3OptionA.module.css'
import chapter3StylesB from '../components/Chapter3OptionB.module.css'
import chapter4StylesA from '../components/Chapter4OptionA.module.css'
import chapter4StylesB from '../components/Chapter4OptionB.module.css'
import Chapter3OptionA from '../components/Chapter3OptionA'
import Chapter3OptionB from '../components/Chapter3OptionB'
import Chapter4OptionA from '../components/Chapter4OptionA'
import Chapter4OptionB from '../components/Chapter4OptionB'
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
    gradient: 'var(--gradient-primary)',
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
    gradient: 'radial-gradient(131.15% 140.53% at 93.33% 139.19%, #FFEF3D 0%, #DCD647 22.85%, #C9CD33 46.96%, #8DA806 72.33%, #86A401 75.24%, #315900 99.52%)',
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
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isOptionAHovered, setIsOptionAHovered] = useState(false)
  const [isOptionBHovered, setIsOptionBHovered] = useState(false)
  const [isCh2OptionAHovered, setIsCh2OptionAHovered] = useState(false)
  const [isCh2OptionBHovered, setIsCh2OptionBHovered] = useState(false)
  const [isCh3OptionAHovered, setIsCh3OptionAHovered] = useState(false)
  const [isCh3OptionBHovered, setIsCh3OptionBHovered] = useState(false)
  const [isCh4OptionAHovered, setIsCh4OptionAHovered] = useState(false)
  const [isCh4OptionBHovered, setIsCh4OptionBHovered] = useState(false)

  const chapterRefs = useRef<(HTMLDivElement | null)[]>([])
  const activeChapterRef = useRef(activeChapter) // To track active chapter without dependency issues
  const chaptersSectionRef = useRef<HTMLDivElement>(null)
  const isScrollingRef = useRef(false)
  const scrollAccumulatorRef = useRef(0)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const scrollContainerRefs = useRef<(HTMLDivElement | null)[]>([])
  // Scroll Reference for Bonus Section
  const bonusSectionRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroBottomRef = useRef<HTMLDivElement>(null);
  const chapterGridRef = useRef<HTMLDivElement>(null);
  const exploreSectionRef = useRef<HTMLDivElement>(null);
  const downloadSectionRef = useRef<HTMLDivElement>(null);
  // Refs for center cards in each chapter
  const centerCardRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);

  // State for Custom Grid Cursor
  const [gridCursorPos, setGridCursorPos] = useState({ x: 0, y: 0 });
  const [showGridCursor, setShowGridCursor] = useState(false);

  // Explore cursor states moved to Explore component

  // State for scroll-triggered sticky chapters section
  const [isChaptersSectionSticky, setIsChaptersSectionSticky] = useState(false);

  // IntersectionObserver for pinning chapters section at 10% visibility (desktop only)
  useEffect(() => {
    if (!chaptersSectionRef.current) return;

    // Only enable sticky behavior on desktop (width >= 768px)
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    const section = chaptersSectionRef.current;
    let hasTriggered = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1 && !hasTriggered) {
          hasTriggered = true;
          console.log('✓ 10% visible - Smooth scrolling to top');

          // Smooth scroll to top
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Check when scroll completes by monitoring scroll position
          let lastScrollY = window.scrollY;
          let scrollCheckCount = 0;

          const checkScrollComplete = setInterval(() => {
            const currentScrollY = window.scrollY;

            // If scroll position hasn't changed for 2 checks, it's complete
            if (Math.abs(currentScrollY - lastScrollY) < 1) {
              scrollCheckCount++;

              if (scrollCheckCount >= 2) {
                clearInterval(checkScrollComplete);
                console.log('🔒 Scroll complete - Locking section smoothly');

                // Lock with a small delay for smooth transition
                setTimeout(() => {
                  document.body.style.overflow = 'hidden';
                  document.documentElement.style.overflow = 'hidden';
                  setIsChaptersSectionSticky(true);
                  observer.disconnect();
                }, 100);
              }
            } else {
              scrollCheckCount = 0;
            }

            lastScrollY = currentScrollY;
          }, 50);

          // Safety timeout in case scroll check fails
          setTimeout(() => {
            clearInterval(checkScrollComplete);
          }, 3000);
        }
      },
      {
        threshold: [0.05, 0.1, 0.15, 0.2]
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

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

  // Reset all gradient hover states when going back to scenario view
  useEffect(() => {
    if (selectedOption === null) {
      // Reset all hover states
      setIsOptionAHovered(false)
      setIsOptionBHovered(false)
      setIsCh2OptionAHovered(false)
      setIsCh2OptionBHovered(false)
      setIsCh3OptionAHovered(false)
      setIsCh3OptionBHovered(false)
      setIsCh4OptionAHovered(false)
      setIsCh4OptionBHovered(false)
    }
  }, [selectedOption])

  // Navigate to next chapter
  const handleNextChapter = () => {
    if (activeChapter < chapters.length) {
      setActiveChapter(activeChapter + 1)
    }
  }

  return (
    <div className={`${styles.pageWrapper} ${dmSans.className}`}>
      {/* Header with Logo and Menu */}
      <Header
        activeChapter={activeChapter}
        setActiveChapter={setActiveChapter}
        chaptersSectionRef={chaptersSectionRef}
        bonusSectionRef={bonusSectionRef}
        heroSectionRef={heroSectionRef}
        exploreSectionRef={exploreSectionRef}
        setIsChaptersSectionSticky={setIsChaptersSectionSticky}
      />

      {/* Hero Section */}
      <section className={styles.heroSection} ref={heroSectionRef}>

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
              Drawing on insights from the UDARTA:EG study of <span className={styles.emphasis}>300+ Indian nonprofits</span>, this guide offers toolkits to shift donor engagement from reactive to retention-focused.
            </p>
            <button className={styles.startButton} onClick={() => {
              chaptersSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <img src="/assets/start_diamond.svg" className={`${styles.startDiamond} ${styles.startDiamondLeft}`} alt="" />
              <span className={styles.startLabel}>Start Journey</span>
              <img src="/assets/start_diamond.svg" className={`${styles.startDiamond} ${styles.startDiamondRight}`} alt="" />
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
        <div className={styles.heroBottom} ref={heroBottomRef}>
          <p className={styles.cultivationLabel}>CULTIVATION IN ACTION</p>
          <h2 className={styles.heroBottomTitle}>
            A <span className={styles.highlight}>step by step guide</span> to donor engagement through the journey of <span className={styles.highlight}>Nidhi</span>, our perennial supporter.
          </h2>
          <p className={styles.heroBottomDesc}>
            Follow Nidhi's journey across four chapters to see how everyday giving can grow from a one-time transaction into a lasting relationship. Each chapter blends real-world moments with practical tools to help nonprofits guide donors naturally. Your donors may be at different stages of this journey—explore the chapters in any order that serves you best.
          </p>

          <div className={styles.chapterSelectionWrapper} ref={chapterGridRef}>
            {/* <div className={styles.heroDividerLine}></div> */}

            <p className={styles.chapterSelectionLabel}>Select a chapter to begin</p>

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
                <div
                  className={styles.glassButton}
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    transform: `translate(${gridCursorPos.x - 90}px, ${gridCursorPos.y - 28}px)`, // Centered
                    pointerEvents: 'none',
                    zIndex: 9999,
                  }}
                >
                  <span className={`${styles.diamond} ${styles.left}`}></span>
                  <span className={styles.btnText}>Explore Chapters</span>
                  <span className={`${styles.diamond} ${styles.right}`}></span>
                </div>
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
                // Restore body scroll
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
                setIsChaptersSectionSticky(false);

                setTimeout(() => {
                  heroBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
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
                // Restore body scroll
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
                setIsChaptersSectionSticky(false);

                setTimeout(() => {
                  if (downloadSectionRef.current) {
                    downloadSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              <span className={styles.navText}>View All Toolkits</span>
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
                className={`${styles.chapterPanel} ${
                  !selectedOption && chapter.id === 1 && isOptionAHovered ? styles.showGradientLeft :
                  !selectedOption && chapter.id === 1 && isOptionBHovered ? styles.showGradientRight :
                  !selectedOption && chapter.id === 2 && isCh2OptionAHovered ? styles.showGradientLeftCh2 :
                  !selectedOption && chapter.id === 2 && isCh2OptionBHovered ? styles.showGradientRightCh2 :
                  !selectedOption && chapter.id === 3 && isCh3OptionAHovered ? styles.showGradientLeftCh3 :
                  !selectedOption && chapter.id === 3 && isCh3OptionBHovered ? styles.showGradientRightCh3 :
                  !selectedOption && chapter.id === 4 && isCh4OptionAHovered ? styles.showGradientLeftCh4 :
                  !selectedOption && chapter.id === 4 && isCh4OptionBHovered ? styles.showGradientRightCh4 : ''
                }`}
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
                                <p className={`${styles.selectChapter} ${styles.desktopOnly}`} style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Select one of the two options to reveal the right way</p>
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
                                endImage="/assets/chapter_1_endicon.png"
                                contentCards={[
                                  {
                                    id: 1,
                                    type: 'text',
                                    // floatingTextLabel: "UDARTA:EG STUDY SHOWS",
                                    floatingText: "Finding new supporters can be expensive and effort intensive. You may receive some response but not strong enough because reaching strangers requires significantly more effort to build trust and convince them to give.",
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
                                    stat: 'Nearly two-thirds of Indian nonprofits',
                                    statDescription: 'say outreach through friends and family is their most effective fundraising strategy, with 95% having used it at some point.',
                                    showStatIcons: false,
                                    statBoxTransparent: true
                                  },
                                  {
                                    id: 2,
                                    type: 'text',
                                    floatingText: "Instead, if you map our your existing network, you would know that you have underestimated its size and power. Your network can support you in many forms beyond money - connections, skills, time, influence, all matter, and everyone has something to give.",
                                    decorationImage: '/assets/chapter_2_column2_1.svg',
                                    label: '',
                                    title: '',
                                    content: '',
                                    // Nested stat box below the floating text
                                    showStatBelow: true,
                                    statLabel: 'UDARTA:EG STUDY SHOWS',
                                    stat: '76% of nonprofits',
                                    statDescription: 'reported using volunteers to reach new supporters, indicating a strong leaning toward leveraging community networks over impersonal channels.'
                                  },
                                  {
                                    id: 3,
                                    type: 'text',
                                    floatingText: (
                                      <>
                                        Here is a toolkit to guide you <br />  and your team through a simple, <br />  effective and proven network <br />  mapping exercise.
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
                                    toolkitNumber: 1,
                                    toolkitTitle: 'Network Mapping',
                                    toolkitDescription: 'A simple way to identify and activate people already connected to your cause.',
                                    toolkitBackgroundImage: '/assets/toolkit1/toolkit1_background.png',
                                    toolkitDesignImage: '/assets/toolkit1/toolkit1_design.png',
                                    toolkitImage: '/assets/toolkit1.svg',
                                    toolkitURL: 'https://docs.google.com/spreadsheets/d/1s2DnnBgkzaFpaeR18VBuMq9Yby2JkvBsDZqkamidCFg/edit?gid=525572238#gid=525572238',
                                    onToolkitDownload: () => setIsPopupOpen(true),
                                    onToolkitView: () => setIsPopupOpen(true)
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
                                endImage="/assets/chapter_1_endicon.png"
                                contentCards={[
                                  {
                                    id: 11,
                                    type: 'text',
                                    // floatingTextLabel: "UDARTA:EG STUDY SHOWS",
                                    floatingText: (
                                      <>
                                        Yes!<br />
                                        Once you map your existing network,
                                        you will realise that you have
                                        underestimated its size and power.
                                        Your network can support you in many
                                        forms beyond money - connections,
                                        skills, time, influence, all matter, and everyone has something to give.
                                      </>
                                    ),
                                    decorationImages: ['/assets/chapter_1_column1_2.svg'],
                                    label: '',
                                    title: '',
                                    content: '',
                                    showStatBelow: true,
                                    statLabel: 'UDARTA:EG STUDY SHOWS',
                                    stat: '76% of nonprofits',
                                    statDescription: 'reported using volunteers to reach new supporters, indicating a strong leaning toward leveraging community networks over impersonal channels.'
                                  },
                                  {
                                    id: 12,
                                    type: 'text',
                                    floatingText: (
                                      <>
                                        Here is a toolkit to guide you<br /> and
                                        your team through a simple,<br />
                                        effective and proven network<br /> mapping exercise.
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
                                    toolkitNumber: 1,
                                    toolkitTitle: 'Network Mapping',
                                    toolkitDescription: 'A simple way to identify and activate people already connected to your cause.',
                                    toolkitURL: 'https://docs.google.com/spreadsheets/d/1s2DnnBgkzaFpaeR18VBuMq9Yby2JkvBsDZqkamidCFg/edit?gid=525572238#gid=525572238',
                                    toolkitBackgroundImage: '/assets/toolkit1/toolkit1_background.png',
                                    toolkitDesignImage: '/assets/toolkit1/toolkit1_design.png',
                                    toolkitImage: '/assets/toolkit1.svg',
                                    onToolkitDownload: () => setIsPopupOpen(true),
                                    onToolkitView: () => setIsPopupOpen(true)
                                  }
                                ]}
                              />
                            </div>
                          ) : (
                            <div className={styles.scenarioContainer}>
                              <p className={`${styles.ch1Instruction} ${styles.mobileOnly}`} style={{ order: 2, width: '100%', textAlign: 'center', margin: '0 0', color: 'rgba(0, 0, 0, 0.6)' }}>
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
                                    marginTop: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
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
                              <div className={`${styles.centerCard} ${styles.ch1CenterCard}`} ref={(el) => { centerCardRefs.current[0] = el }}>
                                <div className={styles.scenarioCard}>
                                  <div className={styles.scenarioInner}>
                                    <div className={styles.scenarioLabel}>SCENARIO 1</div>
                                    <div className={styles.scenarioHeadline}>
                                      Imagine, you need
                                      to raise funds to de-silt a lake.
                                      How would do you begin?
                                    </div>
                                  </div>
                                  <img src="/assets/ch_1_cardicon.png" alt="Card Icon" className={styles.scenarioCardIcon} />
                                </div>
                              </div>

                              {/* Option A Decorations (Visible on Hover) */}
                              <AnimatePresence>
                                {isOptionAHovered && (
                                  <>
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
                                  Tap into your existing
                                  network – Connections
                                  of volunteers,
                                  champions & donors
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: '#20315B',
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
                                  }}> Choose Option</span>
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
                                <h1 className={styles.ch1Title} style={{ color: '#FFFFFF' }}>
                                  A first donation is more than a transaction. This chapter focuses on<br />
                                  how timely acknowledgment and simple follow-up can turn a first gift<br />
                                  into the beginning of a relationship.
                                </h1>
                                <p className={`${styles.selectChapter} ${styles.desktopOnly}`} style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Select one of the two options to reveal the right way</p>
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
                                endImage="/assets/chapter_2_endicon.png"
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
                                    statIconImage: '/assets/ch2_icon.svg'
                                  },
                                  {
                                    id: 2,
                                    type: 'text',
                                    floatingText: "She receives not just an 80G receipt, but also a clear message of appreciation.",
                                    decorationImage: '/assets/chapter_2_column2_1.svg',
                                    label: '',
                                    title: '',
                                    content: '',
                                    showStatBelow: true,
                                    statLabel: 'UDARTA:EG STUDY SHOWS',
                                    stat: '',
                                    statDescription: 'Acknowledging donations leads to a 20.3 percentage points increase in proportion of funds raised from everyday givers.',
                                    showStatIcons: false
                                  },
                                  {
                                    id: 3,
                                    type: 'text',
                                    floatingText: "",
                                    decorationImage: '/assets/chapter_2_column3_1.svg',
                                    label: '',
                                    title: "You didn’t just raise funds.You began a relationship!",
                                    content: 'Here is a database template to help you record, remember, and build continuity from the first gift.',
                                    transparentBackground: true
                                  },
                                  {
                                    id: 4,
                                    type: 'toolkit',
                                    toolkitLabel: 'TOOLKIT #1',
                                    toolkitTitle: 'Donor Database',
                                    toolkitDescription: 'How to record, remember, and build continuity from the first gift.',
                                    toolkitNumber: 2,
                                    toolkitBackgroundImage: '/assets/toolkit1/toolkit1_background.png',
                                    toolkitDesignImage: '/assets/toolkit2/toolkit2_design.svg',
                                    toolkitDisableRotation: true,
                                    toolkitDesignVariant: 'ch2',
                                    toolkitURL: 'https://docs.google.com/spreadsheets/d/1s2DnnBgkzaFpaeR18VBuMq9Yby2JkvBsDZqkamidCFg/edit?gid=525572238#gid=525572238',
                                    toolkitImage: '/assets/chapter2_option1_toolkit.svg',
                                    onToolkitDownload: () => setIsPopupOpen(true),
                                    onToolkitView: () => setIsPopupOpen(true)
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
                                endImage="/assets/chapter_2_endicon.png"
                                flowerDecorImage="/assets/chapter_2_option_A.svg"
                                contentCards={[
                                  {
                                    id: 1,
                                    type: 'text',
                                    // floatingTextLabel: "UDARTA:EG STUDY SHOWS",
                                    floatingText: (
                                      <>
                                        You thank Nidhi within two days.
                                        She receives an 80G receipt and a
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
                                        Acknowledging donations leads toa 20.3 percentage point increase
                                        in proportion of funds raised from everyday givers.
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
                                        You didn't just raise funds.
                                        You began a relationship!
                                      </>
                                    ),
                                    content: (
                                      <>
                                        We created a database template
                                        to help nonprofits to record,
                                        remember, and build continuity
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
                                    toolkitNumber: 2,
                                    toolkitBackgroundImage: '/assets/toolkit1/toolkit1_background.png',
                                    toolkitDesignImage: '/assets/toolkit2/toolkit2_design.svg',
                                    toolkitDisableRotation: false,
                                    toolkitURL: 'https://docs.google.com/spreadsheets/d/1s2DnnBgkzaFpaeR18VBuMq9Yby2JkvBsDZqkamidCFg/edit?gid=525572238#gid=525572238',
                                    toolkitDesignVariant: 'ch2',
                                    toolkitImage: '/assets/chapter2_option1_toolkit.svg',
                                    onToolkitDownload: () => setIsPopupOpen(true),
                                    onToolkitView: () => setIsPopupOpen(true)
                                  }
                                ]}
                              />
                            </div>
                          ) : (
                            // Chapter 2 Default View - just render scenario container, header is above
                            <div className={styles.scenarioContainer} style={{ marginTop: '10px' }}>
                              <p className={`${styles.ch1Instruction} ${styles.mobileOnly}`} style={{ order: 2, width: '100%', textAlign: 'center', margin: '0 0', color: 'rgba(255, 255, 255, 0.8)' }}>
                                Select one of the two options to reveal the right way
                              </p>
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
                                <span className={styles.optionLabel} style={{ color: '#87F6FF' }}>OPTION A</span>
                                <p className={styles.optionDesc} style={{ color: '#fff', }}>
                                  Record her details in<br />
                                  your database and<br />
                                  acknowledge her<br />
                                  support
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
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
                                <div className={`${styles.scenarioCard} ${styles.ch2CenterCardMini}`}>
                                  <div className={styles.scenarioInner}>
                                    <div className={styles.scenarioLabel}>SCENARIO 2</div>
                                    <div className={`${styles.scenarioHeadline} ${styles.scenarioHeadlineCh2}`}>
                                      You reach out to Nidhi, <br />
                                      someone you identified through your existing network. She becomes a first-time donor by contributing ₹2,500 via your crowdfunding campaign. What do you do next?
                                    </div>
                                  </div>
                                  <img src="/assets/ch_2_cardicon.png" alt="Card Icon" className={styles.scenarioCardIconCh2} />
                                </div>
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
                                <span className={styles.optionLabel} style={{ color: '#87F6FF' }}>OPTION B</span>
                                <p className={styles.optionDesc} style={{ color: '#fff', }}>
                                  No thank you or follow-<br />
                                  ups. Accept the<br />
                                  donation and move on.
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
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
                                      transition={{ duration: 0.3, delay: 0.2 }}
                                    />
                                    <motion.img
                                      key="ch2-filled-bubble"
                                      src="/assets/chapter2/filled_bubble.svg"
                                      alt=""
                                      className={styles.ch2HoverFilledBubble}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.25 }}
                                    />
                                    <motion.img
                                      key="ch2-image-left"
                                      src="/assets/chapter2/hover_image_left_ch2.svg"
                                      alt=""
                                      className={styles.ch2HoverImageLeft}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 10 }}
                                      transition={{ duration: 0.4, delay: 0.15 }}
                                    />
                                    <motion.img
                                      key="ch2-image-right"
                                      src="/assets/chapter2/hover_image_right_ch2.svg"
                                      alt=""
                                      className={styles.ch2HoverImageRight}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 10 }}
                                      transition={{ duration: 0.4, delay: 0.2 }}
                                    />
                                    <motion.img
                                      key="ch2-empty-bubble-2"
                                      src="/assets/chapter2/empty_bubble.svg"
                                      alt=""
                                      className={styles.ch2HoverEmptyBubble2}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.3 }}
                                    />
                                    <motion.img
                                      key="ch2-filled-bubble-2"
                                      src="/assets/chapter2/filled_bubble.svg"
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
                                      src="/assets/chapter2/hover_fly_right_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFly}
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 20 }}
                                      transition={{ duration: 0.5 }}
                                    />
                                    <motion.img
                                      key="ch2-right-image"
                                      src="/assets/chapter2/hover_image_right_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightImage}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.4, delay: 0.1 }}
                                    />
                                    <motion.img
                                      key="ch2-right-petal-1"
                                      src="/assets/chapter2/hover_right_flower_petal1_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFlowerPetal1}
                                      initial={{ opacity: 0, x: 10, y: 5 }}
                                      animate={{ opacity: 1, x: 0, y: 0 }}
                                      exit={{ opacity: 0, x: 10, y: 5 }}
                                      transition={{ duration: 0.4, delay: 0.15 }}
                                    />
                                    <motion.img
                                      key="ch2-right-petal-2"
                                      src="/assets/chapter2/hover_right_flower_petal2_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFlowerPetal2}
                                      initial={{ opacity: 0, x: 10, y: 5 }}
                                      animate={{ opacity: 1, x: 0, y: 0 }}
                                      exit={{ opacity: 0, x: 10, y: 5 }}
                                      transition={{ duration: 0.4, delay: 0.2 }}
                                    />
                                    <motion.img
                                      key="ch2-right-petal-3"
                                      src="/assets/chapter2/hover_right_flower_petal3_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFlowerPetal3}
                                      initial={{ opacity: 0, x: 10, y: 5 }}
                                      animate={{ opacity: 1, x: 0, y: 0 }}
                                      exit={{ opacity: 0, x: 10, y: 5 }}
                                      transition={{ duration: 0.4, delay: 0.25 }}
                                    />
                                    <motion.img
                                      key="ch2-right-flower-1"
                                      src="/assets/chapter2/hover_right_flower1_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightFlower1}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 20 }}
                                      transition={{ duration: 0.4, delay: 0.3 }}
                                    />
                                    <motion.img
                                      key="ch2-right-half-bottom"
                                      src="/assets/chapter2/hover_right_halfbottom_ch2.svg"
                                      alt=""
                                      className={styles.ch2RightHalfBottom}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.35 }}
                                    />
                                    <motion.img
                                      key="ch2-right-half-top"
                                      src="/assets/chapter2/hover_right_halftop_ch2.svg"
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

                                <h4 className={styles.ch1Label} style={{ color: '#14343CCC' }}>CHAPTER III: STEWARDING DONORS</h4>
                                <h1 className={styles.ch1Title} style={{ color: '#14343C' }}>
                                  Staying connected after the first gift builds trust. This chapter focuses<br />
                                  on how consistent, non-ask engagement helps donors feel involved<br />
                                  and valued.
                                </h1>
                                <p className={`${styles.selectChapter} ${styles.desktopOnly}`} style={{ color: '#14343CCC' }}>Select one of the two options to reveal the right way</p>
                              </>
                            )}
                          </div>

                          {selectedOption === 'A' ? (
                            <Chapter3OptionA
                              embedded={true}
                              onBack={() => setSelectedOption(null)}
                              onNext={handleNextChapter}
                              onToolkitDownload={() => setIsPopupOpen(true)}
                              endImage="/assets/chapter_3_endicon.png"
                            />
                          ) : selectedOption === 'B' ? (
                            // Chapter 3 Option B Content
                            <Chapter3OptionB
                              embedded={true}
                              onBack={() => setSelectedOption(null)}
                              onNext={handleNextChapter}
                              endImage="/assets/chapter_3_endicon.png"
                            />
                          ) : (
                            // Chapter 3 Default View - just render scenario container, header is above
                            <div className={styles.scenarioContainer} style={{ marginTop: '10px' }}>
                              <p className={`${styles.ch1Instruction} ${styles.mobileOnly}`} style={{ order: 2, width: '100%', textAlign: 'center', margin: '0 0', color: '#14343CCC' }}>
                                Select one of the two options to reveal the right way
                              </p>
                              {/* Option A */}
                              <motion.div
                                className={styles.optionColumnLeft}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onMouseEnter={() => {
                                  setIsCh3OptionAHovered(true);
                                  const card = centerCardRefs.current[2];
                                  if (card) {
                                    card.style.transformOrigin = 'bottom left';
                                    card.style.transform = 'rotate(-15deg)';
                                  }
                                }}
                                onMouseLeave={() => {
                                  setIsCh3OptionAHovered(false);
                                  const card = centerCardRefs.current[2];
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                onClick={() => setSelectedOption('A')}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#20315B' }}>OPTION A</span>
                                <p className={styles.optionDesc} style={{ color: '#20315B' }}>
                                  Reach out only when<br />
                                  you need funds again
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
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
                              <div className={styles.centerCard} ref={(el) => { centerCardRefs.current[2] = el }}>
                                <img
                                  src="/assets/chapter_3_card.png"
                                  alt="Scenario 3 Card"
                                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                              </div>

                              {/* Chapter 3 Option A Hover Decorations */}
                              <AnimatePresence>
                                {isCh3OptionAHovered && (
                                  <>
                                    <motion.img
                                      key="ch3-optiona-hover"
                                      src="/assets/chapter3/hover_ch3_optiona.svg"
                                      alt=""
                                      className={styles.ch3OptionAHover}
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.9 }}
                                      transition={{ duration: 0.5 }}
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
                                  setIsCh3OptionBHovered(true);
                                  const card = centerCardRefs.current[2];
                                  if (card) {
                                    card.style.transformOrigin = 'bottom right';
                                    card.style.transform = 'rotate(15deg)';
                                  }
                                }}
                                onMouseLeave={() => {
                                  setIsCh3OptionBHovered(false);
                                  const card = centerCardRefs.current[2];
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                onClick={() => setSelectedOption('B')}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#20315B' }}>OPTION B</span>
                                <p className={styles.optionDesc} style={{ color: '#20315B' }}>
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
                                    marginTop: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
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
                                      key="ch3-right-fly"
                                      src="/assets/chapter3/hover_fly_ch3.svg"
                                      alt=""
                                      className={styles.ch3RightFly}
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 20 }}
                                      transition={{ duration: 0.5 }}
                                    />
                                    <motion.img
                                      key="ch3-right-flower"
                                      src="/assets/chapter3/hover_right_flower_ch3.svg"
                                      alt=""
                                      className={styles.ch3RightFlower}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 20 }}
                                      transition={{ duration: 0.4, delay: 0.1 }}
                                    />
                                    <motion.img
                                      key="ch3-diamond-bottom"
                                      src="/assets/chapter3/hover_diamond_bottom_ch3.svg"
                                      alt=""
                                      className={styles.ch3DiamondBottom}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.3, delay: 0.15 }}
                                    />
                                    <motion.img
                                      key="ch3-top-section"
                                      src="/assets/chapter3/hover_topsection_ch3.svg"
                                      alt=""
                                      className={styles.ch3TopSection}
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      transition={{ duration: 0.4, delay: 0.2 }}
                                    />
                                    <motion.img
                                      key="ch3-left-flower"
                                      src="/assets/chapter3/hover_left_flower_ch3.svg"
                                      alt=""
                                      className={styles.ch3LeftFlower}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 10 }}
                                      transition={{ duration: 0.4, delay: 0.25 }}
                                    />
                                  </>
                                )}
                              </AnimatePresence>
                            </div>
                          )}
                        </div>
                      ) : chapter.id === 4 ? (
                        // Chapter 4 Specific Layout - Persistent Header
                        <div className={styles.chapter1Wrapper}>
                          <div className={styles.chapter1Header}>
                            {!selectedOption && (
                              <>

                                <h4 className={styles.ch1Label} style={{ color: '#FFFFFFCC' }}>CHAPTER IV: DONORS TO CHAMPIONS</h4>
                                <h1 className={styles.ch1Title} style={{ color: '#FFFFFF' }}>
                                  When relationships are nurtured well, supporters deepen their involvement.
                                  This chapter explores how donors grow into champions.
                                </h1>
                                <p className={`${styles.selectChapter} ${styles.desktopOnly}`} style={{ color: '#FFFFFFCC' }}>Select one of the two options to reveal the right way</p>
                              </>
                            )}
                          </div>

                          {selectedOption === 'A' ? (
                            <Chapter4OptionA
                              embedded={true}
                              onBack={() => setSelectedOption(null)}
                              onNext={handleNextChapter}
                              onToolkitDownload={() => setIsPopupOpen(true)}
                              endImage="/assets/chapter_4_endicon.png"
                            />
                          ) : selectedOption === 'B' ? (
                            <Chapter4OptionB
                              embedded={true}
                              onBack={() => setSelectedOption(null)}
                              onNext={handleNextChapter}
                              onToolkitDownload={() => setIsPopupOpen(true)}
                              endImage="/assets/chapter_4_endicon.png"
                            />
                          ) : (
                            // Chapter 4 Default View - Scenario Cards
                            <div className={styles.scenarioContainer} style={{ marginTop: '10px' }}>
                              <p className={`${styles.ch1Instruction} ${styles.mobileOnly}`} style={{ order: 2, width: '100%', textAlign: 'center', margin: '0 0', color: '#FFFFFFCC' }}>
                                Select one of the two options to reveal the right way
                              </p>



                              {/* Option A */}
                              <motion.div
                                className={styles.optionColumnLeft}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onMouseEnter={() => {
                                  setIsCh4OptionAHovered(true);
                                  const card = centerCardRefs.current[3];
                                  if (card) {
                                    card.style.transformOrigin = 'bottom left';
                                    card.style.transform = 'rotate(-15deg)';
                                  }
                                }}
                                onMouseLeave={() => {
                                  setIsCh4OptionAHovered(false);
                                  const card = centerCardRefs.current[3];
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                onClick={() => setSelectedOption('A')}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#20315B' }}>OPTION A</span>
                                <p className={styles.optionDesc} style={{ color: '#20315B' }}>
                                  Treat Nidhi like any<br />
                                  other donor and send a<br />
                                  standard appeal
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
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
                              <div className={styles.centerCard} ref={(el) => { centerCardRefs.current[3] = el }}>
                                <img
                                  src="/assets/chapter_4_card.png"
                                  alt="Scenario 4 Card"
                                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                              </div>

                              {/* Chapter 4 Option A Hover Decorations */}
                              <AnimatePresence>
                                {isCh4OptionAHovered && (
                                  <>
                                    <motion.img
                                      key="ch4-optiona-hover"
                                      src="/assets/chapter4/hover_ch4_optiona.png"
                                      alt=""
                                      className={styles.ch4OptionAHover}
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.9 }}
                                      transition={{ duration: 0.5 }}
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
                                  setIsCh4OptionBHovered(true);
                                  const card = centerCardRefs.current[3];
                                  if (card) {
                                    card.style.transformOrigin = 'bottom right';
                                    card.style.transform = 'rotate(15deg)';
                                  }
                                }}
                                onMouseLeave={() => {
                                  setIsCh4OptionBHovered(false);
                                  const card = centerCardRefs.current[3];
                                  if (card) card.style.transform = 'rotate(0deg)';
                                }}
                                onClick={() => setSelectedOption('B')}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className={styles.optionLabel} style={{ color: '#20315B' }}>OPTION B</span>
                                <p className={styles.optionDesc} style={{ color: '#20315B' }}>
                                  Invite her to give again,<br /> appeal for a higher amount<br /> and ask her to share the<br /> campaign with her network.
                                </p>

                                {/* Animated CTA */}
                                <motion.div
                                  variants={ctaVariants}
                                  style={{
                                    marginTop: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
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

                              {/* Chapter 4 Option B Hover Decorations */}
                              <AnimatePresence>
                                {isCh4OptionBHovered && (
                                  <>
                                    <motion.img
                                      key="ch4-optionb-hover"
                                      src="/assets/chapter4/hover_ch4_optionb.svg"
                                      alt=""
                                      className={styles.ch4OptionBHover}
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.9 }}
                                      transition={{ duration: 0.5 }}
                                    />
                                  </>
                                )}
                              </AnimatePresence>

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
                                src="/assets/bonus.png"
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
                              <span style={{
                                color: '#ffffff',
                                fontFamily: 'DM Sans, sans-serif',
                                fontWeight: 400,
                                fontStyle: 'italic',
                                fontSize: '20px',
                                lineHeight: '150%',
                                letterSpacing: '0'
                              }}>
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
              // Restore body scroll and navigate in one smooth motion
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
              setIsChaptersSectionSticky(false);

              // Immediate smooth scroll to bonus section
              requestAnimationFrame(() => {
                bonusSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              });
            } else {
              setActiveChapter(chapterId);
            }
          }}
          onAllChaptersClick={() => {
            // Restore body scroll
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            setIsChaptersSectionSticky(false);
            setTimeout(() => {
              heroBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />

      </section >

      {/* Bonus Chapter Section */}
      <BonusChapter ref={bonusSectionRef} onToolkitClick={() => setIsPopupOpen(true)} />

      {/* Download Section */}
      <div ref={downloadSectionRef}>
        <DownloadSection />
      </div>

      {/* Explore Grid Section */}
      <div ref={exploreSectionRef}>
        <Explore />
      </div>

      {/* Footer Section */}
      <Footer />

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  )
}
