import React from 'react';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="h-6 w-6 text-white" />
              <span className="font-serif text-xl font-semibold tracking-tight">
                GreenScape
              </span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Professional lawn care and landscaping for Canadian homeowners who
              value quality, reliability, and the pride of a beautiful property.
            </p>
            <p className="text-sm text-white/50">
              Fully insured • Locally owned • Proudly serving our community
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">
              Service Areas
            </h3>
            <ul className="space-y-3 text-white/70">
              <li>Greater Toronto Area</li>
              <li>Vancouver & Lower Mainland</li>
              <li>Calgary & Edmonton</li>
              <li>Ottawa & Surrounding</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>localleaflandscape@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Serving homes across Canada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2025 GreenScape Lawn Care. All rights reserved.</p>
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