import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurSpecialties from './pages/ourSpecialtiesinner'; // ✅ import your page
import FindDoctor from './pages/findDoctor';
import HealthPackages from './pages/healthPckage';
import AboutFaizHospital from './pages/aboutFaizHospital';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialties" element={<OurSpecialties />} />
        <Route path="/finddoctor" element={<FindDoctor />} />
        <Route path="/healthpackage" element={<HealthPackages/>} />
        <Route path="/about" element={<AboutFaizHospital/>} />
      </Routes>
    </Router>
  );
}

export default App;
