
function CloudStorageSystem() {
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
      <div style={{ maxWidth: 820, width: '100%', marginTop: 48 }}>
        <h1 style={{ color: '#C62828', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '2.6rem', letterSpacing: '0.04em', marginBottom: 8 }}>Risk Analysis Tool</h1>
        <div style={{ color: '#B0BEC5', fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '1.1rem', marginBottom: 24 }}>Developed on AlgoNeuron platform</div>
        {/* Project Overview Card */}
        <div style={{ background: '#1A1A1A', borderRadius: 18, boxShadow: '0 2px 16px #C6282822', padding: '2rem 2rem 1.5rem 2rem', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 32 }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#C62828', fontWeight: 700, fontSize: '1.25rem', marginBottom: 10 }}>Project Overview</div>
            <div style={{ color: '#FFFFFF', fontSize: '1.08rem', fontWeight: 400, lineHeight: 1.6 }}>
              The project involved crafting a sophisticated Natural Language Processing (NLP) tool designed to automate risk analysis.
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img src="/assets/risk-analysis-tool.jpg" alt="Risk Analysis Tool Screenshot" style={{ width: 220, height: 140, objectFit: 'cover', borderRadius: 12, boxShadow: '0 2px 12px #0008' }} />
          </div>
        </div>
        {/* Key Features Card */}
        <div style={{ background: '#1A1A1A', borderRadius: 18, boxShadow: '0 2px 16px #C6282822', padding: '2rem 2rem 1.5rem 2rem', marginBottom: 32 }}>
          <div style={{ color: '#C62828', fontWeight: 700, fontSize: '1.25rem', marginBottom: 10 }}>Key Features</div>
          <ul style={{ color: '#B0BEC5', fontSize: '1.08rem', fontWeight: 400, lineHeight: 1.7, paddingLeft: 24, margin: 0 }}>
            <li>Utilizes state-of-the-art NLP techniques</li>
            <li>Automates risk detection and evaluation processes</li>
            <li>Seamlessly integrates with existing internal workflows</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CloudStorageSystem;
