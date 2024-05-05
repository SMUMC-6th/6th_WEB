import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="welcome-section">
        <h1>환영합니다</h1>
      </section>

      <section className="find-movies-section">
        <h2>🎥 Find your movies !</h2>
        <br></br>
        <button className="search-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </section>
    </div>
  );
}

export default Home;
