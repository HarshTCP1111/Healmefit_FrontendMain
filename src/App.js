import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import PurposeSection from './components/PurposeSection';
import SolutionSection from './components/SolutionSection';
import CallToAction from './components/CallToAction';
import Header from './components/Header';
import FAQPage from './components/FAQPage';
import Services from './components/Services';
import Footermain from './components/Footermain';
import FAQHero from './components/FAQHero';
import PageNotFound from './components/404page';
import ScrollToTop from './components/ScrollToTop'; 
import PricingPlans from './components/PricingPlans';// Import the ScrollToTop component
// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <PurposeSection />
              <PricingPlans />
              <SolutionSection />
              <CallToAction />
              <Services />
            </>
          } />
          <Route path="/faqs" element={
            <>
              <FAQHero />
              <FAQPage />
            </>
          } />
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footermain />
      </div>
    </Router>
  );
};

export default App;
