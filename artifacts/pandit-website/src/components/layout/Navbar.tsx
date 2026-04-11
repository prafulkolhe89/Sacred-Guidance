import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Why Us", id: "why-us" },
  { name: "Testimonials", id: "testimonials" },
];

function sectionHref(sectionId: string) {
  return `${import.meta.env.BASE_URL}#${sectionId.replace(/^#/, "")}`;
}

export function Navbar() {
  const [location] = useLocation();
  const isHome = location === "/" || location === "";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(href: string) {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  }

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollToSection(href);
  };

  const logoClass = "flex items-center gap-2";
  const logoInner = (
    <>
      <span className="text-saffron text-2xl">🕉️</span>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-display font-bold text-2xl md:text-3xl leading-none transition-colors duration-500",
            isScrolled ? "text-maroon" : "text-ivory",
          )}
        >
          Pandit Devesh Darbhe
        </span>
        <span
          className={cn(
            "text-xs tracking-widest uppercase hidden sm:block mt-1 transition-colors duration-500",
            isScrolled ? "text-gold" : "text-gold/80",
          )}
        >
          Authentic Vedic Guidance
        </span>
      </div>
    </>
  );

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {isHome ? (
            <a
              href={sectionHref("home")}
              onClick={(e) => handleNavClick(e, "#home")}
              className={logoClass}
            >
              {logoInner}
            </a>
          ) : (
            <Link href="/" className={logoClass}>
              {logoInner}
            </Link>
          )}

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const hash = `#${link.id}`;
              return (
                <a
                  key={link.name}
                  href={sectionHref(link.id)}
                  onClick={(e) => {
                    if (isHome) handleNavClick(e, hash);
                  }}
                  className={cn(
                    "font-medium transition-colors text-sm uppercase tracking-wide",
                    isScrolled
                      ? "text-maroon/80 hover:text-saffron"
                      : "text-ivory/90 hover:text-gold",
                  )}
                >
                  {link.name}
                </a>
              );
            })}
            {isHome ? (
              <Button
                variant="saffron"
                type="button"
                onClick={() => scrollToSection("#contact")}
              >
                Book Consultation
              </Button>
            ) : (
              <a
                href={sectionHref("contact")}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-all duration-300 h-12 px-6 py-2 bg-gradient-to-r from-saffron to-amber text-ivory hover:opacity-95 shadow-lg shadow-saffron/25 border border-saffron/50 hover:-translate-y-0.5"
              >
                Book Consultation
              </a>
            )}
          </nav>

          <button
            className="lg:hidden text-maroon p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden absolute top-full left-0 w-full glass-panel border-t border-gold/20 flex flex-col items-center py-6 gap-6 transition-all duration-300 origin-top",
          mobileMenuOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none",
        )}
      >
        {NAV_LINKS.map((link) => {
          const hash = `#${link.id}`;
          return (
            <a
              key={link.name}
              href={sectionHref(link.id)}
              onClick={(e) => {
                if (isHome) handleNavClick(e, hash);
              }}
              className="text-maroon text-lg font-medium"
            >
              {link.name}
            </a>
          );
        })}
        {isHome ? (
          <Button
            variant="saffron"
            type="button"
            className="w-3/4 mt-4"
            onClick={() => scrollToSection("#contact")}
          >
            Book Consultation
          </Button>
        ) : (
          <a
            href={sectionHref("contact")}
            className="w-3/4 mt-4 inline-flex items-center justify-center rounded-full text-base font-medium h-12 px-6 bg-gradient-to-r from-saffron to-amber text-ivory shadow-lg shadow-saffron/25 border border-saffron/50"
          >
            Book Consultation
          </a>
        )}
      </div>
    </header>
  );
}
