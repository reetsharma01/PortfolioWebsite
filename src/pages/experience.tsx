import { useNavigate } from 'react-router-dom';

function Experience() {
  const navigate = useNavigate();
  const timeline = [
    {
      left: {
        title: 'AlgoFlow AI',
        desc: 'AI Research and Development Intern',
        media: null,
        date: 'June 2025 to Present',
      },
      right: {
        title: '',
        desc: '',
        media: null,
        date: '',
      },
    },
    {
      left: {
        title: '',
        desc: '',
        media: null,
        date: '',
      },
      right: {
        title: 'Mazagon Dock Shipbuilders Limited',
        desc: 'Engineering Intern, EY Design Department',
        media: null,
        date: 'Dec 2024 to Jan 2025',
      },
    },
    {
      left: {
        title: 'VESIT AI&DS Department',
        desc: 'Research Intern - Intelligent Fault Detection',
        media: null,
        date: 'May 2024 to August 2024',
      },
      right: {
        title: '',
        desc: '',
        media: null,
        date: '',
      },
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'var(--color-bg)',
      padding: '3rem 2rem',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Poppins, sans-serif',
    }}>
      {/* Top circle */}
      <div style={{ position: 'relative', height: 80 }}>
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          transform: 'translateX(-50%)',
          width: 64,
          height: 64,
          background: 'var(--color-primary)',
          borderRadius: '50%',
          boxShadow: '0 2px 16px #C6282822',
          zIndex: 2
        }} />
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 64,
          width: 4,
          height: 16,
          background: 'var(--color-primary)',
          transform: 'translateX(-50%)',
          zIndex: 1
        }} />
      </div>

      {/* Timeline container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 900,
        margin: '0 auto',
        padding: '0 2vw'
      }}>
        {/* Central vertical line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 4,
          background: 'var(--color-primary)',
          transform: 'translateX(-50%)',
          zIndex: 0,
          borderRadius: 2
        }} />

        {/* Timeline entries */}
        {timeline.map((item, idx) => (
          <div key={idx} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '24px', // reduced from 48px
            position: 'relative',
            zIndex: 1
          }}>
            {/* Left entry */}
            {(item.left.title || item.left.desc) && (
              <div style={{ width: '44%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div style={{
                  background: 'var(--color-primary)',
                  color: 'var(--color-text)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '0.5rem 1.3rem',
                  borderRadius: '1rem',
                  marginBottom: '0.7rem',
                  boxShadow: '0 2px 8px #C6282822',
                  whiteSpace: 'nowrap',
                  fontFamily: 'Poppins, sans-serif',
                }}>
                  {item.left.date}
                </div>
                <div
                  className="card"
                  style={{
                    width: '100%',
                    maxWidth: 420,
                    borderRadius: 'var(--radius)',
                    padding: '1.1rem 1.2rem',
                    background: 'var(--color-card)',
                    minHeight: 110,
                    boxShadow: 'var(--shadow)',
                    fontFamily: 'Poppins, sans-serif',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s',
                    cursor: item.left.title === 'AlgoFlow AI' ? 'pointer' : item.left.title === 'VESIT AI&DS Department' ? 'pointer' : 'default',
                  }}
                  onClick={() => {
                    if (item.left.title === 'AlgoFlow AI') navigate('/algoflow-ai');
                    if (item.left.title === 'VESIT AI&DS Department') navigate('/vesit-ai-fault-detection');
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 8, color: 'var(--color-primary)', letterSpacing: '0.03em' }}>{item.left.title}</div>
                  <div style={{ color: 'var(--color-subtext)', fontSize: '1.08rem', fontWeight: 400 }}>{item.left.desc}</div>
                </div>
              </div>
            )}

            {/* Spacer */}
            <div style={{ width: '12%' }} />

            {/* Right entry */}
            {(item.right.title || item.right.desc) && (
              <div style={{ width: '44%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'var(--color-primary)',
                  color: 'var(--color-text)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '0.5rem 1.3rem',
                  borderRadius: '1rem',
                  marginBottom: '0.7rem',
                  boxShadow: '0 2px 8px #C6282822',
                  whiteSpace: 'nowrap',
                  fontFamily: 'Poppins, sans-serif',
                }}>
                  {item.right.date}
                </div>
                <div
                  className="card"
                  style={{
                    width: '100%',
                    maxWidth: 420,
                    borderRadius: 'var(--radius)',
                    padding: '1.1rem 1.2rem',
                    background: 'var(--color-card)',
                    minHeight: 110,
                    boxShadow: 'var(--shadow)',
                    fontFamily: 'Poppins, sans-serif',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s',
                    cursor: item.right.title === 'Mazagon Dock Shipbuilders Limited' ? 'pointer' : 'default',
                  }}
                  onClick={() => {
                    if (item.right.title === 'Mazagon Dock Shipbuilders Limited') navigate('/mazagon-dock');
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 8, color: 'var(--color-primary)', letterSpacing: '0.03em' }}>{item.right.title}</div>
                  <div style={{ color: 'var(--color-subtext)', fontSize: '1.08rem', fontWeight: 400 }}>{item.right.desc}</div>
                </div>
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}

export default Experience;
