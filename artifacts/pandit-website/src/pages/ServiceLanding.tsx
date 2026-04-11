import React from "react";
import { Link, useLocation } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, Phone, MessageCircle, BookOpen } from "lucide-react";
import {
  useJsonLd,
  usePageMeta,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from "@/hooks/usePageMeta";
import NotFound from "@/pages/not-found";
import { cn } from "@/lib/utils";
import { homeSectionUrl } from "@/lib/site";
import { SERVICE_LANDING_PAGES } from "@/data/serviceLandingData";

const WHATSAPP = "918421115719";

const ctaBtn =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all duration-300 h-14 px-8 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 hover:-translate-y-0.5 active:translate-y-0";

export default function ServiceLanding() {
  const [location] = useLocation();
  const config = SERVICE_LANDING_PAGES[location];

  usePageMeta(
    config
      ? {
          title: config.metaTitle,
          description: config.metaDescription,
          path: config.path,
        }
      : {
          title: DEFAULT_TITLE,
          description: DEFAULT_DESCRIPTION,
          path: location || "/",
        },
  );

  const faqJsonLd = config
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: config.faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null;

  useJsonLd(faqJsonLd, "schema-faq-page");

  if (!config) {
    return <NotFound />;
  }

  const waPrefill = encodeURIComponent(config.waPrefill);

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
            <span className="text-maroon">{config.breadcrumbLabel}</span>
          </nav>

          <header className="mb-12">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon mb-4 leading-tight">
              {config.h1}
            </h1>
            <p className="text-lg text-maroon/75 leading-relaxed">
              {config.introLead}
              <strong>{config.introStrong}</strong>
              {config.introRest}
            </p>
          </header>

          <section className="mb-12" aria-labelledby="benefits-heading">
            <h2
              id="benefits-heading"
              className="font-display text-3xl font-bold text-maroon mb-6"
            >
              {config.benefitsHeading}
            </h2>
            <ul className="space-y-4">
              {config.benefits.map((b) => (
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
              {config.procedureHeading}
            </h2>
            <p className="text-maroon/65 mb-6">
              {config.procedureLead}
              <strong>{config.procedureStrong}</strong>
              {config.procedureTail}
            </p>
            <ol className="space-y-8 list-decimal list-inside marker:font-display marker:text-gold">
              {config.procedureSteps.map((step) => (
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
              {config.faqItems.map((item, i) => (
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
              {config.ctaHeading}
            </h2>
            <p className="text-maroon/75 mb-8 max-w-xl mx-auto">
              {config.ctaBody}
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
              <a
                href={homeSectionUrl("contact")}
                className={cn(
                  ctaBtn,
                  "w-full sm:w-auto border-2 border-gold text-maroon hover:bg-gold/10",
                )}
              >
                Contact form
              </a>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
