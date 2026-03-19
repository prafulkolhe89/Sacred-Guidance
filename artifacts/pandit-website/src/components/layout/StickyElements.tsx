import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function StickyElements() {
  return (
    <>
      {/* Floating WhatsApp Button (Desktop & Mobile) */}
      <a
        href="https://wa.me/918421115719"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-maroon text-sm font-semibold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat with us
        </span>
      </a>

      {/* Sticky Bottom Bar for Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-ivory/95 backdrop-blur-md border-t border-gold/30 p-3 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <Button 
          variant="outline" 
          className="flex-1 rounded-xl h-12"
          onClick={() => window.location.href = "tel:8421115719"}
        >
          <Phone className="w-4 h-4 mr-2" />
          Call
        </Button>
        <Button 
          variant="saffron" 
          className="flex-1 rounded-xl h-12"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book
        </Button>
      </div>
    </>
  );
}
