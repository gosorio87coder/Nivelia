import React from 'react';
import { Link } from 'react-router-dom';
import { NiveliaLogo } from '../../constants/icons';

const Navbar: React.FC = () => {

  const handleStartDiagnosisClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Dispatch a custom event that HomePage will listen for to change its state.
    window.dispatchEvent(new CustomEvent('startNiveliaDiagnosis'));
    
    // Manually scroll to the section.
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <header className="sticky top-0 z-50 bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold flex items-center gap-2">
              <NiveliaLogo className="h-6 w-auto" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/#soluciones" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Casos de Uso</Link>
              <Link to="/#stack" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Recursos</Link>
            </div>
          </div>
          <div className="flex items-center">
             <a 
                href="#contacto" 
                onClick={handleStartDiagnosisClick}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-transform hover:scale-105 shadow-sm">
                Diagnóstico Gratis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;