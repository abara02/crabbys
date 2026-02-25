'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const EVENT_MENUS = [
    { title: 'Plated Menu One', image: '/pics/Plated%201.png', emoji: '🍽️' },
    { title: 'Plated Menu Two', image: '/pics/Plated%202.png', emoji: '🍽️' },
    { title: 'Buffet Menu One', image: '/pics/Buffet%201.png', emoji: '🥘' },
    { title: 'Buffet Menu Two', image: '/pics/Buffet%202.png', emoji: '🥘' },
    { title: 'Bereavement Menu', image: '/pics/bereavement.png', emoji: '🕊️' },
];

export default function PrivateEventsPage() {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    const [lightboxTitle, setLightboxTitle] = useState<string>('');

    // Close lightbox on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightboxSrc(null);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

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

            {/* ── Private Event Menus Carousel ── */}
            <div style={{ padding: '0 0 6rem' }}>
                <div className="container">
                    <h2 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2.2rem',
                        color: 'white',
                        textAlign: 'center',
                        marginBottom: '0.75rem'
                    }}>
                        Private Event Menus
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '1rem',
                        marginBottom: '0.75rem',
                        fontStyle: 'italic'
                    }}>
                        Click any menu to view
                    </p>
                    <div style={{ width: '60px', height: '3px', background: 'var(--accent)', margin: '0 auto 0' }}></div>
                </div>
                <MenuCarousel menus={EVENT_MENUS} onSelect={(img, title) => { setLightboxSrc(img); setLightboxTitle(title); }} />
            </div>

            {/* ── Lightbox ── */}
            {lightboxSrc && (
                <div
                    onClick={() => setLightboxSrc(null)}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 1000,
                        background: 'rgba(0,0,0,0.92)',
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center',
                        padding: '2rem',
                        backdropFilter: 'blur(6px)',
                    }}
                >
                    {/* Header */}
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        width: '100%', maxWidth: '860px', marginBottom: '1rem'
                    }}>
                        <h3 style={{
                            color: 'white', fontFamily: 'var(--font-serif)',
                            fontSize: '1.4rem', margin: 0
                        }}>{lightboxTitle}</h3>
                        <button
                            onClick={() => setLightboxSrc(null)}
                            style={{
                                background: 'rgba(255,255,255,0.1)', border: 'none',
                                borderRadius: '50%', width: '40px', height: '40px',
                                color: 'white', cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}
                        >
                            <X size={20} />
                        </button>
                    </div>
                    {/* Image */}
                    <img
                        src={lightboxSrc}
                        alt={lightboxTitle}
                        onClick={e => e.stopPropagation()}
                        onError={e => {
                            (e.target as HTMLImageElement).src =
                                `https://placehold.co/800x1100/111/white?text=${encodeURIComponent(lightboxTitle)}`;
                        }}
                        style={{
                            maxWidth: '860px', width: '100%',
                            maxHeight: '80vh', objectFit: 'contain',
                            borderRadius: '12px',
                            boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    />
                    <p style={{
                        marginTop: '1rem', color: 'rgba(255,255,255,0.35)',
                        fontSize: '0.8rem'
                    }}>Click outside or press Esc to close</p>
                </div>
            )}

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

// ── MenuCarousel ──────────────────────────────────────────────────────────────

interface MenuEntry { title: string; image: string; emoji: string; }

function MenuCarousel({ menus, onSelect }: { menus: MenuEntry[]; onSelect: (img: string, title: string) => void }) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const total = menus.length;

    const getItem = (i: number) => menus[((i % total) + total) % total];
    const activeIndex = ((index % total) + total) % total;

    const next = useCallback(() => { setDirection(1); setIndex(i => i + 1); }, []);
    const prev = useCallback(() => { setDirection(-1); setIndex(i => i - 1); }, []);

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [prev, next]);

    // Mobile detection for card spacing
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
        if (info.offset.x < -50) next();
        else if (info.offset.x > 50) prev();
    };

    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem', overflow: 'hidden' }}>

            {/* Prev arrow */}
            <div style={{ position: 'absolute', top: '50%', left: '1rem', zIndex: 20, transform: 'translateY(-50%)' }}>
                <button
                    onClick={prev}
                    aria-label="Previous menu"
                    style={{
                        background: '#fff', border: '1px solid #e0e0e0',
                        width: '50px', height: '50px', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        transition: 'all 0.2s ease', color: '#333',
                    }}
                    onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--accent)'; b.style.color = '#fff'; b.style.borderColor = 'var(--accent)'; }}
                    onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#fff'; b.style.color = '#333'; b.style.borderColor = '#e0e0e0'; }}
                >
                    <ChevronLeft size={28} />
                </button>
            </div>

            {/* Cards area */}
            <div style={{ position: 'relative', height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    {([-1, 0, 1] as const).map((offset) => {
                        const item = getItem(index + offset);
                        const isActive = offset === 0;
                        return (
                            <motion.div
                                key={`${index + offset}-${item.title}`}
                                custom={direction}
                                initial={{
                                    x: offset * 350 + direction * 100,
                                    scale: isActive ? 1 : 0.8,
                                    opacity: isActive ? 1 : 0.4,
                                    zIndex: isActive ? 10 : 1,
                                }}
                                animate={{
                                    x: offset * (isMobile ? 260 : 400),
                                    scale: isActive ? 1 : 0.85,
                                    opacity: isActive ? 1 : 0.5,
                                    zIndex: isActive ? 10 : 1,
                                }}
                                exit={{
                                    x: offset * 350 - direction * 100,
                                    opacity: 0,
                                    scale: 0.7,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                    opacity: { duration: 0.2 },
                                }}
                                drag={isActive ? 'x' : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={handleDragEnd}
                                onClick={() => isActive ? onSelect(item.image, item.title) : (offset < 0 ? prev() : next())}
                                style={{
                                    position: 'absolute',
                                    width: '85vw',
                                    maxWidth: '350px',
                                    height: '460px',
                                    borderRadius: '20px',
                                    border: isActive ? '2px solid var(--accent)' : '1px solid rgba(255,255,255,0.15)',
                                    boxShadow: isActive ? '0 24px 50px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.3)',
                                    overflow: 'hidden',
                                    cursor: isActive ? 'zoom-in' : 'pointer',
                                }}
                            >
                                {/* Full-bleed image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    onError={e => {
                                        const el = e.target as HTMLImageElement;
                                        el.style.display = 'none';
                                        const parent = el.parentElement!;
                                        parent.style.display = 'flex';
                                        parent.style.alignItems = 'center';
                                        parent.style.justifyContent = 'center';
                                        parent.style.flexDirection = 'column';
                                        parent.style.gap = '1rem';
                                        parent.style.fontSize = '4rem';
                                        parent.style.background = 'linear-gradient(135deg,#1a1a1a,#2a2a2a)';
                                        parent.style.color = 'white';
                                        parent.innerHTML = `<span>${item.emoji}</span><span style="font-size:1rem;font-family:var(--font-serif);opacity:0.8">${item.title}</span>`;
                                    }}
                                />
                                {/* Title label at bottom */}
                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, right: 0,
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    backdropFilter: 'blur(8px)',
                                    padding: '1.25rem',
                                    color: '#0a3d62',
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                }}>
                                    {item.title}
                                    {isActive && (
                                        <div style={{ fontSize: '0.72rem', fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#0a3d62', opacity: 0.8, marginTop: '4px' }}>
                                            Click to view ↗
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Next arrow */}
            <div style={{ position: 'absolute', top: '50%', right: '1rem', zIndex: 20, transform: 'translateY(-50%)' }}>
                <button
                    onClick={next}
                    aria-label="Next menu"
                    style={{
                        background: '#fff', border: '1px solid #e0e0e0',
                        width: '50px', height: '50px', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        transition: 'all 0.2s ease', color: '#333',
                    }}
                    onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--accent)'; b.style.color = '#fff'; b.style.borderColor = 'var(--accent)'; }}
                    onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#fff'; b.style.color = '#333'; b.style.borderColor = '#e0e0e0'; }}
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* Dot pagination */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '1.5rem' }}>
                {menus.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => { setDirection(i > activeIndex ? 1 : -1); setIndex(index + (i - activeIndex)); }}
                        aria-label={`Go to slide ${i + 1}`}
                        style={{
                            width: i === activeIndex ? '32px' : '8px',
                            height: '8px',
                            borderRadius: i === activeIndex ? '4px' : '50%',
                            background: i === activeIndex ? 'var(--accent)' : '#555',
                            border: 'none', cursor: 'pointer', padding: 0,
                            transition: 'all 0.3s ease',
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
