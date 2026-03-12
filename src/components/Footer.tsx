'use client';

import { Facebook, Instagram, Phone, Mail, MapPin, Anchor } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ background: '#111111', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    {/* Column 1: Connect With Us */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3 style={{ borderBottom: '2px solid var(--accent)', display: 'inline-block', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Connect With Us</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                            <Link href="/">
                                <img src="/logo.png" alt="Crabby Al's Logo" style={{ height: '150px', width: 'auto', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                            </Link>
                            <div style={{ display: 'flex', gap: '1.25rem' }}>
                                <Link href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '50%', display: 'flex', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                                    <Facebook size={22} />
                                </Link>
                                <Link href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '50%', display: 'flex', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                                    <Instagram size={22} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Blurb */}
                    <div>
                        <h3 style={{ borderBottom: '2px solid var(--accent)', display: 'inline-block', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Crabby Al&apos;s</h3>
                        <p style={{ opacity: 0.8, marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            Thomaston&apos;s Favorite Seafood Restaurant<br /><br />
                            Call for reservations:<br />
                            <a href="tel:8602834177" style={{ fontWeight: 'bold', color: 'var(--accent)' }}>(860) 283-4177</a>
                        </p>
                    </div>

                    {/* Column 3: Contact Us */}
                    <div>
                        <h3 style={{ borderBottom: '2px solid var(--accent)', display: 'inline-block', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Contact Us</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', opacity: 0.8 }}>
                                <MapPin size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                                <span>157 East Main Street,<br />Thomaston, CT 06787</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.8 }}>
                                <Mail size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                                <a href="mailto:info@crabbyals.com" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'white'}>info@crabbyals.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Hours */}
                    <div>
                        <h3 style={{ borderBottom: '2px solid var(--accent)', display: 'inline-block', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Hours</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
                            <li><strong style={{ color: 'var(--accent)' }}>Sun - Thu:</strong></li>
                            <li>Kitchen: 11:00 AM - 10:00 PM</li>
                            <li>Bar: 11:00 AM - 1:00 AM</li>
                            <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--accent)' }}>Fri - Sat:</strong></li>
                            <li>Kitchen: 11:00 AM - 11:00 PM</li>
                            <li>Bar: 11:00 AM - 2:00 AM</li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Crabby Al&apos;s Seafood Restaurant. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
