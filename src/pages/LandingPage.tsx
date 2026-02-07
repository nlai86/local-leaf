import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { TrustStrip } from '../components/TrustStrip';
import { ProblemSolution } from '../components/ProblemSolution';
import { ServicesSection } from '../components/ServicesSection';
import { FeaturedOffer } from '../components/FeaturedOffer';
import { HowItWorks } from '../components/HowItWorks';
import { AddOns } from '../components/AddOns';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <ProblemSolution />
        <ServicesSection />
        <FeaturedOffer />
        <HowItWorks />
        <AddOns />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>);

}