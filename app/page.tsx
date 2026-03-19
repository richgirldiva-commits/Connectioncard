import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" style={{textAlign: 'center', padding: '50px', backgroundColor: '#f5f5f5'}}>
        <h1>Welcome to Connection Card</h1>
        <p>Your go-to app for seamless connections!</p>
        <a href="/signup" style={{marginRight: '20px'}}>Sign Up</a>
        <a href="/login">Log In</a>
      </section>

      {/* Features Section */}
      <section id="features" style={{padding: '50px'}}>
        <h2>Features</h2>
        <ul>
          <li>Connect with friends and family</li>
          <li>Join communities that interest you</li>
          <li>Share your experiences and memories</li>
          <li>Stay updated with real-time notifications</li>
        </ul>
      </section>

      {/* Premium Match+ Section */}
      <section id="premium" style={{padding: '50px', backgroundColor: '#e0f7fa'}}>
        <h2>Premium Match+</h2>
        <p>Unlock exclusive features and enhance your experience!</p>
      </section>
    </div>
  );
};

export default HomePage;