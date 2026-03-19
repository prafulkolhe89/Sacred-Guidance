import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Star, Sparkles, Flame, Moon, PlusCircle } from 'lucide-react';

const services = [
  {
    title: "Griha Pravesh Puja",
    description: "Vedic rituals performed to ensure happiness, harmony, and lifelong prosperity in your new home.",
    icon: Home,
    color: "text-amber"
  },
  {
    title: "Satyanarayan Puja",
    description: "Invoke positivity, harmony, and abundance through the sacred Katha of Lord Satyanarayan.",
    icon: Star,
    color: "text-saffron"
  },
  {
    title: "Ganesh Chaturthi Puja",
    description: "Begin new journeys and overcome obstacles with the positivity and blessings of Lord Ganesha.",
    icon: Sparkles,
    color: "text-gold"
  },
  {
    title: "Rudrabhishek Puja",
    description: "Seek Lord Shiva's divine blessings for profound peace, inner strength, and spiritual growth.",
    icon: Flame,
    color: "text-saffron"
  },
  {
    title: "Astrology Consultation",
    description: "Gain clarity on life's path, career, and relationships through authentic Vedic astrology readings.",
    icon: Moon,
    color: "text-maroon"
  },
  {
    title: "Other Sacred Rituals",
    description: "Contact us to inquire about marriages, naming ceremonies, and other specific Vedic rituals.",
    icon: PlusCircle,
    color: "text-gold"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">Our Offerings</span>
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon mb-6">
            Sacred Rituals & Spiritual Guidance
          </h2>
          <p className="text-lg text-maroon/70">
            Experience the profound peace of traditional ceremonies performed with utmost devotion and authenticity.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col bg-ivory border-gold/10 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-[100px] -z-10 group-hover:from-saffron/20 transition-colors duration-500"></div>
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-cream border border-gold/20 flex items-center justify-center mb-6 shadow-inner ${service.color}`}>
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-2xl text-maroon">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <CardDescription className="text-base text-maroon/70 mb-8">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between px-0 font-semibold hover:bg-transparent hover:text-saffron group/btn"
                    onClick={() => {
                      const msg = encodeURIComponent(`Hari Om. I would like to inquire about the ${service.title}.`);
                      window.open(`https://wa.me/918421115719?text=${msg}`, '_blank');
                    }}
                  >
                    Enquire Now
                    <span className="transform transition-transform group-hover/btn:translate-x-1">→</span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
