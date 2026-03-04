import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the emerging technologies and methodologies shaping the future of web development, from AI-powered tools to edge computing.',
    category: 'Technology',
    author: 'Alex Rivera',
    date: 'Mar 1, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Design Systems: Building Consistency at Scale',
    excerpt: 'Learn how to create and maintain design systems that improve team efficiency and product consistency.',
    category: 'Design',
    author: 'Jordan Kim',
    date: 'Feb 28, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    featured: false,
  },
  {
    id: 3,
    title: 'Mobile-First Design: Why It Matters More Than Ever',
    excerpt: 'With mobile traffic continuing to grow, discover why a mobile-first approach is crucial for modern web design.',
    category: 'Design',
    author: 'Taylor Brooks',
    date: 'Feb 25, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'DevOps Best Practices for Small Teams',
    excerpt: 'Implementing DevOps practices doesn\'t require enterprise resources. Here\'s how small teams can benefit.',
    category: 'DevOps',
    author: 'Morgan Chen',
    date: 'Feb 22, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1667372393119-c8f473882e8e?w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'The Psychology of Color in Branding',
    excerpt: 'Understanding how color choices influence perception and brand recognition.',
    category: 'Branding',
    author: 'Jordan Kim',
    date: 'Feb 18, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80',
    featured: false,
  },
  {
    id: 6,
    title: 'Cloud Migration: A Step-by-Step Guide',
    excerpt: 'Everything you need to know about moving your infrastructure to the cloud safely and efficiently.',
    category: 'Cloud',
    author: 'Taylor Brooks',
    date: 'Feb 15, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    featured: false,
  },
];

const categories = ['All', 'Technology', 'Design', 'DevOps', 'Branding', 'Cloud'];

export function Blog() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        featuredRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const cards = gridRef.current?.querySelectorAll('.blog-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-brand-dark overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-accent/5 blur-[120px]" />
        
        <div className="section-container relative z-10">
          <div ref={heroRef} className="max-w-3xl mx-auto text-center">
            <span className="label-mono mb-4 block">Our Blog</span>
            <h1 className="heading-xl text-white mb-6">
              Insights \&{' '}
              <span className="text-gradient">Perspectives</span>
            </h1>
            <p className="body-lg">
              Thoughts on design, development, and the digital landscape from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="relative py-12 bg-brand-dark">
          <div className="section-container">
            <div ref={featuredRef}>
              <Link 
                to={`/blog/${featuredPost.id}`}
                className="group block relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-brand-accent/30 transition-all duration-500"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 image-grayscale"
                    />
                    <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-medium">
                        Featured
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-display font-semibold text-white mb-4 group-hover:text-brand-accent transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <span className="inline-flex items-center text-brand-accent font-medium">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="relative py-20 lg:py-32 bg-brand-dark">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-brand-accent text-brand-dark'
                    : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="blog-card group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-brand-accent/30 transition-all duration-500 card-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 image-grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                  <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-white">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-brand-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
