import React from "react";
import saif2 from "../../assets/saif2.jpeg";

const OurDoctorMain = () => {
  const doctors = [
    {
      name: "Dr. Geetha P Shanbhag",
      role: "Consultant Obstetrician & Gynaecologist",
      experience: "50 Years of experience",
      image: saif2,
    },
    {
      name: "Dr. Lata Anand",
      role: "Consultant Paediatrician",
      experience: "37 Years of experience",
      image: saif2,
    },
    {
      name: "Dr. Naresh Shetty",
      role: "Consultant Orthopaedic Surgeon",
      experience: "37 Years of experience",
      image: saif2,
    },

    {
      name: "Dr. Naresh Shetty",
      role: "Consultant Orthopaedic Surgeon",
      experience: "37 Years of experience",
      image: saif2,
    },

    {
      name: "Dr. Naresh Shetty",
      role: "Consultant Orthopaedic Surgeon",
      experience: "37 Years of experience",
      image: saif2,
    },
  ];

  return (
    <div>
    
    <div className="py-10 px-4 md:px-10 ">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-900">
        Our Doctors
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">All</button>
        <button className="border border-gray-400 px-4 py-2 rounded-lg">Ananya Hospital</button>
        <button className="border border-gray-400 px-4 py-2 rounded-lg">Shanbhag Hospital</button>
      </div>

      {/* Doctor Cards */}
<div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
    {doctors.map((doc, index) => (
      <div className="rounded-3xl overflow-hidden" key={index}>
        <div className="bg-white shadow-md overflow-hidden max-w-[390px] w-full mx-auto">
          <img src={doc.image} alt={doc.name} className="w-full h-[300px] object-cover" />
        </div>
        <div className="p-4 text-center">
          <h2 className="text-lg font-semibold">{doc.name}</h2>
          <p className="text-sm text-gray-600 mt-1">{doc.role}</p>
          <p className="text-sm text-gray-500 mt-1">{doc.experience}</p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Centered Book Button Below Cards */}
<div className="flex justify-center mt-10">
  <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-5 py-2 rounded-full flex items-center space-x-4">
    <span>Find a Doctor</span>
  </button>
</div>
</div>

</div>
  );
};

export default OurDoctorMain;
