
import React from 'react';
function CoCurricular() {
  return (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', minHeight: '80vh', padding: '2rem' }}>
      {/* Left: Tree structure */}
      <div style={{ minWidth: 260 }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Co-Curricular</h2>
        <ul style={{ fontSize: '1.15rem', color: '#232323', listStyle: 'disc', marginLeft: 20 }}>
          <li style={{ marginBottom: '1.2rem' }}>
            IEEE-VESIT
            <ul style={{ listStyle: 'circle', marginLeft: 24, marginTop: 8 }}>
              <li>PRO</li>
              <li>Women</li>
              <li>SE Cord.</li>
            </ul>
          </li>
          <li>
            AIC
            <ul style={{ listStyle: 'circle', marginLeft: 24, marginTop: 8 }}>
              <li>PRO</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Right: 2x2 photo grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '1.5rem', minWidth: 320, maxWidth: 420 }}>
        <div style={{ background: '#e0e7ff', borderRadius: 8, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500 }}>Photo 1</div>
        <div style={{ background: '#e0e7ff', borderRadius: 8, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500 }}>Photo 2</div>
        <div style={{ background: '#e0e7ff', borderRadius: 8, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500 }}>Photo 3</div>
        <div style={{ background: '#e0e7ff', borderRadius: 8, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500 }}>Photo 4</div>
      </div>
    </div>
  );
}

export default CoCurricular;
