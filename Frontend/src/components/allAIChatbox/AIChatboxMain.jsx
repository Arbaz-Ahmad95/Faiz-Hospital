import React from "react";
import chatbot from "../../assets/AI-chat.gif";

const AIBoxMain = ({ scrollToAsk ,scrollToBook}) => {
  return (
    <div className="bg-white text-center py-10 px-4 flex flex-col items-center space-y-10">
      {/* Welcome Text */}
      <div className="space-y-2">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
          Welcome to Faiz Hospital
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          How can we assist you today?
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* AI Assistant */}
        <div className="bg-gray-100 rounded-2xl p-6 shadow-md flex flex-col items-center space-y-4 hover:shadow-lg transition-all">
          <div className="bg-purple-200 p-4 rounded-full">
            <img src={chatbot} alt="Chatbot Assistant" className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Chat with AI Assistant</h3>
          <p className="text-sm text-gray-600 text-center">Get quick answers to your health questions.</p>
          <button
            onClick={scrollToAsk}
            className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-all"
          >
            Start Chat
          </button>
        </div>

        {/* Book Appointment */}
        <div className="bg-gray-100 rounded-2xl p-6 shadow-md flex flex-col items-center space-y-4 hover:shadow-lg transition-all">
          <div className="bg-purple-200 p-4 rounded-full">
            <span className="text-4xl">📅</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800">Book Appointment</h3>
          <p className="text-sm text-gray-600 text-center">Schedule your visit with our expert doctors.</p>
          <button
            onClick={scrollToBook}
            className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-all"
          >
            Book Now
          </button>
        </div>

        {/* Symptom Checker */}
        <div className="bg-gray-100 rounded-2xl p-6 shadow-md flex flex-col items-center space-y-4 hover:shadow-lg transition-all">
          <div className="bg-purple-200 p-4 rounded-full">
            <span className="text-4xl">📋</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800">Symptom Checker</h3>
          <p className="text-sm text-gray-600 text-center">Check your symptoms from home.</p>
          <button
            onClick={scrollToBook}
            className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-all"
          >
            Start Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIBoxMain;
