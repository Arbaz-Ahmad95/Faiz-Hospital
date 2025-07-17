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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full py-4 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 text-center">
        Frequently Asked Questions
      </h1>
      <div className="w-full max-w-2xl px-4 space-y-4">
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
    </div>
  );
};

export default AskQuestionMain;
