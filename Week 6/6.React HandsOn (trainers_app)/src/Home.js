import React from 'react';

const Home = () => {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2 style={{
        fontSize: '24px',
        color: '#333',
        fontWeight: 'normal'
      }}>
        Welcome to Cognizant Academy Trainers Portal
      </h2>
    </div>
  );
};

export default Home;