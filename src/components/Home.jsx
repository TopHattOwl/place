import React from 'react';

const Home = () => {
  return (
    <header
      id="home"
      className="text-center py-5"
      style={{
        backgroundImage: `url('/src/assets/background.jpg')`,
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
