import './Hero.css';
import Button from '../../atoms/Button/Button';

interface HeroProps {
  heading: string;
  subheading?: string;
  backgroundImage: string;
  actionButton?: {
    text: string;
    onClick: () => void;
  };
}

const Hero: React.FC<HeroProps> = ({ heading, subheading, backgroundImage, actionButton }) => (
  <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <h1 className="hero-heading">{heading}</h1>
    {subheading && <p className="hero-subheading">{subheading}</p>}
    {actionButton && (
      <Button className="primary-button" onClick={actionButton.onClick}>
        {actionButton.text}
      </Button>
    )}
  </div>
);

export default Hero;
