'use client';

import React, { useState } from 'react';
import { Music, Calendar, List, Image as ImageIcon, Send, CheckCircle } from 'lucide-react';

const events = [
    {
        title: "Swingin Wingos",
        date: "2026-02-06",
        displayDate: "FEB 6",
        month: "FEB",
        day: "6",
        time: "8:00 PM",
        description: "Classic Country & Classic Rock 60-90's",
        type: "Entertainment"
    },
    {
        title: "Ten $ Grand",
        date: "2026-02-07",
        displayDate: "FEB 7",
        month: "FEB",
        day: "7",
        time: "8:00 PM",
        description: "Classic Rock",
        type: "Entertainment"
    },
    {
        title: "Soul Funk",
        date: "2026-02-13",
        displayDate: "FEB 13",
        month: "FEB",
        day: "13",
        time: "8:00 PM",
        description: "All Genres",
        type: "Entertainment"
    },
    {
        title: "Radio Rewind",
        date: "2026-02-14",
        displayDate: "FEB 14",
        month: "FEB",
        day: "14",
        time: "8:00 PM",
        description: "Classic Rock 60s-70s",
        type: "Entertainment"
    },
    {
        title: "Days Off",
        date: "2026-02-20",
        displayDate: "FEB 20",
        month: "FEB",
        day: "20",
        time: "8:00 PM",
        description: "Classic Rock-All Genres except country",
        type: "Entertainment"
    },
    {
        title: "3G",
        date: "2026-02-21",
        displayDate: "FEB 21",
        month: "FEB",
        day: "21",
        time: "8:00 PM",
        description: "All Eras Popular Music-Party",
        type: "Entertainment"
    },
    {
        title: "Lived Wired",
        date: "2026-02-27",
        displayDate: "FEB 27",
        month: "FEB",
        day: "27",
        time: "8:00 PM",
        description: "80s Tribute",
        type: "Entertainment"
    },
    {
        title: "Lost Rebel",
        date: "2026-02-28",
        displayDate: "FEB 28",
        month: "FEB",
        day: "28",
        time: "8:00 PM",
        description: "Southern Rock & Country",
        type: "Entertainment"
    }
];

