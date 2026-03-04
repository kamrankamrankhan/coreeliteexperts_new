import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonials } from '@/data/services';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              end: 'top 40%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-brand-dark overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <span className="label-mono mb-4 block">Testimonials</span>
          <h2 className="heading-lg text-white mb-4">
            What our <span className="text-gradient">clients</span> say
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card relative p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/30 transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-brand-accent" />
              </div>

              {/* Quote text */}
              <blockquote className="text-white/90 text-lg leading-relaxed mb-6 pr-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-brand-accent/50 flex items-center justify-center">
                  <span className="text-brand-dark font-display font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-display font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
