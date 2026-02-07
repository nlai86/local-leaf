import { useEffect, useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuoteModal } from './QuoteModal';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'How It Works',
    href: '#how-it-works'
  },
  {
    name: 'Testimonials',
    href: '#testimonials'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (<>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Leaf
              className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-white'} transition-colors`} />

            <span
              className={`font-serif text-xl font-semibold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'} transition-colors`}>

              LocalLeaf Landscaping
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}>

                {link.name}
              </a>
            )}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg hover:shadow-xl">
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">

            {isMobileMenuOpen ?
            <X
              className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} /> :


            <Menu
              className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />

            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-white border-t border-gray-100">

            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="block text-base font-medium text-gray-900 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}>

                  {link.name}
                </a>
            )}
              <button
                onClick={() => { setIsMobileMenuOpen(false); setIsQuoteOpen(true); }}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg text-base font-medium">
                Get Free Quote
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>
    <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>);

}