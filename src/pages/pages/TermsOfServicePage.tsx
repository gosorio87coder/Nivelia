
import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="prose lg:prose-lg mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900">Términos de Servicio</h1>
          <p className="text-gray-500">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h2>1. Aceptación de los Términos</h2>
          <p>Al acceder y utilizar el sitio web de Nivelia (el "Servicio"), usted acepta estar sujeto a estos Términos de Servicio ("Términos"). Si no está de acuerdo con alguna parte de los términos, no podrá acceder al Servicio.</p>

          <h2>2. Uso del Sitio Web</h2>
          <p>Nivelia le otorga una licencia limitada, no exclusiva e intransferible para acceder y hacer uso personal y no comercial del sitio web. Esta licencia no incluye ninguna reventa o uso comercial del sitio web o su contenido.</p>

          <h2>3. Propiedad Intelectual</h2>
          <p>El Servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de Nivelia y sus licenciantes. El Servicio está protegido por derechos de autor, marcas comerciales y otras leyes tanto de nuestro país como de países extranjeros.</p>

          <h2>4. Enlaces a Otros Sitios Web</h2>
          <p>Nuestro Servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por Nivelia. Nivelia no tiene control ni asume ninguna responsabilidad por el contenido, las políticas de privacidad o las prácticas de los sitios web o servicios de terceros.</p>

          <h2>5. Renuncia de Garantías</h2>
          <p>El uso del Servicio es bajo su propio riesgo. El Servicio se proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD". El Servicio se proporciona sin garantías de ningún tipo, ya sean expresas o implícitas.</p>

          <h2>6. Limitación de Responsabilidad</h2>
          <p>En ningún caso Nivelia, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables de ningún daño indirecto, incidental, especial, consecuente o punitivo, incluidos, entre otros, la pérdida de ganancias, datos, uso, buena voluntad u otras pérdidas intangibles.</p>

          <h2>7. Cambios</h2>
          <p>Nos reservamos el derecho, a nuestra entera discreción, de modificar o reemplazar estos Términos en cualquier momento. Le notificaremos cualquier cambio publicando los nuevos Términos en esta página.</p>
          
          <p className="mt-8">
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-semibold">&larr; Volver al inicio</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
