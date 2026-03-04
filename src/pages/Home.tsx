import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { Process } from '@/sections/Process';
import { Portfolio } from '@/sections/Portfolio';
import { Testimonials } from '@/sections/Testimonials';
import { CTA } from '@/sections/CTA';

export function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  );
}
