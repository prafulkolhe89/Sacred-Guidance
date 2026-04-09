import React, { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { WhyUs } from '@/components/sections/WhyUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { StickyElements } from '@/components/layout/StickyElements';
import { SectionDivider } from '@/components/shared/SectionDivider';

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;
    const t = window.setTimeout(() => {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <SectionDivider />
        <Services />
        <WhyUs />
        <SectionDivider />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <StickyElements />
    </div>
  );
}
