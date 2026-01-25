// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import styles from './page.module.css'

// interface Chapter {
//   id: number
//   title: string
//   subtitle: string
//   tabImage: string
//   contentImage: string
//   gradient: string
//   tabGradient: string
//   gridImage: string
// }

// const chapters: Chapter[] = [
//   {
//     id: 1,
//     title: 'I. Tilling the Soil',
//     subtitle: 'Network Expansion',
//     tabImage: '/assets/Tab 1.png',
//     contentImage: '/assets/1.png',
//     gradient: 'linear-gradient(135deg, #1eb59a 0%, #6fdc8c 50%, #a8e583 100%)',
//     tabGradient: 'linear-gradient(135deg, #1eb59a 0%, #16a085 100%)',
//     gridImage: '/assets/c1.png'
//   },
//   {
//     id: 2,
//     title: 'II. The Planting',
//     subtitle: 'Building Connections',
//     tabImage: '/assets/Tab 2.png',
//     contentImage: '/assets/2.png',
//     gradient: 'linear-gradient(135deg, #4dd4d4 0%, #5de8d5 50%, #3ababa 100%)',
//     tabGradient: 'linear-gradient(135deg, #4dd4d4 0%, #3ababa 100%)',
//     gridImage: '/assets/c2.png'
//   },
//   {
//     id: 3,
//     title: 'III. The Nurturing',
//     subtitle: 'Stewarding Donors',
//     tabImage: '/assets/Tab 3.png',
//     contentImage: '/assets/3.png',
//     gradient: 'linear-gradient(180deg, #0FB8C5 0%, #13D9E8 50%, #FFCD86 100%)',
//     tabGradient: 'linear-gradient(180deg, #0FB8C5 0%, #13D9E8 100%)',
//     gridImage: '/assets/c3.png'
//   },
//   {
//     id: 4,
//     title: 'IV. Growth',
//     subtitle: 'Donors to Champions',
//     tabImage: '/assets/Tab 4.png',
//     contentImage: '/assets/4.png',
//     gradient: 'linear-gradient(180deg, #315900 0%, #86A401 25%, #C9CD33 50%, #DCD647 75%, #FFEF3D 100%)',
//     tabGradient: 'linear-gradient(180deg, #315900 0%, #B0D313 100%)',
//     gridImage: '/assets/c4.png'
//   }
// ]

// export default function Home() {
//   const [activeChapter, setActiveChapter] = useState(1)
//   const [scrollProgress, setScrollProgress] = useState(0)
//   const chapterRefs = useRef<(HTMLDivElement | null)[]>([])
//   const activeChapterRef = useRef(activeChapter) // To track active chapter without dependency issues
//   const chaptersSectionRef = useRef<HTMLDivElement>(null)
//   const isScrollingRef = useRef(false)
//   const scrollAccumulatorRef = useRef(0)
//   const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
//   const scrollContainerRefs = useRef<(HTMLDivElement | null)[]>([])

//   useEffect(() => {
//     activeChapterRef.current = activeChapter

//     // Reset scroll position to left when chapter changes
//     const newScrollContainer = scrollContainerRefs.current[activeChapter - 1]
//     if (newScrollContainer) {
//       newScrollContainer.scrollLeft = 0
//     }
//     setScrollProgress(0)
//   }, [activeChapter])

//   // Handle horizontal scroll animation based on scroll position
//   useEffect(() => {
//     const handleContentScroll = () => {
//       const currentScrollContainer = scrollContainerRefs.current[activeChapter - 1]
//       if (!currentScrollContainer) return

//       const scrollLeft = currentScrollContainer.scrollLeft
//       const maxScroll = currentScrollContainer.scrollWidth - currentScrollContainer.clientWidth

//       if (maxScroll > 0) {
//         const progress = scrollLeft / maxScroll
//         setScrollProgress(progress)
//       } else {
//         setScrollProgress(0)
//       }
//     }

