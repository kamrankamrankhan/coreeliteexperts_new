import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      gsap.set(labelRef.current, { y: -20, opacity: 0 });
      gsap.set(headlineRef.current?.querySelectorAll('.word') || [], { y: 24, opacity: 0 });
      gsap.set(subheadlineRef.current, { y: 18, opacity: 0 });
      gsap.set(ctaRef.current?.children || [], { y: 18, opacity: 0 });

      tl.to(labelRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
      })
      .to(headlineRef.current?.querySelectorAll('.word') || [], {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.03,
      }, '-=0.3')
      .to(subheadlineRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
      }, '-=0.3')
      .to(ctaRef.current?.children || [], {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.06,
      }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headlineWords = 'Design that moves brands forward.'.split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-brand-dark"
    >
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        >
          <source src={`${import.meta.env.BASE_URL}hero-bg-v2.mp4?v=2`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-dark/70" />
      </div>

      {/* Background vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-brand-accent/5 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl animate-float" />
      </div>

      <div className="section-container relative z-10 pt-20">
        <div className="flex flex-col justify-center items-center text-center min-h-[calc(100vh-5rem)]">
          <div className="flex flex-col justify-center max-w-3xl">
            {/* Micro label */}
            <span
              ref={labelRef}
              className="label-mono mb-4 lg:mb-6"
            >
              Digital Studio
            </span>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="heading-xl text-white mb-4 lg:mb-6"
            >
              {headlineWords.map((word, i) => (
                <span key={i} className="word inline-block mr-[0.25em]">
                  {word}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              ref={subheadlineRef}
              className="body-lg max-w-lg mx-auto mb-8 lg:mb-10"
            >
              We craft identities, interfaces, and motion systems for teams building the next version of the internet.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="btn-primary group"
              >
                <Link to="/portfolio">
                  View Selected Work
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="btn-secondary group"
              >
                <Link to="/contact">
                  <Play className="mr-2 w-4 h-4" />
                  Start a Project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
