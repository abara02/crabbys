'use client';

import React from 'react';

export default function PrivateEventsPage() {
    return (
        <div style={{ minHeight: '100vh', background: '#000000', color: 'white' }}>
            {/* Hero */}
            <div style={{
                height: '60vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'url("/gallery/eventhero.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 70%',
                    zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)',
                    zIndex: 1
                }}></div>
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, width: '100%', height: '25vh',
                    background: 'linear-gradient(to top, #000000 0%, transparent 100%)',
                    zIndex: 2
                }}></div>

                <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 2rem' }}>
                    <h1 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '4.5rem',
                        marginBottom: '0.5rem',
                        color: 'white',
                        opacity: 0.9,
                        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        textTransform: 'uppercase',
                        letterSpacing: '4px'
                    }}>
                        Private Events
                    </h1>
                    <p style={{
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        letterSpacing: '6px',
                        margin: '0 0 1.5rem'
                    }}>
                        Celebrate With Us
                    </p>
                    <div style={{ width: '100px', height: '4px', background: 'white', margin: '0 auto' }}></div>
                </div>
            </div>

            {/* Content */}
            <div className="section" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'left' }}>

                        {/* Tagline */}
                        <p style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            color: 'white',
                            fontFamily: 'var(--font-serif)',
                            marginBottom: '2rem',
                            lineHeight: 1.5,
                            fontStyle: 'italic'
                        }}>
                            Planning a special gathering? Let us help make it memorable.
                        </p>

                        {/* Divider */}
                        <div style={{ width: '60px', height: '3px', background: 'var(--accent)', margin: '0 0 2.5rem' }}></div>

                        {/* Body */}
                        <p style={{
                            color: 'rgba(255,255,255,0.75)',
                            fontSize: '1.1rem',
                            lineHeight: 1.85,
                            marginBottom: '2.5rem'
                        }}>
                            Crabby Al&apos;s has proudly hosted company parties, bridal and baby showers, birthday
                            celebrations, retirement parties, and more. We also offer a thoughtfully prepared
                            bereavement menu and will coordinate every detail to ensure a comfortable and relaxing
                            gathering for you and your guests.
                        </p>

                        <p style={{
                            color: 'rgba(255,255,255,0.75)',
                            fontSize: '1.1rem',
                            lineHeight: 1.85,
                            marginBottom: '1.25rem'
                        }}>
                            For more information and personalized assistance, please contact:
                        </p>

                        <p style={{ color: 'white', fontSize: '1.15rem', fontWeight: '700', fontFamily: 'var(--font-serif)', marginBottom: '0.4rem' }}>
                            Cathy Baranauskas
                        </p>
                        <a
                            href="tel:8602834177"
                            style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: '700', textDecoration: 'none' }}
                        >
                            📞 860.283.4177
                        </a>

                        <p style={{
                            marginTop: '2.5rem',
                            fontSize: '1.1rem',
                            color: 'rgba(255,255,255,0.5)',
                            fontStyle: 'italic'
                        }}>
                            We look forward to helping you plan your event.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
