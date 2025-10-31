
import React from 'react';
import LeadForm from '../../components/LeadForm';
import { CheckIcon } from '../../constants/icons';

const ResourcesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase">Lead Magnet</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Checklist de KPIs por Vertical
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Descubre las métricas clave que debes medir para crecer en Turismo, Retail y Salud-Wellness. Deja de navegar a ciegas y empieza a tomar decisiones basadas en datos.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">Métricas de adquisición, conversión y retención.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">Fórmulas y benchmarks de la industria.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">Herramientas recomendadas para cada KPI.</span>
              </li>
            </ul>
             <div className="mt-10">
                <img src="https://picsum.photos/seed/checklist/600/400" alt="Checklist preview" className="rounded-lg shadow-xl" />
             </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Descarga el checklist gratis</h2>
            <p className="text-center text-gray-600 mt-2">Completa el formulario para recibirlo en tu email.</p>
            <div className="mt-8">
              <LeadForm source="Resources Page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
