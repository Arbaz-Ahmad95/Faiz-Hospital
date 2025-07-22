import { useRef } from 'react';

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
import AskQuestionMain from './components/AskQuestion/askquestionMain.jsx';
import CallBackMain from './components/callBack/callBackMain.jsx';
import Footer from './components/Fotteer/footerMain.jsx';
import AIBoxMain from './components/allAIChatbox/AIChatboxMain.jsx';
import ChatBot from './components/allAIChatbox/ChatBot.jsx';
import BookAppointment from './components/allAIChatbox/BookAppointment.jsx';
import SymptomChecker from './components/allAIChatbox/syptomChecker.jsx';
function App() {
 
  const askQuestionRef = useRef(null); // 👈 Create ref for AskQuestionMain
  const appointment = useRef(null); // 👈 Create ref for BookAppointment
  const scrollToAsk = () => {
    askQuestionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBook = () => {
    appointment.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div>
      <Navbar />
      
      {/* 👇 Pass scroll function to AIBoxMain */}
      <AIBoxMain scrollToAsk={scrollToAsk} scrollToBook={scrollToBook} />

      <Header />
      <ImageBanner />
      <FullSection />
      <OurDoctorMain />
      <CareNeedsMain />
      <PatientMain />
      <HospitalLocation />

      {/* 👇 Attach ref to AskQuestionMain */}
      <div ref={askQuestionRef}>
        <AskQuestionMain />
      </div>

      <CallBackMain />
      <ChatBot />

       

      <div className="text-center py-6"  ref={appointment}>
  <h2 className="text-3xl font-bold text-blue-800">Book Appointment & Symptom Checker</h2>
  <p className="text-gray-600 mt-2">Choose your need and get started easily</p>
    </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 py-10">
      <div className="w-[400px]">
          <BookAppointment />
          </div>
      <div className="w-[400px]">
        <SymptomChecker />
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
