import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully",
        description: "Hari Om. Panditji will contact you shortly.",
        duration: 5000,
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-maroon/70">
            Reach out to book a consultation or inquire about a puja ceremony.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-ivory rounded-3xl shadow-xl shadow-maroon/5 overflow-hidden border border-gold/20">
          
          {/* Contact Info Panel */}
          <div className="lg:col-span-2 bg-maroon text-ivory p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="font-display text-3xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-3 rounded-full text-saffron shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-ivory/60 text-sm mb-1">Call Us</p>
                    <a href="tel:8421115719" className="text-xl hover:text-saffron transition-colors block">
                      +91 8421115719
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-3 rounded-full text-saffron shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-ivory/60 text-sm mb-1">Email Us</p>
                    <a href="mailto:darbhe123@gmail.com" className="text-lg hover:text-saffron transition-colors block">
                      darbhe123@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-3 rounded-full text-saffron shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-ivory/60 text-sm mb-1">Visit Us</p>
                    <p className="text-lg leading-relaxed">
                      Plot 10, Sneh Nagar,<br/>
                      Near Khamla, Nagpur<br/>
                      Maharashtra – 440015
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-3 rounded-full text-saffron shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-ivory/60 text-sm mb-1">Availability</p>
                    <p className="text-lg">Everyday, 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-12 pt-8 border-t border-ivory/20">
              <Button 
                variant="saffron" 
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-lg shadow-[#25D366]/20"
                onClick={() => window.open('https://wa.me/918421115719', '_blank')}
              >
                Message on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-3 p-10 lg:p-12">
            <h3 className="font-display text-3xl font-semibold text-maroon mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-maroon">Your Name</label>
                  <Input id="name" required placeholder="Shri/Smt..." />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-maroon">Phone Number</label>
                  <Input id="phone" type="tel" required placeholder="+91" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-maroon">Service Needed</label>
                <select 
                  id="service" 
                  required
                  className="flex h-12 w-full rounded-xl border border-gold/30 bg-ivory/50 px-4 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:bg-ivory transition-all text-maroon"
                >
                  <option value="">Select a service...</option>
                  <option value="griha-pravesh">Griha Pravesh Puja</option>
                  <option value="satyanarayan">Satyanarayan Puja</option>
                  <option value="ganesh">Ganesh Chaturthi Puja</option>
                  <option value="rudrabhishek">Rudrabhishek Puja</option>
                  <option value="astrology">Astrology Consultation</option>
                  <option value="other">Other Rituals / General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-maroon">Message or Details</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your requirements, preferred dates, etc." 
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                variant="saffron" 
                size="lg" 
                className="w-full sm:w-auto px-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
