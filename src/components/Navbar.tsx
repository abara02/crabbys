'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Drinks', href: '/drinks' },
    { name: 'Specials', href: '/specials' },
    { name: 'Live Music', href: '/events' },
    { name: 'More', href: '/contact' },
  ];

  return (
    <nav
      className="glass-nav"
      style={{
        background: scrolled ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.98)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(5px)',
        transition: 'all 0.4s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 'bold', fontSize: '1.4rem', color: 'var(--white)', letterSpacing: '2px', fontFamily: 'var(--font-serif)' }}>
          <img src="/logo.png" alt="Crabby Al's Logo" style={{ height: '65px', width: 'auto' }} />
          <span style={{ textTransform: 'uppercase' }}>CRABBY AL&apos;S</span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                  transition: 'var(--transition)',
                  color: 'var(--white)',
                  position: 'relative',
                  paddingBottom: '4px'
                }}
              >
                {link.name}
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--white)',
                    borderRadius: '2px'
                  }} />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} style={{ display: 'none' }} className="mobile-toggle">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Simplified for now */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'var(--header-height)',
          left: 0,
          width: '100%',
          background: scrolled ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.98)',
          backdropFilter: 'blur(30px)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ color: 'white', fontWeight: '600', fontSize: '1.1rem' }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
