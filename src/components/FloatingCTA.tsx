import React from 'react';
import { CalendarIcon } from '../constants/icons';

const FloatingCTA: React.FC = () => {

    const handleScheduleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        // Dispatch a custom event that HomePage will listen for to start the survey.
        window.dispatchEvent(new CustomEvent('startNiveliaDiagnosis'));
        
        // Manually scroll to the contact section.
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
            <a 
                href="#contacto"
                onClick={handleScheduleClick}
                className="bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-110 flex items-center gap-2 group"
            >
                <CalendarIcon className="h-6 w-6" />
                 <span className="max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs group-hover:ml-2">Agendar 30 min</span>
            </a>
        </div>
    );
};

export default FloatingCTA;