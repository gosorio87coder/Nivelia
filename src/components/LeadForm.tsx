import React, { useState, FormEvent } from 'react';
import { FormData, Vertical, MonthlyVolume } from '../types';

interface LeadFormProps {
    source: string;
    onSuccess?: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ source, onSuccess }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        company: '',
        role: '',
        email: '',
        whatsapp: '',
        vertical: Vertical.TURISMO,
        volume: MonthlyVolume.INICIO,
        painPoint: '',
        acceptPolicies: false,
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!formData.acceptPolicies) {
            setStatus('error');
            setMessage('Debes aceptar las políticas de privacidad.');
            return;
        }
        setStatus('loading');
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('Form submitted:', { ...formData, source });
        
        // Mock success
        setStatus('success');
        setMessage('¡Formulario enviado con éxito!');
        if(onSuccess) {
            onSuccess();
        }
        
        // To mock an error, uncomment below
        // setStatus('error');
        // setMessage('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Nombre completo" required className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={formData.name} onChange={handleChange} />
                <input type="text" name="company" placeholder="Empresa / Marca" required className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={formData.company} onChange={handleChange} />
                <input type="text" name="role" placeholder="Cargo" required className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={formData.role} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" required className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={formData.email} onChange={handleChange} />
                <input type="tel" name="whatsapp" placeholder="WhatsApp (con cód. país)" required className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={formData.whatsapp} onChange={handleChange} />
                <select name="vertical" required className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white" value={formData.vertical} onChange={handleChange}>
                    {Object.values(Vertical).map(v => <option key={v} value={v}>{v}</option>)}
                </select>
                <div className="md:col-span-2">
                    <select name="volume" required className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white" value={formData.volume} onChange={handleChange}>
                        <option disabled value={MonthlyVolume.INICIO}>Volumen mensual de ventas...</option>
                        {Object.values(MonthlyVolume).map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                </div>
                <div className="md:col-span-2">
                    <textarea name="painPoint" rows={4} placeholder="Principal dolor o desafío que buscas resolver" required className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={formData.painPoint} onChange={handleChange}></textarea>
                </div>
            </div>
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="acceptPolicies" name="acceptPolicies" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" checked={formData.acceptPolicies} onChange={handleChange} />
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor="acceptPolicies" className="font-medium text-gray-700">Acepto las políticas de privacidad</label>
                </div>
            </div>

            {status === 'error' && <p className="text-sm text-red-600">{message}</p>}

            <div>
                <button type="submit" disabled={status === 'loading'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed">
                    {status === 'loading' ? 'Enviando...' : 'Enviar y continuar al Paso 2'}
                </button>
            </div>
        </form>
    );
};

export default LeadForm;