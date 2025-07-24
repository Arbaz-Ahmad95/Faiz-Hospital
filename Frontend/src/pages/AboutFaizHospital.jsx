import React from 'react';
import Navbar from '../components/navbar/navbar.jsx';
import Footer from '../components/Fotteer/footerMain.jsx';

function AboutFaizHospital() {
  return (
    <>
      <Navbar />

      <div className="bg-white min-h-screen px-4 py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
          About Faiz Hospital
        </h1>

        <p className="text-gray-700 text-lg text-center mb-8 max-w-3xl mx-auto">
          Faiz Hospital is dedicated to providing quality healthcare with compassion and excellence. 
          Our mission is to serve every patient with advanced medical care, affordable services, and 
          a human touch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-center">
          <div>
            <img
              src="https://www.shutterstock.com/image-photo/modern-hospital-building-260nw-1942405900.jpg"
              alt="Faiz Hospital"
              className="rounded-2xl shadow-md"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
              <li>24x7 Emergency Services</li>
              <li>Experienced Doctors and Specialists</li>
              <li>Modern Operation Theatres & ICUs</li>
              <li>Affordable Health Packages</li>
              <li>Clean, Safe & Friendly Environment</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Our Vision</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            To become a trusted healthcare destination for all, offering high-standard treatment, 
            care, and patient satisfaction.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutFaizHospital;
