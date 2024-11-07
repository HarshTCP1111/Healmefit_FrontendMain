import React, { useEffect } from 'react';
import './Pricingsection.css';

const PricingTable = () => {
  useEffect(() => {
    // Load the Stripe pricing table script asynchronously if it doesn't already exist
    if (!document.querySelector('script[src="https://js.stripe.com/v3/pricing-table.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/pricing-table.js';
      script.async = true;
      document.body.appendChild(script);

      // Clean up the script after component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
  

  return (
    <div className="pricing-section">
      <h2  id="pricing-section" className="pricing-heading">Our Pricing</h2>
      <p className="pricing-subtext">Find a pricing plan that works for you, with flexible options to meet your needs.
      Enjoy complete transparency—no hidden fees or unexpected charges.</p>
      <div className="stripe-pricing-table">
        <stripe-pricing-table
          pricing-table-id="prctbl_1QHbwQLzBmYZ5ITCPWiA5V4V"
          publishable-key="pk_test_LO1MTdbE3CdH3y37w9azGs3E00ToIhlTU8"
        ></stripe-pricing-table>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <PricingTable />
    </div>
  );
};

export default App;
