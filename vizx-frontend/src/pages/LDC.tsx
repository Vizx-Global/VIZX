import React from 'react'
import AboutSection from '../components/LDC/About'
import PartnershipSection from '../components/LDC/Partnership'
import WhatWeDoSection from '../components/LDC/WhatWeDo'
import WhyChooseUsSection from '../components/LDC/WhyChooseUs'
import CTASection from '../components/LDC/CTA'

export default function LDC() {
  return (
    <div className="home-page overflow-x-hidden px-4 sm:px-6 lg:px-8">
        <AboutSection />
        <PartnershipSection />
        <WhatWeDoSection />
        <WhyChooseUsSection />
        <CTASection />
    </div>
  )
}
