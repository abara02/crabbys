import Image from 'next/image';

const GALLERY_IMAGES = [
  '/gallery/bar_interior_new.jpg',
  '/gallery/bar_view_wide.jpg',
  '/gallery/beer taps.jpeg',
  '/gallery/drinks hero.png',
  '/gallery/eventhero.png',
  '/gallery/front.webp',
  '/gallery/bar crowd crab.png',
  '/gallery/crab crowd.png'
];

export default function GalleryPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Hero Section */}
      <div style={{
        height: '40vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url("/gallery/bar_interior_new.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)',
          zIndex: 0
        }}></div>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 8vw, 4.5rem)',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            marginBottom: '1rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}>
            Gallery
          </h1>
          <div style={{ width: '80px', height: '4px', background: 'var(--accent)', margin: '0 auto' }}></div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            padding: '1rem'
          }}>
            {GALLERY_IMAGES.map((src, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  aspectRatio: '1',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }}
                className="gallery-item"
              >
                <Image
                  src={src}
                  alt={`Crabby Al's Gallery Image ${idx + 1}`}
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div 
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 1
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .gallery-item:hover img {
          transform: scale(1.08);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
