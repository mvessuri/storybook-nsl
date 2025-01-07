import React from 'react';
import Navbar from '../../molecules/Navbar/Navbar';
import Hero from '../../molecules/Hero/Hero';
import Card from '../../molecules/Card/Card';
import Footer from '../../organisms/Footer/Footer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero
        heading="Welcome to Our Site"
        subheading="We are glad to have you here."
        backgroundImage="https://picsum.photos/id/921/1500/500"
        actionButton={{ text: 'Learn More', onClick: () => alert('Button clicked!') }}
      />
      <div className="content">
        <div className="card-container">
          <Card title="Card 1" description="This is the first card." />
          <Card title="Card 2" description="This is the second card." />
          <Card title="Card 3" description="This is the third card." />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
