// FIX: Import React to make the React namespace available for types like React.ReactNode.
import React from 'react';

export enum Vertical {
  TURISMO = "Turismo",
  RETAIL = "Retail",
  SALUD_WELLNESS = "Salud / Wellness",
  OTRO = "Otro"
}

export enum MonthlyVolume {
  INICIO = "Estoy empezando",
  BAJO = "< $5,000 / mes",
  MEDIO = "$5,000 - $25,000 / mes",
  ALTO = "> $25,000 / mes"
}

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

export interface StackItem {
  name: string;
  logo: React.ReactNode;
  tooltip: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}