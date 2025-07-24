import React from 'react';
import Navbar from '../components/navbar/navbar.jsx';
import Footer from '../components/Fotteer/footerMain.jsx';

const specialties = [
  {
    title: 'Emergency Care',
    tags: ['Accident care', 'Intensive care', 'Emergency procedures'],
    image: 'https://i.imgur.com/4WIXM3e.jpg',
  },
  {
    title: 'Orthopaedics & Spine Care',
    tags: ['Knee replacement', 'Hip replacement', 'Arthritis', 'And more'],
    image: 'https://i.imgur.com/ZmpojIO.jpg',
  },
  {
    title: 'Obstetrics & Gynaecology',
    tags: ['High-risk pregnancy', 'Hormonal imbalances', 'Reproductive health', 'And more'],
    image: 'https://i.imgur.com/GWKo1np.jpg',
  },
  {
    title: 'Cardiology',
    tags: ['Heart checkups', 'Bypass surgery', 'Stents', 'And more'],
    image: 'https://i.imgur.com/qL5y0pL.jpg',
  },
  {
    title: 'Neurology',
    tags: ['Stroke', 'Brain disorders', 'Spine surgery'],
    image: 'https://i.imgur.com/EsXAjll.jpg',
  },
  {
    title: 'Pediatrics',
    tags: ['Newborn care', 'Vaccinations', 'Growth checkups'],
    image: 'https://i.imgur.com/rOAdzkf.jpg',
  },
];

function OurSpecialties() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900">
          Healthcare Across Multiple Specialities
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border p-4 hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl"
              />
              <h2 className="text-xl font-semibold mt-4 mb-2">{item.title}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-3 py-1 text-sm rounded-full text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="border border-blue-500 text-blue-600 font-medium px-4 py-2 rounded-full hover:bg-blue-50 flex items-center gap-1">
                Know More <span className="ml-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OurSpecialties;
