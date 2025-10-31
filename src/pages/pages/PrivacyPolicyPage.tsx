
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="prose lg:prose-lg mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900">Política de Privacidad</h1>
          <p className="text-gray-500">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <p>En Nivelia, accesible desde nivelia.ia, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene tipos de información que son recopilados y registrados por Nivelia y cómo los usamos.</p>

          <h2>Consentimiento</h2>
          <p>Al utilizar nuestro sitio web, usted consiente nuestra Política de Privacidad y acepta sus términos.</p>

          <h2>Información que recopilamos</h2>
          <p>La información personal que se le solicita que proporcione, y las razones por las que se le solicita que la proporcione, se le aclararán en el momento en que le pidamos que proporcione su información personal.</p>
          <p>Si se comunica con nosotros directamente, podemos recibir información adicional sobre usted, como su nombre, dirección de correo electrónico, número de teléfono, el contenido del mensaje y/o los archivos adjuntos que nos pueda enviar, y cualquier otra información que elija proporcionar.</p>
          <p>Específicamente, a través de nuestro formulario de diagnóstico, recopilamos información sobre su negocio (rubro, tiempo en el mercado, tamaño del equipo, nivel de ventas, etc.) para evaluar si nuestros servicios son adecuados para usted y preparar nuestra llamada de diagnóstico.</p>

          <h2>Cómo usamos su información</h2>
          <p>Utilizamos la información que recopilamos de varias maneras, que incluyen:</p>
          <ul>
            <li>Proporcionar, operar y mantener nuestro sitio web.</li>
            <li>Mejorar, personalizar y expandir nuestro sitio web.</li>
            <li>Comprender y analizar cómo utiliza nuestro sitio web.</li>
            <li>Desarrollar nuevos productos, servicios, características y funcionalidades.</li>
            <li>Comunicarnos con usted, ya sea directamente o a través de uno de nuestros socios, incluido el servicio de atención al cliente, para proporcionarle actualizaciones y otra información relacionada con el sitio web, y con fines de marketing y promoción.</li>
            <li>Enviarle correos electrónicos.</li>
            <li>Encontrar y prevenir fraudes.</li>
          </ul>

          <h2>Servicios de Terceros</h2>
          <p>Utilizamos servicios de terceros como Calendly para la programación de citas. Estos servicios tienen sus propias políticas de privacidad con respecto a la información que se les proporciona. Le recomendamos que lea sus políticas de privacidad para que pueda comprender la manera en que estos proveedores manejarán su información personal.</p>
          
          <h2>Seguridad de los Datos</h2>
          <p>La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger su Información personal, no podemos garantizar su seguridad absoluta.</p>

          <h2>Sus Derechos de Protección de Datos</h2>
          <p>Nos gustaría asegurarnos de que conoce todos sus derechos de protección de datos. Todo usuario tiene derecho a lo siguiente: el derecho de acceso, el derecho de rectificación, el derecho de supresión, el derecho a restringir el procesamiento, el derecho a oponerse al procesamiento y el derecho a la portabilidad de los datos.</p>
          
          <p className="mt-8">
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-semibold">&larr; Volver al inicio</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
