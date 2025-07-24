import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/Fotteer/footerMain';

const doctors = [
  {
    name: 'Dr. Meena P',
    specialization: 'Obstetrics & Gynaecology',
    experience: '22 Years of experience',
    image: 'https://i.imgur.com/82NwqYi.png',
  },
  {
    name: 'Dr. Guruprasad',
    specialization: 'Cardiology',
    experience: '15 Years of experience',
    image: 'https://i.imgur.com/6Wn2kV7.png',
  },
  {
    name: 'Dr. Neha Sharma',
    specialization: 'Dermatology',
    experience: '10 Years of experience',
    image: 'https://i.imgur.com/LXrD6bs.png',
  },
  {
    name: 'Dr. Rajeev Sinha',
    specialization: 'Neurology',
    experience: '18 Years of experience',
    image: 'https://i.imgur.com/LXrD6bs.png',
  },
  {
    name: 'Dr. Priya R',
    specialization: 'Pediatrics',
    experience: '12 Years of experience',
    image: 'https://i.imgur.com/82NwqYi.png',
  },
  {
    name: 'Dr. Ashok T',
    specialization: 'Orthopaedics',
    experience: '20 Years of experience',
    image: 'https://i.imgur.com/6Wn2kV7.png',
  },
  {
    name: 'Dr. Anita Verma',
    specialization: 'General Medicine',
    experience: '16 Years of experience',
    image: 'https://i.imgur.com/LXrD6bs.png',
  },
];

function FindDoctor() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Find a Doctor</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctors.map((doc, index) => (
            <div key={index} className="flex items-center bg-white p-6 rounded-xl shadow-md">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-32 h-32 object-cover rounded-xl border"
              />
              <div className="ml-6 flex-1">
                <h2 className="text-xl font-bold">{doc.name}</h2>
                <p className="text-gray-600 mt-1">{doc.specialization}</p>
                <p className="text-sm text-gray-500 mt-1">{doc.experience}</p>

                <div className="mt-4 flex flex-wrap gap-4">
                  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition">
                    View Bio
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                    Book an Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FindDoctor;