//     const currentScrollContainer = scrollContainerRefs.current[activeChapter - 1]
//     if (currentScrollContainer) {
//       currentScrollContainer.addEventListener('scroll', handleContentScroll)
//       handleContentScroll() // Initial check

//       return () => {
//         currentScrollContainer.removeEventListener('scroll', handleContentScroll)
//       }
//     }
//   }, [activeChapter])

//   const handleNextChapter = () => {
//     if (activeChapter < chapters.length) {
//       setActiveChapter(activeChapter + 1)
//     }
//   }

//   // Handle wheel events for chapter transitions
//   useEffect(() => {
//     const handleWheel = (e: WheelEvent) => {
//       const chaptersSection = chaptersSectionRef.current
//       if (!chaptersSection) return

//       const sectionRect = chaptersSection.getBoundingClientRect()
//       // Check if section is significantly visible (relaxed buffer to catch fast scrolls)
//       const inChaptersSection = sectionRect.top <= 100 && sectionRect.bottom >= 100

//       if (inChaptersSection) {
//         const scrollDirection = e.deltaY > 0 ? 'down' : 'up'
//         const currentChapter = activeChapterRef.current
//         const currentScrollContainer = scrollContainerRefs.current[currentChapter - 1]

//         // Check horizontal scroll capability
//         let isHorizontallyScrolling = false
//         if (currentScrollContainer) {
//           // Check if we can scroll more to the right?
//           // Use a small buffer (e.g. 5px) for float comparisons
//           const maxScrollLeft = currentScrollContainer.scrollWidth - currentScrollContainer.clientWidth
//           const canScrollRight = currentScrollContainer.scrollLeft < maxScrollLeft - 5
//           const canScrollLeft = currentScrollContainer.scrollLeft > 5

//           if (scrollDirection === 'down' && canScrollRight) {
//             e.preventDefault()
//             currentScrollContainer.scrollLeft += e.deltaY
//             isHorizontallyScrolling = true

//             // Reset chapter scroll accumulator because we are scrolling content
//             scrollAccumulatorRef.current = 0
//             return // Exit, don't change chapter
//           }

//           if (scrollDirection === 'up' && canScrollLeft) {
//             e.preventDefault()
//             currentScrollContainer.scrollLeft += e.deltaY
//             isHorizontallyScrolling = true
//             return
//           }
//         }

//         // Change chapter based on scroll direction
//         if (!isScrollingRef.current && !isHorizontallyScrolling) {
//           // Scrolling down moves to next chapter
//           if (scrollDirection === 'down' && currentChapter < chapters.length) {
//             e.preventDefault()

//             // Snap to section to ensure clean view
//             chaptersSection.scrollIntoView({ behavior: 'smooth' })

//             isScrollingRef.current = true
//             scrollAccumulatorRef.current = 0

//             // Immediately set next chapter
//             const nextChapter = currentChapter + 1
//             setActiveChapter(nextChapter)

//             // Reset scroll position for new chapter
//             setTimeout(() => {
//               const newScrollContainer = scrollContainerRefs.current[nextChapter - 1]
//               if (newScrollContainer) {
//                 newScrollContainer.scrollLeft = 0
//               }
//             }, 0)

//             if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
//             scrollTimeoutRef.current = setTimeout(() => {
//               isScrollingRef.current = false
//             }, 800)
//           }
//           // Scrolling up moves to previous chapter
//           else if (scrollDirection === 'up' && currentChapter > 1) {
//             e.preventDefault()

//             // Snap to section to ensure clean view
//             chaptersSection.scrollIntoView({ behavior: 'smooth' })

//             isScrollingRef.current = true
//             scrollAccumulatorRef.current = 0

//             // Immediately set previous chapter
//             const prevChapter = currentChapter - 1
//             setActiveChapter(prevChapter)

//             // Reset scroll position for new chapter
//             setTimeout(() => {
//               const newScrollContainer = scrollContainerRefs.current[prevChapter - 1]
//               if (newScrollContainer) {
//                 newScrollContainer.scrollLeft = 0
//               }
//             }, 0)

