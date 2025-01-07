import React from 'react';
import './Link.css';

interface LinkProps {
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  href,
  target = '_self',
  rel,
  children,
  className = '',
}) => (
  <a
    href={href}
    target={target}
    rel={rel}
    className={`link ${className}`}
  >
    {children}
  </a>
);

export default Link;
