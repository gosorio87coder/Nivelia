
import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="prose lg:prose-lg mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900">Aviso de Cookies</h1>
          <p className="text-gray-500">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h2>¿Qué son las cookies?</h2>
          <p>Como es práctica común en casi todos los sitios web profesionales, este sitio utiliza cookies, que son pequeños archivos que se descargan en su computadora, para mejorar su experiencia. Esta página describe qué información recopilan, cómo la usamos y por qué a veces necesitamos almacenar estas cookies.</p>

          <h2>Cómo usamos las cookies</h2>
          <p>Utilizamos cookies por una variedad de razones que se detallan a continuación. Desafortunadamente, en la mayoría de los casos no existen opciones estándar de la industria para deshabilitar las cookies sin deshabilitar por completo la funcionalidad y las características que agregan a este sitio.</p>

          <h2>Deshabilitar Cookies</h2>
          <p>Puede evitar la instalación de cookies ajustando la configuración de su navegador (consulte la Ayuda de su navegador para saber cómo hacerlo). Tenga en cuenta que deshabilitar las cookies afectará la funcionalidad de este y muchos otros sitios web que visita.</p>
          
          <h2>Las cookies que establecemos</h2>
          <ul>
            <li>
              <strong>Cookies esenciales del sitio:</strong> Estas son necesarias para el funcionamiento del sitio web y no se pueden desactivar en nuestros sistemas.
            </li>
            <li>
              <strong>Cookies de análisis/rendimiento:</strong> Estas cookies nos permiten reconocer y contar el número de visitantes y ver cómo los visitantes se mueven por nuestro sitio web cuando lo están utilizando. Esto nos ayuda a mejorar la forma en que funciona nuestro sitio web.
            </li>
             <li>
              <strong>Cookies de terceros:</strong> En algunos casos especiales, también utilizamos cookies proporcionadas por terceros de confianza como Google Analytics. Los análisis de terceros se utilizan para rastrear y medir el uso de este sitio para que podamos seguir produciendo contenido atractivo.
            </li>
          </ul>

          <h2>Más Información</h2>
          <p>Esperamos que esto haya aclarado las cosas para usted. Para obtener más información, puede consultar nuestra <Link to="/privacy" className="text-indigo-600 hover:text-indigo-800">Política de Privacidad</Link>.</p>
          
          <p className="mt-8">
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-semibold">&larr; Volver al inicio</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;