import React from 'react';
import Link from '../../atoms/Link/Link';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <ul className="footer-links">
      <li className="footer-item">
        <Link href="#" className="footer-link">Home</Link>
      </li>
      <li className="footer-item">
        <Link href="#" className="footer-link">About</Link>
      </li>
      <li className="footer-item">
        <Link href="#" className="footer-link">Contact</Link>
      </li>
      <li className="footer-item">
        <Link href="#" className="footer-link">Privacy Policy</Link>
      </li>
    </ul>
    <p className="footer-text">© 2025 weKnow. All rights reserved.</p>
  </footer>
);

export default Footer;
