
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import { Toaster } from '@/components/ui/sonner';

// Pages
import HomePage from './pages/HomePage.jsx';
import EuropeVisasPage from './pages/EuropeVisasPage.jsx';
import SchengenVisaPage from './pages/SchengenVisaPage.jsx';
import UsaVisasPage from './pages/UsaVisasPage.jsx';
import UsaVisaInterviewGuidePage from './pages/UsaVisaInterviewGuidePage.jsx';
import CanadaVisasPage from './pages/CanadaVisasPage.jsx';

// Turkey Visas
import TurkeyVisasPage from './pages/TurkeyVisasPage.jsx';
import TurkeyVisaPage from './pages/TurkeyVisaPage.jsx';
import TurkeyStudentVisaPage from './pages/TurkeyStudentVisaPage.jsx';
import TurkeyWorkVisaPage from './pages/TurkeyWorkVisaPage.jsx';

// UK Visas
import UKVisasPage from './pages/UKVisasPage.jsx';
import UKVisaPage from './pages/UKVisaPage.jsx';
import UKVisitVisaPage from './pages/UKVisitVisaPage.jsx';
import UKStudentVisaPage from './pages/UKStudentVisaPage.jsx';
import UKWorkVisaPage from './pages/UKWorkVisaPage.jsx';

// Asia Visas
import AsiaVisasPage from './pages/AsiaVisasPage.jsx';
import ThailandVisaPage from './pages/ThailandVisaPage.jsx';
import MalaysiaVisaPage from './pages/MalaysiaVisaPage.jsx';
import SingaporeVisaPage from './pages/SingaporeVisaPage.jsx';
import ChinaVisaPage from './pages/ChinaVisaPage.jsx';

// Individual Visa Pages
import GermanyVisaPage from './pages/GermanyVisaPage.jsx';
import ItalyVisaPage from './pages/ItalyVisaPage.jsx';
import SpainVisaPage from './pages/SpainVisaPage.jsx';
import FranceVisaPage from './pages/FranceVisaPage.jsx';
import DenmarkVisaPage from './pages/DenmarkVisaPage.jsx';
import FinlandVisaPage from './pages/FinlandVisaPage.jsx';
import IrelandVisaPage from './pages/IrelandVisaPage.jsx';
import LuxembourgVisaPage from './pages/LuxembourgVisaPage.jsx';
import MaltaVisaPage from './pages/MaltaVisaPage.jsx';
import NetherlandsVisaPage from './pages/NetherlandsVisaPage.jsx';
import NorwayVisaPage from './pages/NorwayVisaPage.jsx';
import PortugalVisaPage from './pages/PortugalVisaPage.jsx';
import SwedenVisaPage from './pages/SwedenVisaPage.jsx';
import SwitzerlandVisaPage from './pages/SwitzerlandVisaPage.jsx';

import UsaVisitVisaPage from './pages/UsaVisitVisaPage.jsx';
import UsaStudentVisaPage from './pages/UsaStudentVisaPage.jsx';
import CanadaVisitorVisaPage from './pages/CanadaVisitorVisaPage.jsx';
import CanadaStudyVisaPage from './pages/CanadaStudyVisaPage.jsx';
import CanadaExpressEntryPage from './pages/CanadaExpressEntryPage.jsx';

// Tools
import FeeCalculatorPage from './pages/FeeCalculatorPage.jsx';
import PointsCalculatorPage from './pages/PointsCalculatorPage.jsx';
import BankCalculatorPage from './pages/BankCalculatorPage.jsx';
import BudgetEstimatorPage from './pages/BudgetEstimatorPage.jsx';
import ChecklistGeneratorPage from './pages/ChecklistGeneratorPage.jsx';