export default function EventsPage() {
    const [viewMode, setViewMode] = useState<'list' | 'poster'>('list');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = (e: React.FormEvent) => {
        setFormSubmitted(true);
    };

    const renderPoster = () => {
        return (
            <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '1rem',
                boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
                width: '100%',
                maxWidth: '900px',
                margin: '0 auto',
                overflow: 'hidden'
            }}>
                <img
                    src="/feb-poster.png"
                    alt="February Upcoming Schedule"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '8px'
                    }}
                />
            </div>
        );
    };

    return (
        <div style={{ minHeight: '100vh', background: '#000000', color: 'white' }}>
            {/* Hero Section */}
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
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/pics/live music.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 20%',
                    zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)',
                    zIndex: 1
                }}></div>

                {/* Bottom Fade-out */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '25vh',
                    background: 'linear-gradient(to top, #000000 0%, transparent 100%)',
                    zIndex: 2
                }}></div>

                <div style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
                    <h1 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '4.5rem',
                        marginBottom: '0.5rem',
                        color: 'white',
                        opacity: 0.85,
                        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        textTransform: 'uppercase',
                        letterSpacing: '4px'
                    }}>
                        Live Music Every Weekend
                    </h1>
                    <p style={{
                        fontSize: '1.8rem',
                        fontWeight: '800',
                        color: 'var(--accent)',
                        margin: '0 0 1.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '8px'
                    }}>
                        8PM TO MIDNIGHT
                    </p>
                    <div style={{
                        width: '100px',
                        height: '4px',
                        background: 'white',
                        margin: '0 auto'
                    }}></div>
                </div>
            </div>

            <div className="section" style={{ padding: '6rem 0' }}>
                <div className="container">
                    {/* View Toggle */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{
                            display: 'inline-flex',
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '0.4rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <button
                                onClick={() => setViewMode('list')}
                                style={{
                                    padding: '0.6rem 1.5rem',
                                    borderRadius: '8px',
                                    background: viewMode === 'list' ? 'white' : 'transparent',
                                    color: viewMode === 'list' ? 'black' : 'rgba(255, 255, 255, 0.5)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontWeight: '600',
                                    border: 'none',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer'
                                }}
                            >
                                <List size={16} /> List
                            </button>
                            <button
                                onClick={() => setViewMode('poster')}
                                style={{
                                    padding: '0.6rem 1.5rem',
                                    borderRadius: '8px',
                                    background: viewMode === 'poster' ? 'white' : 'transparent',
                                    color: viewMode === 'poster' ? 'black' : 'rgba(255, 255, 255, 0.5)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontWeight: '600',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem'
                                }}
                            >
                                <ImageIcon size={16} /> Poster
                            </button>
                        </div>
                    </div>

                    {viewMode === 'list' ? (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.2rem',
                            maxWidth: '1000px',
                            margin: '0 auto'
                        }}>
                            {events.map((event, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    background: 'white',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    minHeight: '100px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                                }} className="event-list-item">
                                    <div style={{
                                        width: '120px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: '#f8f9fa',
                                        borderRight: '1px solid #eee',
                                        padding: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#999',
                                            fontSize: '0.8rem',
                                            fontWeight: '800',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            marginBottom: '0.2rem'
                                        }}>
                                            {event.month}
                                        </span>
                                        <span style={{
                                            color: '#5c171b',
                                            fontSize: '1.8rem',
                                            fontWeight: '800',
                                            lineHeight: '1'
                                        }}>
                                            {event.day}
                                        </span>
                                    </div>

                                    <div style={{
                                        flex: 1,
                                        padding: '1.5rem 2.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <h3 style={{
                                            fontFamily: 'var(--font-serif)',
                                            fontSize: '1.8rem',
                                            margin: 0,
                                            color: '#5c171b'
                                        }}>
                                            {event.title}
                                        </h3>
                                        <p style={{ margin: '0.2rem 0 0', color: '#666', fontSize: '0.9rem' }}>{event.description}</p>
                                    </div>

                                    <div style={{
                                        width: '240px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1rem 2rem',
                                        borderLeft: '1px solid #eee'
                                    }}>
                                        <button style={{
                                            padding: '0.9rem 1.5rem',
                                            background: '#3d0c11',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            fontWeight: '700',
                                            fontSize: '0.8rem',
                                            letterSpacing: '1px',
                                            textTransform: 'uppercase',
                                            cursor: 'pointer',
                                            width: '100%',
                                            transition: 'all 0.2s ease'
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = '#5c171b';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = '#3d0c11';
                                            }}>
                                            Event Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : renderPoster()}

                    {/* Band Booking Contact Form */}
                    <div style={{
                        marginTop: '8rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        maxWidth: '800px',
                        margin: '8rem auto 0',
                        overflow: 'hidden'
                    }}>
                        <div style={{ padding: '4rem 3rem', textAlign: 'center' }}>
                            <h2 style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '2.8rem',
                                color: 'var(--accent)',
                                marginBottom: '1rem',
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}>
                                Band Bookings
                            </h2>
                            <p style={{
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: '1.1rem',
                                marginBottom: '3rem',
                                maxWidth: '600px',
                                margin: '0 auto 3rem'
                            }}>
                                Interested in playing at Crabby Al's? Fill out the form below and our booking team will get in touch with you.
                            </p>

                            {!formSubmitted ? (
                                <form
                                    onSubmit={handleFormSubmit}
                                    action="https://formspree.io/f/crabbyalsbands@gmail.com"
                                    method="POST"
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                        gap: '1.5rem',
                                        textAlign: 'left'
                                    }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Band Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="band-name"
                                            placeholder="Enter your band name"
                                            style={{
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                color: 'white',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact Email</label>
                                        <input
                                            required
                                            type="email"
                                            name="_replyto"
                                            placeholder="your@email.com"
                                            style={{
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                color: 'white',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Requested Rate</label>
                                        <input
                                            required
                                            type="text"
                                            name="rate"
                                            placeholder="e.g. $500 / 3 hours"
                                            style={{
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                color: 'white',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Genres</label>
                                        <input
                                            required
                                            type="text"
                                            name="genres"
                                            placeholder="e.g. Rock, Blues, Jazz"
                                            style={{
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                color: 'white',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Samples of Music (Links)</label>
                                        <input
                                            required
                                            type="text"
                                            name="samples"
                                            placeholder="Link to Spotify, YouTube, SoundCloud, etc."
                                            style={{
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                color: 'white',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Availability</label>
                                        <textarea
                                            required
                                            name="availability"
                                            rows={4}
                                            placeholder="Indicate when you are interested in playing..."
                                            style={{
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                color: 'white',
                                                outline: 'none',
                                                resize: 'none'
                                            }}
                                        />
                                    </div>
                                    <div style={{ gridColumn: 'span 2', marginTop: '1rem' }}>
                                        <button
                                            type="submit"
                                            style={{
                                                width: '100%',
                                                padding: '1.2rem',
                                                background: 'var(--accent)',
                                                color: 'black',
                                                border: 'none',
                                                borderRadius: '8px',
                                                fontWeight: '800',
                                                fontSize: '1rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '0.8rem',
                                                transition: 'transform 0.2s ease, background 0.2s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.filter = 'brightness(1.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.filter = 'brightness(1)';
                                            }}
                                        >
                                            <Send size={18} />
                                            Submit Inquiry
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div style={{
                                    padding: '4rem 2rem',
                                    background: 'rgba(255,255,255,0.02)',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    animation: 'fadeIn 0.5s ease'
                                }}>
                                    <CheckCircle size={60} color="var(--accent)" />
                                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', margin: 0 }}>Inquiry Sent!</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', margin: 0 }}>
                                        Thank you for your interest. We'll review your music and get back to you soon.
                                    </p>
                                    <button
                                        onClick={() => setFormSubmitted(false)}
                                        style={{
                                            background: 'transparent',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: 'white',
                                            padding: '0.8rem 2rem',
                                            borderRadius: '50px',
                                            cursor: 'pointer',
                                            marginTop: '1rem'
                                        }}
                                    >
                                        Send Another
                                    </button>
                                </div>
                            )}

                            <p style={{
                                marginTop: '2.5rem',
                                fontSize: '0.85rem',
                                color: 'rgba(255,255,255,0.3)',
                                fontStyle: 'italic'
                            }}>
                                *This form is specifically for band inquiries, not reservations.
                            </p>
                        </div>
                    </div>

                    <style jsx>{`
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(10px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        @media (max-width: 768px) {
                            .event-list-item { flexDirection: column !important; align-items: center !important; text-align: center !important; min-height: auto !important; }
                            .event-list-item > div { width: 100% !important; border: none !important; padding: 1.5rem !important; }
                            .event-list-item > div:first-child { border-bottom: 1px solid #eee !important; }
                            .event-list-item > div:last-child { padding-top: 0 !important; }
                            form { grid-template-columns: 1fr !important; }
                            form > div { grid-column: span 1 !important; }
                        }
                    `}</style>
                </div>
            </div>
        </div>
    );
}
