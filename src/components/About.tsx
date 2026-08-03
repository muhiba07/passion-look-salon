import { Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import LazyImage from '@/components/ui/LazyImage';
import { SALON } from '@/data/salon';

const ABOUT_POINTS = [
  'Established in 1999 with over two decades of expertise',
  'Experienced, professionally trained stylists and barbers',
  'Premium grooming experience tailored to every guest',
  'Modern techniques paired with time-honoured craftsmanship',
  'A warm, friendly, and welcoming environment',
  'Strict hygiene standards with sanitised tools',
  'Personalised consultations for every service',
  'Unwavering dedication to customer satisfaction',
];

const ABOUT_IMG_1 = '/images/P_13.jpg';
const ABOUT_IMG_2 = '/images/P_9.jpg';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-beige py-24 lg:py-32">
      <div className="container-luxury">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative grid grid-cols-2 gap-5">
              <div className="mt-10">
                <LazyImage
                  src={ABOUT_IMG_1}
                  alt="Groom in golden sherwani — Passion Look"
                  aspect="aspect-[3/4]"
                  className="w-full rounded-3xl shadow-luxury"
                />
              </div>
              <div>
                <LazyImage
                  src={ABOUT_IMG_2}
                  alt="Passion Look salon interior"
                  aspect="aspect-[3/4]"
                  className="w-full rounded-3xl shadow-luxury"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl border border-gold/30 bg-white px-7 py-4 text-center shadow-luxury">
                <span className="block font-display text-3xl font-semibold text-matte">
                  Since {SALON.established}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold">
                  A Legacy of Style
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="section-eyebrow">
                <span className="h-px w-8 bg-gold" />
                About Passion Look
              </span>
              <h2 className="section-title text-balance">
                Where Heritage Meets <span className="gold-text-gradient">Modern Luxury</span>
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <p className="mt-6 text-lg leading-relaxed text-matte/75">
                Since opening our doors in 1999, Passion Look has been Lahore's destination for
                refined grooming and beauty. We bring together skilled professionals, a welcoming
                atmosphere, and an uncompromising commitment to customer service — crafting an
                experience that feels less like an appointment and more like a retreat.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-4 leading-relaxed text-matte/70">
                Every detail, from the lighting to the tools in our hands, is chosen to help you
                relax and leave feeling your absolute best. Men and women alike trust us for
                precision, care, and a genuinely premium experience.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {ABOUT_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-snug text-matte/80">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a href="#book" className="btn-gold">
                  Reserve Your Visit
                </a>
                <a href="#services" className="btn-ghost">
                  View Our Services
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
