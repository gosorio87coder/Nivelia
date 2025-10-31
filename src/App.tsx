
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CasesPage from './pages/CasesPage';
import ResourcesPage from './pages/ResourcesPage';
import FloatingCTA from './components/FloatingCTA';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';

function App() {
  return (
    <HashRouter>
      <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/casos" element={<CasesPage />} />
            <Route path="/recursos" element={<ResourcesPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />
          </Routes>
        </main>
        <FloatingCTA />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
