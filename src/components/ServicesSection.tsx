import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Leaf, Trees, Sprout, Snowflake } from 'lucide-react';
export function ServicesSection() {
  const services = [
  {
    icon: Scissors,
    title: 'Lawn Mowing & Maintenance',
    description:
    'Weekly or bi-weekly mowing with precision edging. We keep your grass at the perfect height for health and curb appeal, all season long.'
  },
  {
    icon: Leaf,
    title: 'Seasonal Cleanups',
    description:
    'Spring preparation and fall leaf removal. We clear debris, dethatch, and prepare your lawn for the season ahead.'
  },
  {
    icon: Trees,
    title: 'Trimming, Edging & Mulching',
    description:
    'Crisp edges along walkways and beds, shrub trimming, and fresh mulch to make your landscape look professionally finished.'
  },
  {
    icon: Sprout,
    title: 'Fertilization & Weed Control',
    description:
    'Custom fertilization programs and targeted weed treatments that promote thick, healthy grass and prevent invasive plants.'
  },
  {
    icon: Snowflake,
    title: 'Snow Removal',
    description:
    'Reliable snow clearing for driveways and walkways. Keep your property safe and accessible all winter long.'
  }];

  return (
    <section id="services" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Everything Your Lawn Needs to Thrive
          </h2>
          <p className="text-xl text-gray-600">
            From weekly maintenance to seasonal transformations, we offer
            comprehensive care tailored to your property's unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) =>
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
            className="bg-white p-8 rounded-xl border border-sage-100 hover:shadow-lg transition-shadow duration-300">

              <div className="bg-sage-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) =>
          <motion.div
            key={index + 3}
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
              delay: (index + 3) * 0.1
            }}
            className="bg-white p-8 rounded-xl border border-sage-100 hover:shadow-lg transition-shadow duration-300">

              <div className="bg-sage-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}