import AboutSection from '../components/LDC/About'
import PartnershipSection from '../components/LDC/Partnership'
import LDCPartnersSection from '../components/LDC/LDCPartners'
import WhatWeDoSection from '../components/LDC/WhatWeDo'
import WhyChooseUsSection from '../components/LDC/WhyChooseUs'
import CTASection from '../components/LDC/CTA'

export default function LDC() {
  return (
    <div className="w-full bg-black overflow-x-hidden pt-16">
        <AboutSection />
        <PartnershipSection />
        <div className="hidden sm:block">
          <LDCPartnersSection />
        </div>
        <WhatWeDoSection />
        <WhyChooseUsSection />
        <CTASection />
    </div>
  )
}