//             if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
//             scrollTimeoutRef.current = setTimeout(() => {
//               isScrollingRef.current = false
//             }, 800)
//           }
//           else {
//             // Reset accumulator if at boundaries
//             scrollAccumulatorRef.current = 0
//           }
//         } else {
//           // Block extra scrolls during transition
//           e.preventDefault()
//         }
//       }
//     }

//     window.addEventListener('wheel', handleWheel, { passive: false })
//     return () => {
//       window.removeEventListener('wheel', handleWheel)
//       if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
//     }
//   }, [chapters.length])

//   return (
//     <div className={styles.pageWrapper}>
//       {/* Hero Section */}
//       <section className={styles.heroSection}>
//         {/* Header */}
//         <header className={styles.heroHeader}>
//           <div className={styles.logoArea}>
//             <span className={styles.logoIcon}>🌱</span>
//             <span className={styles.logoText}>GIVING<br />TOGETHER</span>
//           </div>
//           <div className={styles.headerRight}>
//             <span className={styles.fieldGuide}>◆ FUNDRAISING FIELD GUIDE</span>
//             <span className={styles.menuDots}>⋮</span>
//           </div>
//         </header>

//         {/* Hero Content */}
//         <div className={styles.heroContent}>
//           <div className={styles.heroLeft}>
//             <h1 className={styles.heroTitle}>
//               <span className={styles.titleLine1}>Donor</span>
//               <span className={styles.titleLine2}>Gardening</span>
//             </h1>
//           </div>



//           <div className={styles.heroRight}>
//             <h2 className={styles.heroSubtitle}>From Donation to Relationship</h2>
//             <p className={styles.heroDescription}>
//               Most nonprofits spend significant time and resources finding new donors. Yet research shows that acquiring a new donor costs <span className={styles.emphasis}>nearly ten times more</span> than continuing a relationship with someone who already believes in your work.
//             </p>
//             <p className={styles.heroDescription}>
//               Drawing on insights from the UDARTA:EG study of 300+ <span className={styles.emphasis}>Indian nonprofits</span>, this guide offers toolkits to shift donor engagement from reactive to retention-focused.
//             </p>
//             <button className={styles.startButton}>
//               <span>Start Journey</span>
//               <span className={styles.buttonArrow}>→</span>
//             </button>
//           </div>
//         </div>

//         <img
//           src="/assets/hero background.svg"
//           alt="Donor Gardening Tree"
//           className={styles.heroBackgroundSvg}
//         />

//         {/* Decorative dots pattern */}
//         <div className={styles.dotsPattern}></div>

//         {/* Bottom Section */}
//         <div className={styles.heroBottom}>
//           <p className={styles.cultivationLabel}>CULTIVATION IN ACTION</p>
//           <h2 className={styles.heroBottomTitle}>
//             A <span className={styles.highlight}>step by step guide</span><br />
//             to donor engagement through<br />
//             the journey of <span className={styles.highlight}>Nidhi</span>, our perennial<br />
//             supporter.
//           </h2>
//           <p className={styles.heroBottomDesc}>
//             Follow Nidhi's journey across four chapters to see how everyday giving can grow from a one-time transaction<br />
//             into a lasting relationship. Each chapter blends real-world moments with practical tools to help nonprofits guide<br />
//             donors naturally. Your donors may be at different stages of this journey—explore the chapters in any order that<br />
//             serves you best.
//           </p>

//           <div className={styles.chapterSelectionWrapper}>
//             <div className={styles.heroDividerLine}></div>
//             <p className={styles.selectChapter}>Select a chapter to begin</p>

