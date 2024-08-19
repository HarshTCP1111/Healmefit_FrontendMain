import React from 'react';
import './PurposeSection.css';
import hmfPurpose1 from '../assets/purpose_section-hmf1.webp';
import hmfPurpose2 from '../assets/purpose_section-hmf2.webp';
import hmfPurpose3 from '../assets/purpose_section-hmf3.webp';

const serviceList = [
  {
    icon: hmfPurpose1,
    title: "Health Risks and Accident Likelihood",
    description: "Truck drivers with a BMI greater than 35 are 77% more likely to cause accidents.",
  },
  {
    icon: hmfPurpose2,
    title: "Impact on Road Safety",
    description: "Drivers with poor health are 44% more likely to be involved in accidents.",
  },
  {
    icon: hmfPurpose3,
    title: "Urgency of Addressing Driver Health",
    description: "A person is injured or killed in a truck accident every 16 minutes.",
  },
];

const ServiceItem = ({ service }) => (
  <div className="purpose-card">
    <img src={service.icon} alt={service.title} className="service-icon" />
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </div>
);

const PurposeSection = () => {
  return (
    <div className="purpose-section">
      <h3>Our purpose is to proactively address the critical impact of driver health on road safety.</h3>
      <div className="purpose-cards">
        {serviceList.map((service, i) => (
          <ServiceItem key={i} service={service} />
        ))}
      </div>
    </div>
  );
};

export default PurposeSection;