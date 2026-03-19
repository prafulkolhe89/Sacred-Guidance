import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2"
          >
            <span className="text-saffron text-2xl">🕉️</span>
            <div className="flex flex-col">
              <span className={cn("font-display font-bold text-2xl md:text-3xl leading-none transition-colors duration-500", isScrolled ? "text-maroon" : "text-ivory")}>
                Pandit Devesh Darbhe
              </span>
              <span className={cn("text-xs tracking-widest uppercase hidden sm:block mt-1 transition-colors duration-500", isScrolled ? "text-gold" : "text-gold/80")}>
                Authentic Vedic Guidance
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn("font-medium transition-colors text-sm uppercase tracking-wide", isScrolled ? "text-maroon/80 hover:text-saffron" : "text-ivory/90 hover:text-gold")}
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="saffron" 
              onClick={(e) => handleNavClick(e as any, '#contact')}
            >
              Book Consultation
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-maroon p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 w-full glass-panel border-t border-gold/20 flex flex-col items-center py-6 gap-6 transition-all duration-300 origin-top",
          mobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-maroon text-lg font-medium"
          >
            {link.name}
          </a>
        ))}
        <Button 
          variant="saffron" 
          className="w-3/4 mt-4"
          onClick={(e) => handleNavClick(e as any, '#contact')}
        >
          Book Consultation
        </Button>
      </div>
    </header>
  );
}
