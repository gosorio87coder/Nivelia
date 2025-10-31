
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
    CheckIcon, ExploracionIcon, AlcanceIcon, LanzamientoIcon, IteracionIcon, 
    CalendarIcon, OccupancyIcon, FidelityIcon, ProductIcon, AssistantIcon, 
    VisibilityIcon, PostSaleIcon, CustomerIcon, AdsIcon 
} from '../../constants/icons';
import SurveyComponent, { SurveyQuestion } from '../../components/SurveyComponent';


const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Remove #
      const element = document.getElementById(id);
      if (element) {
        // Use a timeout to ensure the element is rendered on the page
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const solutionsData = {
    Consultorios: [
      { icon: <CalendarIcon />, title: 'Agenda Inteligente', description: 'Reservas automáticas. Recordatorios por whatsapp/mail. Cobros y lista de espera.' },
      { icon: <OccupancyIcon />, title: 'Gestión de ocupación', description: 'Promociones automáticas en horarios de menor demanda. Gestiona sobrecupos en los picos.' },
      { icon: <FidelityIcon />, title: 'Atracción y fidelización', description: 'Implementa un embudo de ventas de alta concreción. Gestiona pacientes referidos, satisfacción, recompra.' },
    ],
    Turismo: [
      { icon: <CalendarIcon />, title: 'Motor de Reservas', description: 'Integración con tu web y canales de venta. Confirmaciones y pagos automáticos 24/7.' },
      { icon: <OccupancyIcon />, title: 'Channel Manager', description: 'Sincroniza tarifas y disponibilidad en tiempo real con Booking, Expedia, Airbnb, etc.' },
      { icon: <FidelityIcon />, title: 'Experiencia del Huésped', description: 'Comunicación automatizada pre y post-estadía, upselling de servicios y recolección de reseñas.' },
    ],
    Retail: [
        { icon: <PostSaleIcon />, title: 'Gestión postventa', description: 'Mensajes post-compra, recordatorios y "te extrañamos" que vuelven a activar clientes.' },
        { icon: <CustomerIcon />, title: 'Conoce tu cliente', description: 'Medimos cada cuánto vuelven tus clientes y cuánto gastan por categoría y canal.' },
        { icon: <AdsIcon />, title: 'Publicidad Inteligente', description: 'Unimos anuncios, ventas y costos (producto, empaque, reparto) para ver qué campañas dejan dinero de verdad.' },
    ]
  };

  const processSteps = [
    {
      icon: <ExploracionIcon className="h-10 w-10 text-indigo-600" />,
      name: '1. Exploración',
      description: 'Vemos en qué etapa está el negocio, que datos debemos construir o medir para poder obtener la línea base.',
    },
    {
      icon: <AlcanceIcon className="h-10 w-10 text-indigo-600" />,
      name: '2. Alcance',
      description: 'Definimos el indicador a impactar y el alcance del proyecto.',
    },
    {
      icon: <LanzamientoIcon className="h-10 w-10 text-indigo-600" />,
      name: '3. Lanzamiento',
      description: 'Lanzamos prototipo funcional en 3-4 semanas.',
    },
    {
      icon: <IteracionIcon className="h-10 w-10 text-indigo-600" />,
      name: '4. Iteración y Expansión',
      description: 'Iteramos y expandimos la solución con base a resultados.',
    },
  ];

  const techStack = ['OpenAI', 'Google Studio', 'Kommo', 'n8n', 'Hostinger', 'Google Cloud', 'PostgreSQL', 'Bitrix24'];
  
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
    }
  ];

  const surveyQuestions: SurveyQuestion[] = [
    {
      id: 'rubro',
      text: '¿Cuál es tu rubro?',
      type: 'single-choice-other',
      options: ['Consultorio / Wellness', 'Turismo', 'Ventas por mayor/menor', 'Otro'],
    },
    {
      id: 'tiempo_negocio',
      text: '¿Cuánto tiempo tiene el negocio?',
      type: 'single-choice',
      options: ['Menos de 1 Año', 'Entre 1 y 3 Años', 'Más de 3 Años'],
    },
    {
      id: 'cantidad_equipo',
      text: '¿Cantidad de equipo?',
      type: 'single-choice',
      options: ['Sólo yo', '2 a 5', '5 a 12', '12 a 20', 'Más de 20'],
    },
    {
      id: 'nivel_ventas',
      text: 'Nivel de Ventas/mes',
      type: 'single-choice',
      options: ['Hasta 20K soles /mes', '21 a 60K soles /mes', '61 a 100K soles /mes', 'Más de 100K soles /mes'],
    },
    {
      id: 'descripcion_negocio',
      text: '¿A qué se dedica tu negocio con precisión?',
      type: 'text',
    },
    {
      id: 'social_media_web',
      text: 'Déjanos el link de tu web y/o redes sociales',
      type: 'textarea',
    },
    {
        id: 'identificacion',
        text: '¿Con qué enunciado te identificas más?',
        type: 'single-choice',
        options: [
            'Mi negocio anda bien y quiero explorar que herramientas de IA puedo usar para ser más eficiente o crecer más',
            'Mi negocio va cada vez peor y quiero entender si herramientas de IA pueden ayudarme a resurgir',
            'Tengo claridad de mi problema y busco alternativas de solución',
            'Mi negocio genera utilidad pero tengo poco control, y quiero entender la mejor forma de escalar'
        ]
    },
    {
      id: 'principal_dolor',
      text: '¿Cuál es tu principal dolor (expláyate)?',
      type: 'textarea',
    },
  ];

  const [contactStep, setContactStep] = useState<'initial' | 'survey' | 'schedule'>('initial');
  const [surveyAnswers, setSurveyAnswers] = useState<Record<string, string>>({});
  const [activeSolutionTab, setActiveSolutionTab] = useState<keyof typeof solutionsData>('Consultorios');
  
  useEffect(() => {
    const handleStartDiagnosisEvent = () => {
        setContactStep('survey');
    };

    window.addEventListener('startNiveliaDiagnosis', handleStartDiagnosisEvent);

    return () => {
        window.removeEventListener('startNiveliaDiagnosis', handleStartDiagnosisEvent);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleStartDiagnosisClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setContactStep('survey');
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSurveyComplete = (answers: Record<string, string>) => {
    setSurveyAnswers(answers);
    setContactStep('schedule');
    console.log("Survey Answers:", answers);
  };
  
  const subtitles: Record<keyof typeof solutionsData, string> = {
    Consultorios: "Belleza y Wellness",
    Turismo: "Agencias de viaje",
    Retail: "Minorista y mayorista"
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                    <div className="text-left">
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                            IA & Datos que aumentan<br />
                            <span className="text-indigo-600">utilidades en 30 días</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-600 max-w-3xl font-bold">
                            Convertimos los datos de tu negocio en tu activo más rentable.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="space-y-4">
                            <li className="flex items-center text-[17px] text-gray-700">
                                <CheckIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                                <span>
                                    <span className="font-semibold">IA 24/7 responde &lt;2 min</span> y agenda sola según parámetros entregados.
                                </span>
                            </li>
                            <li className="flex items-center text-[17px] text-gray-700">
                                <CheckIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                                <span>
                                    <span className="font-semibold">Embudo y sistema diseñado en CRM:</span> +15 a 30% reservas / cierres
                                </span>
                            </li>
                            <li className="flex items-center text-[17px] text-gray-700">
                                <CheckIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                                <span>
                                    <span className="font-semibold">Tablero de control LIVE:</span> ventas, pricing, inventarios y campañas bajo control
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 text-left">
                        <a 
                          href="#contacto" 
                          onClick={handleStartDiagnosisClick}
                          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                            Agendar diagnóstico de 30 min
                        </a>
                        <p className="mt-4 text-sm text-gray-500">Es gratis. Responde preguntas en menos de 2 min.</p>
                    </div>
                     {/* Mobile Image */}
                    <div className="mt-12 lg:hidden">
                        <img 
                            src="https://res.cloudinary.com/dm3sbdsv6/image/upload/v1761906413/CRM_atenci%C3%B3n_negociosIA_x3fowc.png" 
                            alt="Ilustración del motor de IA de Nivelia procesando datos de múltiples canales"
                            className="rounded-lg shadow-xl w-full h-auto object-cover" 
                        />
                    </div>
                </div>

                {/* Desktop Image */}
                <div className="hidden lg:block">
                     <img 
                        src="https://res.cloudinary.com/dm3sbdsv6/image/upload/v1761906413/CRM_atenci%C3%B3n_negociosIA_x3fowc.png" 
                        alt="Ilustración del motor de IA de Nivelia procesando datos de múltiples canales"
                        className="rounded-lg shadow-xl w-full h-auto object-cover" 
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluciones" className="bg-gray-50 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="inline-block bg-indigo-600 text-white px-4 py-3 sm:px-6 rounded-full text-2xl sm:text-3xl font-extrabold shadow-lg">
                <span className="sm:hidden whitespace-nowrap text-2xl px-2">Soluciones a la medida</span>
                <span className="hidden sm:inline">Soluciones a la medida de tu negocio</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">Integramos IA y herramientas en procesos clave para potenciar tu crecimiento</p>
            <p className="mt-2 text-lg text-gray-500">{subtitles[activeSolutionTab]}</p>
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
                  } whitespace-nowrap py-4 px-1 sm:px-4 border-b-2 font-semibold text-[17px] transition-colors`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200" aria-hidden="true"></div>
              <div className="space-y-12">
                {solutionsData[activeSolutionTab].map((item, index) => (
                  <div key={index} className="pl-14 relative">
                    <div className="absolute left-4 top-3 -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full ring-4 ring-gray-50">
                      {React.cloneElement(item.icon, { className: "w-4 h-4 text-indigo-600"})}
                    </div>
                    <div>
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-[17px] font-semibold bg-indigo-50 text-indigo-600">
                        {item.title}
                      </span>
                      <p className="mt-2 text-gray-600 text-[17px]">{item.description}</p>
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
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-transform duration-300 shadow-lg"
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
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Metodología que busca entregar valor medible rápidamente.
                </p>
            </div>
            <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step) => (
                <div key={step.name} className="text-center">
                    <div className="flex items-center justify-center h-20 w-20 mx-auto bg-indigo-100 rounded-full">
                    {step.icon}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-gray-900">{step.name}</h3>
                    <p className="mt-2 text-gray-600 text-[17px]">{step.description}</p>
                </div>
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
                        className="mt-10 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-transform duration-300 shadow-lg"
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
                            style={{minHeight: '700px', border: 'none'}}
                        ></iframe>
                    </div>
                </div>
              )}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
        <section id="stack" className="bg-gray-50 py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Stack Tecnológico y Seguridad</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Usamos herramientas robustas y probadas para garantizar resultados y seguridad.
                    </p>
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
      <section id="faq" className="bg-gray-50 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Preguntas Frecuentes</h2>
            </div>
            <div className="mt-12 space-y-6">
                {faqs.map((faq) => (
                <details key={faq.question} className="group p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <summary className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <span className="ml-4 transition-transform duration-300 group-open:rotate-45">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    </span>
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
