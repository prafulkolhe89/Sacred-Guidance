import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 bg-ivory relative overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/mandala-texture.png)`, backgroundSize: '400px' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-maroon/10 border-4 border-white">
              <img 
                src={`${import.meta.env.BASE_URL}images/about-illustration.png`}
                alt="Traditional Vedic Setup" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 border border-gold/20 rounded-2xl pointer-events-none"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-saffron/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold"></div>
              <span className="text-gold font-semibold uppercase tracking-widest text-sm">Meet Your Guide</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon mb-6">
              Pandit Devesh Darbhe
            </h2>
            
            <h3 className="text-xl text-saffron font-medium mb-6">
              A Trusted Guide for Vedic Rituals and Astrology
            </h3>
            
            <div className="space-y-6 text-maroon/70 text-lg leading-relaxed">
              <p>
                With years of dedicated study and practice in authentic Vedic traditions, Pandit Devesh Darbhe brings the sacred power of ancient rituals into the modern world. His approach is rooted in deep respect, spiritual authenticity, and a genuine desire to uplift others.
              </p>
              <p>
                Whether you are seeking clarity through astrology, moving into a new home, or performing a ceremony for peace and prosperity, you will receive personalized, compassionate guidance. 
              </p>
              <p>
                Every puja and consultation is conducted with strict adherence to traditional wisdom, ensuring a spiritually fulfilling and positive experience for your entire family.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
