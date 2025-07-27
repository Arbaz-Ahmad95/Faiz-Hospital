import React, { useState } from 'react';

const ChatBot = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    } catch (err) {
      setAnswer('⚠️ Error: ' + err.message);
    } finally {
      setIsLoading(false);
      setQuestion('');
    }
  };

  return (
      <div className="w-full max-w-md mx-auto my-8 sm:my-10 border shadow-lg rounded-xl bg-white">
      {/* Header */}
      <div className="bg-blue-700 text-white text-center p-4 text-xl sm:text-2xl font-semibold rounded-t-xl">
        🤖 Faiz Hospital Assistant
      </div>

      {/* Form */}
      <form onSubmit={handleSend} className="flex flex-col gap-4 p-4">
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Ask your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-4 py-2 rounded-lg transition duration-200"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>

        {answer && (
          <div className="bg-gray-50 border rounded-lg p-3 text-sm sm:text-base text-gray-800">
            <p className="font-medium text-blue-600 mb-1">Answer:</p>
            <p>{answer}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ChatBot;
