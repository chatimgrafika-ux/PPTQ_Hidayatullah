import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import TentangKamiPage from './pages/TentangKamiPage.jsx';
import KurikulumPage from './pages/KurikulumPage.jsx';
import SatuanPendidikanPage from './pages/SatuanPendidikanPage.jsx';
import ProgramUnggulanPage from './pages/ProgramUnggulanPage.jsx';
import VisiMisiPage from './pages/VisiMisiPage.jsx';
import SejarahPage from './pages/SejarahPage.jsx';
import PPDBPage from './pages/PPDBPage.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang-kami" element={<TentangKamiPage />} />
        <Route path="/kurikulum" element={<KurikulumPage />} />
        <Route path="/satuan-pendidikan" element={<SatuanPendidikanPage />} />
        <Route path="/program-unggulan" element={<ProgramUnggulanPage />} />
        <Route path="/visi-misi" element={<VisiMisiPage />} />
        <Route path="/sejarah" element={<SejarahPage />} />
        <Route path="/ppdb" element={<PPDBPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
