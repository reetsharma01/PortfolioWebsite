


import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();
  const services = [
    {
      title: 'Expensià',
      desc: 'User-centered designs that are visually engaging and functionally seamless. My approach... Read more',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="4" fill="#6366f1"/><rect x="7" y="9" width="10" height="6" rx="2" fill="#fff"/></svg>
      ),
      link: '/projects/uiux-design',
    },
    {
      title: 'BizVista',
      desc: 'User-centered designs that are visually engaging and functionally seamless. My approach... Read more',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="4" fill="#6366f1"/><rect x="7" y="9" width="10" height="6" rx="2" fill="#fff"/><rect x="9" y="11" width="6" height="2" rx="1" fill="#6366f1"/></svg>
      ),
      link: '/projects/web-design',
    },
    {
      title: 'Self-Hosted Cloud Storage System',
      desc: 'User-centered designs that are visually engaging and functionally seamless. My approach... Read more',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="7" y="3" width="10" height="18" rx="4" fill="#6366f1"/><rect x="9" y="7" width="6" height="10" rx="2" fill="#fff"/></svg>
      ),
      link: '/projects/app-design',
    },
    {
      title: 'Java Project',
      desc: 'User-centered designs that are visually engaging and functionally seamless. My approach... Read more',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" fill="#6366f1"/><circle cx="12" cy="12" r="5" fill="#fff"/></svg>
      ),
      link: '/projects/graphic-design',
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: '#0E0E0E',
        padding: '48px 0',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h1
          style={{
            fontSize: '3.2rem',
            fontWeight: 900,
            color: '#C62828',
            marginBottom: 12,
            letterSpacing: '0.04em',
            fontFamily: 'Poppins, sans-serif',
            textTransform: 'uppercase',
          }}
        >
          My Projects
        </h1>
        <div
          style={{
            color: '#B0BEC5',
            fontSize: '1.3rem',
            fontWeight: 500,
            fontFamily: 'Poppins, sans-serif',
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          Transforming ideas into immersive, high-performance digital experiences.
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 32,
          justifyContent: 'center',
          alignItems: 'stretch',
          width: '100%',
          flexWrap: 'nowrap',
          padding: '0 4vw',
          boxSizing: 'border-box',
          overflowX: 'auto',
        }}
      >
        {services.map((card, idx) => (
          <div
            key={idx}
            style={{
              width: '320px',
              maxWidth: '90vw',
              background: '#1A1A1A',
              borderRadius: 20,
              boxShadow: '0 4px 32px #C6282822, 0 1.5px 8px #1E88E522',
              padding: '32px 20px 24px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '2.5px solid transparent',
              transition: 'box-shadow 0.2s, border 0.2s',
              cursor: 'pointer',
              marginBottom: 24,
            }}
            onClick={() => navigate(card.link)}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter') navigate(card.link); }}
            aria-label={card.title}
            onMouseOver={e => {
              e.currentTarget.style.boxShadow = '0 8px 40px #C6282844, 0 2px 12px #1E88E544';
              e.currentTarget.style.border = '2.5px solid #1E88E5';
            }}
            onMouseOut={e => {
              e.currentTarget.style.boxShadow = '0 4px 32px #C6282822, 0 1.5px 8px #1E88E522';
              e.currentTarget.style.border = '2.5px solid transparent';
            }}
          >
            <div style={{ marginBottom: 24 }}>{card.icon}</div>
            <div
              style={{
                fontWeight: 800,
                fontSize: '1.35rem',
                marginBottom: 16,
                color: '#FFFFFF',
                textAlign: 'center',
                letterSpacing: '0.03em',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              {card.title}
            </div>
            <div
              style={{
                color: '#B0BEC5',
                fontSize: '1.08rem',
                textAlign: 'center',
                marginBottom: 12,
                minHeight: 54,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              {card.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
