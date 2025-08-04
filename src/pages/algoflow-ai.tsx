import { useNavigate } from 'react-router-dom';

function AlgoFlowAI() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: '#0E0E0E', fontFamily: 'Poppins, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
      <div style={{ background: '#1A1A1A', borderRadius: 18, boxShadow: '0 2px 16px #C6282822', padding: '2.5rem 2rem', minWidth: 340, maxWidth: 540, textAlign: 'center', position: 'relative' }}>
        <button onClick={() => navigate('/experience')} style={{ position: 'absolute', left: 24, top: 24, background: '#232323', color: '#C62828', border: 'none', borderRadius: 8, padding: '0.5rem 1.2rem', fontWeight: 600, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', boxShadow: '0 2px 8px #C6282822' }}>← Back</button>
        <h1 style={{ color: '#C62828', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '2.2rem', letterSpacing: '0.04em', marginBottom: 18 }}>AlgoFlow AI</h1>
        <div style={{ color: '#B0BEC5', fontWeight: 500, fontSize: '1.1rem', marginBottom: 18 }}>AI Research and Development Intern</div>
        <div style={{ color: '#FFFFFF', fontSize: '1.08rem', fontWeight: 400, lineHeight: 1.6, marginBottom: 18 }}>
          June 2025 to Present
        </div>
        <div style={{ color: '#B0BEC5', fontSize: '1.08rem', fontWeight: 400, lineHeight: 1.7 }}>
          Worked on advanced AI research projects, contributing to the development and deployment of innovative solutions in Natural Language Processing and Machine Learning.
        </div>
      </div>
    </div>
  );
}

export default AlgoFlowAI;
