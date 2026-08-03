import { useEffect, useMemo, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import LazyImage from '@/components/ui/LazyImage';
import { GALLERY, GALLERY_CATEGORIES, type GalleryItem } from '@/data/salon';

export default function Gallery() {
  const [active, setActive] = useState<(typeof GALLERY_CATEGORIES)[number]>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered: GalleryItem[] = useMemo(() => {
    if (active === 'All') return GALLERY;
    return GALLERY.filter((g) => g.category === active);
  }, [active]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((p) => (p === null ? null : (p + 1) % filtered.length));
      if (e.key === 'ArrowLeft') setLightbox((p) => (p === null ? null : (p - 1 + filtered.length) % filtered.length));
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, filtered.length]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-beige py-24 lg:py-32">
      <div className="container-luxury relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-8 bg-gold" />
            Our Gallery
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="section-title text-balance">
            Moments of <span className="gold-text-gradient">Craftsmanship</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-matte/70">
            A glimpse into the artistry, atmosphere, and results that define Passion Look.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  active === cat
                    ? 'bg-matte text-gold shadow-soft'
                    : 'bg-white text-matte/60 hover:bg-matte hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filtered.map((item, i) => (
            <Reveal key={`${item.src}-${i}`} delay={(i % 3) as 0 | 1 | 2} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-3xl shadow-soft"
                aria-label={`View ${item.alt}`}
              >
                <LazyImage
                  src={item.src}
                  alt={item.alt}
                  aspect={i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}
                  className="w-full rounded-3xl"
                  imgClassName="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte/80 via-matte/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                    {item.category}
                  </span>
                  <p className="mt-1 font-display text-lg text-white">{item.alt}</p>
                </div>
                <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gold/90 text-matte opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-matte/95 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-gold hover:text-matte"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p === null ? null : (p - 1 + filtered.length) % filtered.length));
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-gold hover:text-matte sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-luxury"
            />
            <figcaption className="mt-4 text-center">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                {filtered[lightbox].category}
              </span>
              <p className="mt-1 text-sm text-white/80">{filtered[lightbox].alt}</p>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p === null ? null : (p + 1) % filtered.length));
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-gold hover:text-matte sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
