import { useState } from 'react';


import blazerPic from '../assets/newpic.jpg';

function Home() {
  const [showContactIcons, setShowContactIcons] = useState(false);
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'var(--color-bg)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Poppins, sans-serif',
    }}>
      {/* Abstract tech SVG background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          style={{ position: 'absolute', width: '100vw', height: '100vh', minWidth: '100%', minHeight: '100%', opacity: 0.22 }}
        >
          {/* Futuristic mesh grid */}
          <defs>
            <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0E0E0E" />
              <stop offset="100%" stopColor="#1E88E5" />
            </linearGradient>
            <radialGradient id="bg2" cx="80%" cy="20%" r="1.2">
              <stop offset="0%" stopColor="#C62828" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0E0E0E" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Digital mesh lines */}
          <path d="M0 900 Q480 800 960 900 T1920 900" stroke="url(#bg1)" strokeWidth="3" fill="none" />
          <path d="M0 700 Q480 600 960 700 T1920 700" stroke="url(#bg1)" strokeWidth="2" fill="none" />
          <path d="M0 500 Q480 400 960 500 T1920 500" stroke="url(#bg1)" strokeWidth="1.5" fill="none" />
          {/* Neural mesh dots */}
          <circle cx="300" cy="300" r="60" fill="url(#bg2)" />
          <circle cx="1600" cy="200" r="80" fill="url(#bg2)" />
          <circle cx="1200" cy="900" r="50" fill="url(#bg2)" />
          {/* Flowing digital wave */}
          <path d="M0 1050 Q600 950 1200 1050 T1920 1050" stroke="#1E88E5" strokeWidth="2" fill="none" opacity="0.5" />
        </svg>
      </div>
      {/* Main content grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100vw',
        padding: '0 6vw',
        position: 'relative',
        zIndex: 1,
        gap: '48px',
      }}>
        {/* Left: Info */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', maxWidth: '700px' }}>
          <h1 style={{ fontSize: '4.2rem', fontWeight: 800, letterSpacing: '0.04em', marginBottom: '1.5rem', color: 'var(--color-primary)', lineHeight: 1.1, fontFamily: 'Poppins, sans-serif' }}>
            Reet Sharma
          </h1>
          <div style={{ color: 'var(--color-subtext)', fontSize: '1.5rem', marginBottom: '2.5rem', maxWidth: '500px', fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
            A tech enthusiast who loves combining <span style={{ fontWeight: 500 }}>AI</span>, strategy, and creativity.<br />
            From building projects to crafting productivity apps that reflect personality, I love creating technology where logic meets lifestyle.
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}>
            <button
              className="btn"
              style={{ background: 'var(--color-primary)', color: 'var(--color-text)', border: 'none', borderRadius: '2rem', padding: '1rem 2.2rem', fontWeight: 700, fontSize: '1.3rem', cursor: 'pointer', boxShadow: '0 2px 8px #C6282822', fontFamily: 'Poppins, sans-serif' }}
              onClick={() => setShowContactIcons(!showContactIcons)}
            >
              Contact Me
            </button>
            <button
              className="btn"
              style={{ background: 'var(--color-card)', color: 'var(--color-primary)', border: '2px solid var(--color-primary)', borderRadius: '2rem', padding: '1rem 2.2rem', fontWeight: 700, fontSize: '1.3rem', cursor: 'pointer', boxShadow: '0 2px 8px #C6282822', fontFamily: 'Poppins, sans-serif' }}
            >Resume</button>
          </div>
          {showContactIcons && (
            <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem' }}>
              <a href="https://instagram.com/reetsharma" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', textDecoration: 'none', color: 'var(--color-secondary)' }}>
                <div style={{ width: 60, height: 60, border: '2px solid var(--color-secondary)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-card)', boxShadow: 'var(--shadow)' }}>
                  {/* Instagram SVG */}
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <radialGradient id="insta-gradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f9ce34" />
                      <stop offset="50%" stopColor="#ee2a7b" />
                      <stop offset="100%" stopColor="#6228d7" />
                    </radialGradient>
                    <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#insta-gradient)" />
                    <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" />
                    <circle cx="17" cy="7" r="1.2" fill="#fff" />
                  </svg>
                </div>
              </a>
              <a href="https://linkedin.com/in/reetsharma" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', textDecoration: 'none', color: 'var(--color-secondary)' }}>
                <div style={{ width: 60, height: 60, border: '2px solid var(--color-secondary)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-card)', boxShadow: 'var(--shadow)' }}>
                  {/* LinkedIn SVG */}
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="6" fill="#1E88E5" />
                    <rect x="6" y="10" width="2" height="6" fill="#fff" />
                    <rect x="11" y="13" width="2" height="3" fill="#fff" />
                    <circle cx="7" cy="7" r="1.2" fill="#fff" />
                  </svg>
                </div>
              </a>
              <a href="https://github.com/reetsharma01" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', textDecoration: 'none', color: 'var(--color-secondary)' }}>
                <div style={{ width: 60, height: 60, border: '2px solid var(--color-secondary)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-card)', boxShadow: 'var(--shadow)' }}>
                  {/* GitHub SVG */}
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="6" fill="#181717" />
                    <path d="M12 17.5c-3.5 0-6-2.5-6-5.5 0-2.5 2-4.5 6-4.5s6 2 6 4.5c0 3-2.5 5.5-6 5.5zm-2-7c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1z" fill="#fff" />
                  </svg>
                </div>
              </a>
            </div>
          )}
        </div>
        {/* Right: Profile photo and floating icons */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 500 }}>
          <div className="card" style={{ background: 'var(--color-card)', borderRadius: '2rem', boxShadow: 'var(--shadow)', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={blazerPic}
              alt="Reet Sharma Portfolio Blazer"
              style={{ width: '380px', height: 'auto', borderRadius: '2rem', boxShadow: '0 8px 32px #C6282822', objectFit: 'cover', background: 'var(--color-card)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
