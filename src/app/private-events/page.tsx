'use client';

import React, { useState, useEffect } from 'react';

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
                    backgroundPosition: 'center 85%',
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
            {/* Gallery Section */}
            <div style={{ padding: '0 0 6rem' }}>
                <div className="container">
                    <h2 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2.2rem',
                        color: 'white',
                        textAlign: 'center',
                        marginBottom: '0.75rem'
                    }}>Our Space</h2>
                    <div style={{ width: '60px', height: '3px', background: 'var(--accent)', margin: '0 auto 2.5rem' }}></div>

                    <div className="gallery-desktop" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gridTemplateRows: '380px 260px 260px 260px',
                        gap: '10px',
                    }}>
                        {/* Big wide image — top left, spans 2 cols */}
                        {[
                            { src: '/pics/SHOTS.png', alt: 'Shots', gridColumn: '1 / 3', gridRow: '1' },
                            { src: '/pics/Event gallery.png', alt: 'Event Gallery', gridColumn: '3', gridRow: '1 / 3' },
                            { src: '/gallery/interior_1.jpg', alt: 'Interior 2', gridColumn: '1', gridRow: '2' },
                            { src: '/pics/buffet.png', alt: 'Buffet', gridColumn: '2', gridRow: '2' },
                            { src: '/pics/event crabby.png', alt: 'Event at Crabby Als', gridColumn: '1 / 3', gridRow: '3' },
                            { src: '/pics/dinning room.png', alt: 'Dining Room', gridColumn: '3', gridRow: '3' },
                            { src: '/gallery/interior_2.jpg', alt: 'Interior', gridColumn: '1 / 4', gridRow: '4' },
                        ].map((img, i) => (
                            <div key={i} style={{
                                gridColumn: img.gridColumn,
                                gridRow: img.gridRow,
                                borderRadius: '10px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
                            }}>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Mobile carousel */}
                    <MobileCarousel />
                </div>
            </div>

            <style>{`
                .gallery-desktop { display: grid; }
                .gallery-mobile  { display: none; }
                @media (max-width: 768px) {
                    .gallery-desktop { display: none !important; }
                    .gallery-mobile  { display: block !important; }
                }
            `}</style>
        </div>
    );
}

const GALLERY_IMAGES = [
    { src: '/pics/Event gallery.png', alt: 'Event Gallery' },
    { src: '/gallery/interior_2.jpg', alt: 'Interior' },
    { src: '/gallery/interior_1.jpg', alt: 'Interior 2' },
    { src: '/pics/buffet.png', alt: 'Buffet' },
    { src: '/pics/event crabby.png', alt: 'Event at Crabby Als' },
    { src: '/pics/dinning room.png', alt: 'Dining Room' },
    { src: '/pics/SHOTS.png', alt: 'Shots' },
];

function MobileCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % GALLERY_IMAGES.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent(p => (p - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    const next = () => setCurrent(p => (p + 1) % GALLERY_IMAGES.length);

    return (
        <div className="gallery-mobile" style={{ borderRadius: '12px', overflow: 'hidden', background: '#111' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
                <img
                    key={current}
                    src={GALLERY_IMAGES[current].src}
                    alt={GALLERY_IMAGES[current].alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <button onClick={prev} style={{
                    position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.55)', color: 'white', border: 'none', borderRadius: '50%',
                    width: '40px', height: '40px', fontSize: '1.4rem', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>&#8249;</button>
                <button onClick={next} style={{
                    position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.55)', color: 'white', border: 'none', borderRadius: '50%',
                    width: '40px', height: '40px', fontSize: '1.4rem', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>&#8250;</button>
            </div>
            {/* Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', padding: '14px 0', background: '#0a0a0a' }}>
                {GALLERY_IMAGES.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)} style={{
                        width: i === current ? '20px' : '8px',
                        height: '8px',
                        borderRadius: '50px',
                        background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: 0
                    }} />
                ))}
            </div>
        </div>
    );
}
