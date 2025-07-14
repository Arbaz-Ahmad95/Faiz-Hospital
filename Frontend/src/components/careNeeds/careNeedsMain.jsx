import React from "react";

const CareNeedsMain = () => {
  const careNeeds = [
    {
      title: "Community focused",
      description: "Periodically updated services to meet the evolving needs of the community",
      Logo: "🤝",
    },
    {
      title: "Patient-centric approach",
      description: "Personalised care with a focus on comfort and recovery",
      Logo: "🧍‍⚕️",
    },
    {
      title: "Recovery-centered care",
      description: "Care that supports patients from hospital to home ensuring long-term well-being",
      Logo: "💪",
    },
    {
      title: "Experienced & Committed Team",
      description: "Dedicated team committed to providing exceptional care, every time to all",
      Logo: "👨‍⚕️",
    },
    {
      title: "Multi-Speciality Expertise",
      description: "From Emergency care to Ortho to Paediatrics to Gynaecology to Urology and more",
      Logo: "🏥",
    },
  ];

  return (
    <div className="w-full py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
        Why choose us for your care needs?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {careNeeds.map((need, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-3xl p-6 flex flex-col items-center text-center shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className=" text-white text-3xl p-3 rounded-md mb-4">
              {need.Logo}
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">{need.title}</h2>
            <p className="text-gray-600 text-sm">{need.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareNeedsMain;
