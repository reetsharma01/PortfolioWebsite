
function AiColeGionPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: '#0E0E0E',
        fontFamily: 'Poppins, sans-serif',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: 900, width: '100%', marginTop: 48 }}>
        <h1 style={{ color: '#C62828', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '2.4rem', letterSpacing: '0.04em', marginBottom: 8 }}>AI-Colegion</h1>
        <div style={{ color: '#B0BEC5', fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '1.1rem', marginBottom: 24 }}>
          Developed on AlgoNeuron platform
        </div>
        <div style={{ color: '#FFFFFF', fontSize: '1.08rem', fontWeight: 400, lineHeight: 1.6, marginBottom: 18 }}>
          The project involved crafting a sophisticated Natural Language Processing (NLP) tool designed to automate risk analysis.
        </div>
        <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ background: '#1A1A1A', borderRadius: 16, boxShadow: '0 2px 12px #C6282822', padding: '1.2rem 1.2rem', minWidth: 180 }}>
              <div style={{ color: '#C62828', fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>Project Overview</div>
              <div style={{ color: '#FFFFFF', fontSize: '1.08rem', fontWeight: 500 }}>The project involved crafting a sophisticated Natural Language Processing (NLP) tool designed to automate risk analysis.</div>
            </div>
            <div style={{ background: '#1A1A1A', borderRadius: 16, boxShadow: '0 2px 12px #C6282822', padding: '1.2rem 1.2rem', minWidth: 180 }}>
              <div style={{ color: '#C62828', fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>Key Features</div>
              <ul style={{ color: '#B0BEC5', fontSize: '1.08rem', fontWeight: 400, lineHeight: 1.7, paddingLeft: 24, margin: 0 }}>
                <li>Utilizes state-of-the-art NLP techniques</li>
                <li>Automates risk detection and evaluation processes</li>
                <li>Seamlessly integrates with existing internal workflows</li>
              </ul>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/assets/risk-analysis-tool.jpg" alt="Risk Analysis Tool Screenshot" style={{ width: 220, height: 180, objectFit: 'cover', borderRadius: 16, boxShadow: '0 2px 12px #0008' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiColeGionPage;
