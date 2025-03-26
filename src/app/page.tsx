import React from 'react'
import HeroSection from '@/components/HeroSection'
import SelectedExperiences from '@/components/SelectedExperiences'
import Testimonials from '@/components/Testimonials'
import TechStack from '@/components/TechStack'
import CallToAction from '@/components/CallToAction'
import LeadershipEngagement from '@/components/LeadershipEngagement'

export default function Home() {
  return (
    <div className="space-y-24">
      <HeroSection />
      <SelectedExperiences />
      <TechStack />
      <CallToAction />
      <LeadershipEngagement />
      <Testimonials />
    </div>
  )
}
