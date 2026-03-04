import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Github,
  ArrowUpRight 
} from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Web Development', href: '/services#web-development' },
    { label: 'Mobile Apps', href: '/services#mobile-development' },
    { label: 'UI/UX Design', href: '/services#ui-ux-design' },
    { label: 'Cloud Solutions', href: '/services#cloud-computing' },
    { label: 'DevOps', href: '/services#devops' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-brand-dark-lifted border-t border-white/5">
      {/* Main Footer */}
      <div className="section-container py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src={`${import.meta.env.BASE_URL}logo-dark.png`}
                alt="coreeliteexperts"
                className="h-10 w-auto"
              />
              <span className="font-display font-semibold text-xl text-white">
                coreeliteexperts
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              We are a digital agency crafting exceptional web experiences, mobile applications, and brand identities for forward-thinking companies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:hello@cee.studio" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-brand-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@cee.studio
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-brand-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                New York / London / Remote
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-6 grid sm:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-brand-accent transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-brand-accent transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-brand-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-muted-foreground hover:text-brand-accent hover:border-brand-accent/30 hover:bg-brand-accent/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-display font-semibold text-white mb-3">
                Newsletter
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Get the latest updates and insights.
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand-accent/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-brand-accent text-brand-dark text-sm font-medium hover:bg-brand-accent/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} coreeliteexperts. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Crafted with precision and passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
