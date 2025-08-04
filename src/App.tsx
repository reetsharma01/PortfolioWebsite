


import ExtraCurricular from './pages/extra-curricular';
import ExtraCurricularDetails from './pages/extra-curricular-details';
import './App.css'
import './theme.css'
import Navbar from './comoponents/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IeeeVesitPage from './pages/ieee-vesit';
import AiColeGionPage from './pages/ai-colegion';
import GuestSpeakerPage from './pages/guest-speaker';
import Home from './pages/home';
import Experience from './pages/experience';
import Projects from './pages/projects';
import CoCurricular from './pages/co-curricular';
import Expensia from './pages/uiux-design';
import BizVista from './pages/web-design';
import CloudStorageSystem from './pages/app-design';
import JavaProject from './pages/graphic-design';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extra-curricular" element={<ExtraCurricular />} />
        <Route path="/co-curricular" element={<CoCurricular />} />
        <Route path="/extra-curricular/details" element={<ExtraCurricularDetails />} />
        <Route path="/projects/uiux-design" element={<Expensia />} />
        <Route path="/projects/web-design" element={<BizVista />} />
        <Route path="/projects/app-design" element={<CloudStorageSystem />} />
        <Route path="/projects/graphic-design" element={<JavaProject />} />
        <Route path="/ieee-vesit" element={<IeeeVesitPage />} />
        <Route path="/ai-colegion" element={<AiColeGionPage />} />
        <Route path="/guest-speaker" element={<GuestSpeakerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
