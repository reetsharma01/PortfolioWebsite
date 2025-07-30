

function Projects() {
  return (
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'flex-start', minHeight: '80vh', padding: '2rem' }}>
      {[1, 2, 3].map((card, idx) => (
        <div key={idx} style={{ width: 280, background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px #0002', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Project image placeholder */}
          <div style={{ width: '100%', height: 120, background: '#e0e7ff', borderRadius: 8, marginBottom: '1rem' }}></div>
          {/* Project title placeholder */}
          <div style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.7rem', textAlign: 'center' }}>Project Title</div>
          {/* Project description lines */}
          <div style={{ color: '#444', fontSize: '1rem', marginBottom: '0.5rem', textAlign: 'center' }}>Description line 1</div>
          <div style={{ color: '#444', fontSize: '1rem', marginBottom: '0.5rem', textAlign: 'center' }}>Description line 2</div>
          <div style={{ color: '#444', fontSize: '1rem', marginBottom: '1rem', textAlign: 'center' }}>Description line 3</div>
          {/* Button placeholder */}
          <button style={{ marginTop: 'auto', padding: '0.6rem 1.5rem', background: '#6366f1', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>View</button>
        </div>
      ))}
    </div>
  );
}

export default Projects;
