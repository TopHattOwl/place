import React from 'react';
import backgroundImg from '../assets/background.jpg';

const Home = () => {
  return (
    <header
      id="home"
      className="text-center py-5"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <div className="container">
        <h1 className="display-4">Budapest</h1>
      </div>
    </header>
  );
};

export default Home;
