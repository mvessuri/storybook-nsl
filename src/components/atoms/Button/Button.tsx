import React from 'react';
import './Button.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  onClick,
  children,
  className = '',
  disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`button ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
