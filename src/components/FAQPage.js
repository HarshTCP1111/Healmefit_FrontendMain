import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './FAQPage.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = [
    {
      question: 'What is Heal Me Fit?',
      answer: 'Heal Me Fit is a SaaS software platform that helps trucking companies capture and analyze biometric data from their drivers. Our goal is to improve driver health, reduce accident rates, and ensure compliance with safety regulations.'
    },
    {
      question: 'How does Heal Me Fit work?',
      answer: 'Our platform integrates with wearable devices and health monitoring tools to collect real-time biometric data such as BMI, heart rate, and sleep patterns from truck drivers. This data is then analyzed to identify health risks and provide actionable insights to improve driver safety and well-being.'
    },
    {
      question: 'Why is driver health important for road safety?',
      answer: 'The health and wellness of truck drivers directly impact road safety. Drivers with a BMI greater than 35 are 77% more likely to cause accidents, and those with poor health are 44% more likely to be involved in accidents. Improving driver health is critical to reducing accident rates and ensuring compliance with safety regulations.'
    },
    {
      question: 'What kind of biometric data does Heal Me Fit capture?',
      answer: 'Heal Me Fit captures a range of biometric data, including BMI, heart rate, and sleep patterns. This data is collected in real-time through integration with wearable devices and health monitoring tools.'
    },
    {
      question: 'How does Heal Me Fit help reduce accident rates?',
      answer: 'By providing real-time, actionable health data, Heal Me Fit helps trucking companies identify drivers at higher risk of health-related issues. This allows companies to take proactive measures to improve driver health, thereby reducing the likelihood of accidents.'
    },
    {
      question: 'What are the benefits of using Heal Me Fit for trucking companies?',
      answer: (
    <div dangerouslySetInnerHTML={{ __html: `
      <ul>
        <li>Decrease accident rates</li>
        <li>Enhance driver safety and well-being</li>
        <li>Reduce costs associated with accidents and compliance issues</li>
        <li>Ensure compliance with safety regulations</li>
        <li>Foster a safer and more efficient trucking industry</li>
      </ul>` }} />)
    },
    {
      question: 'How does Heal Me Fit support compliance?',
      answer: 'Our platform provides tools to ensure that drivers meet health and wellness standards, helping companies maintain compliance with safety regulations. This reduces the risk of costly fines and legal issues.'
    },
    {
      question: 'How can I get started with Heal Me Fit?',
      answer: (
        <div>
          <p>To learn more about how Heal Me Fit can benefit your trucking company, please contact us at:</p>
          <ul>
            <li><b>Email:</b> <a href="mailto:sales@healmefit.com" style={{ textDecoration: 'none', color: 'inherit'}} >sales@healmefit.com</a></li>
            <li><b>Phone:</b> <a href="tel:+14808081388" style={{ textDecoration: 'none', color: 'inherit'}}>(480) 808-1388</a></li>
            <li><b>Address:</b> 3104 E. Camelback Rd, Ste 2634 Phoenix, AZ 85016</li>
          </ul>
          <p>Stay connected with us on social media for the latest updates and insights!</p>
        <ul>
          <li>
            <a href="https://www.instagram.com/HealMeFit" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <FaInstagram size={30} style={{ marginRight: '8px', marginBottom: '10px' }} /> Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/HealMeFit" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <FaFacebook size={30} style={{ marginRight: '8px' ,marginBottom: '10px' }} /> Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com/HealMeFit" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <FaTwitter size={30} style={{ marginRight: '8px' ,marginBottom: '10px' }} /> Twitter
            </a>
          </li>
        </ul>
      </div>
    )}
];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-items">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-arrow">
                <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} />
              </span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
