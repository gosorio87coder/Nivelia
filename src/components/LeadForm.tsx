import { useState, type FormEvent, type ChangeEvent } from 'react';
import type { FormData, Vertical, MonthlyVolume } from '../types';
import { VERTICAL_OPTIONS, MONTHLY_VOLUME_OPTIONS } from '../types';

interface LeadFormProps {
  source: string;
  onSuccess?: () => void;
}

const LeadForm = ({ source, onSuccess }: LeadFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    role: '',
    email: '',
    whatsapp: '',
    vertical: 'Turismo',          // ✅ string union, no enum
    volume: 'Inicio',              // ✅ string union, no enum
    painPoint: '',
    acceptPolicies: false,
  });

  const [status, setStatus] =
    useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, type } = e.target;
    const value =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : (e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).value;

    setFormData(prev => ({ ...prev, [name]: value } as FormData));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.acceptPolicies) {
      setStatus('error');
      setMessage('Debes aceptar las políticas de privacidad.');
      return;
    }
    setStatus('loading');
    await new Promise(r => setTimeout(r, 1500));
    console.log('Form submitted:', { ...formData, source });
    setStatus('success');
    setMessage('¡Formulario enviado con éxito!');
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input name="name" placeholder="Nombre completo" required
               className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
               value={formData.name} onChange={handleChange} />

        <input name="company" placeholder="Empresa / Marca" required
               className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
               value={formData.company} onChange={handleChange} />

        <input name="role" placeholder="Cargo" required
               className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
               value={formData.role} onChange={handleChange} />

        <input type="email" name="email" placeholder="Email" required
               className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
               value={formData.email} onChange={handleChange} />

        <input type="tel" name="whatsapp" placeholder="WhatsApp (con cód. país)" required
               className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
               value={formData.whatsapp} onChange={handleChange} />

        <select name="vertical" required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                value={formData.vertical} onChange={handleChange}>
          {VERTICAL_OPTIONS.map(v => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>

        <div className="md:col-span-2">
          <select name="volume" required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  value={formData.volume} onChange={handleChange}>
            {MONTHLY_VOLUME_OPTIONS.map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <textarea name="painPoint" rows={4}
                    placeholder="Principal dolor o desafío que buscas resolver" required
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.painPoint} onChange={handleChange} />
        </div>
      </div>

      <div className="flex items-start">
        <input id="acceptPolicies" name="acceptPolicies" type="checkbox"
               className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               checked={formData.acceptPolicies} onChange={handleChange} />
        <label htmlFor="acceptPolicies" className="ml-3 text-sm font-medium text-gray-700">
          Acepto las políticas de privacidad
        </label>
      </div>

      {status === 'error' && <p className="text-sm text-red-600">{message}</p>}

      <button type="submit" disabled={status === 'loading'}
              className="w-full flex justify-center py-3 px-4 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed">
        {status === 'loading' ? 'Enviando...' : 'Enviar y continuar al Paso 2'}
      </button>
    </form>
  );
};

export default LeadForm;
