import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { ServicesPage } from '@/pages/Services';
import { About } from '@/pages/About';
import { PortfolioPage } from '@/pages/Portfolio';
import { Contact } from '@/pages/Contact';
import { Blog } from '@/pages/Blog';
import './App.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Smoother scroll-triggered animations: batch updates and limit callbacks
if (typeof window !== 'undefined') {
  ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });
}

function AppContent() {
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to hash target when route or hash changes
  useEffect(() => {
    const hash = location.hash?.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      gsap.to(window, {
        scrollTo: { y: el, offsetY: 80 },
        duration: 1.2,
        ease: 'power3.inOut',
        overwrite: true,
      });
    }
  }, [location.pathname, location.hash]);

  // Refresh ScrollTrigger after route change so animations work on new content
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    return () => cancelAnimationFrame(timer);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-brand-dark" ref={contentRef}>
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
