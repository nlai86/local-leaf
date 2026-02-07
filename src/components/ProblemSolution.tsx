import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
export function ProblemSolution() {
  const problems = [
  'Weekends lost to mowing, trimming, and yard work',
  'Overgrown edges and patchy grass that never quite looks right',
  'Seasonal debris piling up — leaves in fall, branches after storms',
  "The stress of keeping up with neighbours' pristine lawns"];

  const solutions = [
  'Reclaim your weekends and spend time on what matters',
  'Consistent, expert care that keeps your lawn lush and healthy',
  'Seasonal cleanups handled — spring, summer, fall, and winter',
  "A lawn you're proud to come home to, every single day"];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            Why Homeowners Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Your Lawn Deserves Better Than "Good Enough"
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="bg-sage-50 p-8 md:p-12 rounded-2xl">

            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">
              Sound Familiar?
            </h3>
            <ul className="space-y-6">
              {problems.map((item, index) =>
              <li key={index} className="flex items-start gap-4">
                  <div className="bg-red-100 p-1 rounded-full flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              )}
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="bg-primary p-8 md:p-12 rounded-2xl text-white shadow-xl">

            <h3 className="text-2xl font-serif font-bold text-white mb-8">
              With Us, You Get:
            </h3>
            <ul className="space-y-6">
              {solutions.map((item, index) =>
              <li key={index} className="flex items-start gap-4">
                  <div className="bg-white/20 p-1 rounded-full flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90 text-lg">{item}</span>
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>);

}