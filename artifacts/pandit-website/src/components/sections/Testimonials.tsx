import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Ramesh Sharma",
    location: "Nagpur",
    text: "Panditji performed our Griha Pravesh with such devotion. The atmosphere he created was incredibly peaceful. Everything was well-explained and perfectly organized.",
    initials: "RS"
  },
  {
    name: "Priya Deshmukh",
    location: "Wardha Road",
    text: "I consulted Pandit Devesh for astrology reading. His insights were surprisingly accurate and the remedies suggested were simple yet highly effective. Truly grateful.",
    initials: "PD"
  },
  {
    name: "Sanjay Patil",
    location: "Sneh Nagar",
    text: "We host Satyanarayan Puja every year, but Panditji's katha narration was the most divine we have experienced. Highly respectful and punctual.",
    initials: "SP"
  },
  {
    name: "Kavita Joshi",
    location: "Khamla",
    text: "Very authentic and hassle-free experience for our son's naming ceremony. Panditji handled everything beautifully. Highly recommended in Nagpur.",
    initials: "KJ"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon mb-6">
            Words of Devotion
          </h2>
          <p className="text-lg text-maroon/70">
            Hear from families who have experienced our spiritual services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg shadow-gold/5 bg-white">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6 text-amber">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-maroon/80 text-lg italic mb-8 leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-maroon font-bold font-display text-xl">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-semibold text-maroon">{t.name}</h4>
                      <p className="text-sm text-maroon/60">{t.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
