// src/pages/HomePage.tsx
import { useState, useEffect, type MouseEvent } from 'react';
import { CheckIcon, ScopeIcon, SnapIcon, ShipIcon, ScaleIcon } from '../constants/icons';
import SurveyComponent, { type SurveyQuestion } from '../components/SurveyComponent';

const HomePage = () => {
  const solutionsData = {
    Consultorios: [
      { title: 'Agenda Inteligente', description: 'Recordatorios por WhatsApp/mail. Confirmación, cobro de reserva y lista de espera.' },
      { title: 'Gestión de ocupación', description: 'Promos automáticas en tus horarios con menor demanda, sobrecupos en los picos.' },
      { title: 'Atracción y fidelización', description: 'Implementa un embudo de ventas de alta concreción. Gestiona pacientes: referidos, satisfacción, recompra.' },
    ],
    Turismo: [
      { title: 'Gestión de producto', description: 'Automatiza el armado de paquetes a vender. Elige tus proveedores con visibilidad de margen y conveniencia. Prueba y valida rápido las preferencias de tu público.' },
      { title: 'Asistente IA 24/7', description: 'Responde preguntas frecuentes, filtra interesados y arma una primera propuesta a cualquier hora.' },
      { title: 'Visibilidad comercial', description: 'Revisa tu embudo completo (de consulta a venta), costos y margen real por canal y por cliente.' },
    ],
    Retail: [
      { title: 'Gestión postventa', description: 'Mensajes post-compra, recordatorios y "te extrañamos" que vuelven a activar clientes.' },
      { title: 'Conoce tu cliente', description: 'Medimos cada cuánto vuelven tus clientes y cuánto gastan por categoría y canal.' },
      { title: 'Publicidad Inteligente', description: 'Unimos anuncios, ventas y costos (producto, empaque, reparto) para ver qué campañas dejan dinero de verdad.' },
    ],
  } as const;

  const processSteps = [
    {
      icon: <ScopeIcon className="h-10 w-10 text-indigo-600" />,
      name: '1. Exploración',
      description: 'Vemos en qué etapa está el negocio, que datos debemos construir o medir para poder obtener la línea base.',
    },
    {
      icon: <SnapIcon className="h-10 w-10 text-indigo-600" />,
      name: '2. Alcance',
      description: 'Definimos el indicador a impactar y el alcance del proyecto.',
    },
    {
      icon: <ShipIcon className="h-10 w-10 text-indigo-600" />,
      name: '3. Lanzamiento',
      description: 'Lanzamos prototipo funcional en 3-4 semanas.',
    },
    {
      icon: <ScaleIcon className="h-10 w-10 text-indigo-600" />,
      name: '4. Iteración y Expansión',
      description: 'Iteramos y expandimos la solución con base a resultados.',
    },
  ] as const;

  const techStack = ['OpenAI', 'Google Studio', 'Kommo', 'n8n', 'Hostinger', 'Google Cloud', 'PostgreSQL', 'Bitrix24'] as const;

  const faqs = [
    {
      question: '¿En cuánto tiempo veré resultados?',
      answer: 'Nuestro proceso está diseñado para entregar un MVP funcional en un sprint de 14 días. El impacto en utilidades o KPIs clave se suele ver dentro de los primeros 30 días post-lanzamiento.',
    },
    {
      question: '¿Necesito tener un equipo técnico?',
      answer: 'No necesariamente. Nos encargamos de todo el desarrollo e implementación. Te entregamos una solución "llave en mano" y capacitamos a tu equipo para que puedan usarla sin conocimientos técnicos.',
    },
    {
      question: '¿Qué costo tienen sus soluciones?',
      answer: 'Cada proyecto es a medida. Tras la llamada de diagnóstico, te entregamos una propuesta cerrada con el alcance, cronograma y costo total. Nuestros proyectos suelen tener un ROI de 3x a 10x en el primer año.',
    },
    {
      question: '¿Soy dueño del código y la data?',
      answer: 'Sí. Al finalizar el proyecto, te entregamos el 100% del código fuente, accesos y toda la documentación. Creemos en empoderar a nuestros clientes, no en atarlos a nosotros.',
    },
  ] as const;

  const surveyQuestions: SurveyQuestion[] = [
    { id: 'rubro', text: '¿Cuál es tu rubro?', type: 'single-choice-other', options: ['Consultorio / Wellness', 'Turismo', 'Ventas por mayor/menor', 'Otro'] },
    { id: 'tiempo_negocio', text: '¿Cuánto tiempo tiene el negocio?', type: 'single-choice', options: ['Menos de 1 Año', 'Entre 1 y 3 Años', 'Más de 3 Años'] },
    { id: 'cantidad_equipo', text: '¿Cantidad de equipo?', type: 'single-choice', options: ['Sólo yo', '2 a 5', '5 a 12', '12 a 20', 'Más de 20'] },
    { id: 'nivel_ventas', text: 'Nivel de Ventas/mes', type: 'single-choice', options: ['Hasta 20K soles /mes', '21 a 60K soles /mes', '61 a 100K soles /mes', 'Más de 100K soles /mes'] },
    { id: 'descripcion_negocio', text: '¿A qué se dedica tu negocio con precisión?', type: 'text' },
    { id: 'social_media_web', text: 'Déjanos el link de tu web y/o redes sociales', type: 'textarea' },
    {
      id: 'identificacion',
      text: '¿Con qué enunciado te identificas más?',
      type: 'single-choice',
      options: [
        'Mi negocio anda bien y quiero explorar que herramientas de IA puedo usar para ser más eficiente o crecer más',
        'Mi negocio va cada vez peor y quiero entender si herramientas de IA pueden ayudarme a resurgir',
        'Tengo claridad de mi problema y busco alternativas de solución',
        'Mi negocio genera utilidad pero tengo poco control, y quiero entender la mejor forma de escalar',
      ],
    },
    { id: 'principal_dolor', text: '¿Cuál es tu principal dolor (expláyate)?', type: 'textarea' },
  ];

  const [contactStep, setContactStep] = useState<'initial' | 'survey' | 'schedule'>('initial');
  const [activeSolutionTab, setActiveSolutionTab] = useState<keyof typeof solutionsData>('Consultorios');

  useEffect(() => {
    const handleStartDiagnosisEvent = () => setContactStep('survey');
    window.addEventListener('startNiveliaDiagnosis', handleStartDiagnosisEvent);
    return () => window.removeEventListener('startNiveliaDiagnosis', handleStartDiagnosisEvent);
  }, []);

  const handleStartDiagnosisClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setContactStep('survey');
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSurveyComplete = (answers: Record<string, string>) => {
    // Si más adelante quieres usar las respuestas, puedes guardarlas en estado.
    // Por ahora solo avanzamos de paso y registramos en consola.
    setContactStep('schedule');
    console.log('Survey Answers:', answers);
  };

  const subtitles: Record<keyof typeof solutionsData, string> = {
    Consultorios: 'Belleza y Wellness',
    Turismo: 'Agencias de viaje',
    Retail: 'Minorista y mayorista',
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              IA & Datos que aumentan
              <br />
              <span className="text-indigo-600">utilidades en 30 días</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto font-bold">
              Convertimos los datos de tu negocio en tu activo más rentable.
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-center text-lg text-gray-700">
                <CheckIcon className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                Agentes IA para WhatsApp/Email que responden en &lt;2 min.
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <CheckIcon className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                Embudos y sistemas de venta de alta productividad.
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <CheckIcon className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                Control de gestión: pricing, inventarios, compras, campañas promocionales y más.
              </li>
            </ul>
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contacto"
              onClick={handleStartDiagnosisClick}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Agendar diagnóstico de 30 min
            </a>
            <p className="mt-4 text-sm text-gray-500">Sin costo, sin compromiso.</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluciones" className="bg-gray-50 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900">Soluciones a la medida de tu negocio</h2>
            <p className="mt-4 text-lg text-gray-600">{subtitles[activeSolutionTab]}</p>
          </div>

          <div className="mt-10 flex justify-center border-b border-gray-200">
            <div className="flex space-x-2 sm:space-x-4" aria-label="Tabs">
              {(Object.keys(solutionsData) as Array<keyof typeof solutionsData>).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSolutionTab(tab)}
                  className={`${
                    activeSolutionTab === tab
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 sm:px-4 border-b-2 font-medium text-sm sm:text-base transition-colors`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200" aria-hidden="true" />
              <div className="space-y-12">
                {solutionsData[activeSolutionTab].map((item, index) => (
                  <div key={index} className="pl-12 relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-1/2">
                      <div className="w-4 h-4 rounded-full bg-indigo-600 ring-8 ring-gray-50" />
                    </div>
                    <div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {item.title}
                      </span>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="#contacto"
              onClick={handleStartDiagnosisClick}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Empieza HOY
            </a>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="como-trabajamos" className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Nuestro Proceso Nivelia</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Metodología que busca entregar valor medible rápidamente.</p>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.name} className="text-center">
                <div className="flex items-center justify-center h-20 w-20 mx-auto bg-indigo-100 rounded-full">
                  {step.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{step.name}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Stack Tecnológico y Seguridad</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Usamos herramientas robustas y probadas para garantizar resultados y seguridad.</p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
            {techStack.map((tech) => (
              <div key={tech} className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Preguntas Frecuentes</h2>
          </div>
          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6 bg-gray-50 rounded-lg border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <span className="ml-4 transition-transform duration-300 group-open:rotate-45">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="bg-gray-100 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl">
            {contactStep === 'initial' && (
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Agenda tu diagnóstico</h2>
                <div className="mt-8 text-left space-y-6 max-w-md mx-auto">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">1</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Responde las preguntas</h3>
                      <p className="text-gray-600">Descubre si podemos ayudarte.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">2</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Agenda una llamada (30 min)</h3>
                      <p className="text-gray-600">Exploremos más profundo.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">3</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Te enviamos la propuesta</h3>
                      <p className="text-gray-600">Un plan a medida para tu negocio.</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setContactStep('survey')}
                  className="mt-10 inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  Empezar Diagnóstico
                </button>
              </div>
            )}

            {contactStep === 'survey' && (
              <SurveyComponent questions={surveyQuestions} onComplete={handleSurveyComplete} />
            )}

            {contactStep === 'schedule' && (
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">¡Excelente! Paso Final: Agenda tu Llamada</h2>
                <p className="mt-3 text-lg text-gray-600 mb-8">
                  Reserva confirmada, estamos muy interesados en escuchar sobre tu negocio para poder ayudarte.
                </p>
                <div className="min-h-[700px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://calendly.com/gonzalo-osorio-asnivel/30min"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ minHeight: '700px', border: 'none' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
