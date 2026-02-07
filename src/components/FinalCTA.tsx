import React, { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { QuoteModal } from './QuoteModal';
export function FinalCTA() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  return (<>
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-8">
          Spring Schedule Filling Fast
        </div>

        <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
          Ready for a Lawn You Can Be Proud Of?
        </h2>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover the joy of a professionally maintained lawn right here in
          North York. Your free quote is just a click away — and there's
          absolutely no obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="w-full sm:w-auto bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            Book Your Free Quote Today
            <ArrowRight className="w-5 h-5" />
          </button>

          <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-gray-500" />
            Call Us: (647) 574-9625
          </button>
        </div>

        <p className="text-sm text-gray-500">
          No credit card required • Response within 24 hours • 100% free
          assessment
        </p>
      </div>
    </section>
    <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>);

}