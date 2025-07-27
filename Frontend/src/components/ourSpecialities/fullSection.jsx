import React from 'react';
import emergencyCare from '../../assets/emergencyCare.png';
import emergencyCare2 from '../../assets/emergencyCare2.png';
import emergencyCare3 from '../../assets/emergencyCare3.png';
import emergencyCare4 from '../../assets/emergencyCare4.png';
import emergencyCare5 from '../../assets/emergencyCare5.png';
import { Link } from 'react-router-dom';

const FullSection = ({ scrollToBook }) => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap w-full px-4 py-10 gap-6 justify-center items-start">
      {/* Left section */}
      <div className="w-full lg:w-1/4 bg-blue-700 text-white p-6 rounded-2xl">
        <h1 className="text-3xl font-bold mb-4">Our Specialities</h1>
        <p className="text-sm mb-6">
          From paediatric care to specialised treatments, our experienced team is
          dedicated to providing the highest quality care
        </p>

        <Link to="/specialties">
          <button className="w-full mb-4 border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-700 transition-all">
            See All Specialities →
          </button>
        </Link>

        <button
          onClick={scrollToBook}
          className="w-full bg-white text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-all"
        >
          📅 Book a Specialist Consultation
        </button>
      </div>

      {/* Right section */}
      <div className="w-full lg:w-2/4 flex flex-col gap-5">
        {[
          {
            title: 'Emergency Care',
            desc: '24/7 urgent medical care',
            image: emergencyCare,
          },
          {
            title: 'Orthopaedics & Spine Care',
            desc: 'Advanced bone, joint & spine care',
            image: emergencyCare4,
          },
          {
            title: 'Obstetrics & Gynaecology',
            desc: 'Maternity & women’s health care',
            image: emergencyCare2,
          },
          {
            title: 'General & Laparoscopic Surgery',
            desc: 'Expert surgical care solutions',
            image: emergencyCare3,
          },
          {
            title: 'General Medicine',
            desc: 'Comprehensive medical care services',
            image: emergencyCare5,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border rounded-lg hover:bg-gray-100 transition-all"
          >
            <div className="flex items-center gap-4 w-full">
              <img src={item.image} alt={item.title} className="w-32 h-24 object-cover rounded-lg" />
              <div>
                <h2 className="font-semibold text-xl">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
            <div className="text-xl text-blue-700 hover:text-white hover:bg-blue-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
              ↗
            </div>
          </div>
        ))}

        <button className="w-full sm:w-40 border border-blue-700 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-100 transition-all">
          See More →
        </button>
      </div>
    </div>
  );
};

export default FullSection;
