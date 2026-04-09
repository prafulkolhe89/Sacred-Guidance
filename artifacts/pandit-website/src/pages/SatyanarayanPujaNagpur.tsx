import React from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, Phone, MessageCircle, BookOpen } from "lucide-react";
import { useJsonLd, usePageMeta } from "@/hooks/usePageMeta";
import { cn } from "@/lib/utils";

const WHATSAPP = "918421115719";

const META_TITLE =
  "Satyanarayan Puja in Nagpur | Book at Home | Darbhe Guruji";
const META_DESCRIPTION =
  "Book Satyanarayan Puja in Nagpur with an experienced Pandit. Home visits, full Katha & aarti, auspicious muhurat guidance. Griha / office Satyanarayan Puja across Nagpur — call or WhatsApp.";

const faqItems = [
  {
    q: "How long does Satyanarayan Puja take in Nagpur?",
    a: "Typically 2–3 hours, depending on family size, prasad preparation, and whether it is combined with other rituals. We schedule a comfortable window so nothing is rushed.",
  },
  {
    q: "Can Satyanarayan Puja be done at home in Nagpur?",
    a: "Yes. It is commonly performed at home. We arrange the sacred space, kalash, and offerings as per tradition, and guide your family through each step.",
  },
  {
    q: "What items do we need to arrange?",
    a: "We share a clear checklist (fruits, flowers, panchamrit, ghee, lamps, etc.) based on your setup. If you prefer, we can advise simplified arrangements for smaller gatherings.",
  },
  {
    q: "Is Satyanarayan Puja suitable before Griha Pravesh or business opening?",
    a: "Yes. Many families in Nagpur perform Satyanarayan Puja before auspicious events for blessings and harmony. Share your occasion and we suggest timing.",
  },
  {
    q: "Do you travel within Nagpur and nearby areas?",
    a: "We serve Nagpur city and nearby localities. Mention your area when booking so we can confirm travel and arrival time.",
  },
];

const benefits = [
  {
    title: "Auspicious beginnings",
    desc: "Ideal for new ventures, milestones, and seeking Lord Vishnu’s blessings through the sacred Satyanarayan Katha.",
  },
  {
    title: "Family harmony",
    desc: "Performed with collective participation — strengthens positivity and togetherness in the household.",
  },
  {
    title: "Authentic vidhi",
    desc: "Mantras and steps followed as per Vedic tradition, with clear explanation of each part of the puja.",
  },
  {
    title: "Flexible at your location",
    desc: "Conducted at your home or chosen venue in Nagpur, with practical guidance on arrangement and prasad.",
  },
];

const ctaBtn =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all duration-300 h-14 px-8 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 hover:-translate-y-0.5 active:translate-y-0";

const procedureSteps = [
  {
    title: "Consultation & date",
    desc: "Share your occasion (vow, festival, new home, etc.). We help shortlist auspicious days and a suitable time window.",
  },
  {
    title: "Preparation list",
    desc: "You receive a simple list of samagri (flowers, fruits, panchamrit, lamps, etc.) so everything is ready before we arrive.",
  },
  {
    title: "Setup of the sacred space",
    desc: "Kalash placement, deity arrangement, and sankalpa according to family tradition — performed with care and cleanliness.",
  },
  {
    title: "Satyanarayan Katha & puja",
    desc: "Recitation of the Katha, offerings, aarti, and prasad distribution — conducted with devotion and clarity.",
  },
  {
    title: "Completion & guidance",
    desc: "Brief guidance on follow-up observances if any, and blessings for your family’s well-being.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function SatyanarayanPujaNagpur() {
  usePageMeta({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: "/satyanarayan-puja-nagpur",
  });

  useJsonLd(faqJsonLd);

  const waPrefill = encodeURIComponent(
    "Hari Om. I would like to book Satyanarayan Puja in Nagpur. Please share available dates and details.",
  );

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-maroon/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-saffron">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-maroon">Satyanarayan Puja in Nagpur</span>
          </nav>

          <header className="mb-12">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon mb-4 leading-tight">
              Satyanarayan Puja in Nagpur
            </h1>
            <p className="text-lg text-maroon/75 leading-relaxed">
              Book an authentic{" "}
              <strong>Satyanarayan Puja in Nagpur</strong> with Pandit Devesh
              Darbhe — performed at your home with full Katha, traditional
              offerings, and clear guidance for your family.
            </p>
          </header>

          <section className="mb-12" aria-labelledby="benefits-heading">
            <h2
              id="benefits-heading"
              className="font-display text-3xl font-bold text-maroon mb-6"
            >
              Benefits of Satyanarayan Puja
            </h2>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-3">
                  <CheckCircle2
                    className="text-saffron shrink-0 mt-1"
                    size={22}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-semibold text-maroon text-lg">
                      {b.title}
                    </h3>
                    <p className="text-maroon/70 mt-1">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12" aria-labelledby="procedure-heading">
            <h2
              id="procedure-heading"
              className="font-display text-3xl font-bold text-maroon mb-2"
            >
              Procedure: how we conduct Satyanarayan Puja
            </h2>
            <p className="text-maroon/65 mb-6">
              Below is a typical flow for{" "}
              <strong>Satyanarayan Puja in Nagpur</strong> at your residence.
              Steps may be adapted slightly based on family tradition and
              occasion.
            </p>
            <ol className="space-y-8 list-decimal list-inside marker:font-display marker:text-gold">
              {procedureSteps.map((step) => (
                <li key={step.title} className="text-maroon/80 pl-1">
                  <h3 className="font-display text-xl font-semibold text-maroon inline">
                    {step.title}
                  </h3>
                  <p className="mt-2 ml-6 text-maroon/70 leading-relaxed">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-12" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="font-display text-3xl font-bold text-maroon mb-6"
            >
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-maroon font-medium">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-maroon/70 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section
            className="rounded-2xl border border-gold/30 bg-ivory/80 p-8 sm:p-10 text-center shadow-lg shadow-maroon/5"
            aria-labelledby="cta-heading"
          >
            <BookOpen
              className="mx-auto text-saffron mb-4"
              size={40}
              aria-hidden
            />
            <h2
              id="cta-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-maroon mb-3"
            >
              Book Satyanarayan Puja in Nagpur
            </h2>
            <p className="text-maroon/75 mb-8 max-w-xl mx-auto">
              Share your preferred date and area in Nagpur. We will confirm
              availability and send a simple samagri list.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${waPrefill}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  ctaBtn,
                  "w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-lg shadow-[#25D366]/20",
                )}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
              <a
                href="tel:8421115719"
                className={cn(
                  ctaBtn,
                  "w-full sm:w-auto bg-gradient-to-r from-gold to-amber text-maroon shadow-lg shadow-gold/25 font-medium border border-gold/50",
                )}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +91 8421115719
              </a>
              <Link
                href="/#contact"
                className={cn(
                  ctaBtn,
                  "w-full sm:w-auto border-2 border-gold text-maroon hover:bg-gold/10",
                )}
              >
                Contact form
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
