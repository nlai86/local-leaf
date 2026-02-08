import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, MapPin, Star, ArrowRight } from 'lucide-react';
import { QuoteModal } from './QuoteModal';
export function HeroSection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  return (<>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bottom-[-25%] z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero_backdrop.png`}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top" />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">

            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              North York's Trusted Lawn Care Team
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">

            The Lawn You've Always Wanted — Without Lifting a Finger
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">

            Professional lawn care and landscaping for busy North York homeowners
            who value their weekends. From weekly mowing to seasonal cleanups, we
            handle everything so you can enjoy the pride of a beautiful yard — and
            the peace of mind that comes with it.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.6
            }}
            className="flex flex-col sm:flex-row gap-4 mb-16">

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg text-base font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
              Get My Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-4 rounded-lg text-base font-semibold transition-all flex items-center justify-center">
              Book a Free Lawn Assessment
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.8
            }}
            className="flex flex-wrap gap-6 text-white/80 text-sm font-medium">

            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Locally Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" />
              <span>Satisfaction Guaranteed</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>);

}