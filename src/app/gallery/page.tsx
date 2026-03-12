import CarouselGallery from '@/components/CarouselGallery';

const GALLERY_IMAGES = [
  '/gallery/1.png',
  '/gallery/2.png',
  '/gallery/3.webp',
  '/gallery/4.jpg',
  '/gallery/5.jpg',
  '/gallery/6.jpeg',
  '/gallery/7.png',
  '/gallery/8.jpeg',
  '/gallery/9.png',
  '/gallery/10.png',
  '/gallery/11.jpg',
  '/gallery/12.png',
  '/gallery/13.png'
];

export default function GalleryPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--nav-bg)', paddingTop: 'calc(var(--header-height) + 4rem)' }}>
      {/* Header Section */}
      <div style={{ position: 'relative', textAlign: 'center', marginBottom: '4rem' }}>
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

      {/* Carousel Section */}
      <section className="section" style={{ padding: '0 0 5rem 0' }}>
         <CarouselGallery images={GALLERY_IMAGES} />
      </section>
    </div>
  );
}
