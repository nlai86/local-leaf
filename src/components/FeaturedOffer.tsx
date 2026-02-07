import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
export function FeaturedOffer() {
  return (
    <section className="py-20 bg-sage-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-sage-100">
          <div className="p-8 md:p-12 text-center">
            <div className="inline-block bg-accent/10 text-accent-hover px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6">
              LIMITED TIME OFFER
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Start the Season Right — First Mow Free
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your seasonal lawn care package before April 30th and receive
              your first mowing service completely free. No contracts, no
              commitments — just a beautiful lawn from day one.
            </p>

            <div className="flex flex-col items-center gap-6">
              <button className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group">
                Claim Your Free First Mow
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> No credit
                  card required
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Cancel
                  anytime
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> 100%
                  satisfaction guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}