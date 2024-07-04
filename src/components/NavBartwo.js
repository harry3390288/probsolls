import React, { useState } from 'react';
import './NavBartwo.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function NavBartwo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className='navv'>
        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <span className="close-icon">✕</span> : '☰'}
        </div>
        <div className='logo'>
          <Link to='/'><img src='purple5@4x.png' alt="Logo" /></Link>
        </div>
        <div className='menu'>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><ScrollLink to="work" smooth={true} duration={500} onClick={closeMenu}>Work</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>About</ScrollLink></li>
          </ul>
        </div>
        <button className="btn default">Let's Connect</button>
      </div>
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <span className="close-icon" onClick={closeMenu}>✕</span>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><ScrollLink to="work" smooth={true} duration={500} onClick={closeMenu}>Work</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>About</ScrollLink></li>
        </ul>
      </div>
    </div>
  );
}
