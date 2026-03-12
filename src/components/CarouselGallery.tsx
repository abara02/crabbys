'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselGalleryProps {
    images: string[];
}

export default function CarouselGallery({ images }: CarouselGalleryProps) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const total = images.length;

    const getItem = (i: number) => images[((i % total) + total) % total];
    const activeIndex = ((index % total) + total) % total;

    const next = useCallback(() => { setDirection(1); setIndex(i => i + 1); }, []);
    const prev = useCallback(() => { setDirection(-1); setIndex(i => i - 1); }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [next, prev]);

    // Auto-cycle every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 5000);
        return () => clearInterval(timer);
    }, [next]);

    const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
        if (info.offset.x < -50) next();
        else if (info.offset.x > 50) prev();
    };

    // Mobile detection for card spacing
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    if (total === 0) return null;

    return (
        <div style={{
            marginTop: '4rem',
            marginBottom: '4rem',
            width: '100%',
            maxWidth: '1400px', // Wider to allow peek effect
            background: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            overflow: 'hidden',
            padding: '2rem 0'
        }}>
            {/* Main Stage */}
            <div style={{
                position: 'relative',
                width: '100%',
                height: isMobile ? '350px' : '550px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* Left Arrow (Outside Image Area) */}
                <div style={{ position: 'absolute', top: '50%', left: '1rem', zIndex: 20, transform: 'translateY(-50%)' }}>
                    <button
                        onClick={prev}
                        style={{
                            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            width: '50px', height: '50px', borderRadius: '50%',
                            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={28} />
                    </button>
                </div>

                {/* Slides */}
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    {([-1, 0, 1] as const).map((offset) => {
                        const src = getItem(index + offset);
                        const isActive = offset === 0;
                        
                        return (
                            <motion.div
                                key={`${index + offset}`}
                                custom={direction}
                                initial={{
                                    x: offset * (isMobile ? 320 : 800) + direction * 100,
                                    scale: isActive ? 1 : 0.85,
                                    opacity: isActive ? 1 : 0.3,
                                    zIndex: isActive ? 10 : 1,
                                }}
                                animate={{
                                    x: offset * (isMobile ? 320 : 800),
                                    scale: isActive ? 1 : 0.85,
                                    opacity: isActive ? 1 : 0.4,
                                    zIndex: isActive ? 10 : 1,
                                }}
                                exit={{
                                    x: offset * (isMobile ? 320 : 800) - direction * 100,
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
                                onClick={() => { if (offset < 0) prev(); else if (offset > 0) next(); }}
                                style={{
                                    position: 'absolute',
                                    width: isMobile ? '85vw' : '75vw',
                                    maxWidth: '850px',
                                    height: '100%',
                                    borderRadius: '16px',
                                    boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.5)' : '0 10px 20px rgba(0,0,0,0.3)',
                                    overflow: 'hidden',
                                    cursor: isActive ? 'grab' : 'pointer',
                                    backgroundColor: 'transparent'
                                }}
                            >
                                <img
                                    src={src}
                                    alt="Gallery image"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        pointerEvents: 'none'
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {/* Right Arrow (Outside Image Area) */}
                <div style={{ position: 'absolute', top: '50%', right: '1rem', zIndex: 20, transform: 'translateY(-50%)' }}>
                    <button
                        onClick={next}
                        style={{
                            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            width: '50px', height: '50px', borderRadius: '50%',
                            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
                        aria-label="Next image"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
            </div>

            {/* Thumbnails Row */}
            <div className="hide-scrollbar" style={{
                display: 'flex',
                gap: '10px',
                width: '100%',
                maxWidth: '900px',
                overflowX: 'auto',
                padding: '0.5rem 1rem',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none' // IE and Edge
            }}>
                {images.map((src, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > activeIndex ? 1 : -1);
                            setIndex(index + (idx - activeIndex));
                        }}
                        style={{
                            flex: '0 0 auto',
                            width: '80px',
                            height: '60px',
                            padding: 0,
                            margin: 0,
                            border: idx === activeIndex ? '2px solid var(--accent)' : '2px solid transparent',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            opacity: idx === activeIndex ? 1 : 0.5
                        }}
                        onMouseEnter={e => { if (idx !== activeIndex) e.currentTarget.style.opacity = '0.8' }}
                        onMouseLeave={e => { if (idx !== activeIndex) e.currentTarget.style.opacity = '0.5' }}
                        aria-label={`View gallery image ${idx + 1}`}
                    >
                        <img
                            src={src}
                            alt={`Thumbnail ${idx + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </button>
                ))}
            </div>

            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
