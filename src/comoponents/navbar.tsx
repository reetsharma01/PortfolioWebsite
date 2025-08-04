

import '../App.css';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className="app-bar" style={{ width: '100vw', left: 0, position: 'fixed', top: 0, zIndex: 100, background: '#232323', display: 'flex', alignItems: 'center', padding: '0 2vw', height: '3.5rem' }}>
    <div className="app-bar-left" style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: 0, color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
        {/* You can add a logo or text here if needed */}
      </Link>
    </div>
    <div className="app-bar-right" style={{ display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', flex: 1, textAlign: 'center', padding: '0.5rem 0', fontWeight: 500 }}>Home</Link>
      <Link to="/experience" style={{ color: '#fff', textDecoration: 'none', flex: 1, textAlign: 'center', padding: '0.5rem 0', fontWeight: 500 }}>Experience</Link>
      <Link to="/projects" style={{ color: '#fff', textDecoration: 'none', flex: 1, textAlign: 'center', padding: '0.5rem 0', fontWeight: 500 }}>Projects</Link>
      <Link to="/co-curricular" style={{ color: '#fff', textDecoration: 'none', flex: 1, textAlign: 'center', padding: '0.5rem 0', fontWeight: 500 }}>Co-Curricular</Link>
      <Link to="/extra-curricular" style={{ color: '#fff', textDecoration: 'none', flex: 1, textAlign: 'center', padding: '0.5rem 0', fontWeight: 500 }}>Achievements</Link>
    </div>
  </nav>
);

export default Navbar;
