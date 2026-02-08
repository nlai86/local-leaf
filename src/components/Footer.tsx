import React from 'react';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-10">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '0 6%', paddingBottom: '2rem', gap: '4rem' }}>
        {/* Left: Brand */}
        <div style={{ maxWidth: '350px', paddingTop: '1.5rem' }}>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-6 w-6 text-white" />
            <span className="font-serif text-xl font-semibold tracking-tight">
              LocalLeaf Landscaping
            </span>
          </div>
          <p className="text-white/70 mb-4 leading-relaxed text-sm">
            Professional lawn care and landscaping for North York homeowners
            who value quality, reliability, and the pride of a beautiful property.
          </p>
          <p className="text-xs text-white/50">
            Fully insured • Locally owned • Proudly serving our community
          </p>
        </div>

        {/* Right: Service Areas & Contact */}
        <div style={{ display: 'flex', gap: '2.5rem', paddingTop: '1.5rem' }}>
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-white/70 text-sm">
              <li>Lawn Mowing & Maintenance</li>
              <li>Seasonal Cleanups</li>
              <li>Trimming, Edging & Mulching</li>
              <li>Fertilization & Weed Control</li>
              <li>Snow Removal</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2.5 text-white/70 text-sm">
              <li>North York</li>
              <li>Willowdale</li>
              <li>Don Mills</li>
              <li>York Mills & Surrounding</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+16475749625" className="hover:text-white transition-colors">(647) 574-9625</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:localleaflandscape@gmail.com" className="hover:text-white transition-colors">localleaflandscape@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Serving North York, Toronto, ON</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ padding: '0 6%' }}>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 LocalLeaf Landscaping. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}