//             <div className={styles.chapterGrid}>
//               {chapters.map((chapter) => (
//                 <div
//                   key={chapter.id}
//                   className={styles.gridColumn}
//                   onClick={() => {
//                     setActiveChapter(chapter.id)
//                     chaptersSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
//                   }}
//                 >
//                   <h4 className={styles.gridLabel}>
//                     CHAPTER {chapter.id === 1 ? 'I' : chapter.id === 2 ? 'II' : chapter.id === 3 ? 'III' : 'IV'}: {chapter.id === 1 ? 'TILLING THE SOIL' : chapter.id === 2 ? 'THE PLANTING' : chapter.id === 3 ? 'THE NURTURING' : 'GROWTH'}
//                   </h4>
//                   <h3 className={styles.gridTitle}>
//                     {chapter.id === 1 ? chapter.subtitle : chapter.id === 2 ? 'First Donation' : chapter.id === 3 ? 'Stewarding Donors' : 'Donors to Champions'}
//                   </h3>
//                   <img
//                     src={chapter.gridImage}
//                     alt={chapter.subtitle}
//                     className={styles.gridImage}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section >

//       {/* Chapters Section - Transform-based stacking */}
//       < section className={styles.chaptersSection} ref={chaptersSectionRef} >
//         {
//           chapters.map((chapter, index) => {
//             const isActive = activeChapter === chapter.id
//             const isPast = activeChapter > chapter.id
//             const isFuture = activeChapter < chapter.id

//             return (
//               <div
//                 key={chapter.id}
//                 ref={(el) => { chapterRefs.current[index] = el }}
//                 className={`${styles.chapterContainer} ${isActive ? styles.chapterActive : ''
//                   } ${isPast ? styles.chapterPast : ''
//                   } ${isFuture ? styles.chapterFuture : ''
//                   }`}
//                 style={{
//                   zIndex: chapter.id * 10,
//                   transform: isFuture ? 'translateY(100%)' : 'translateY(0)',
//                   transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
//                 }}
//               >
//                 <div
//                   className={styles.chapterPanel}
//                   style={{
//                     background: chapter.gradient,
//                     clipPath: chapter.id === 1
//                       ? 'polygon(3% 0%, 22% 0%, 25% 50px, 100% 50px, 100% 100%, 0% 100%, 0% 50px)'
//                       : chapter.id === 2
//                         ? 'polygon(28% 0%, 47% 0%, 50% 50px, 100% 50px, 100% 100%, 0% 100%, 0% 50px, 25% 50px)'
//                         : chapter.id === 3
//                           ? 'polygon(53% 0%, 72% 0%, 75% 50px, 100% 50px, 100% 100%, 0% 100%, 0% 50px, 50% 50px)'
//                           : chapter.id === 4
//                             ? 'polygon(78% 0%, 97% 0%, 100% 50px, 100% 100%, 0% 100%, 0% 50px, 75% 50px)'
//                             : undefined
//                   }}
//                 >
//                   {/* Tab Section */}
//                   <div className={styles.tabSection}>
//                     <div className={styles.tabContainer}>
//                       {chapter.id === 1 && (
//                         <button type="button" className={styles.chapterTab} style={{ left: '0%', width: '25%', background: 'transparent', border: 'none', padding: 0 }} onClick={() => setActiveChapter(1)}>
//                           <img src="/assets/Tab ch1.png" alt="Chapter 1" className={styles.tabImage} />
//                           <span className={styles.tabText}>I. Tilling the Soil</span>
//                         </button>
//                       )}
//                       {chapter.id === 2 && (
//                         <button type="button" className={styles.chapterTab} style={{ left: '25%', width: '25%', background: 'transparent', border: 'none', padding: 0 }} onClick={() => setActiveChapter(2)}>
//                           <img src="/assets/Tab ch2.png" alt="Chapter 2" className={styles.tabImage} />
//                           <span className={styles.tabText}>II. The Planting</span>
//                         </button>
//                       )}
//                       {chapter.id === 3 && (
//                         <button type="button" className={styles.chapterTab} style={{ left: '50%', width: '25%', background: 'transparent', border: 'none', padding: 0 }} onClick={() => setActiveChapter(3)}>
//                           <img src="/assets/Tab ch3.png" alt="Chapter 3" className={styles.tabImage} />
//                           <span className={styles.tabText}>III. The Nurturing</span>
//                         </button>
//                       )}
//                       {chapter.id === 4 && (
//                         <button type="button" className={styles.chapterTab} style={{ left: '75%', width: '25%', background: 'transparent', border: 'none', padding: 0 }} onClick={() => setActiveChapter(4)}>
//                           <img src="/assets/Tab ch4.png" alt="Chapter 4" className={styles.tabImage} />
//                           <span className={styles.tabText}>IV. Growth</span>
//                         </button>
//                       )}
//                     </div>
//                   </div>

