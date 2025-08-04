import React from 'react';

function ExtraCurricularDetails() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0E0E0E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: `'Poppins', sans-serif`,
        padding: 24,
      }}
    >
      <div
        style={{
          background: '#1A1A1A',
          borderRadius: 18,
          boxShadow: '0 6px 32px 0 rgba(22,22,22,0.45)',
          padding: 32,
          minWidth: 340,
          maxWidth: 540,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            color: '#C62828',
            fontSize: '2.4rem',
            fontWeight: 800,
            letterSpacing: 1.5,
            marginBottom: 12,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          More About My Journey
        </h2>
        <p
          style={{
            color: '#B0BEC5',
            fontSize: '1.1rem',
            fontWeight: 400,
            textAlign: 'center',
            marginBottom: 0,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {/* Add a short description or details here if needed */}
        </p>
      </div>
    </div>
  );
}

export default ExtraCurricularDetails;
