import React, { useState } from 'react';

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    date: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.department || !formData.date) {
      alert('Please fill required fields.');
      return;
    }

    setIsLoading(true);

    try {
      const prompt = `
A user wants to book an appointment at Faiz Hospital. 
Details:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Department: ${formData.department}
- Date: ${formData.date}
- Message: ${formData.message || 'N/A'}

Reply like: "Thank you, your appointment is booked."
`;

      const response = await fetch('https://faizcare.onrender.com/api/ai/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: prompt }),
      });

      const data = await response.json();
      setAnswer(data.answer);
      setFormData({
        name: '',
        phone: '',
        email: '',
        department: '',
        date: '',
        message: ''
      });

    } catch (err) {
      setAnswer('⚠️ Error: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 sm:p-6 mt-10 bg-white shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        🏥 Book Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Patient Full Name *"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">Select Department *</option>
          <option value="Cardiology">Cardiology</option>
          <option value="General">General</option>
          <option value="Dental">Dental</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <textarea
          name="message"
          placeholder="Any Message (Optional)"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
        >
          {isLoading ? 'Booking...' : 'Book Appointment'}
        </button>
      </form>

      {answer && (
        <div className="mt-5 bg-green-50 text-green-700 p-3 rounded-md border border-green-300">
          <strong>🤖 Response:</strong><br />
          {answer}
        </div>
      )}
    </div>
  );
}

export default BookAppointment;
