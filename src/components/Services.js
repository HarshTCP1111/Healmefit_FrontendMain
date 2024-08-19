import React from 'react';
import { FaCarCrash, FaMedkit, FaMoneyBillWave, FaIndustry } from 'react-icons/fa';
import './Services.css';

const FocusSection = () => {
  return (
    <div className="focus-section" id="services">
      <h1 className="focus-title">Our Focus</h1>
      <p className="focus-subtitle">By providing trucking companies with tools to monitor and improve
            driver health, Heal Me Fit enhances driver well-being and safety.
            The platform tracks key health metrics, offers user-friendly
            dashboards, and integrates Fitbit for ease of use.</p>

      <div className="focus-items">
        <div className="focus-item">
          <FaCarCrash className="focus-icon" />
          <h2>Decrease accident rates</h2>
          <p>
          Utilize advanced analytics and real-time monitoring to identify potential risks before they lead to accidents. 
          Our proactive approach helps prevent incidents, ensuring safer journeys for all.
          </p>
        </div>
        <div className="focus-item">
          <FaMedkit className="focus-icon" />
          <h2>Enhance driver safety and well-being</h2>
          <p>
          Support drivers with personalized health insights and wellness programs tailored to their needs. 
          By focusing on their well-being, we create safer roads and healthier professionals
          </p>
        </div>
        <div className="focus-item">
          <FaMoneyBillWave className="focus-icon" />
          <h2>Reduce costs associated with accidents and compliance issues</h2>
          <p>
          Minimize financial losses with predictive technologies that prevent costly accidents and compliance violations. 
          Our platform helps companies save money while staying ahead of regulatory demands.
          </p>
        </div>
        <div className="focus-item">
          <FaIndustry className="focus-icon" />
          <h2>Foster a safer and more efficient trucking industry</h2>
          <p>
          Empower the industry with innovative tools that streamline operations and prioritize safety. 
          Our solutions help build a future where efficiency and safety go hand in hand
          </p>
        </div>
      </div>
    </div>
  );
};

export default FocusSection;
