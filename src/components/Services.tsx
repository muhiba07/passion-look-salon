import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import { SERVICES } from '@/data/salon';

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 bg-grain opacity-40" />
      <div className="container-luxury relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-8 bg-gold" />
            Our Signature Services
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="section-title text-balance">
            Crafted for the <span className="gold-text-gradient">Discerning</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-matte/70">
            From precision cuts to indulgent grooming rituals, each service is delivered with
            artistry, care, and the finest products.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={(i % 3) as 0 | 1 | 2}>
              <article className="card-luxury group h-full p-7 hover:-translate-y-2 hover:shadow-luxury hover:border-gold/30">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-beige text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-matte group-hover:scale-110">
                    <Icon name={service.icon} className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <span className="rounded-full bg-beige px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-matte/60">
                    {service.category}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-matte">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-matte/65">
                  {service.description}
                </p>
                <a
                  href="#book"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:gap-3"
                >
                  Book Now
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
