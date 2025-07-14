import Navbar from './components/navbar/navbar.jsx';
import React from 'react';
import Header from './components/headerSection.jsx';
import ImageBanner from './components/imageBanner.jsx';
import FullSection from './components/ourSpecialities/fullSection.jsx';
import OurDoctorMain from '../src/components/OurDoctor/ourDoctorMain.jsx';
import CareNeedsMain from './components/careNeeds/careNeedsMain.jsx';
import PatientMain from './components/patientFeedback/patientMain.jsx';
import HospitalLocation from './components/hospitalLocation/hospitalLocationMain.jsx';
import { Hospital } from 'lucide-react';
function App() {
 

  return (
    <>
      <div>

        <Navbar/>
        <Header/>
        <ImageBanner/>
        <FullSection/>
        <OurDoctorMain/>
        <CareNeedsMain/>
        <PatientMain/>
         <HospitalLocation/>
      </div>
    </>
  )
}

export default App
