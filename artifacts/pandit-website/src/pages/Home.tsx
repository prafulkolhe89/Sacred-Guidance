import React from 'react';
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
