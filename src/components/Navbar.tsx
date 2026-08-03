import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, SALON } from '@/data/salon';
import { useScrolled } from '@/hooks/useReveal';

export default function Navbar() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-matte/85 shadow-luxury backdrop-blur-xl'
          : 'bg-gradient-to-b from-matte/70 to-transparent'
      }`}
    >
      <nav className="container-luxury flex items-center justify-between py-4 lg:py-5">
        <a href="#home" className="group flex items-center gap-3" aria-label="Passion Look home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold transition-all duration-500 group-hover:rotate-12 group-hover:bg-gold group-hover:text-matte">
            <span className="font-display text-xl font-bold">P</span>
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg font-semibold tracking-wide text-white">
              Passion Look
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gold/80">
              Men's & Women's · Since 1999
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`link-underline text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
                  active === link.href ? 'text-gold' : 'text-white/85 hover:text-gold'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${SALON.phoneIntl}`}
            className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4 text-gold" />
            {SALON.phone}
          </a>
          <a href="#book" className="btn-gold !px-6 !py-2.5 !text-xs">
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-matte lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } transition-opacity duration-400`}
      >
        <div className="mx-4 mb-4 rounded-3xl border border-gold/20 bg-matte/95 p-6 shadow-luxury backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-widest transition-colors ${
                    active === link.href ? 'bg-gold/15 text-gold' : 'text-white/85 hover:bg-white/5 hover:text-gold'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="btn-gold mt-4 w-full"
          >
            Book Appointment
          </a>
          <a
            href={`tel:${SALON.phoneIntl}`}
            className="mt-3 flex items-center justify-center gap-2 text-sm text-white/70"
          >
            <Phone className="h-4 w-4 text-gold" />
            {SALON.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
