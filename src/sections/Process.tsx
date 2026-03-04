import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { processSteps } from '@/data/services';
import { Search, Lightbulb, Code, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  '01': Search,
  '02': Lightbulb,
  '03': Code,
  '04': Rocket,
};

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Progress line animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 0.5,
          },
        }
      );

      // Steps animation
      const steps = stepsRef.current?.querySelectorAll('.process-step');
      if (steps) {
        steps.forEach((step, index) => {
          gsap.fromTo(
            step,
            { x: index % 2 === 0 ? -40 : 40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: step,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-brand-dark"
    >
      {/* Top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <span className="label-mono mb-4 block">Our Process</span>
          <h2 className="heading-lg text-white mb-4">
            How we <span className="text-gradient">work</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            A proven methodology that ensures every project is delivered with precision and excellence.
          </p>
        </div>

        {/* Process Steps */}
        <div ref={stepsRef} className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 lg:-translate-x-1/2">
            <div
              ref={lineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-accent to-brand-accent/50 origin-top"
              style={{ height: '100%' }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-20">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.number];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`process-step relative grid lg:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'lg:text-right'
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'lg:pr-16' : 'lg:order-2 lg:pl-16'}`}>
                    <div className={`flex items-center gap-4 mb-4 ${isEven ? '' : 'lg:justify-end'}`}>
                      <span className="text-4xl lg:text-5xl font-display font-bold text-brand-accent/30">
                        {step.number}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-display font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="body-md">{step.description}</p>
                  </div>

                  {/* Icon */}
                  <div className={`${isEven ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'}`}>
                    <div
                      className={`relative flex items-center ${
                        isEven ? '' : 'lg:justify-end'
                      }`}
                    >
                      <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-brand-accent border-4 border-brand-dark lg:-translate-x-1/2" />
                      <div
                        className={`ml-20 lg:ml-0 w-16 h-16 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center ${
                          isEven ? 'lg:ml-0' : 'lg:mr-0'
                        }`}
                      >
                        <Icon className="w-7 h-7 text-brand-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
