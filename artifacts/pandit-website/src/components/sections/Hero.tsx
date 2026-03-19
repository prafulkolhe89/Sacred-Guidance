import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with layered gradients and generated image */}
      <div className="absolute inset-0 z-0 bg-maroon">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Divine Background" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/80 via-transparent to-ivory"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(107,26,45,0.8)_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-gold/30 bg-gold/10 text-gold mb-6 text-sm sm:text-base tracking-widest uppercase font-medium backdrop-blur-sm">
            Authentic Vedic Astrology & Rituals
          </span>
          
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-ivory mb-6 leading-[1.1] drop-shadow-lg">
            Invite Peace, Prosperity & <br className="hidden md:block"/> 
            <span className="text-gradient-gold">Divine Blessings</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-ivory/80 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Authentic Vedic rituals and personalized astrological guidance to bring clarity, balance, and harmony into your life's journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
            <Button 
              variant="gold" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto bg-ivory/5 border-ivory/30 text-ivory hover:bg-ivory hover:text-maroon"
              onClick={() => window.location.href = "tel:8421115719"}
            >
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-gold/60 text-sm tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent"></div>
      </motion.div>
    </section>
  );
}
