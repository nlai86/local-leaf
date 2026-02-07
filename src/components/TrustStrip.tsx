import React from 'react';
import { ShieldCheck, MapPin, Star, Leaf } from 'lucide-react';
export function TrustStrip() {
  const items = [
  {
    icon: ShieldCheck,
    text: 'Fully Insured & Bonded'
  },
  {
    icon: MapPin,
    text: 'Locally Owned & Operated'
  },
  {
    icon: Star,
    text: '5-Star Google Rating'
  },
  {
    icon: Leaf,
    text: 'Eco-Friendly Practices'
  }];

  return (
    <div className="bg-sage-50 border-b border-sage-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) =>
          <div
            key={index}
            className="flex items-center justify-center md:justify-start gap-3 text-primary">

              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm md:text-base font-medium text-gray-800">
                {item.text}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>);

}