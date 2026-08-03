import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import { FEATURES, STATS } from '@/data/salon';
import { useCountUp } from '@/hooks/useReveal';

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: count } = useCountUp(value);
  return (
    <div className="text-center">
      <span ref={ref} className="block font-display text-5xl font-semibold text-gold lg:text-6xl">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-2 block text-xs uppercase tracking-widest text-white/70">{label}</span>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-matte py-24 lg:py-32">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-luxury relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-8 bg-gold" />
            Why Choose Us
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="section-title-light text-balance">
            The Passion Look <span className="gold-shimmer">Difference</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Eight reasons our clients keep coming back — and why they trust us with their look.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.06] hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-matte">
                  <Icon name={feature.icon} className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-20 grid grid-cols-2 gap-8 rounded-3xl border border-gold/20 bg-white/[0.03] py-12 backdrop-blur-sm lg:grid-cols-4">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
