import React, { useState } from 'react';

// Define the shape of a single question
export interface SurveyQuestion {
  id: string;
  text: string;
  type: 'single-choice' | 'single-choice-other' | 'text' | 'textarea';
  options?: string[];
}

interface SurveyComponentProps {
  questions: SurveyQuestion[];
  onComplete: (answers: Record<string, string>) => void;
}

const SurveyComponent: React.FC<SurveyComponentProps> = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [otherValue, setOtherValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleNext = (answer: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: answer };

    if (currentIndex < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentIndex(currentIndex + 1);
      // Reset input fields for the next question
      setTextValue('');
      setOtherValue('');
    } else {
      onComplete(newAnswers);
    }
  };

  const handleOptionClick = (option: string) => {
    if (option === 'Otro') {
      // If "Otro" is clicked but the text field is empty, do nothing yet.
      // The user needs to fill the text field and click a "Siguiente" button.
      return; 
    }
    handleNext(option);
  };
  
  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textValue.trim()) {
      handleNext(textValue);
    }
  };
  
  const handleOtherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otherValue.trim()) {
      handleNext(otherValue);
    }
  };

  const renderOptions = () => {
    switch (currentQuestion.type) {
      case 'single-choice':
      case 'single-choice-other':
        return (
          <div className="mt-6 space-y-4">
            {currentQuestion.options?.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="w-full text-left p-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-indigo-50 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-gray-700 font-medium"
              >
                {option}
              </button>
            ))}
            {currentQuestion.type === 'single-choice-other' && (
              <form onSubmit={handleOtherSubmit} className="mt-4 space-y-3">
                  <input
                    type="text"
                    value={otherValue}
                    onChange={(e) => setOtherValue(e.target.value)}
                    placeholder="Especifica tu rubro"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Siguiente
                  </button>
              </form>
            )}
          </div>
        );

      case 'text':
      case 'textarea':
        return (
          <form onSubmit={handleTextSubmit} className="mt-6 space-y-4">
            {currentQuestion.type === 'text' ? (
              <input
                type="text"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                autoFocus
              />
            ) : (
              <textarea
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                rows={5}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                autoFocus
              />
            )}
            <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400" disabled={!textValue.trim()}>
              Siguiente
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}></div>
        </div>

        <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600">Pregunta {currentIndex + 1} de {questions.length}</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">{currentQuestion.text}</h2>
        </div>
        
        {renderOptions()}
    </div>
  );
};

export default SurveyComponent;