import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section fade-in-up">
        <h1 className="hero-title">Learn. Code. Build.</h1>
        <p className="hero-subtitle">Simple notes and coding practice for modern developers.</p>

      </section>

      {/* Features Section */}
      <section className="features-section fade-in-up delay-1">
        <a href="#intro" className="feature-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
          <div className="feature-icon">📒</div>
          <h3>JavaScript Notes</h3>
          <p>Learn JavaScript with simple explanations and practical examples.</p>
        </a>
        <div className="feature-card">
          <div className="feature-icon">🐙</div>
          <h3>Git & GitHub</h3>
          <p>Learn Git commands, GitHub, branching, and collaboration.</p>
        </div>
        <a href="#challenges" className="feature-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
          <div className="feature-icon">💻</div>
          <h3>Coding Problems</h3>
          <p>Practice JavaScript problems and improve your problem-solving skills.</p>
        </a>
      </section>

      {/* CTA Section */}
      <section className="cta-section fade-in-up delay-2">
        <h2>Keep learning. Keep coding. Keep building.</h2>
      </section>
    </div>
  );
};

export default Home;
