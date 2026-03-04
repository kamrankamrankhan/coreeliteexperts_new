import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Shield, Clock, Users, Award, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Zap,
    title: 'Lightning Fast Delivery',
    description: 'We use agile methodologies to deliver projects on time without compromising quality.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Your data and applications are protected with industry-leading security practices.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock support ensures your business never misses a beat.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team consists of seasoned professionals with years of industry experience.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Rigorous testing and QA processes ensure flawless deliverables.',
  },
  {
    icon: Heart,
    title: 'Client-Centric Approach',
    description: 'We put your needs first and work closely with you throughout the project.',
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { x: -40, opacity: 0 },
        {
          x: 0,
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

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.reason-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { x: 40, opacity: 0, scale: 0.98 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
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
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div ref={contentRef}>
            <span className="label-mono mb-4 block">Why Choose Us</span>
            <h2 className="heading-lg text-white mb-6">
              We deliver{' '}
              <span className="text-gradient">excellence</span>{' '}
              in every project
            </h2>
            <p className="body-lg mb-8">
              Our commitment to quality, innovation, and client satisfaction sets us apart. We don't just build products; we build partnerships that last.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-brand-accent mb-1">
                  150+
                </div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-brand-accent mb-1">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-brand-accent mb-1">
                  12+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right: Cards Grid */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="reason-card group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/30 hover:bg-white/[0.04] transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <h3 className="text-sm font-display font-semibold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
