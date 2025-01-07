import React from 'react';
import Link from '../../atoms/Link/Link';
import './Navbar.css';

const Navbar: React.FC = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <Link href="#" className="navbar-link">Home</Link>
      </li>
      <li className="navbar-item">
        <Link href="#" className="navbar-link">About</Link>
      </li>
      <li className="navbar-item">
        <Link href="#" className="navbar-link">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
