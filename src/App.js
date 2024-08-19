import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import PurposeSection from './components/PurposeSection';
import SolutionSection from './components/SolutionSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Header from './components/Header';
import FAQPage from './components/FAQPage';
import Services from './components/Services';
import Footermain from './components/Footermain';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <PurposeSection />
              <SolutionSection />
              <CallToAction />
              <Services />
            </>
          } />
          <Route path="/faqs" element={
            <>
              <HeroSection />
              <FAQPage />
            </>
          } />
        </Routes>
        <Footermain />
      </div>
    </Router>
  );
};

export default App;
