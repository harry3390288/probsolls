import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="origpink.png" alt="Probsols Logo" />
        
      </div>
      <div className="footer-quote">
        <p>"Your success, our commitment."</p>
      </div>
      <div className="footer-social">
        <div className='icon-container'>
          <div className='icondiv'>
            <a href="https://www.facebook.com/profile.php?id=61561750404064" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <span>Facebook</span>
        </div>
        <div className='icon-container'>
          <div className='icondiv'>
            <a href="https://www.linkedin.com/in/probsolz-web-solution-aa360a316" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>LinkedIn</span>
        </div>
        <div className='icon-container'>
          <div className='icondiv'>
            <a href="https://www.upwork.com/freelancers/~01dcf054e52fdc82e0" target="_blank" rel="noopener noreferrer">
              {/* <i className="fab fa-fiverr"></i> */}
              <h4>Up</h4>
            </a>
          </div>
          <span>Upwork</span>
        </div>
        <div className='icon-container'>
          <div className='icondiv'>
            <a  href='https://www.fiverr.com/harisaslam242?up_rollout=true' target="_blank" rel="noopener noreferrer">
              {/* <i className="fab fa-fiverr"></i> */}
              <h4>fi</h4>
            </a>
          </div>
          <span>Fiverr</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Probsols. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