//                   {/* Content Section */}
//                   <div className={styles.contentSection}>
//                     <div
//                       className={styles.chapterContentSticky}
//                       ref={(el) => { scrollContainerRefs.current[index] = el }}
//                     >
//                       <div
//                         className={styles.scrollContainer}
//                         style={{
//                           transform: isActive ? `translateX(${-100 + (scrollProgress * 100)}px)` : 'translateX(0)',
//                           transition: isActive ? 'none' : 'transform 0.3s ease'
//                         }}
//                       >
//                         {/* Chapter Header */}
//                         <div className={styles.chapterHeader}>
//                           <p className={styles.chapterLabel}>
//                             CHAPTER {chapter.id === 1 ? 'I' : chapter.id === 2 ? 'II' : chapter.id === 3 ? 'III' : 'IV'}: {chapter.id === 1 ? 'TILLING THE SOIL' : chapter.id === 2 ? 'THE PLANTING' : chapter.id === 3 ? 'THE NURTURING' : 'GROWTH'}
//                           </p>
//                           <h1 className={styles.chapterTitle}>
//                             {chapter.id === 1 ? chapter.subtitle : chapter.id === 2 ? 'First Donation' : chapter.id === 3 ? 'Stewarding Donors' : 'Donors to Champions'}
//                           </h1>
//                           <p className={styles.chapterDescription}>
//                             Before you ask for support, it helps to understand who is already around you.<br />
//                             This chapter focuses on mapping your existing network so your fundraising begins<br />
//                             with relationships, not cold outreach.
//                           </p>
//                         </div>

//                         {/* Main Content Area */}
//                         {chapter.id === 1 ? (
//                           <div className={styles.contentArea}>
//                             {/* Chapter 1 Content - Keep existing */}
//                             <div className={styles.leftColumn}>
//                               <div className={styles.flowchartItem}>
//                                 <div className={styles.diamondShape}></div>
//                                 <div className={styles.connectLine}></div>
//                               </div>
//                               <div className={styles.flowchartItem}>
//                                 <div className={styles.diamondShape}></div>
//                                 <div className={styles.connectLine}></div>
//                                 <div className={styles.flowText}>
//                                   You may reach many people,<br />
//                                   but responses are scattered. Most<br />
//                                   donations are small, one-time, and<br />
//                                   disconnected.
//                                 </div>
//                               </div>
//                               <div className={styles.flowchartItem}>
//                                 <div className={styles.diamondShape}></div>
//                               </div>

//                               <div className={styles.didYouKnowCard}>
//                                 <p className={styles.smallLabel}>DID YOU KNOW?</p>
//                                 <h3 className={styles.cardHeading}>It costs 10x more</h3>
//                                 <p className={styles.cardDescription}>
//                                   To acquire a new donor than continuing<br />
//                                   a relationship with someone who already<br />
//                                   believes in your work.
//                                 </p>
//                               </div>
//                             </div>

//                             <div className={styles.rightColumn}>
//                               <div className={styles.lightbulbSection}>
//                                 <div className={styles.lightbulbIcon}>ðŸ’¡</div>
//                                 <div className={styles.lightbulbText}>
//                                   Instead if you tapped into your<br />
//                                   existing network you will reach the<br />
//                                   people that care about the cause.<br />
//                                   The appeal feels more personal,<br />
//                                   more trusted.
//                                 </div>
//                               </div>

