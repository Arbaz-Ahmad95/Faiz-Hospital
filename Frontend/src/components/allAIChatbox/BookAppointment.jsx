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
    <div className="max-w-md mx-auto p-6 mt-8 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-center text-blue-700">Book Appointment 🏥</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Patient Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Department</option>
          <option value="Cardiology">Cardiology</option>
          <option value="General">General</option>
          <option value="Dental">Dental</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          {isLoading ? 'Booking...' : 'Book Appointment'}
        </button>
      </form>

      {answer && (
        <p className="mt-4 text-sm text-green-600 font-medium">🤖 {answer}</p>
      )}
    </div>
  );
}

export default BookAppointment;
