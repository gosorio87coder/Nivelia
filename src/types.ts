// src/types.ts
// Tipos “erasables” (no generan runtime). Compatibles con TS estricto.

// ---------- Lead Form ----------
export const VERTICAL_OPTIONS = [
  'Belleza & Wellness',
  'Turismo',
  'Retail',
  'Salud',
  'Restaurantes',
  'Educación',
] as const;
export type Vertical = typeof VERTICAL_OPTIONS[number];

export const MONTHLY_VOLUME_OPTIONS = [
  'Inicio',
  '1k–5k',
  '5k–20k',
  '20k–50k',
  '50k+',
] as const;
export type MonthlyVolume = typeof MONTHLY_VOLUME_OPTIONS[number];

export interface FormData {
  name: string;
  company: string;
  role: string;
  email: string;
  whatsapp: string;
  vertical: Vertical;
  volume: MonthlyVolume;
  painPoint: string;
  acceptPolicies: boolean;
}

// ---------- Agenda/Servicios (opcionales) ----------
export interface Service {
  id: number;
  name: string;
  description?: string;
  price: number;        // en tu moneda base
  duration: number;     // minutos
}

export interface Location {
  id: number;
  name: string;
  address: string;
}

export interface BookingDetails {
  name: string;
  email: string;
  phone: string;
  dni?: string;
}

// Paso del flujo (union en vez de enum)
export type AppStep =
  | 0 // DIAGNOSIS
  | 1 // SERVICE_SELECTION
  | 2 // LOCATION_DATA
  | 3 // DATE_TIME
  | 4 // CONFIRMATION
;

// ---------- Utilidades ----------
export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

