import React from 'react';
import emergencyCare from '../../assets/emergencyCare.png';
import emergencyCare2 from '../../assets/emergencyCare2.png';
import emergencyCare3 from '../../assets/emergencyCare3.png';
import emergencyCare4 from '../../assets/emergencyCare4.png';
import emergencyCare5 from '../../assets/emergencyCare5.png';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Emergency Care",
    desc: "24/7 medical emergency services with expert team and equipment.",
    image: emergencyCare
  },
  {
    title: "Pediatric Services",
    desc: "Specialized care for children by experienced pediatricians.",
    image: emergencyCare2
  },
  {
    title: "Cardiology",
    desc: "Heart health services with expert cardiologists and testing.",
    image: emergencyCare3
  },
  {
    title: "Dental Care",
    desc: "Complete oral care including cleaning, surgery and cosmetics.",
    image: emergencyCare4
  },
  {
    title: "Orthopedic Clinic",
    desc: "Bone & joint treatments for injuries and arthritis.",
    image: emergencyCare5
  }
];

const FullSection = ({scrollToBook}) => {
  return (
    <div className="flex flex-col lg:flex-row w-full px-4 sm:px-6 py-10 justify-center">
      
      {/* Left Section */}
      <div className="lg:w-1/4 bg-blue-700 text-white p-6 rounded-2xl mb-10 lg:mb-0 lg:mr-10">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Our Specialities</h1>
        <p className="text-sm sm:text-base mb-6">
          From paediatric care to specialised treatments, our experienced team is
          dedicated to providing the highest quality care.
        </p>
         <Link to="/specialties"><button className="bg-transparent border border-white text-white px-6 py-2 rounded-full mb-4 w-full">
          See All Specialities →
        </button>
        </Link>
        <button onClick={scrollToBook}
         className="bg-white text-blue-700 px-6 py-2 rounded-full w-full max-w-xs mx-auto text-center"
>
          📅 Book a Specialist Consultation
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/4 flex flex-col gap-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 hover:bg-gray-100 transition-all"
          >
            <div className="flex items-center gap-4 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-20 sm:w-60 sm:h-24 object-cover rounded-lg"
              />
              <div>
                <h2 className="font-semibold text-xl sm:text-2xl">{item.title}</h2>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </div>
            </div>
            <div
              className="text-xl text-gray-700 mt-2 sm:mt-0 hover:text-white hover:bg-blue-900 hover:rounded-full hover:w-10 hover:h-10 hover:flex hover:items-center hover:justify-center transition-all duration-300"
              aria-label="More info"
            >
              <ArrowUpRight />
            </div>
          </div>
        ))}

        <button className="mt-4 bg-transparent px-6 py-2 rounded-full font-medium border border-blue-800 text-blue-700 w-fit">
          See More →
        </button>
      </div>
    </div>
  );
};

export default FullSection;
