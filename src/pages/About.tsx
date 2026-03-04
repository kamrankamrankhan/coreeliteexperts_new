import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { teamMembers } from '@/data/services';
import { Target, Eye, Heart, Zap, Award, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    title: 'Purpose-Driven',
    description: 'Every project starts with understanding your goals and ends with measurable results.',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    description: 'We obsess over the small things that make a big difference in user experience.',
  },
  {
    icon: Heart,
    title: 'Passion for Craft',
    description: 'We love what we do, and it shows in the quality of our work.',
  },
  {
    icon: Zap,
    title: 'Move Fast',
    description: 'Agile methodologies help us deliver quickly without sacrificing quality.',
  },
  {
    icon: Award,
    title: 'Excellence First',
    description: 'Good enough is never enough. We strive for excellence in everything.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients, treating your success as our own.',
  },
];

export function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        heroRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Story section
      gsap.fromTo(
        storyRef.current?.querySelectorAll('.story-item') || [],
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Values animation
      const valueCards = valuesRef.current?.querySelectorAll('.value-card');
      if (valueCards) {
        gsap.fromTo(
          valueCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: valuesRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Team animation
      const teamCards = teamRef.current?.querySelectorAll('.team-card');
      if (teamCards) {
        gsap.fromTo(
          teamCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: teamRef.current,
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-accent/5 blur-[120px]" />
        
        <div className="section-container relative z-10">
          <div ref={heroRef} className="max-w-3xl mx-auto text-center">
            <span className="label-mono mb-4 block">About Us</span>
            <h1 className="heading-xl text-white mb-6">
              We're a team of{' '}
              <span className="text-gradient">digital craftsmen</span>
            </h1>
            <p className="body-lg">
              Founded in 2012, coreeliteexperts has grown from a small design studio to a full-service digital agency, helping businesses around the world transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 lg:py-32 bg-brand-dark">
        <div className="section-container">
          <div ref={storyRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="label-mono mb-4 block story-item">Our Story</span>
              <h2 className="heading-md text-white mb-6 story-item">
                From humble beginnings to global impact
              </h2>
              <div className="space-y-4">
                <p className="body-md story-item">
                  What started as a two-person operation in a small New York apartment has evolved into a global team of designers, developers, and strategists passionate about creating exceptional digital experiences.
                </p>
                <p className="body-md story-item">
                  Over the years, we've had the privilege of working with startups, Fortune 500 companies, and everything in between. Each project has taught us something new and shaped who we are today.
                </p>
                <p className="body-md story-item">
                  Our mission remains unchanged: to help businesses succeed in the digital world through thoughtful design, cutting-edge technology, and unwavering dedication to quality.
                </p>
              </div>
            </div>
            <div className="story-item">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Our team"
                  className="w-full h-full object-cover image-grayscale"
                />
                <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-brand-dark border-y border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+', label: 'Team Members' },
              { value: '12+', label: 'Years Experience' },
              { value: '30+', label: 'Countries Served' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-bold text-brand-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 lg:py-32 bg-brand-dark">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="label-mono mb-4 block">Our Values</span>
            <h2 className="heading-md text-white">
              What we <span className="text-gradient">believe</span> in
            </h2>
          </div>

          <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="value-card p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 lg:py-32 bg-brand-dark">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="label-mono mb-4 block">Our Team</span>
            <h2 className="heading-md text-white">
              Meet the <span className="text-gradient">people</span> behind coreeliteexperts
            </h2>
          </div>

          <div ref={teamRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card group text-center"
              >
                <div className="relative mb-4">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 group-hover:border-brand-accent/30 transition-all duration-500">
                    <div className="w-full h-full flex items-center justify-center">
                      {'image' in member && member.image ? (
                        <img
                          src={`${import.meta.env.BASE_URL}${member.image}`}
                          alt={member.name}
                          className={`w-full h-full object-cover ${member.name === 'kamran khan' ? 'object-[center_25%]' : 'object-[center_40%]'}`}
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-accent to-brand-accent/50 flex items-center justify-center">
                          <span className="text-3xl font-display font-bold text-brand-dark">
                            {member.avatar}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-brand-accent mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
