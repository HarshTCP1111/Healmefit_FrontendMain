import React, { useState } from 'react';
import './SolutionSection.css';
import solutionImage from '../assets/Screenshot 2024-07-23 020919.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SolutionSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Biometric Data Capture for Improved Safety",
      content: "Integration with wearable devices and health monitoring tools to collect real-time biometric data such as BMI, heart rate, and sleep patterns."
    },
    {
      title: "Health Risk Analysis for Prevention",
      content: "Advanced analytics to identify health risks and provide actionable insights for preventing health issues."
    },
    {
      title: "Actionable Insights for Proactive Measures",
      content: "Real-time data and analytics to take proactive measures and improve driver health and safety."
    },
    {
      title: "Compliance Support for Safety and Legal Assurance",
      content: "Tools and resources to ensure compliance with safety and health regulations."
    }
  ];

  return (
    <div className="solution-section">
      <h2>Our Solution</h2>
      <p>Heal Me Fit offers a comprehensive solution to monitor and manage driver health, ensuring a safer and more efficient trucking industry.</p>
      <div className="solution-content">
        <div className="accordion">
          {accordionData.map((item, index) => (
            <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
              <h3 onClick={() => handleToggle(index)}>
                {item.title}
                <span className="accordion-arrow">
                  <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} />
                </span>
              </h3>
              <p className={activeIndex === index ? 'show' : ''}>{item.content}</p>
            </div>
          ))}
        </div>
        <div className="solution-image">
          <img src={solutionImage} alt="Solution" />
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