//                               <div className={styles.statsBox}>
//                                 <p className={styles.smallLabel}>UGARTA EG STUDY SHOWS</p>
//                                 <div className={styles.emojiRow}>ðŸŸ  ðŸŸ  ðŸŸ  ðŸ”¶</div>
//                                 <h3 className={styles.statsHeading}>60% of nonprofits</h3>
//                                 <p className={styles.statsDescription}>
//                                   find outreach through existing networks to<br />
//                                   be their most effective way of reaching new<br />
//                                   supporters.
//                                 </p>
//                               </div>
//                             </div>

//                             <div className={styles.verticalLine}></div>

//                             <div className={styles.additionalContent}>
//                               <p className={styles.additionalText}>
//                                 We have ma...<br />
//                                 simplify r...
//                               </p>
//                             </div>
//                           </div>
//                         ) : chapter.id === 2 ? (
//                           <div className={styles.contentArea}>\n                        {/* Chapter 2 - Scenario Layout */}
//                             <div className={styles.optionCard}>
//                               <div className={styles.optionBadge}>OPTION A</div>
//                               <p className={styles.optionText}>
//                                 Record her details in your<br />
//                                 database and acknowledge<br />
//                                 her support
//                               </p>
//                             </div>

//                             <div className={styles.scenarioCard}>
//                               <p className={styles.scenarioLabel}>SCENARIO 2</p>
//                               <p className={styles.scenarioText}>
//                                 You reach out to Nidhi,<br />
//                                 someone you identified through<br />
//                                 your existing network. She<br />
//                                 becomes a first-time donor by<br />
//                                 contributing â‚¹2,500 via your<br />
//                                 crowdfunding campaign. What<br />
//                                 do you do next?
//                               </p>
//                               <div className={styles.scenarioDecoration}>
//                                 <div className={styles.decorativeSemicircle}></div>
//                                 <div className={styles.decorativeDiamond}></div>
//                               </div>
//                             </div>

//                             <div className={styles.optionCard}>
//                               <div className={styles.optionBadge}>OPTION B</div>
//                               <p className={styles.optionText}>
//                                 No thank you or follow-ups.<br />
//                                 Accept the donation and<br />
//                                 move on.
//                               </p>
//                             </div>
//                           </div>
//                         ) : chapter.id === 3 ? (
//                           <div className={styles.contentArea}>
//                             {/* Chapter 3 - Scenario Layout */}
//                             <div className={styles.optionCard}>
//                               <div className={styles.optionBadge}>OPTION A</div>
//                               <p className={styles.optionText}>
//                                 Reach out only when you<br />
//                                 need funds again
//                               </p>
//                             </div>

//                             <div className={styles.scenarioCard}>
//                               <p className={styles.scenarioLabel}>SCENARIO 3</p>
//                               <p className={styles.scenarioText}>
//                                 Nidhi has already<br />
//                                 donated once. Two<br />
//                                 months have passed.<br />
//                                 What do you do next?
//                               </p>
//                               <div className={styles.scenarioDecoration}>
//                                 <div className={styles.decorativeCircles}>
//                                   <div className={styles.decorativeCircle}></div>
//                                   <div className={styles.decorativeCircle}></div>
//                                   <div className={styles.decorativeCircle}></div>
//                                 </div>
//                                 <div className={styles.decorativeDiamond}></div>
//                               </div>
//                             </div>

//                             <div className={styles.optionCard}>
//                               <div className={styles.optionBadge}>OPTION B</div>
//                               <p className={styles.optionText}>
//                                 Share impact and invite her<br />
//                                 to engage: Updates, events,<br />
//                                 conversations - without<br />
//                                 asking for money
//                               </p>
//                             </div>
//                           </div>
//                         ) : chapter.id === 4 ? (
//                           <div className={styles.contentArea}>
//                             {/* Chapter 4 - Scenario Layout */}
//                             <div className={styles.optionCard}>
//                               <div className={styles.optionBadge}>OPTION A</div>
//                               <p className={styles.optionText}>
//                                 Treat Nidhi like any other<br />
//                                 donor and send a<br />
//                                 standard appeal
//                               </p>
//                             </div>

