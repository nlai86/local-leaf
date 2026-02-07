import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, ThumbsUp } from 'lucide-react';
export function Testimonials() {
  const promises = [
  {
    icon: Heart,
    title: 'We Treat Your Lawn Like Our Own',
    description:
      'Every property gets our full attention and care. We take pride in delivering results that make you proud to come home.'
  },
  {
    icon: Clock,
    title: 'Reliable, On-Time Service',
    description:
      'We show up when we say we will. No chasing, no excuses — just consistent, dependable lawn care you can count on.'
  },
  {
    icon: ThumbsUp,
    title: '100% Satisfaction Guaranteed',
    description:
      "Not happy with a visit? We'll come back and make it right — no questions asked. Your satisfaction is our reputation."
  }];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Our Promise to Every Homeowner
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((item, index) =>
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
              delay: index * 0.1
            }}
            className="bg-sage-50 p-8 rounded-xl relative">

              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
