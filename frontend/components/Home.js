import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="container mt-4">
      <h1 className="display-4">Solana DEX Watcher</h1>
      <p className="lead">Monitor Solana DEX activity and whale wallet movements</p>
      <div className="alert alert-info">
        <strong>Connected:</strong> Solana Mainnet Beta
      </div>
    </div>
  );
}

export default Home;
