import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => (
  <div className="card">
    <h2 className="card-title">{title}</h2>
    <p className="card-description">{description}</p>
    {children}
  </div>
);

export default Card;
