
import React from 'react';
import { Link } from 'react-router-dom';

const CasesPage: React.FC = () => {
  const cases = [
    {
      vertical: 'Turismo',
      title: 'Agente de Reservas IA incrementa el show-rate en un 22%',
      metric: '+22% Citas Asistidas',
      description: 'Implementamos un agente de WhatsApp conectado al sistema de reservas que confirmaba, recordaba y resolvía dudas 24/7. El resultado fue una reducción drástica de no-shows y un aumento del 22% en la asistencia a tours en los primeros 30 días.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      vertical: 'Retail',
      title: 'Dashboard de Rentabilidad revela un ROAS real y mejora márgenes',
      metric: 'Margen por Venta +15%',
      description: 'Conectamos Shopify, Google Ads y los datos de costos de producto en un dashboard de Metabase. El cliente pudo visualizar por primera vez el ROAS real por campaña, optimizar la inversión y mejorar el margen por venta en un 15%.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      vertical: 'Salud & Wellness',
      title: 'Automatización de Citas reduce no-shows en un 40%',
      metric: '↓ 40% No-Shows',
      description: 'Un sistema de confirmación y prepago automático vía WhatsApp y email para un spa de lujo. Se redujeron las citas no presentadas en un 40% y se mejoró el flujo de caja al asegurar un porcentaje del pago por adelantado.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Casos de Éxito
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Resultados reales que hemos generado para nuestros clientes.
          </p>
        </div>

        <div className="mt-20 space-y-24">
          {cases.map((study, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="lg:w-1/2">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                    <img src={`https://picsum.photos/seed/${study.vertical}/800/450`} alt={study.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase">{study.vertical}</span>
                <p className="mt-4 text-3xl font-bold text-indigo-600">{study.metric}</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">{study.title}</h2>
                <p className="mt-4 text-lg text-gray-600">{study.description}</p>
                 <div className="mt-6">
                   <a href="#contacto" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                    Ver cómo podemos ayudarte &rarr;
                  </a>
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
            <Link to="/" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Volver al Inicio
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CasesPage;