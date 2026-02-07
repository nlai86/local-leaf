import React from 'react';
import { motion } from 'framer-motion';
export function HowItWorks() {
  const steps = [
  {
    number: '01',
    title: 'Request Your Free Quote',
    description:
    'Tell us about your property and what you need. It takes less than two minutes.'
  },
  {
    number: '02',
    title: 'We Assess & Schedule',
    description:
    'Our team visits your property, provides a detailed quote, and sets up your service schedule.'
  },
  {
    number: '03',
    title: 'Enjoy Your Beautiful Lawn',
    description:
    'Sit back and relax. We handle everything so you can enjoy your weekends again.'
  }];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Your Perfect Lawn in Three Simple Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-sage-100 -z-10" />

          {steps.map((step, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2
            }}
            className="relative bg-white pt-4">

              <div className="w-16 h-16 bg-primary text-white text-xl font-bold rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-white shadow-lg">
                {step.number}
              </div>
              <div className="text-center px-4">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}