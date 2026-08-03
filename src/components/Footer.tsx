import { Phone, MapPin, Clock, Instagram, Facebook, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { SALON, NAV_LINKS, SERVICES } from '@/data/salon';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-matte pt-20 pb-8 text-white/70">
      <div className="absolute inset-0 bg-grain opacity-20" />
      <div className="container-luxury relative">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#home" className="group flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-matte">
                <span className="font-display text-xl font-bold">P</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold text-white">Passion Look</span>
                <span className="text-[10px] uppercase tracking-widest text-gold/80">
                  Men's & Women's · Since 1999
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              A premium salon crafting luxury grooming and beauty experiences for men and women
              in Lahore since 1999.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: SALON.socials.instagram, label: 'Instagram' },
                { Icon: Facebook, href: SALON.socials.facebook, label: 'Facebook' },
                { Icon: Twitter, href: SALON.socials.twitter, label: 'Twitter' },
                { Icon: Youtube, href: SALON.socials.youtube, label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-matte"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.name}>
                  <a
                    href="#services"
                    className="link-underline text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Get in Touch</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-gold" />
                <span className="text-white/60">
                  {SALON.address.line1} {SALON.address.line2} {SALON.address.line3} {SALON.address.line4}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-none text-gold" />
                <a href={`tel:${SALON.phoneIntl}`} className="text-white/60 hover:text-gold">
                  {SALON.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-none text-gold" />
                <span className="text-white/60">{SALON.hours}</span>
              </li>
            </ul>
            <a href="#book" className="btn-gold mt-6 !px-6 !py-2.5 !text-xs">
              Book Appointment
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-white/45 sm:text-left">
            © {new Date().getFullYear()} Passion Look | Men's & Women's Salon Since 1999. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 transition-colors hover:text-gold"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:bg-gold hover:text-matte">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
