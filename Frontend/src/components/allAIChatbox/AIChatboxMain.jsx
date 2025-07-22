import React from "react";
import chatbot from "../../assets/AI-chat.gif";

const AIBoxMain = ({ scrollToAsk ,scrollToBook}) => {
  return (
    <div className=" bg-white text-center p-6 flex flex-col items-center justify-start space-y-10">

      {/* Welcome Text */}
      <div className="space-y-2">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
          Welcome to Faiz Hospital
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          How can we assist you today?
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full px-4">
        <div className="bg-gray-100 rounded-2xl p-6 shadow-md flex flex-col items-center space-y-4 hover:shadow-lg">
          <div className="bg-purple-300 p-4 rounded-full">
            <img src={chatbot} alt="" />
          </div>
          <h3 className="text-xl font-bold">Chat with AI Assistant</h3>
          <p className="text-sm text-gray-600">Get answers to your health questions</p>
                   <button
          onClick={scrollToAsk} // 👈 This triggers scroll
          className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition"
        >
          Start Chat
        </button>

        </div>

        <div className="bg-gray-100 rounded-2xl p-6 shadow-md flex flex-col items-center space-y-4 hover:shadow-lg">
          <div className="bg-purple-300 p-4 rounded-full">
            <span className="text-4xl">📅</span>
          </div>
          <h3 className="text-xl font-bold">Book Appointment</h3>
          <p className="text-sm text-gray-600">Schedule a visit with our doctors</p>
           <button onClick={scrollToBook}
           className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
            Book Now
          </button>
        </div>

        <div className="bg-gray-100 rounded-2xl p-6 shadow-md flex flex-col items-center space-y-4 hover:shadow-lg">
          <div className="bg-purple-300 p-4 rounded-full">
            <span className="text-4xl">📋</span>
          </div>
          <h3 className="text-xl font-bold">Symptom Checker</h3>
          <p className="text-sm text-gray-600">Check your symptoms online</p>
           <button onClick={scrollToBook}
            className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
            Start Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIBoxMain;