//                             <div className={styles.scenarioCard}>
//                               <p className={styles.scenarioLabel}>SCENARIO 4</p>
//                               <p className={styles.scenarioText}>
//                                 A year has passed. Nidhi<br />
//                                 has stayed engaged and<br />
//                                 informed. Your annual<br />
//                                 crowdfunding campaign<br />
//                                 is live. What do you do?
//                               </p>
//                               <div className={styles.scenarioDecoration}>
//                                 <div className={styles.decorativeCirclesGrid}>
//                                   <div className={styles.decorativeCircle}></div>
//                                   <div className={styles.decorativeCircle}></div>
//                                   <div className={styles.decorativeCircle}></div>
//                                   <div className={styles.decorativeCircle}></div>
//                                   <div className={styles.decorativeCircle}></div>
//                                   <div className={styles.decorativeCircle}></div>
//                                 </div>
//                                 <div className={styles.decorativeDiamond}></div>
//                               </div>
//                             </div>

//                             <div className={styles.optionCard}>
//                               <div className={styles.optionBadge}>OPTION B</div>
//                               <p className={styles.optionText}>
//                                 Invite her to give again - and<br />
//                                 share the cause with her<br />
//                                 network
//                               </p>
//                             </div>
//                           </div>
//                         ) : null}
//                       </div>

//                       {/* Next Chapter Button */}
//                       {chapter.id < chapters.length && (
//                         <button
//                           className={styles.nextButton}
//                           onClick={handleNextChapter}
//                         >
//                           <span>Next Chapter</span>
//                           <span className={styles.arrow}>â†’</span>
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           })
//         }
//       </section >

//       {/* Bonus Chapter Section */}
//       < section className={styles.bonusSection} >
//         <div className={styles.bonusContent}>
//           <div className={styles.bonusLeft}>
//             <div className={styles.bonusDiamond}></div>
//             <p className={styles.bonusLabel}>BONUS CHAPTER</p>
//             <h2 className={styles.bonusTitle}>
//               No single team <span className={styles.bonusTitleHighlight}>owns</span><br />
//               the donor experience
//             </h2>
//             <p className={styles.bonusText}>
//               As supporters move across stages, effective coordination between<br />
//               programme, communications, and fundraising teams enhances consistency,<br />
//               continuity, and trust.
//             </p>
//             <div className={styles.bonusCallout}>
//               <span className={styles.bonusDot}></span>
//               <span className={styles.bonusCalloutText}>Check the toolkit to learn how to build this alignment.</span>
//             </div>
//           </div>
//           <div className={styles.bonusRight}>
//             <div className={styles.bonusCard}>
//               <div className={styles.bonusCardInner}>
//                 <h3 className={styles.bonusCardTitle}>Stewardship is a<br />team effort</h3>
//                 <p className={styles.bonusCardText}>
//                   A guide to help cross-functional<br />
//                   teams collaborate to create better<br />
//                   donor stewardship. The<br />
//                   Fundraising Field Guide by<br />
//                   Udarta.
//                 </p>
//                 <div className={styles.bonusCardPattern}>
//                   <div className={styles.patternCircle} style={{ background: '#4dd4d4', top: '20%', left: '30%' }}></div>
//                   <div className={styles.patternCircle} style={{ background: '#ff8da1', top: '40%', left: '50%' }}></div>
//                   <div className={styles.patternCircle} style={{ background: '#b8e986', top: '60%', left: '35%' }}></div>
//                   <div className={styles.patternTriangle}></div>
//                 </div>
//                 <div className={styles.bonusCardDimensions}>307.57 x 456.7</div>
//               </div>
//             </div>
//             <div className={styles.bonusDotsPattern}>
//               <div className={styles.bonusDotCircle} style={{ background: '#4dd4d4', top: '10%', left: '20%' }}></div>
//               <div className={styles.bonusDotCircle} style={{ background: '#b8e986', top: '30%', right: '15%' }}></div>
//               <div className={styles.bonusDotCircle} style={{ background: '#ff8da1', bottom: '20%', left: '10%' }}></div>
//               <div className={styles.bonusDotCircle} style={{ background: '#4dd4d4', bottom: '10%', right: '25%' }}></div>
//               <div className={styles.bonusDotCircle} style={{ background: '#b8e986', top: '50%', right: '5%' }}></div>
//             </div>
//           </div>
//         </div>
//       </section >

