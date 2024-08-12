import React from 'react';
import './Features.css';
import { FiCheckSquare } from 'react-icons/fi';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="description">
          <p>
            By providing trucking companies with tools to monitor and improve
            driver health, Heal Me Fit enhances driver well-being and safety.
            The platform tracks key health metrics, offers user-friendly
            dashboards, and integrates Fitbit for ease of use.
          </p>
        </div>
        <div className="checklist">
          <div className="checklist-item">
            <FiCheckSquare className="checkbox-icon" />
            <span>Decrease accident rates</span>
          </div>
          <div className="checklist-item">
            <FiCheckSquare className="checkbox-icon" />
            <span>Enhance driver safety and well-being</span>
          </div>
          <div className="checklist-item">
            <FiCheckSquare className="checkbox-icon" />
            <span>
              Reduce costs associated with accidents and compliance issues
            </span>
          </div>
          <div className="checklist-item">
            <FiCheckSquare className="checkbox-icon" />
            <span>Foster a safer and more efficient trucking industry</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;