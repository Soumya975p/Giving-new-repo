'use client'

import FieldGuideHero from '../../components/field-guide/FieldGuideHero'
import InsightsSection from '../../components/field-guide/InsightsSection'
import ToolsSection from '../../components/field-guide/ToolsSection'
import ToolkitSection from '../../components/field-guide/ToolkitSection'
import InspiredSection from '../../components/field-guide/InspiredSection'
import ExploreSection from '../../components/ExploreSection'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import FGstyles from './page.module.css'

export default function FieldGuidePage() {
  return (
    <div className={FGstyles.pageWrapper}>
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <FieldGuideHero />

      {/* Inspired Section */}
      <InspiredSection />

      {/* Insights Section */}
      <InsightsSection />

      {/* Tools Section */}
      <ToolsSection />

      {/* Toolkit Section */}
      <ToolkitSection />

      {/* Explore Grid Section */}
      <ExploreSection />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
