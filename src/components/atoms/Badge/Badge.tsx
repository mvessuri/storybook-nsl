import React from 'react';
import './Badge.css';

export interface BadgeProps {
  text: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color = 'primary', className = '' }) => {
  return (
    <span className={`badge badge-${color} ${className}`}>
      {text}
    </span>
  );
};

export default Badge;
