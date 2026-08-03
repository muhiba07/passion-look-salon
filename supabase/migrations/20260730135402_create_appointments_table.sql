/*
# Create appointments table (single-tenant, no auth)

1. Purpose
- Stores appointment booking requests submitted from the salon website's booking form.
- This is a public-facing marketing site with no sign-in screen, so bookings are submitted anonymously by visitors.

2. New Tables
- `appointments`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — customer's full name
  - `phone` (text, not null) — contact phone number
  - `email` (text, not null) — contact email
  - `service` (text, not null) — selected service name
  - `preferred_date` (date, not null) — requested appointment date
  - `preferred_time` (text, not null) — requested time slot
  - `notes` (text, nullable) — optional additional notes
  - `status` (text, not null, default 'pending') — booking status (pending/confirmed/cancelled)
  - `created_at` (timestamptz, default now()) — submission timestamp

3. Indexes
- Index on `preferred_date` for date-based lookups.
- Index on `created_at` for chronological ordering.

4. Security
- Enable RLS on `appointments`.
- Allow anon + authenticated INSERT so visitors can submit bookings without signing in.
- No SELECT/UPDATE/DELETE for anon (only staff/owners would manage bookings, which is out of scope for this public site).
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_appointments_preferred_date ON appointments (preferred_date);
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments (created_at);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_appointments" ON appointments;
CREATE POLICY "anon_insert_appointments" ON appointments FOR INSERT
  TO anon, authenticated WITH CHECK (true);
