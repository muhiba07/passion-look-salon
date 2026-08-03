import { useState, type FormEvent } from 'react';
import { Calendar, Clock, Mail, Phone, User, MessageSquare, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { SERVICES, TIME_SLOTS } from '@/data/salon';
import { submitAppointment } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const today = new Date().toISOString().split('T')[0];

export default function BookingForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    email: '',
    service: '',
    preferred_date: '',
    preferred_time: '',
    notes: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      await submitAppointment(form);
      setStatus('success');
      setForm({
        full_name: '', phone: '', email: '', service: '',
        preferred_date: '', preferred_time: '', notes: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please call us.');
    }
  };

  if (status === 'success') {
    return (
      <section id="book" className="relative overflow-hidden bg-matte py-24 lg:py-32">
        <div className="absolute inset-0 bg-grain opacity-30" />
        <div className="container-luxury relative">
          <Reveal className="mx-auto max-w-xl text-center">
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 text-gold animate-scale-in">
              <CheckCircle2 className="h-10 w-10" />
            </span>
            <h2 className="mt-8 font-display text-4xl font-semibold text-white sm:text-5xl">
              Booking Confirmed
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Thank you for choosing Passion Look. Our team will reach out shortly to confirm your
              appointment details. We can't wait to welcome you.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="btn-gold mt-10"
            >
              Book Another Appointment
            </button>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="relative overflow-hidden bg-matte py-24 lg:py-32">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-luxury relative">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-gold" />
              Book an Appointment
            </span>
            <h2 className="section-title-light text-balance">
              Reserve Your <span className="gold-shimmer">Experience</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Share a few details and our concierge will confirm your booking. Prefer to talk?
              Call us directly — we're open 24 hours.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">Call us anytime</p>
                  <a href="tel:+923214356844" className="font-display text-xl text-white hover:text-gold">
                    0321 4356844
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">Business Hours</p>
                  <p className="font-display text-xl text-white">Open 24 Hours · 7 Days</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" icon={<User className="h-4 w-4" />}>
                  <input
                    required
                    type="text"
                    value={form.full_name}
                    onChange={(e) => update('full_name', e.target.value)}
                    placeholder="Your name"
                    className="input-luxury"
                  />
                </Field>
                <Field label="Phone Number" icon={<Phone className="h-4 w-4" />}>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="03xx xxxxxxx"
                    className="input-luxury"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Email Address" icon={<Mail className="h-4 w-4" />}>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@email.com"
                    className="input-luxury"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Select Service" icon={<MessageSquare className="h-4 w-4" />}>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                    className="input-luxury appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.name} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Preferred Date" icon={<Calendar className="h-4 w-4" />}>
                  <input
                    required
                    type="date"
                    min={today}
                    value={form.preferred_date}
                    onChange={(e) => update('preferred_date', e.target.value)}
                    className="input-luxury"
                  />
                </Field>
                <Field label="Preferred Time" icon={<Clock className="h-4 w-4" />}>
                  <select
                    required
                    value={form.preferred_time}
                    onChange={(e) => update('preferred_time', e.target.value)}
                    className="input-luxury appearance-none"
                  >
                    <option value="" disabled>Select a time</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Additional Notes" icon={<MessageSquare className="h-4 w-4" />}>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    placeholder="Any preferences or requests..."
                    className="input-luxury resize-none"
                  />
                </Field>
              </div>

              {status === 'error' && (
                <div className="mt-5 flex items-center gap-2 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  <AlertCircle className="h-4 w-4 flex-none" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-gold mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Securing your appointment...
                  </>
                ) : (
                  'Confirm Appointment'
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <style>{`
        .input-luxury {
          width: 100%;
          border-radius: 0.875rem;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          padding: 0.75rem 1rem;
          color: #fff;
          font-size: 0.95rem;
          transition: border-color 0.3s, background 0.3s;
        }
        .input-luxury::placeholder { color: rgba(255,255,255,0.4); }
        .input-luxury:focus {
          outline: none;
          border-color: #D4AF37;
          background: rgba(255,255,255,0.08);
        }
        .input-luxury option { color: #111; background: #fff; }
      `}</style>
    </section>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60">
        <span className="text-gold">{icon}</span>
        {label}
      </span>
      {children}
    </label>
  );
}
