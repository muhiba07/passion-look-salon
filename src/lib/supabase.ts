import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type AppointmentInsert = {
  full_name: string;
  phone: string;
  email: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
  notes?: string;
};

export async function submitAppointment(data: AppointmentInsert) {
  const { error } = await supabase.from('appointments').insert(data);
  if (error) throw error;
  return true;
}
