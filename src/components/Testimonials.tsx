import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
export function Testimonials() {
  const testimonials = [
  {
    text: "We've used LocalLeaf for two seasons now, and our lawn has never looked better. They're reliable, professional, and genuinely care about the quality of their work.",
    author: 'Sarah M.',
    location: 'North York'
  },
  {
    text: "I used to spend every Saturday morning on yard work. Now I spend it with my family. Best decision we've made for our home.",
    author: 'David K.',
    location: 'Scarborough'
  },
  {
    text: 'The seasonal cleanup service is incredible. Our property looks magazine-ready after every visit. Highly recommend to any homeowner in the GTA.',
    author: 'Priya R.',
    location: 'Mississauga'
  }];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            What Our Clients Say
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Trusted by Homeowners Across Toronto
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) =>
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

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              )}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{item.text}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{item.author}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}