import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/HMFjpg.jpg';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Heal Me Fit" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
        </ul>
      </nav>
      <button className="demo-button">Take a Demo</button>
    </header>
  );
};

export default Header;
