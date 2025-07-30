

import React from 'react';

function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', padding: '2rem' }}>
      {/* Left: Info and social links */}
      <div style={{ flex: 1, maxWidth: 500 }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '1rem' }}>REET SHARMA</h1>
        <div style={{ height: 2, background: '#6366f1', width: 120, marginBottom: '1.5rem' }} />
        <div style={{ marginBottom: '1rem', color: '#444', fontSize: '1.1rem' }}>Short description line 1</div>
        <div style={{ marginBottom: '1rem', color: '#444', fontSize: '1.1rem' }}>Short description line 2</div>
        <div style={{ marginBottom: '2rem', color: '#444', fontSize: '1.1rem' }}>Short description line 3</div>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', textDecoration: 'none', color: '#232323' }}>
            <div style={{ width: 50, height: 50, border: '2px solid #6366f1', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
              {/* You can add an Instagram icon here */}
            </div>
            Insta
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', textDecoration: 'none', color: '#232323' }}>
            <div style={{ width: 50, height: 50, border: '2px solid #6366f1', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
              {/* You can add a LinkedIn icon here */}
            </div>
            LinkIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', textDecoration: 'none', color: '#232323' }}>
            <div style={{ width: 50, height: 50, border: '2px solid #6366f1', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
              {/* You can add a GitHub icon here */}
            </div>
            Github
          </a>
        </div>
      </div>
      {/* Right: Photo box */}
      <div style={{ flex: 0, marginLeft: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 160, height: 160, border: '2px solid #6366f1', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500, fontSize: '1.2rem', background: '#e0e7ff' }}>
          Photo
        </div>
      </div>
    </div>
  );
}

export default Home;
