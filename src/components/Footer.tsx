import { Facebook, Instagram, Phone, Mail, MapPin, Anchor } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ background: 'var(--primary)', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                            <img src="/logo.png" alt="Crabby Al's Logo" style={{ height: '40px', width: 'auto' }} />
                            <span>CRABBY AL&apos;S</span>
                        </div>
                        <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
                            Thomaston's premier seafood destination. Friendly service, fresh ingredients, and a "Cheers" like atmosphere.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link href="#" style={{ color: 'white' }}><Facebook size={20} /></Link>
                            <Link href="#" style={{ color: 'white' }}><Instagram size={20} /></Link>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ borderBottom: '2px solid var(--accent)', display: 'inline-block', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Contact Us</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.8 }}>
                                <MapPin size={18} color="var(--muted)" />
                                157 East Main Street, Thomaston, CT 06787
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.8 }}>
                                <Phone size={18} color="var(--muted)" />
                                (860) 283-4177
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.8 }}>
                                <Mail size={18} color="var(--muted)" />
                                info@crabbyals.com
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ borderBottom: '2px solid var(--accent)', display: 'inline-block', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Hours</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
                            <li><strong>Sun - Thu:</strong></li>
                            <li>Kitchen: 11:00 AM - 10:00 PM</li>
                            <li>Bar: 11:00 AM - 1:00 AM</li>
                            <li style={{ marginTop: '0.5rem' }}><strong>Fri - Sat:</strong></li>
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
