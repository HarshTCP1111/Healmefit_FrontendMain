import React from 'react';
import './PurposeSection.css';

const serviceList = [
  {
    icon: "https://cdn.easyfrontend.com/pictures/services/service_illustration_1.svg",
    title: "Health Risks and Accident Likelihood",
    description: "Truck drivers with a BMI greater than 35 are 77% more likely to cause accidents.",
  },
  {
    icon: "https://cdn.easyfrontend.com/pictures/services/service_illustration_3.svg",
    title: "Impact on Road Safety",
    description: "Drivers with poor health are 44% more likely to be involved in accidents.",
  },
  {
    icon: "https://cdn.easyfrontend.com/pictures/services/service_illustration_2.svg",
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