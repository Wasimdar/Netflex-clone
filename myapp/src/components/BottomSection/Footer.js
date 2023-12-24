import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-links">
          <div>
            <h3>Questions? Call 000-800-919-1694</h3>
          </div>
          <div className="horizontal-links">
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">Account</a></li>
              <li><a href="#">Media Centre</a></li>
            </ul>
            <ul>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Cookie Preferences</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Jobs</a></li>
            </ul>
            <ul>
              <li><a href="#">Ways to Watch</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li><a href="#">Speed Test</a></li>
              <li><a href="#">Legal Notices</a></li>
              <li><a href="#">Only on Netflix</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