//       {/* Footer Section */}
//       < footer className={styles.footerSection} >
//         <div className={styles.footerContent}>
//           {/* Left Column - Logo & Description */}
//           <div className={styles.footerLeft}>
//             <div className={styles.footerLogo}>
//               <span className={styles.footerLogoIcon}>ðŸŒ±</span>
//               <span className={styles.footerLogoText}>GIVING<br />TOGETHER</span>
//             </div>
//             <p className={styles.footerLogoSubtext}>FOUNDATION</p>
//             <p className={styles.footerDescription}>
//               Giving Together Foundation (GTF) is an<br />
//               independent, India-led nonprofit committed to<br />
//               building the infrastructure for everyday<br />
//               generosity.
//             </p>
//             <div className={styles.footerMap}>
//               <span className={styles.mapIcon}>ðŸ—ºï¸</span>
//             </div>
//             <p className={styles.footerLocation}>Based in India, working nationwide</p>
//           </div>

//           {/* Middle Column - Navigation */}
//           <div className={styles.footerMiddle}>
//             <div className={styles.footerNav}>
//               <p className={styles.footerNavLink}>Home</p>
//             </div>
//             <div className={styles.footerResources}>
//               <p className={styles.footerSectionTitle}>REPORTS & RESOURCES</p>
//               <p className={styles.footerLink}>UDARTA:EG Field Guide</p>
//               <p className={styles.footerSubLink}>Introduction</p>
//               <p className={styles.footerSubLink}>Fundraising</p>
//               <p className={styles.footerSubLink}>Volunteer Engagement</p>
//               <p className={styles.footerLink}>UDARTA:EG Report</p>
//               <p className={styles.footerLink}>Donor Motivation</p>
//             </div>
//           </div>

//           {/* Right Column - Contact */}
//           <div className={styles.footerRight}>
//             <div className={styles.footerContact}>
//               <p className={styles.footerSectionTitle}>EMAIL CONTACT</p>
//               <p className={styles.footerEmail}>partnerships@givingtogetherfoundation.org</p>
//             </div>
//             <div className={styles.footerAddress}>
//               <p className={styles.footerSectionTitle}>ADDRESS</p>
//               <p className={styles.footerAddressText}>
//                 A-89, Ground Floor, Shastri Nagar, North West<br />
//                 Delhi, Delhi 110052, India
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Get Involved Section */}
//         <div className={styles.getInvolved}>
//           <p className={styles.getInvolvedTitle}>GET INVOLVED</p>
//           <div className={styles.getInvolvedForm}>
//             <span>Hi, I'm </span>
//             <input type="text" placeholder="your name" className={styles.formInput} />
//             <span>, I'm from </span>
//             <input type="text" placeholder="name of your organisation" className={styles.formInput} />
//             <span>.</span>
//           </div>
//           <p className={styles.getInvolvedText}>
//             I'd love to be a part of Giving Together Foundation's initiatives.
//           </p>
//           <div className={styles.getInvolvedEmail}>
//             <span>I'm available on </span>
//             <input type="email" placeholder="your email address" className={styles.formInput} />
//             <span> if you need to reach out to me for updates & details.</span>
//           </div>
//           <button className={styles.subscribeButton}>
//             Subscribe <span className={styles.subscribeArrow}>â†’</span>
//           </button>
//         </div>

//         {/* Decorative Dots */}
//         <div className={styles.footerDots}></div>
//       </footer >
//     </div >
//   )
// }



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
