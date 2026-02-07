import React from 'react';
import { Plus } from 'lucide-react';
export function AddOns() {
  const addons = [
  'Precision Edging',
  'Weed Treatment Program',
  'Mulch Refresh',
  'Hedge & Shrub Trimming',
  'Seasonal Flower Planting',
  'Aeration & Overseeding'];

  return (
    <section className="py-20 bg-cream border-t border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            Enhance Your Service
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Popular Add-Ons Most Homeowners Choose
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {addons.map((addon, index) =>
          <div
            key={index}
            className="bg-white p-4 rounded-lg border border-sage-100 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">

              <div className="bg-sage-50 p-1.5 rounded-full">
                <Plus className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium text-gray-800">{addon}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}