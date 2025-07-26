import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const faqs = [
  {
    question: "How can I schedule an appointment at Faiz Hospital?",
    answer: (
      <>
        You can schedule an appointment through:
        <ul className="list-disc ml-5 mt-2">
          <li>Phone: Call +91 9591523162</li>
          <li>Walk-in: Visit the hospital and book your appointment at the reception</li>
          <li>Online: Use our website’s booking feature to schedule an appointment</li>
        </ul>
      </>
    ),
  },
  {
    question: "What documents should I bring for my first visit to Faiz Hospital?",
    answer: "You should bring your ID proof, previous medical records, and any ongoing prescriptions.",
  },
  {
    question: "Can I choose my preferred doctor?",
    answer: "Yes, you can choose your doctor while booking your appointment.",
  },
  {
    question: "Do Faiz Hospital offer 24/7 emergency medical services?",
    answer: "Yes, our emergency services are available 24/7 with trained staff and facilities.",
  },
  {
    question: "What are the patient visiting hours, and are there any visitor restrictions?",
    answer: "Visiting hours are 4 PM to 7 PM. Only 1 visitor per patient is allowed at a time.",
  },
];

const AskQuestionMain = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!question.trim()) {
      setAnswer('❗ Please enter a question');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://faizcare.onrender.com/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error('Failed: ' + errorData.error);
      }

      const data = await response.json();
      setAnswer(data.answer);
      setQuestion('');
      setIsLoading(false);
    } catch (err) {
      setAnswer('⚠️ Error: ' + err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full py-10 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 text-center">
        Frequently Asked Questions
      </h1>

      {/* 🟦 Main Row: Chatbot + Ask Form */}
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-12 px-4 max-w-6xl">
        {/* Left: FAQ */}
        <div className="w-full md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4 cursor-pointer">
              <div
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center text-lg font-medium text-gray-700"
              >
                {faq.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </div>

              <Transition
                show={openIndex === index}
                enter="transition-all duration-500 ease-out"
                enterFrom="max-h-0 opacity-0"
                enterTo="max-h-96 opacity-100"
                leave="transition-all duration-600 ease-in"
                leaveFrom="max-h-96 opacity-100"
                leaveTo="max-h-0 opacity-0"
              >
                <div className="overflow-hidden mt-2 text-gray-700 text-sm">
                  {faq.answer}
                </div>
              </Transition>
            </div>
          ))}
        </div>

        {/* Right: Ask Question Form */}
        <div className="w-full md:w-1/2 h-[350px] border shadow-xl rounded-xl overflow-hidden bg-white">
          <div className="bg-blue-600 text-white p-4 text-xl font-semibold">
            🤖 Faiz Hospital Chat Assistant
          </div>

          <form onSubmit={handleSend} className="flex flex-col p-4 gap-3 border-t bg-white">
            <input
              type="text"
              className="border rounded-lg p-2 outline-none"
              placeholder="Ask your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg self-end"
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>

            {answer && (
              <div className="bg-gray-100 border rounded-lg p-3 text-sm text-gray-800">
                <span className="font-semibold text-blue-600">Answer:</span><br />
                {answer}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskQuestionMain;
