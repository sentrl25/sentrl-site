import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, ChevronRight } from 'lucide-react';

const NavLinkItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative font-mono text-sm tracking-widest uppercase py-2 transition-colors duration-200 ${
        isActive ? 'text-brand-cyan' : 'text-brand-muted hover:text-brand-silver'
      }`
    }
  >
    {({ isActive }) => (
      <>
        {isActive && (
          <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-cyan shadow-cyan-glow" />
        )}
        {children}
      </>
    )}
  </NavLink>
);

export const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-base text-brand-silver selection:bg-brand-cyan selection:text-brand-base overflow-x-hidden">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-brand-base/90 backdrop-blur-md border-brand-surface py-4' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <NavLink to="/" className="z-50">
            <Logo />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            <NavLinkItem to="/platform">PLATFORM</NavLinkItem>
            <NavLinkItem to="/solutions">SOLUTIONS</NavLinkItem>
            <NavLinkItem to="/approach">APPROACH</NavLinkItem>
            <a 
              href="#contact"
              onClick={scrollToContact}
              className="ml-4 border border-brand-cyan/50 px-6 py-2 text-xs font-mono text-brand-cyan uppercase tracking-widest hover:bg-brand-cyan/10 hover:shadow-cyan-glow transition-all cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-brand-silver z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-brand-base/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <NavLinkItem to="/" onClick={() => setMobileMenuOpen(false)}>HOME</NavLinkItem>
          <NavLinkItem to="/platform" onClick={() => setMobileMenuOpen(false)}>PLATFORM</NavLinkItem>
          <NavLinkItem to="/solutions" onClick={() => setMobileMenuOpen(false)}>SOLUTIONS</NavLinkItem>
          <NavLinkItem to="/approach" onClick={() => setMobileMenuOpen(false)}>APPROACH</NavLinkItem>
          <a href="#contact" onClick={scrollToContact} className="mt-8">
            <button className="bg-brand-cyan text-brand-base px-8 py-3 font-mono uppercase tracking-widest">
              Contact
            </button>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-surface border-t border-brand-steel/10 pt-16 pb-8" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Logo />
              <p className="mt-6 text-brand-muted max-w-sm text-sm leading-relaxed">
                Structuring data, workflows, and decisions into a disciplined, resilient operating framework.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs text-brand-cyan uppercase tracking-widest mb-6">Sitemap</h4>
              <ul className="space-y-4 text-sm text-brand-muted">
                <li><NavLink to="/platform" className="hover:text-brand-silver transition-colors">Platform</NavLink></li>
                <li><NavLink to="/solutions" className="hover:text-brand-silver transition-colors">Solutions</NavLink></li>
                <li><NavLink to="/approach" className="hover:text-brand-silver transition-colors">Approach</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs text-brand-cyan uppercase tracking-widest mb-6">Contact</h4>
              <a href="mailto:gday@sentrl.com.au" className="flex items-center gap-2 text-brand-silver hover:text-brand-cyan transition-colors group">
                <span className="text-sm">gday@sentrl.com.au</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="mt-4 text-xs text-brand-muted">
                Australian Sovereign Data Handling
              </p>
            </div>
          </div>
          <div className="border-t border-brand-steel/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-muted font-mono">
            <p>&copy; {new Date().getFullYear()} SENTRL. All rights reserved.</p>
            <div className="flex gap-8">
               <span>Privacy Policy</span>
               <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};