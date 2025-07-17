import React from 'react';
import emergencyCare from '../../assets/emergencyCare.png';
import emergencyCare2 from '../../assets/emergencyCare2.png';
import emergencyCare3 from '../../assets/emergencyCare3.png';
import emergencyCare4 from '../../assets/emergencyCare4.png';
import emergencyCare5 from '../../assets/emergencyCare5.png';
import { ArrowUpRight } from 'lucide-react'; // optional icon lib (or use →)

const FullSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full px-6 py-10 justify-center ">
      {/* Left section */}
      <div className="md:w-1/5 h-96 bg-blue-700 text-white p-8 rounded-2xl mb-10 md:mb-0 md:mr-10">
        <h1 className="text-4xl font-semibold mb-4">Our Specialities</h1>
        <p className="text-base mb-8">
          From paediatric care to specialised treatments, our experienced team is
          dedicated to providing the highest quality care
        </p>
        <button className="bg-transparent px-6 py-3 rounded-full font-medium mb-4 w-full border-black-800 border text-white-700">
          See All Specialities →
        </button>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-medium w-full">
          📅 Book a Specialist Consultation
        </button>
      </div>

      {/* Right section */}
      <div className="md:w-2/5 flex flex-col gap-6 ">
        {[
          {
            title: 'Emergency Care',
            desc: '24/7 urgent medical care',
            image:emergencyCare,
          },
          {
            title: 'Orthopaedics & Spine Care',
            desc: 'Advanced bone, joint & spine care',
            image:emergencyCare4,
          },
          {
            title: 'Obstetrics & Gynaecology',
            desc: 'Maternity & women’s health care',
            image:emergencyCare2,
          },
          {
            title: 'General & Laparoscopic Surgery',
            desc: 'Expert surgical care solutions',
            image:emergencyCare3,
          },
          {
            title: 'General Medicine',
            desc: 'Comprehensive medical care services',
            image:emergencyCare5,
          },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-4 hover:bg-gray-100">
            <div className="flex items-center gap-4">
              <img src={item.image} alt="" className="w-60 h-24 object-cover rounded-lg" />
              <div>
                <h2 className="font-semibold text-2xl">{item.title}</h2>
                <p className="text-lg text-gray-600">{item.desc}</p>
              </div>
            </div>
            <div className="text-xl text-gray-800 hover:text-4xl hover:text-white hover:w-16 hover:h-10 hover:bg-blue-950 hover:rounded-full hover:flex hover:items-center hover:justify-center transition-all duration-300">
              ↗
            </div>
          </div>
        ))}

       <button className="bg-transparent px-6 py-3 rounded-full font-medium mb-4 w-40 border-blue-800 border text-blue-700">
          See More →
        </button>
      </div>
    </div>
  );
};

export default FullSection;
