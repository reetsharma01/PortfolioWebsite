import { useNavigate } from 'react-router-dom';
import Medalpic from '../assets/Medalpic.jpg';
import dancepic from '../assets/dancepic.jpg';

function ExtraCurricular() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins, sans-serif', padding: '0 2vw' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', maxWidth: 1200, width: '100%' }}>
        {/* Left: About Us text */}
        <div className="card" style={{ flex: 1, minWidth: 340, background: 'var(--color-card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', padding: '32px 32px 32px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontWeight: 700, fontSize: '2.7rem', marginBottom: '1.2rem', color: 'var(--color-primary)', letterSpacing: '0.04em', fontFamily: 'Poppins, sans-serif' }}>Journey of Hobbies Turned Highlights</h2>
          <div className="subtext" style={{ color: 'var(--color-subtext)', fontSize: '1.25rem', marginBottom: '2.2rem', lineHeight: 1.7, fontFamily: 'Poppins, sans-serif' }}>
            Engaging in both the discipline of sport and the grace of art,<br />
            I’ve found resilience in every rally, and confidence in every choreographed move.<br />
            These passions don’t just shape who I am — they echo in everything I strive to become.
          </div>
          <button
            className="btn"
            style={{ marginTop: 8, alignSelf: 'flex-start', background: 'var(--color-primary)', color: 'var(--color-text)', fontWeight: 600, fontSize: '1.1rem', borderRadius: 'var(--radius)', boxShadow: '0 2px 8px #C6282822', padding: '0.9em 2.2em' }}
            onClick={() => navigate('/extra-curricular/details')}
          >
            Read More
          </button>
        </div>
        {/* Right: Overlapping images with colored shapes */}
        <div style={{ position: 'relative', width: 560, height: 700, minWidth: 560 }}>
          {/* Background shapes */}
          <div style={{ position: 'absolute', top: 80, left: 120, width: 320, height: 320, background: 'var(--color-primary)', borderRadius: 48, zIndex: 0, opacity: 0.18 }}></div>
          <div style={{ position: 'absolute', top: 240, left: 0, width: 320, height: 320, background: 'var(--color-secondary)', borderRadius: '50%', zIndex: 0, opacity: 0.18 }}></div>
          {/* Images */}
          <img src={Medalpic} alt="Medal" style={{ position: 'absolute', top: 120, left: 180, width: 280, height: 360, borderRadius: 48, objectFit: 'cover', boxShadow: '0 4px 24px #00000099', zIndex: 1 }} />
          <img src={dancepic} alt="Dance" style={{ position: 'absolute', top: 340, left: 300, width: 220, height: 280, borderRadius: 36, objectFit: 'cover', objectPosition: '80% center', boxShadow: '0 2px 12px #00000055', zIndex: 2 }} />
        </div>
      </div>
    </div>
  );
}

export default ExtraCurricular;
