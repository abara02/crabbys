import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section style={{
            position: 'relative',
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            color: 'white',
            textAlign: 'center'
        }}>
            {/* Background Image Placeholder or Generated Image */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(\'/crabbyhero.jpg\')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'var(--primary)'
            }}>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                <h1 style={{
                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 900,
                    color: 'white',
                    marginBottom: '1rem',
                    textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    letterSpacing: '4px',
                    textTransform: 'uppercase'
                }}>
                    CRABBY AL&apos;S
                </h1>
                <p style={{
                    fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
                    color: 'var(--white)',
                    marginBottom: '3rem',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    opacity: 0.95,
                    fontFamily: 'var(--font-main)',
                    fontWeight: 700,
                    textShadow: '0 5px 15px rgba(0,0,0,0.3)'
                }}>
                    157 East Main Street, Thomaston, CT
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href="/menu" className="btn-primary" style={{ padding: '1.2rem 3.5rem', fontSize: '1.2rem', borderRadius: '50px', fontWeight: 800 }}>
                        Explore Our Menu
                    </Link>
                </div>
            </div>
        </section>
    );
}
