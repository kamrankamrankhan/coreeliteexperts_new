import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '@/data/services';
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
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

export function ServicesPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            toggleActions: 'play none none reverse',
          },
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.service-detail-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-brand-dark overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-accent/5 blur-[120px]" />
        
        <div className="section-container relative z-10">
          <div ref={headerRef} className="max-w-3xl mx-auto text-center">
            <span className="label-mono mb-4 block">Our Services</span>
            <h1 className="heading-xl text-white mb-6">
              Everything you need to{' '}
              <span className="text-gradient">succeed</span> online
            </h1>
            <p className="body-lg">
              From strategy to execution, we offer a comprehensive suite of digital services designed to help your business thrive in the modern landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="relative py-20 lg:py-32 bg-brand-dark">
        <div className="section-container">
          <div ref={cardsRef} className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Globe;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`service-detail-card grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-brand-accent" />
                      </div>
                      <span className="text-5xl font-display font-bold text-white/10">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-5">
                      {service.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-muted-foreground text-base sm:text-lg"
                        >
                          <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="btn-primary group">
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5">
                      {service.id === 'devops' ? (
                        <img
                          src={`${import.meta.env.BASE_URL}devops-visual.png`}
                          alt="DevOps"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : service.id === 'web-development' ? (
                        <img
                          src={`${import.meta.env.BASE_URL}webdev-visual.jpg`}
                          alt="Web Development"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : service.id === 'mobile-development' ? (
                        <img
                          src={`${import.meta.env.BASE_URL}mobile-visual.png`}
                          alt="Mobile App Development"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : service.id === 'ui-ux-design' ? (
                        <img
                          src={`${import.meta.env.BASE_URL}uiux-visual.png`}
                          alt="UI/UX Design"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : service.id === 'bookkeeping' ? (
                        <img
                          src={`${import.meta.env.BASE_URL}bookkeeping-visual.jpg`}
                          alt="Bookkeeping"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : service.id === 'video-editing' ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                          aria-hidden
                        >
                          <source src={`${import.meta.env.BASE_URL}video-editing-visual.mp4`} type="video/mp4" />
                        </video>
                      ) : service.id === 'marketing' ? (
                        <img
                          src={`${import.meta.env.BASE_URL}marketing-visual.png`}
                          alt="Marketing"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : service.id === 'cloud-computing' ? (
                        <img
                          src={`${import.meta.env.BASE_URL}cloud-computing-visual.png`}
                          alt="Cloud Computing"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : service.id === 'graphic-design' ? (
                        <img
                          src={`${import.meta.env.BASE_URL}graphic-design-visual.jpg`}
                          alt="Graphic Designing"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-3xl bg-brand-accent/10 flex items-center justify-center">
                              <Icon className="w-16 h-16 text-brand-accent/50" />
                            </div>
                          </div>
                          {/* Decorative elements */}
                          <div className="absolute top-6 left-6 w-20 h-20 rounded-full bg-brand-accent/5 blur-xl" />
                          <div className="absolute bottom-6 right-6 w-32 h-32 rounded-full bg-brand-accent/5 blur-xl" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 bg-brand-dark">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center p-8 lg:p-12 rounded-3xl bg-white/[0.02] border border-white/5">
            <h2 className="heading-md text-white mb-4">
              Need a custom solution?
            </h2>
            <p className="body-md mb-8">
              Let's discuss your unique requirements and create a tailored approach for your business.
            </p>
            <Button asChild size="lg" className="btn-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
