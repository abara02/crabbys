'use client';

import React, { useState, useEffect } from 'react';
import { getHappenings, HappeningData } from '@/lib/wordpress';

export default function HappeningsPage() {
    const [happenings, setHappenings] = useState<HappeningData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await getHappenings();
            setHappenings(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div style={{ minHeight: '100vh', background: '#000000', color: 'white' }}>
            {/* Page Header */}
            <div style={{ textAlign: 'center', padding: '10rem 2rem 2rem' }}>
                <img src="/logo.png" alt="Crabby Al's Logo" style={{ height: '80px', width: 'auto', marginBottom: '1.5rem' }} />
                <h1 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    color: 'white',
                    lineHeight: '1.1'
                }}>
                    Crabby Als Happenings
                </h1>
                <div style={{
                    width: '100px',
                    height: '4px',
                    background: 'var(--accent)',
                    margin: '0 auto 0'
                }}></div>
            </div>

            {/* Happenings Content */}
            <div className="container" style={{ maxWidth: '1200px', paddingBottom: '8rem', textAlign: 'center' }}>
                <div style={{ marginTop: '2rem', marginBottom: '3rem', position: 'relative', minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {loading ? (
                        <div className="animate-pulse" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.2rem', letterSpacing: '2px' }}>LOADING HAPPENINGS...</div>
                    ) : happenings.length === 0 ? (
                        <div style={{
                            padding: '3rem 2rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            <p style={{
                                fontSize: '1.5rem',
                                color: 'var(--white)',
                                lineHeight: '1.6',
                                fontWeight: '500',
                                letterSpacing: '1px'
                            }}>
                                Looks like things are quiet right now! 🦀<br/>
                                Check back soon for upcoming happenings at Crabby Al’s!
                            </p>
                        </div>
                    ) : (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '2rem',
                            width: '100%',
                            alignItems: 'start'
                        }}>
                            {happenings.map((happening, index) => (
                                <div key={happening.id || index} style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    backgroundColor: '#111',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <img
                                        src={happening.imageUrl}
                                        alt={happening.title || "Crabby Al's Happening"}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'contain',
                                            display: 'block'
                                        }}
                                        onError={(e) => {
                                            const img = e.target as HTMLImageElement;
                                            if (img.src.includes('hostingersite.com')) {
                                                img.src = '/dummydata.png';
                                            } else if (img.src.endsWith('/dummydata.png')) {
                                                img.src = 'https://placehold.co/800x1200?text=Happening+Coming+Soon';
                                            }
                                        }}
                                    />
                                    {happening.title && happening.title !== 'Happening' && (
                                        <div style={{
                                            padding: '1rem',
                                            background: 'rgba(0,0,0,0.8)',
                                            borderTop: '1px solid rgba(255,255,255,0.05)'
                                        }}>
                                            <h3 style={{
                                                margin: 0,
                                                fontSize: '1.1rem',
                                                color: 'var(--accent)',
                                                fontFamily: 'var(--font-serif)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}>
                                                {happening.title}
                                            </h3>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
