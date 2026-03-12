import CarouselGallery from '@/components/CarouselGallery';

const GALLERY_IMAGES = [
  '/gallery/bar_interior_new.jpg',
  '/gallery/bar_view_wide.jpg',
  '/gallery/beer taps.jpeg',
  '/gallery/drinks hero.png',
  '/gallery/eventhero.png',
  '/gallery/front.webp',
  '/gallery/bar crowd crab.png',
  '/gallery/crab crowd.png',
  '/gallery/interior_1.jpg',
  '/gallery/interior_2.jpg'
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
