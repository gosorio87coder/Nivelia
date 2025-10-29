import React from 'react';
import { Link } from 'react-router-dom';
import { NiveliaLogo } from '../constants/icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <NiveliaLogo className="h-8 w-auto text-indigo-600" />
            </div>
            <p className="text-gray-500 max-w-sm">IA & Datos que impactan utilidades en 30 días.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Navegación</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#soluciones" className="text-base text-gray-500 hover:text-gray-900">Soluciones</a></li>
              <li><a href="#como-trabajamos" className="text-base text-gray-500 hover:text-gray-900">Proceso</a></li>
              <li><a href="#faq" className="text-base text-gray-500 hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/privacy" className="text-base text-gray-500 hover:text-gray-900">Política de Privacidad</Link></li>
              <li><Link to="/terms" className="text-base text-gray-500 hover:text-gray-900">Términos de Servicio</Link></li>
              <li><Link to="/cookies" className="text-base text-gray-500 hover:text-gray-900">Aviso de Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Nivelia. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {/* Placeholder for social media icons */}
            <a href="javascript:void(0);" onClick={(e) => e.preventDefault()} className="text-gray-400 cursor-default" title="LinkedIn (Próximamente)">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;