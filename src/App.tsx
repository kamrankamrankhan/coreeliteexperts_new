import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen bg-brand-dark">
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
      </Router>
    </ThemeProvider>
  );
}

export default App;
