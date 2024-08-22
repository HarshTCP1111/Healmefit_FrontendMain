import React from 'react';
import { useNavigate } from 'react-router-dom';
import './404page.css'; // Ensure this CSS is specific to 404 page
import notFoundImage from '../assets/404page-hmf.webp'; // Replace with your image path

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/home');
  };

  return (
    <div className="not-found-section"> {/* Changed class name */}
      <div className="not-found-image-container"> {/* Changed class name */}
        <img src={notFoundImage} alt="404 Not Found" className="not-found-bg-image" /> {/* Changed class name */}
      </div>
      <div className="not-found-text-container"> {/* Changed class name */}
        {/* <h1>404</h1>
        <p>Page Not Found</p> */}
        {/* <button className="login-button" onClick={handleLoginRedirect}>Back To Login</button> */}
      </div>
    </div>
  );
};

export default PageNotFound;
