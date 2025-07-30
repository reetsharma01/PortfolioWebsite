




function Experience() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', minHeight: '80vh', padding: '2rem' }}>
      {/* Left: Internship vertical flow */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '3rem' }}>
        <div style={{ fontWeight: 500, marginBottom: '1rem' }}>Internship</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <div style={{ width: 70, height: 70, borderRadius: '50%', background: '#e0e7ff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 600, fontSize: '1.2rem', boxShadow: '0 2px 8px #0001', cursor: 'pointer', border: '2px solid #6366f1' }}>Algo</div>
          <div style={{ width: 70, height: 70, borderRadius: '50%', background: '#e0e7ff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 600, fontSize: '1.2rem', boxShadow: '0 2px 8px #0001', border: '2px solid #6366f1' }}>MDL</div>
          <div style={{ width: 70, height: 70, borderRadius: '50%', background: '#e0e7ff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 600, fontSize: '1.2rem', boxShadow: '0 2px 8px #0001', border: '2px solid #6366f1' }}>VESIT</div>
        </div>
        {/* Vertical line connecting circles */}
        <div style={{ position: 'absolute', left: 34, top: 70, width: 2, height: 180, background: '#6366f1', zIndex: -1 }}></div>
      </div>

      {/* Right: AlgoFlow details box */}
      <div style={{ minWidth: 320, maxWidth: 500, background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px #0002', padding: '2rem', position: 'relative' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '1.2rem', color: '#232323' }}>AlgoFlow</h2>
        <div style={{ marginBottom: '1rem', color: '#444', fontSize: '1.1rem' }}>
          {/* Placeholder for description lines */}
          <div>Algorithmic internship focused on problem solving and project development.</div>
          <div>Worked on real-world challenges and collaborative tasks.</div>
        </div>
        {/* Placeholder for a button or link */}
        <button style={{ marginTop: '1.5rem', padding: '0.7rem 2rem', background: '#6366f1', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>View Details</button>
      </div>
    </div>
  );
}

export default Experience;
