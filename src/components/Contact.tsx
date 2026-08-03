import { Phone, MessageCircle, MapPin, Navigation, Clock, Mail } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { SALON } from '@/data/salon';

const MAPS_QUERY = encodeURIComponent(
  'Butt Chowk, Tajpura Scheme Road, Near Jawa Sweet, Ghaziabad, Lahore 54000'
);
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

export default function Contact() {
  const whatsappLink = `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(
    "Hello Passion Look, I'd like to book an appointment."
  )}`;

  return (
    <section id="contact" className="relative overflow-hidden bg-beige py-24 lg:py-32">
      <div className="container-luxury relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-8 bg-gold" />
            Visit Us
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="section-title text-balance">
            Find Us in <span className="gold-text-gradient">Lahore</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-matte/70">
            We're open around the clock, ready to welcome you whenever it suits you best.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-black/5 bg-white p-8 shadow-soft sm:p-10">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-beige text-gold">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">Our Address</h3>
                  <address className="mt-2 not-italic leading-relaxed text-matte/80">
                    {SALON.address.line1}<br />
                    {SALON.address.line2}<br />
                    {SALON.address.line3}<br />
                    {SALON.address.line4}
                  </address>
                </div>
              </div>

              <div className="h-px w-full bg-black/5" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-beige text-gold">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">Phone</h3>
                    <a href={`tel:${SALON.phoneIntl}`} className="mt-2 block text-matte/80 hover:text-gold">
                      {SALON.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-beige text-gold">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">Email</h3>
                    <a href={`mailto:${SALON.email}`} className="mt-2 block break-all text-matte/80 hover:text-gold">
                      {SALON.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-black/5" />

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-beige text-gold">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">Business Hours</h3>
                  <p className="mt-2 text-matte/80">{SALON.hours} · Every Day</p>
                </div>
              </div>

              <div className="mt-auto grid gap-3 sm:grid-cols-3">
                <a href={`tel:${SALON.phoneIntl}`} className="btn-gold !px-4 !py-3 !text-[11px]">
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-outline !px-4 !py-3 !text-[11px] !border-gold/50 !text-matte hover:!bg-matte hover:!text-gold">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline !px-4 !py-3 !text-[11px] !border-gold/50 !text-matte hover:!bg-matte hover:!text-gold">
                  <Navigation className="h-4 w-4" /> Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="h-full overflow-hidden rounded-3xl border border-black/5 shadow-soft">
              <iframe
                title="Passion Look location on Google Maps"
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
