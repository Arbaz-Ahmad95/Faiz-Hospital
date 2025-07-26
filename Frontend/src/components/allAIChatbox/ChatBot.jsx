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
    <div className="w-full max-w-md mx-auto my-10 border shadow-xl rounded-xl overflow-hidden bg-white">
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
  );
};

export default ChatBot;
