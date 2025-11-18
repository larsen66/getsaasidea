"use client";

import React, { useState, useEffect, useRef, memo, useCallback } from 'react';

const AnimatedNavLink = memo(({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "var(--text-primary)";
  }, []);
  
  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "var(--text-tertiary)";
  }, []);

  return (
    <a
      href={href}
      className="relative text-base font-medium transition-colors duration-300 group"
      style={{ color: "var(--text-tertiary)" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{children}</span>
      <span
        className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
        style={{ background: "var(--text-primary)" }}
      />
    </a>
  );
});

AnimatedNavLink.displayName = "AnimatedNavLink";

export const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 20);
          
          // Hide header when scrolling down, show when scrolling up
          if (scrollY < 100) {
            // Always show at the top of the page
            setIsVisible(true);
          } else if (scrollY > lastScrollY.current && scrollY > 100) {
            // Scrolling down - hide
            setIsVisible(false);
          } else if (scrollY < lastScrollY.current) {
            // Scrolling up - show
            setIsVisible(true);
          }
          
          lastScrollY.current = scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoElement = (
    <div className="flex items-center">
      <span className="font-semibold text-base sm:text-lg tracking-tight" style={{ color: "var(--text-primary)" }}>GetSaaS Idea</span>
    </div>
  );

  const navLinksData = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'See Demo', href: '#demo' },
  ];

  const ctaButton = (
    <button
      className="px-6 py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 whitespace-nowrap group flex items-center gap-2 border"
      style={{
        background: "var(--text-primary)",
        color: "var(--bg-primary)",
        borderColor: "var(--text-primary)",
      }}
    >
      Join Waitlist
      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
    </button>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50
                       flex flex-col
                       px-4 sm:px-6 lg:px-8
                       h-16 sm:h-20
                       transition-all duration-300 ease-in-out
                       ${isScrolled ? 'backdrop-blur-xl' : ''}
                       ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      style={isScrolled ? {
        backgroundColor: 'rgba(10, 10, 10, 0.85)',
        borderBottom: 'var(--border-width) solid var(--border-subtle)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        WebkitBackdropFilter: 'blur(24px)',
        backdropFilter: 'blur(24px)',
      } : {
        background: 'var(--bg-primary)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >

      <div className="flex items-center justify-between w-full h-full max-w-7xl mx-auto">
        <div className="flex items-center">
          {logoElement}
        </div>

        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 text-base">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          {ctaButton}
        </div>

        <button 
          className="md:hidden flex items-center justify-center w-8 h-8 focus:outline-none transition-colors"
          style={{ color: "var(--text-tertiary)" }}
          onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
          onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-tertiary)"} 
          onClick={toggleMenu} 
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      <div className={`md:hidden flex flex-col w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[400px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0 pointer-events-none'}`}>
        <nav className="flex flex-col space-y-4 text-base w-full pt-4">
          {navLinksData.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="transition-colors w-full text-left px-2"
              style={{ color: "var(--text-tertiary)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-tertiary)"}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center pt-4 px-2">
          {ctaButton}
        </div>
      </div>
    </header>
  );
});
