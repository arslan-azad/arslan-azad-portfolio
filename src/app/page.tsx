import React from 'react'
import HeroSection from '@/components/HeroSection'
import SelectedExperiences from '@/components/SelectedExperiences'
import Testimonials from '@/components/Testimonials'
import TechStack from '@/components/TechStack'

export default function Home() {
  return (
    <div className="space-y-24">
      <HeroSection />
      <SelectedExperiences />
      <TechStack />
      <Testimonials />
    </div>
  )
}
