import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon text-ivory/80 pt-16 pb-24 md:pb-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://pixabay.com/get/gbb4bf5b27bcf8fd6184fe58fe57e429b901b617651bdec4115efa166090b09da382cc95a93c872726f22411aaf5dc49ad0cc82af5f26f5751781ce1c081dc638_1280.png')] bg-cover bg-center mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-saffron text-3xl">🕉️</span>
              <span className="font-display font-bold text-3xl text-ivory">
                Pandit Devesh Darbhe
              </span>
            </div>
            <p className="text-ivory/60 leading-relaxed max-w-sm">
              Authentic Vedic Astrology for Clarity, Balance, and Positivity. Bringing peace and divine blessings into your life through traditional rituals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-display text-xl text-gold font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-saffron transition-colors inline-block hover:translate-x-1 transform duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-display text-xl text-gold font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                <a href="tel:8421115719" className="hover:text-saffron transition-colors">
                  +91 8421115719
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                <a href="mailto:darbhe123@gmail.com" className="hover:text-saffron transition-colors">
                  darbhe123@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                <span>
                  Plot 10, Sneh Nagar,<br/>
                  Near Khamla, Nagpur<br/>
                  Maharashtra – 440015
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ivory/50">
          <p>© {currentYear} Pandit Devesh Darbhe. All Rights Reserved.</p>
          <p>Designed by prafulKolhe</p>
        </div>
      </div>
    </footer>
  );
}
