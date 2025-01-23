import React, { useState } from 'react';
import './Accordion.css';

interface AccordionItemProps {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

const AccordionItem: React.FC<AccordionItemProps & { isOpen: boolean; onClick: () => void }> = ({ title, content, isOpen, onClick }) => (
  <div className="accordion-item">
    <button className={`accordion-header ${isOpen ? 'open' : ''}`} onClick={onClick}>
      {title}
    </button>
    {isOpen && <div className="accordion-content">{content}</div>}
  </div>
);

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
