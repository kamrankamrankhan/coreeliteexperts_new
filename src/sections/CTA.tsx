import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Glow pulse animation
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
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

      {/* Background glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-accent/20 blur-[100px]"
      />

      <div className="section-container relative z-10">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-8">
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium text-brand-accent">
              Ready to start?
            </span>
          </div>

          {/* Headline */}
          <h2 className="heading-lg text-white mb-6">
            Let's build something{' '}
            <span className="text-gradient">extraordinary</span> together
          </h2>

          {/* Description */}
          <p className="body-lg mb-10 max-w-xl mx-auto">
            Whether you have a clear vision or just a rough idea, we're here to help turn your concepts into reality.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="btn-primary group"
            >
              <Link to="/contact">
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-secondary"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by leading companies worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              {['Google', 'Microsoft', 'Amazon', 'Meta'].map((company) => (
                <span
                  key={company}
                  className="text-lg font-display font-semibold text-white/60"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
