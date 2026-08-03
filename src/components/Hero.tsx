import { ArrowRight, Star } from 'lucide-react';
import { SALON } from '@/data/salon';

const HERO_IMG = '/images/P7.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-matte">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Passion Look salon — luxury grooming since 1999"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-matte/80 via-matte/55 to-matte/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-matte/70 to-transparent" />
      </div>

      <div className="container-luxury relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="animate-fade-down mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-matte/30 px-5 py-2 backdrop-blur-sm">
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/90">
              {SALON.rating} / 5 · {SALON.reviewCount} Reviews
            </span>
          </div>

          <p className="animate-fade-up mb-5 text-sm font-semibold uppercase tracking-widest text-gold">
            {SALON.tagline}
          </p>

          <h1 className="animate-fade-up text-balance font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Luxury Grooming
            <br />
            <span className="gold-shimmer">Experience</span> Since 1999
          </h1>

          <p
            className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-white/80"
            style={{ animationDelay: '0.15s' }}
          >
            Premium hair styling, grooming, beauty, and self-care services for men and women —
            delivered by experienced professionals in a relaxing and elegant environment.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '0.3s' }}
          >
            <a href="#book" className="btn-gold group">
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn-outline group">
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div
            className="animate-fade-up mt-14 flex flex-wrap items-center gap-x-10 gap-y-4"
            style={{ animationDelay: '0.45s' }}
          >
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl font-semibold text-gold">25+</span>
              <span className="text-xs uppercase tracking-widest text-white/70">
                Years of
                <br />
                Excellence
              </span>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl font-semibold text-gold">18</span>
              <span className="text-xs uppercase tracking-widest text-white/70">
                Signature
                <br />
                Services
              </span>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl font-semibold text-gold">10k+</span>
              <span className="text-xs uppercase tracking-widest text-white/70">
                Happy
                <br />
                Clients
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold" />
        </span>
      </div>
    </section>
  );
}
