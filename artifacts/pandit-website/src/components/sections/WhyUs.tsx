import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const trustPoints = [
  { title: "Authentic Vedic Rituals", desc: "Strict adherence to ancient scriptures and correct pronunciation of mantras." },
  { title: "Personalized Guidance", desc: "Remedies and pujas tailored specifically to your astrological chart and life situation." },
  { title: "Experienced & Respectful", desc: "Years of profound experience delivering calm, respectful, and dignified services." },
  { title: "Positive Experience", desc: "Creating a serene and spiritually uplifting atmosphere in your home." },
  { title: "Timely & Hassle-Free", desc: "Punctual arrivals and organized preparation to give you peace of mind." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-maroon text-ivory relative overflow-hidden">
      {/* Decorative subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/mandala-texture.png)`, backgroundSize: '500px' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-saffron"></div>
              <span className="text-saffron font-semibold uppercase tracking-widest text-sm">Why Choose Us</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              Experience the True Essence of Devotion
            </h2>
            <p className="text-ivory/70 text-lg mb-10 leading-relaxed">
              When it comes to sacred rituals, authenticity and intention matter. We ensure every ceremony is performed with the highest level of purity, respect, and traditional exactness to maximize its spiritual benefits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Trust badges could go here, or just a beautiful image */}
              {/* landscape unspalsh image of holy fire or flowers */}
              <div className="col-span-1 sm:col-span-2 rounded-2xl overflow-hidden border-2 border-gold/20 shadow-2xl h-64">
                <img 
                  src="https://pixabay.com/get/gc5a3878ee0ab2fb1990022100f12b6381965dca93dcf54fa2a232980a599308f850210370f29ba0a94380875f5b09c78f348d4ef676e799bfb1ffdca8ae7e03b_1280.jpg" 
                  alt="Holy Fire" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-ivory/5 border border-gold/20 rounded-3xl p-8 sm:p-10 backdrop-blur-sm"
          >
            <ul className="space-y-8">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 bg-gold/20 p-2 rounded-full text-saffron">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-semibold mb-2 text-gold">{point.title}</h4>
                    <p className="text-ivory/70 leading-relaxed">{point.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
