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
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  BookOpen,
  Mail,
  Link2,
} from "lucide-react";
import {
  useJsonLd,
  usePageMeta,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from "@/hooks/usePageMeta";
import { cn } from "@/lib/utils";
import { homeHashLink } from "@/lib/site";
import { normalizePathname } from "@/lib/pathname";
import {
  SERVICE_PUJA_PAGES,
  relatedServiceLinks,
} from "@/data/servicePujaPages";
import NotFound from "@/pages/not-found";
import {
  WHATSAPP_E164,
  PHONE_TEL,
  PHONE_DISPLAY,
  EMAIL_MAILTO,
  EMAIL_DISPLAY,
} from "@/constants/contact";

const ctaBtn =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all duration-300 h-14 px-8 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 hover:-translate-y-0.5 active:translate-y-0";

export default function ServicePujaPage() {
  const [location] = useLocation();
  const path = normalizePathname(location);
  const config = SERVICE_PUJA_PAGES[path];

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
          path: path || "/",
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
  const related = relatedServiceLinks(config.path);
  const contactHref = homeHashLink("contact");

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

          <section className="mb-12" aria-labelledby="prepare-heading">
            <h2
              id="prepare-heading"
              className="font-display text-3xl font-bold text-maroon mb-2"
            >
              {config.prepareHeading}
            </h2>
            <p className="text-maroon/65 mb-6">{config.prepareIntro}</p>
            <ul className="space-y-4">
              {config.prepareItems.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckCircle2
                    className="text-gold shrink-0 mt-1"
                    size={22}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-semibold text-maroon text-lg">
                      {item.title}
                    </h3>
                    <p className="text-maroon/70 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
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
            className="mb-12 rounded-2xl border border-gold/20 bg-cream/50 p-6 sm:p-8"
            aria-labelledby="related-heading"
          >
            <h2
              id="related-heading"
              className="font-display text-2xl font-bold text-maroon mb-4 flex items-center gap-2"
            >
              <Link2 className="text-saffron shrink-0" size={22} aria-hidden />
              Related services in Nagpur
            </h2>
            <p className="text-maroon/70 text-sm mb-4">
              Explore our other pooja and consultation pages on{" "}
              <span className="font-medium text-maroon">darbheguruji.com</span>{" "}
              — internal links help visitors and clarify what we offer.
            </p>
            <ul className="flex flex-col gap-2">
              {related.map(({ path: href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-saffron font-medium hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={contactHref}
                  className="text-maroon font-semibold hover:text-saffron hover:underline"
                >
                  Contact &amp; booking (form)
                </Link>
              </li>
            </ul>
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
            <p className="text-maroon/75 mb-4 max-w-xl mx-auto">
              {config.ctaBody}
            </p>
            <p className="text-maroon/80 text-sm sm:text-base mb-6 font-medium">
              Phone:{" "}
              <a href={`tel:${PHONE_TEL}`} className="text-saffron hover:underline">
                {PHONE_DISPLAY}
              </a>
              <span className="mx-2 text-maroon/40" aria-hidden>
                ·
              </span>
              Email:{" "}
              <a
                href={`mailto:${EMAIL_MAILTO}`}
                className="text-saffron hover:underline"
              >
                {EMAIL_DISPLAY}
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <a
                href={`https://wa.me/${WHATSAPP_E164}?text=${waPrefill}`}
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
                href={`tel:${PHONE_TEL}`}
                className={cn(
                  ctaBtn,
                  "w-full sm:w-auto bg-gradient-to-r from-gold to-amber text-maroon shadow-lg shadow-gold/25 font-medium border border-gold/50",
                )}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL_MAILTO}?subject=${encodeURIComponent(`Inquiry: ${config.h1}`)}`}
                className={cn(
                  ctaBtn,
                  "w-full sm:w-auto border-2 border-maroon/30 text-maroon hover:bg-maroon/5",
                )}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email {EMAIL_DISPLAY}
              </a>
              <Link
                href={contactHref}
                className={cn(
                  ctaBtn,
                  "w-full sm:w-auto border-2 border-gold text-maroon hover:bg-gold/10",
                )}
              >
                Contact form on homepage
              </Link>
            </div>
            <p className="mt-6 text-xs text-maroon/55">
              Darbhe Guruji · Pandit Devesh Darbhe · Nagpur · darbheguruji.com
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
