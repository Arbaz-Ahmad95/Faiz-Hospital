import React from "react";
const PatientMain = () => {

    const patientFeedback = [
        {
            name: "John Doe",
            feedback: "The care I received was exceptional. The staff was attentive and made me feel comfortable throughout my stay.",
            rating: 5,
        },
        {
            name: "Jane Smith",
            feedback: "I had a great experience with the doctors and nurses. They were very professional and caring.",
            rating: 4,
        },
        {
            name: "Alice Johnson",
            feedback: "The facilities were clean and well-maintained. I felt safe and well taken care of.",
            rating: 5,
        }
    ];

    return(
        <div className="w-full py-12 px-4 justify-center  bg-gray-100 h-auto text-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-900">What our patients say</h1>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto">
                    {patientFeedback.map((feedback, index) => (
                        <div key={index} className="bg-white rounded-3xl shadow-md p-6 mb-4 ">
                            <h2 className="text-xl font-semibold text-blue-900">{feedback.name}</h2>
                            <p className="text-gray-700 mt-2">{feedback.feedback}</p>
                            <div className="mt-2">
                                {"⭐".repeat(feedback.rating)}
                            </div>
                        </div>
                    ))}

                    

            </div>
            <div className="flex justify-center mt-10">
                 <button className="bg-blue-600  text-white text-lg px-5 py-2 rounded-full flex items-center space-x-4 justify-center hover:bg-blue-950 h-14">
                    <span>Read More Testimonials</span>
                       </button>
              </div>
                </div>
                 
        </div>
    )
}

export default PatientMain;