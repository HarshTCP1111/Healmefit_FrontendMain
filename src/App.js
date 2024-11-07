import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
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
import Pricingsection from './components/Pricingsection';
import ContactFormModal from './components/Contactformmodal';  // Import the ContactFormModal component

const stripePromise = loadStripe('pk_test_51QBJ8j06YzoiAg2A1rLWxRvFb8yhe05dc2wpLq0cOHSstSoD7uPYP1UJq5lGvH9mccBErtiacT4pFcOcB4xxNaog00t2Y5PRug');

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div>
        {/* Pass openModal as a prop to the Header and CallToAction components */}
        <Header openModal={openModal} />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <PurposeSection />
              <SolutionSection />
              <Elements stripe={stripePromise}>
                <Pricingsection />
              </Elements>
              <CallToAction openModal={openModal} />
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
        
        {/* Contact form modal component */}
        <ContactFormModal visible={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
};

export default App;