// Blog & Contact & Guides
import BlogPage from './pages/BlogPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import GoogleSearchConsoleGuidePage from './pages/GoogleSearchConsoleGuidePage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Category Pages */}
        <Route path="/europe-visas" element={<EuropeVisasPage />} />
        <Route path="/schengen-visa-from-pakistan" element={<SchengenVisaPage />} />
        <Route path="/usa-visas" element={<UsaVisasPage />} />
        <Route path="/usa-visa-interview-guide" element={<UsaVisaInterviewGuidePage />} />
        <Route path="/canada-visas" element={<CanadaVisasPage />} />
        <Route path="/turkey-visas" element={<TurkeyVisasPage />} />
        <Route path="/uk-visas" element={<UKVisasPage />} />
        <Route path="/asia-visas" element={<AsiaVisasPage />} />
        
        {/* Asia Visa Pages */}
        <Route path="/thailand-visa-from-pakistan" element={<ThailandVisaPage />} />
        <Route path="/malaysia-visa-from-pakistan" element={<MalaysiaVisaPage />} />
        <Route path="/singapore-visa-from-pakistan" element={<SingaporeVisaPage />} />
        <Route path="/china-visa-from-pakistan" element={<ChinaVisaPage />} />

        {/* Turkey Visa Pages */}
        <Route path="/turkey-visa-from-pakistan" element={<TurkeyVisaPage />} />
        <Route path="/turkey-student-visa-from-pakistan" element={<TurkeyStudentVisaPage />} />
        <Route path="/turkey-work-visa-from-pakistan" element={<TurkeyWorkVisaPage />} />

        {/* UK Visa Pages */}
        <Route path="/uk-visa-from-pakistan" element={<UKVisaPage />} />
        <Route path="/uk-visit-visa-from-pakistan" element={<UKVisitVisaPage />} />
        <Route path="/uk-student-visa-from-pakistan" element={<UKStudentVisaPage />} />
        <Route path="/uk-work-visa-from-pakistan" element={<UKWorkVisaPage />} />

        {/* Individual Visa Pages */}
        <Route path="/germany-visa-from-pakistan" element={<GermanyVisaPage />} />
        <Route path="/italy-visa-from-pakistan" element={<ItalyVisaPage />} />
        <Route path="/spain-visa-from-pakistan" element={<SpainVisaPage />} />
        <Route path="/france-visa-from-pakistan" element={<FranceVisaPage />} />
        <Route path="/denmark-visa-from-pakistan" element={<DenmarkVisaPage />} />
        <Route path="/finland-visa-from-pakistan" element={<FinlandVisaPage />} />
        <Route path="/ireland-visa-from-pakistan" element={<IrelandVisaPage />} />
        <Route path="/luxembourg-visa-from-pakistan" element={<LuxembourgVisaPage />} />
        <Route path="/malta-visa-from-pakistan" element={<MaltaVisaPage />} />
        <Route path="/netherlands-visa-from-pakistan" element={<NetherlandsVisaPage />} />
        <Route path="/norway-visa-from-pakistan" element={<NorwayVisaPage />} />
        <Route path="/portugal-visa-from-pakistan" element={<PortugalVisaPage />} />
        <Route path="/sweden-visa-from-pakistan" element={<SwedenVisaPage />} />
        <Route path="/switzerland-visa-from-pakistan" element={<SwitzerlandVisaPage />} />

        <Route path="/usa-visit-visa-from-pakistan" element={<UsaVisitVisaPage />} />
        <Route path="/usa-student-visa-from-pakistan" element={<UsaStudentVisaPage />} />
        <Route path="/canada-visitor-visa-from-pakistan" element={<CanadaVisitorVisaPage />} />
        <Route path="/canada-study-visa-from-pakistan" element={<CanadaStudyVisaPage />} />
        <Route path="/canada-express-entry-from-pakistan" element={<CanadaExpressEntryPage />} />
        
        {/* Tools */}
        <Route path="/tools/fee-calculator" element={<FeeCalculatorPage />} />
        <Route path="/tools/points-calculator" element={<PointsCalculatorPage />} />
        <Route path="/tools/bank-calculator" element={<BankCalculatorPage />} />
        <Route path="/tools/budget-estimator" element={<BudgetEstimatorPage />} />
        <Route path="/tools/checklist-generator" element={<ChecklistGeneratorPage />} />
        
        {/* Blog & Contact & Guides */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/guides/google-search-console-setup" element={<GoogleSearchConsoleGuidePage />} />
        
        {/* Catch-all 404 */}
        <Route path="*" element={
          <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8">Page not found</p>
            <a href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
              Back to Home
            </a>
          </div>
        } />
      </Routes>
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
