import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GitBranch, 
  Globe, 
  Smartphone, 
  Palette, 
  Calculator, 
  Video, 
  TrendingUp, 
  Cloud, 
  PenTool,
  ArrowRight 
} from 'lucide-react';
import { services } from '@/data/services';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  GitBranch,
  Globe,
  Smartphone,
  Palette,
  Calculator,
  Video,
  TrendingUp,
  Cloud,
  PenTool,
};

export function Services() {
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
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
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
      className="relative w-full py-20 lg:py-32 bg-brand-dark"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <span className="label-mono mb-4 block">What We Do</span>
          <h2 className="heading-lg text-white mb-4">
            Services that drive{' '}
            <span className="text-gradient">growth</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            From concept to launch, we provide end-to-end digital solutions that help businesses thrive in the modern world.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="service-card group relative p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/30 transition-all duration-500 card-hover"
              >
                {/* Accent border animation */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-accent/20 via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-5 group-hover:bg-brand-accent/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-brand-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <span className="inline-flex items-center text-sm font-medium text-brand-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Learn more
                    <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-brand-accent transition-colors duration-300"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
