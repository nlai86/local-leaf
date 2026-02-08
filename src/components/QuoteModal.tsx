import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle, Leaf } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ============================================================
// EmailJS Setup Instructions:
// 1. Create a free account at https://www.emailjs.com/
// 2. Create an Email Service (e.g., Gmail)
// 3. Create an Email Template with these variables:
//    {{from_name}}, {{from_email}}, {{phone}}, {{address}},
//    {{property_size}}, {{services}}, {{schedule}},
//    {{budget}}, {{referral_source}}, {{message}}
// 4. Replace the placeholder values below with your credentials
// ============================================================
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICE_OPTIONS = [
  'Weekly Mowing',
  'Seasonal Cleanup',
  'Garden Maintenance',
  'Hedge Trimming',
  'Lawn Treatment',
  'Snow Removal',
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    streetAddress: '',
    postalCode: '',
    propertySize: '',
    services: [] as string[],
    schedule: '',
    budget: '',
    referralSource: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          address: `${formData.streetAddress}, ${formData.postalCode}`,
          property_size: formData.propertySize,
          services: formData.services.join(', '),
          schedule: formData.schedule,
          budget: formData.budget,
          referral_source: formData.referralSource,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({
        name: '',
        email: '',
        phone: '',
        streetAddress: '',
        postalCode: '',
        propertySize: '',
        services: [],
        schedule: '',
        budget: '',
        referralSource: '',
        message: '',
      });
    }, 300);
  };

  const inputClasses =
    'w-full border border-sage-100 rounded-lg px-4 py-3 text-text bg-sage-50/50 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-sm placeholder:text-text-muted/50';
  const labelClasses = 'block text-sm font-medium text-text mb-1.5';
  const selectClasses =
    'w-full border border-sage-100 rounded-lg px-4 py-3 text-text bg-sage-50/50 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-sm appearance-none';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
          >
            {/* Header with green accent bar */}
            <div className="bg-primary px-6 sm:px-8 py-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-1/2 w-24 h-24 bg-accent/10 rounded-full translate-y-1/2" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Leaf className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      Get Your Free Quote
                    </h2>
                    <p className="text-white/70 text-sm mt-0.5">
                      We'll get back to you within 24 hours
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="text-white/60 hover:text-white transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto max-h-[calc(90vh-88px)] bg-white">
              <div className="p-6 sm:p-8">
                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="bg-sage-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-text mb-3">
                      Thank You!
                    </h3>
                    <p className="text-text-muted max-w-md mx-auto leading-relaxed">
                      We've received your quote request. Our team will review your
                      details and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-8 bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {formStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-5 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm"
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        Something went wrong. Please try again or call us directly.
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Section: Contact Info */}
                      <div>
                        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
                          Contact Information
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Left column: Name, Email, Phone */}
                          <div className="space-y-4">
                            <div>
                              <label htmlFor="quote-name" className={labelClasses}>
                                Full Name *
                              </label>
                              <input
                                id="quote-name"
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Smith"
                                className={inputClasses}
                              />
                            </div>
                            <div>
                              <label htmlFor="quote-email" className={labelClasses}>
                                Email *
                              </label>
                              <input
                                id="quote-email"
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className={inputClasses}
                              />
                            </div>
                            <div>
                              <label htmlFor="quote-phone" className={labelClasses}>
                                Phone Number *
                              </label>
                              <input
                                id="quote-phone"
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(647) 574-9625"
                                className={inputClasses}
                              />
                            </div>
                          </div>
                          {/* Right column: Street Address, Postal Code */}
                          <div className="space-y-4">
                            <div>
                              <label htmlFor="quote-address" className={labelClasses}>
                                Street Address *
                              </label>
                              <input
                                id="quote-address"
                                type="text"
                                name="streetAddress"
                                required
                                value={formData.streetAddress}
                                onChange={handleChange}
                                placeholder="123 Main St, North York"
                                className={inputClasses}
                              />
                            </div>
                            <div>
                              <label htmlFor="quote-postal" className={labelClasses}>
                                Postal Code *
                              </label>
                              <input
                                id="quote-postal"
                                type="text"
                                name="postalCode"
                                required
                                value={formData.postalCode}
                                onChange={handleChange}
                                placeholder="M2N 1A1"
                                className={inputClasses}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-sage-100" />

                      {/* Section: Property Details */}
                      <div>
                        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
                          Property Details
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="quote-property-size" className={labelClasses}>
                              Property Size
                            </label>
                            <select
                              id="quote-property-size"
                              name="propertySize"
                              value={formData.propertySize}
                              onChange={handleChange}
                              className={selectClasses}
                            >
                              <option value="">Select size...</option>
                              <option value="Small (< 1/4 acre)">Small (&lt; 1/4 acre)</option>
                              <option value="Medium (1/4 - 1/2 acre)">Medium (1/4 – 1/2 acre)</option>
                              <option value="Large (1/2 - 1 acre)">Large (1/2 – 1 acre)</option>
                              <option value="Extra Large (1+ acre)">Extra Large (1+ acre)</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="quote-schedule" className={labelClasses}>
                              Preferred Schedule
                            </label>
                            <select
                              id="quote-schedule"
                              name="schedule"
                              value={formData.schedule}
                              onChange={handleChange}
                              className={selectClasses}
                            >
                              <option value="">Select timing...</option>
                              <option value="ASAP">ASAP</option>
                              <option value="Within 1 Week">Within 1 Week</option>
                              <option value="Within 2 Weeks">Within 2 Weeks</option>
                              <option value="Flexible">Flexible</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Services */}
                      <div>
                        <label className={labelClasses}>Services Needed</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                          {SERVICE_OPTIONS.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleServiceToggle(service)}
                              className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                                formData.services.includes(service)
                                  ? 'bg-primary text-white border-primary shadow-sm'
                                  : 'bg-sage-50/50 text-text border-sage-100 hover:border-primary/30 hover:bg-sage-50'
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-sage-100" />

                      {/* Section: Additional Info */}
                      <div>
                        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
                          Additional Information
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="quote-budget" className={labelClasses}>
                              Budget Range
                            </label>
                            <select
                              id="quote-budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className={selectClasses}
                            >
                              <option value="">Select budget...</option>
                              <option value="Under $50/visit">Under $50/visit</option>
                              <option value="$50 - $100/visit">$50 – $100/visit</option>
                              <option value="$100 - $200/visit">$100 – $200/visit</option>
                              <option value="$200+/visit">$200+/visit</option>
                              <option value="Not Sure">Not Sure</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="quote-referral" className={labelClasses}>
                              How did you hear about us?
                            </label>
                            <select
                              id="quote-referral"
                              name="referralSource"
                              value={formData.referralSource}
                              onChange={handleChange}
                              className={selectClasses}
                            >
                              <option value="">Select...</option>
                              <option value="Google">Google</option>
                              <option value="Social Media">Social Media</option>
                              <option value="Neighbour/Friend">Neighbour/Friend</option>
                              <option value="Lawn Sign">Lawn Sign</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="quote-message" className={labelClasses}>
                          Additional Details
                        </label>
                        <textarea
                          id="quote-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Tell us about your lawn care needs, any specific concerns, or questions..."
                          className={inputClasses + ' resize-none'}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg text-base font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <svg
                              className="animate-spin w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Submit Quote Request
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-text-muted">
                        No obligation · Free assessment · Response within 24 hours
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
