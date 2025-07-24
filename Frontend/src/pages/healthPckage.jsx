import React from 'react';
import Navbar from '../components/navbar/navbar.jsx';
import Footer from '../components/Fotteer/footerMain.jsx';
import { FaCheckCircle } from 'react-icons/fa';
import { FaHourglassHalf } from 'react-icons/fa';

const packages = [
  {
    title: 'Master Health',
    oldPrice: '₹9840',
    newPrice: '₹4250',
    tests: 77,
    items: [
      'Complete hemogram (CBC/ESR/PS)',
      'Blood glucose fasting',
      'Blood glucose postprandial',
      'HBA1c',
      'Blood group and RH typing',
      'RFT (Urea/Creatinine/Uric acid)',
      'Lipid profile',
      'Liver function test',
    ],
  },
  {
    title: 'Diabetic Screening',
    oldPrice: '₹2900',
    newPrice: '₹1800',
    tests: 37,
    items: [
      'Blood Glucose Fasting',
      'Blood Glucose Postprandial',
      'HBA1c',
      'Lipid Profile',
      'RFT (Urea/Creatinine/Uric acid)',
      'TSH',
      'Urine analysis',
      'ECG',
      'OP Consultation - First Visit',
    ],
  },
  {
    title: 'Senior Citizen Advanced',
    oldPrice: '₹11450',
    newPrice: '₹5400',
    tests: 58,
    items: [
      'CBC with ESR',
      'ECG',
      'Chest X-ray PA View',
      'OP Consultation - First Visit (Physician)',
      'RFT (Urea/Creatinine/Uric acid)',
      'USG - Abdomen and Pelvis',
      'Blood Glucose Fasting',
      'Blood Glucose Postprandial',
    ],
  },
];

function HealthPackages() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
          Health Checkup Packages
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border shadow hover:shadow-xl transition"
            >
              {/* Top gradient section */}
              <div className="bg-gradient-to-r from-indigo-400 to-blue-500 text-white rounded-t-2xl p-4 text-center">
                <h2 className="text-lg font-medium">{pkg.title}</h2>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <span className="line-through opacity-70">{pkg.oldPrice}</span>
                  <span className="text-2xl font-bold">{pkg.newPrice}</span>
                </div>
                <button className="mt-4 bg-white text-blue-600 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-blue-50 transition">
                  Book Now →
                </button>
              </div>

              {/* Test count */}
              <div className="bg-gray-100 py-3 px-4 flex justify-center items-center gap-2 text-sm text-gray-700">
                <FaHourglassHalf className="text-blue-600" />
                <span>No. of tests included:</span>
                <span className="font-bold text-blue-600">{pkg.tests}</span>
              </div>

              {/* Tests list */}
              <ul className="p-5 space-y-2 text-sm text-gray-700">
                {pkg.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-600 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HealthPackages;
