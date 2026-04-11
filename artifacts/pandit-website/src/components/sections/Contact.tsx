import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

/**
 * FormSubmit form ID from the activation email (replaces the naked email in the URL).
 * Submissions still arrive at the Gmail you activated with FormSubmit.
 * Optional: set `VITE_FORMSUBMIT_FORM_ID` in `.env` to override without editing code.
 */
const FORMSUBMIT_FORM_ID =
  import.meta.env.VITE_FORMSUBMIT_FORM_ID ?? 'cf59a9d320206b66f833303c41fe29b4';

/** Same number as the WhatsApp button — inquiry opens in visitor’s WhatsApp; they tap Send to deliver a copy. */
const WHATSAPP_INBOX_E164 = '918421115719';

const SERVICE_LABELS: Record<string, string> = {
  'griha-pravesh': 'Griha Pravesh Puja',
  satyanarayan: 'Satyanarayan Puja',
  ganesh: 'Ganesh Chaturthi Puja',
  rudrabhishek: 'Rudrabhishek Puja',
  astrology: 'Astrology Consultation',
  other: 'Other rituals / general inquiry',
};

function serviceLabelForWhatsApp(value: string): string {
  if (!value) return '—';
  return SERVICE_LABELS[value] ?? value.replace(/-/g, ' ');
}

function buildWhatsAppInquiryText(fields: {
  name: string;
  phone: string;
  service: string;
  message: string;
}): string {
  const service = serviceLabelForWhatsApp(fields.service);
  const details = fields.message.trim() || '_No additional details._';

  const parts = [
    '🙏 *Sacred Guidance*',
    '_New inquiry from the website_',
    '',
    '────────────────────',
    '',
    '*Name*',
    fields.name.trim() || '—',
    '',
    '*Phone*',
    fields.phone.trim() || '—',
    '',
    '*Service*',
    service,
    '',
    '*Message / details*',
    details,
    '',
    '────────────────────',
    '_www.darbheguruji.com_',
  ];

  let text = parts.join('\n');
  if (text.length > 1800) {
    text = `${text.slice(0, 1796)}…`;
  }
  return text;
}

/** Opens WhatsApp (app or web) with pre-filled text. No server API — visitor must tap Send. */
function openWhatsAppWithText(text: string) {
  const url = `https://wa.me/${WHATSAPP_INBOX_E164}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get('_honey')) {
      return;
    }

    setIsSubmitting(true);
    const name = String(fd.get('name') ?? '');
    const phone = String(fd.get('phone') ?? '');
    const service = String(fd.get('service') ?? '');
    const message = String(fd.get('message') ?? '');

    try {
      const payload: Record<string, string> = {
        name,
        phone,
        service,
        message,
        _subject: 'Sacred Guidance - New Enquiry',
        _template: 'table',
      };

      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || data.success === false) {
        throw new Error(data.message || 'Could not send message');
      }

      form.reset();
      const waText = buildWhatsAppInquiryText({ name, phone, service, message });
      openWhatsAppWithText(waText);
      toast({
        title: 'Message sent by email',
        description:
          'WhatsApp opened with the same details — tap Send there to deliver a copy to Panditji.',
        duration: 8000,
      });
    } catch {
      toast({
        title: 'Could not send',
        description: 'Please try WhatsApp or call +91 8421115719.',
        variant: 'destructive',
        duration: 8000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
                onClick={() =>
                  window.open(`https://wa.me/${WHATSAPP_INBOX_E164}`, '_blank', 'noopener,noreferrer')
                }
              >
                Message on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-3 p-10 lg:p-12">
            <h3 className="font-display text-3xl font-semibold text-maroon mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Honeypot — leave hidden; bots that fill it are ignored by client */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-maroon">Your Name</label>
                  <Input id="name" name="name" required placeholder="Shri/Smt..." />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-maroon">Phone Number</label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+91" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-maroon">Service Needed</label>
                <select
                  id="service"
                  name="service"
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
                  name="message"
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
