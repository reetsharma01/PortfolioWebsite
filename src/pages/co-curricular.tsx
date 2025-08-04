

import React from 'react';
import IEEECouncilPic from '../assets/IEEECouncilPic.jpg';
import AIColegionPic from '../assets/AIColegionPic.jpg';
import Guestspeakerpic from '../assets/Guestspeakerpic.jpg';
import papercutoutIEEE from '../assets/papercutoutIEEE.jpg';
import AIInterview from '../assets/AIInterview.jpg';
import SpeakerIEEE from '../assets/SpeakerIEEE.jpg';
import { useNavigate } from 'react-router-dom';

function CoCurricular() {
  // Handwritten font for heading (Google Fonts: 'Indie Flower' or similar)
  // If not available, fallback to a playful font
  const headingFont = `'Poppins', sans-serif`;

  const navigate = useNavigate();
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: '#0E0E0E',
      boxSizing: 'border-box',
      padding: 0,
      margin: 0,
      overflowX: 'hidden',
      paddingTop: '3.5rem',
      fontFamily: 'Poppins, sans-serif',
    }}>
      {/* Heading */}
      <div style={{ width: '100%', textAlign: 'center', marginTop: 24, marginBottom: 24 }}>
        <h1
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: '3.2rem',
            color: '#C62828',
            letterSpacing: '0.04em',
            margin: 0,
            lineHeight: 1.1,
            textShadow: '0 2px 8px #C6282822',
            textTransform: 'uppercase',
          }}
        >
          Clubs, Committees & Campus Involvement
        </h1>
      </div>

      {/* Main content: left grid, right cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 48,
        width: '100%',
        maxWidth: 1600,
        margin: '0 auto',
        padding: '0 2vw',
      }}>
        {/* Left: 2x2 grid in rounded box */}
        <div style={{
          background: '#1A1A1A',
          borderRadius: 36,
          border: '2.5px solid #232323',
          padding: 40,
          minWidth: 480,
          minHeight: 480,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 16px #C6282822',
          position: 'relative',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: 24,
            width: 500,
            height: 340,
            borderRadius: 24,
            overflow: 'hidden',
          }}>
            <div style={{ background: '#232323', border: '2px solid #232323', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={IEEECouncilPic} alt="IEEE Council" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 24 }} />
            </div>
            <div style={{ background: '#232323', border: '2px solid #232323', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={AIColegionPic} alt="AI Colegion" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 24 }} />
            </div>
            <div style={{ background: '#232323', border: '2px solid #232323', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={Guestspeakerpic} alt="Guest Speaker" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 24 }} />
            </div>
            <div style={{ background: '#232323', border: '2px solid #232323', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={AIInterview} alt="AI Interview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 24 }} />
            </div>
            <div style={{ background: '#232323', border: '2px solid #232323', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={SpeakerIEEE} alt="Speaker IEEE" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 24 }} />
            </div>
            <div style={{ background: '#232323', border: '2px solid #232323', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={papercutoutIEEE} alt="Paper Cutout IEEE" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 24 }} />
            </div>
          </div>
        </div>

        {/* Right: 3 large rounded cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          minWidth: 480,
          maxWidth: 600,
        }}>
          {/* Card 1 */}
          <button
            onClick={() => navigate('/ieee-vesit')}
            style={{
              background: '#1A1A1A',
              border: '2.5px solid #C62828',
              borderRadius: 36,
              minHeight: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem 2rem',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.35rem',
              fontWeight: 700,
              position: 'relative',
              color: '#FFFFFF',
              boxShadow: '0 2px 8px #C6282822',
              cursor: 'pointer',
              outline: 'none',
              borderWidth: 2.5,
              width: '100%',
              transition: 'box-shadow 0.2s, border 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.boxShadow = '0 4px 16px #1E88E544';
              e.currentTarget.style.border = '2.5px solid #1E88E5';
            }}
            onMouseOut={e => {
              e.currentTarget.style.boxShadow = '0 2px 8px #C6282822';
              e.currentTarget.style.border = '2.5px solid #C62828';
            }}
          >
            <span>IEEE_VESIT</span>
          </button>
          {/* Card 2 */}
          <button
            onClick={() => navigate('/ai-colegion')}
            style={{
              background: '#1A1A1A',
              border: '2.5px solid #C62828',
              borderRadius: 36,
              minHeight: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem 2rem',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.35rem',
              fontWeight: 700,
              position: 'relative',
              color: '#FFFFFF',
              boxShadow: '0 2px 8px #C6282822',
              cursor: 'pointer',
              outline: 'none',
              borderWidth: 2.5,
              width: '100%',
              transition: 'box-shadow 0.2s, border 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.boxShadow = '0 4px 16px #1E88E544';
              e.currentTarget.style.border = '2.5px solid #1E88E5';
            }}
            onMouseOut={e => {
              e.currentTarget.style.boxShadow = '0 2px 8px #C6282822';
              e.currentTarget.style.border = '2.5px solid #C62828';
            }}
          >
            <span>AI-Colegion</span>
          </button>
          {/* Card 3 */}
          <button
            onClick={() => navigate('/guest-speaker')}
            style={{
              background: '#1A1A1A',
              border: '2.5px solid #C62828',
              borderRadius: 36,
              minHeight: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem 2rem',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.35rem',
              fontWeight: 700,
              position: 'relative',
              color: '#FFFFFF',
              boxShadow: '0 2px 8px #C6282822',
              cursor: 'pointer',
              outline: 'none',
              borderWidth: 2.5,
              width: '100%',
              transition: 'box-shadow 0.2s, border 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.boxShadow = '0 4px 16px #1E88E544';
              e.currentTarget.style.border = '2.5px solid #1E88E5';
            }}
            onMouseOut={e => {
              e.currentTarget.style.boxShadow = '0 2px 8px #C6282822';
              e.currentTarget.style.border = '2.5px solid #C62828';
            }}
          >
            <span>Guest Speaker</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoCurricular;
