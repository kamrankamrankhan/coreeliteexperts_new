import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioItems } from '@/data/services';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Web Development', 'UI/UX Design', 'Brand Identity', 'Marketing', 'Cloud Computing'];

export function PortfolioPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.portfolio-item');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
          }
        );
      }
    }, gridRef);

    return () => ctx.revert();
  }, [filteredItems]);

  return (
    <main className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-brand-dark overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-accent/5 blur-[120px]" />
        
        <div className="section-container relative z-10">
          <div ref={headerRef} className="max-w-3xl mx-auto text-center">
            <span className="label-mono mb-4 block">Portfolio</span>
            <h1 className="heading-xl text-white mb-6">
              Our latest{' '}
              <span className="text-gradient">work</span>
            </h1>
            <p className="body-lg">
              Explore our portfolio of successful projects. Each one represents a unique challenge and a creative solution.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="relative py-20 lg:py-32 bg-brand-dark">
        <div className="section-container">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-brand-accent text-brand-dark'
                    : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div
            ref={gridRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`portfolio-item group cursor-pointer ${
                  index === 0 || index === 3 ? 'sm:row-span-2' : ''
                }`}
                onClick={() => setSelectedProject(item)}
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-brand-accent/30 transition-all duration-500 card-hover">
                  {/* Image */}
                  <div className={`relative overflow-hidden ${
                    index === 0 || index === 3 ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 image-grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-14 h-14 rounded-full bg-brand-accent flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                        <ExternalLink className="w-6 h-6 text-brand-dark" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-accent mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-brand-dark border-white/10">
          {selectedProject && (
            <>
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover image-grayscale"
                />
              </div>
              <DialogHeader>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-accent mb-2">
                  {selectedProject.category}
                </span>
                <DialogTitle className="text-2xl font-display font-semibold text-white">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 flex gap-4">
                <button className="btn-primary">
                  View Live Project
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </button>
                <button className="btn-secondary">
                  Case Study
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
