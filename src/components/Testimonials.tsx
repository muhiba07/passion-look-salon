import { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { TESTIMONIALS, SALON } from '@/data/salon';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % count), 6000);
    return () => clearInterval(id);
  }, [paused, count]);

  const go = (dir: number) => setIndex((p) => (p + dir + count) % count);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="container-luxury relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-8 bg-gold" />
            Client Stories
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="section-title text-balance">
            Loved by <span className="gold-text-gradient">Thousands</span>
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-medium text-matte/70">
              {SALON.rating} / 5 · Based on {SALON.reviewCount} reviews
            </span>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="relative mx-auto mt-14 max-w-4xl">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {TESTIMONIALS.map((t) => (
                  <figure key={t.name} className="w-full flex-none px-2 sm:px-6">
                    <div className="relative rounded-3xl border border-black/5 bg-beige p-8 text-center shadow-soft sm:p-12">
                      <Quote className="mx-auto h-10 w-10 text-gold/40" />
                      <blockquote className="mt-6 font-display text-xl leading-relaxed text-matte/85 sm:text-2xl">
                        "{t.quote}"
                      </blockquote>
                      <div className="mt-6 flex justify-center">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                        ))}
                      </div>
                      <figcaption className="mt-6 flex items-center justify-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-matte font-display text-sm font-semibold text-gold">
                          {t.initials}
                        </span>
                        <div className="text-left">
                          <p className="font-semibold text-matte">{t.name}</p>
                          <p className="text-xs uppercase tracking-widest text-matte/50">{t.role}</p>
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute -left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-matte shadow-soft transition-all hover:bg-matte hover:text-gold sm:-left-5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute -right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-matte shadow-soft transition-all hover:bg-matte hover:text-gold sm:-right-5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-10 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-gold' : 'w-2 bg-matte/20 hover:bg-matte/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
