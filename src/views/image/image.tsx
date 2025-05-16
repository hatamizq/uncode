import React from 'react';

const UnderMaintenance: React.FC = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        color: '#333',
        fontFamily: 'sans-serif',
        padding: '1rem',
      }}
    >
      <h1>🚧 Under Maintenance 🚧</h1>
      <p style={{ maxWidth: '400px', fontSize: '1.2rem' }}>
        We are currently performing maintenance. Please check back later.
      </p>
    </div>
  );
};

export default UnderMaintenance;
