
function GuestSpeakerPage() {
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
        <h1 style={{ color: '#C62828', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '2.4rem', letterSpacing: '0.04em', marginBottom: 8 }}>Guest Speaker</h1>
        <div style={{ color: '#B0BEC5', fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '1.1rem', marginBottom: 24 }}>
          Delivered impactful talks and workshops to inspire and educate peers and juniors.
        </div>
        <div style={{ color: '#FFFFFF', fontSize: '1.08rem', fontWeight: 400, lineHeight: 1.6, marginBottom: 18 }}>
          Shared insights on leadership, technology trends, and personal development, helping others grow in their academic and professional journeys.
        </div>
        <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ background: '#1A1A1A', borderRadius: 16, boxShadow: '0 2px 12px #C6282822', padding: '1.2rem 1.2rem', minWidth: 180 }}>
              <div style={{ color: '#C62828', fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>Role</div>
              <div style={{ color: '#FFFFFF', fontSize: '1.08rem', fontWeight: 500 }}>Guest Speaker</div>
            </div>
            <div style={{ background: '#1A1A1A', borderRadius: 16, boxShadow: '0 2px 12px #C6282822', padding: '1.2rem 1.2rem', minWidth: 180 }}>
              <div style={{ color: '#C62828', fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>Topics / Skills Shared</div>
              <div style={{ color: '#FFFFFF', fontSize: '1.08rem', fontWeight: 500 }}>Leadership, Technology Trends, Communication, Personal Development</div>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/assets/Guestspeakerpic.jpg" alt="Guest Speaker" style={{ width: 220, height: 180, objectFit: 'cover', borderRadius: 16, boxShadow: '0 2px 12px #0008' }} />
          </div>
        </div>
        <div style={{ background: '#1A1A1A', borderRadius: 16, boxShadow: '0 2px 12px #C6282822', padding: '1.2rem 1.2rem', marginBottom: 32 }}>
          <div style={{ color: '#C62828', fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>Impact</div>
          <div style={{ color: '#FFFFFF', fontSize: '1.08rem', fontWeight: 400, marginBottom: 8 }}>
            <span style={{ color: '#FFD54F', fontWeight: 700 }}>Inspired:</span> Students and peers to pursue excellence and innovation
          </div>
          <div style={{ color: '#FFFFFF', fontSize: '1.08rem', fontWeight: 400 }}>
            <span style={{ color: '#FFD54F', fontWeight: 700 }}>Educated:</span> Delivered workshops and talks on technology and leadership
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestSpeakerPage;
