'use client';

import React, { useState, useEffect } from 'react';
import { getDailySpecials, DailySpecialData } from '@/lib/wordpress';

export default function SpecialsPage() {
    const [specials, setSpecials] = useState<DailySpecialData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await getDailySpecials();
            setSpecials(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    const today = new Date();
    const defaultDate = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div style={{ minHeight: '100vh', background: '#000000', color: 'white' }}>
            {/* Page Header */}
            <div style={{ textAlign: 'center', padding: '10rem 2rem 2rem' }}>
                <img src="/logo.png" alt="Crabby Al's Logo" style={{ height: '80px', width: 'auto', marginBottom: '1.5rem' }} />
                <h1 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '4.5rem',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    color: 'white'
                }}>
                    Daily Specials
                </h1>
                <div style={{
                    width: '100px',
                    height: '4px',
                    background: 'var(--accent)',
                    margin: '0 auto 0'
                }}></div>
            </div>

            {/* Specials Content */}
            <div className="container" style={{ maxWidth: '900px', paddingBottom: '8rem', textAlign: 'center' }}>
                <div style={{ marginTop: '2rem', marginBottom: '3rem', position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {loading ? (
                        <div className="animate-pulse" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.2rem', letterSpacing: '2px' }}>LOADING SPECIALS...</div>
                    ) : (
                        <img
                            src={specials?.imageUrl || "/daily-specials.png"}
                            alt="Daily Specials"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '85vh',
                                objectFit: 'contain',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                            onError={(e) => {
                                const img = e.target as HTMLImageElement;
                                if (img.src.includes('hostingersite.com')) {
                                    img.src = '/daily-specials.png';
                                } else if (img.src.endsWith('/daily-specials.png')) {
                                    img.src = '/dummydata.png';
                                } else if (img.src.endsWith('/dummydata.png')) {
                                    img.src = 'https://placehold.co/800x1200?text=Daily+Specials+Coming+Soon';
                                }
                            }}
                        />
                    )}
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.2rem',
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        margin: 0
                    }}>
                        {specials?.dateText ? `Specials for ${specials.dateText}` : `Specials for ${defaultDate}`}
                    </h2>
                    <div style={{
                        width: '60px',
                        height: '2px',
                        background: 'rgba(255,255,255,0.2)',
                        margin: '1rem auto 0'
                    }}></div>
                </div>
            </div>
        </div>
    );
}
