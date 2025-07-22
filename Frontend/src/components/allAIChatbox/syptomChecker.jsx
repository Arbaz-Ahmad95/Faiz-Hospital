import React, { useState } from "react";
import axios from "axios";

export default function SymptomChecker() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    symptoms: [],
    otherSymptom: "",
    duration: "",
    conditions: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const symptomOptions = [
    "Headache",
    "Fever",
    "Cough",
    "Nausea",
    "Stomach pain",
    "Cold",
    "Other",
  ];

  const durationOptions = [
    "1 day",
    "2 days",
    "3 days",
    "1 week",
    "More than 1 week",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSymptomChange = (e) => {
    const selected = [...formData.symptoms];
    const value = e.target.value;

    if (selected.includes(value)) {
      setFormData({
        ...formData,
        symptoms: selected.filter((s) => s !== value),
      });
    } else {
      setFormData({
        ...formData,
        symptoms: [...selected, value],
      });
    }
  };

  const handleSubmit = async () => {
    const { age, gender, symptoms } = formData;

    if (!age || !gender || symptoms.length === 0) {
      alert("Please fill required fields");
      return;
    }

    const finalSymptoms = formData.symptoms.includes("Other")
      ? [...formData.symptoms.filter(s => s !== "Other"), formData.otherSymptom]
      : formData.symptoms;

    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/ai/symptom-check", {
        age: formData.age,
        gender: formData.gender,
        symptoms: finalSymptoms.join(", "),
        duration: formData.duration,
        conditions: formData.conditions,
        // medications removed from here
      });
      setResponse(res.data.answer);
    } catch (err) {
      setResponse("❌ Something went wrong");
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-xl mt-6">
      <h2 className="text-xl font-bold mb-4">🩺 Symptom Checker</h2>

      {/* Age */}
      <div className="mb-3">
        <label className="block mb-1">Age *</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter your age"
        />
      </div>

      {/* Gender */}
      <div className="mb-3">
        <label className="block mb-1">Gender *</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      {/* Duration */}
      <div className="mb-3">
        <label className="block mb-1">Duration</label>
        <select
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select duration</option>
          {durationOptions.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Symptoms */}
      <div className="mb-3">
        <label className="block mb-1">Symptoms * (select 1–3)</label>
        <div className="flex flex-wrap gap-2">
          {symptomOptions.map((symptom) => (
            <label key={symptom} className="text-sm">
              <input
                type="checkbox"
                value={symptom}
                checked={formData.symptoms.includes(symptom)}
                onChange={handleSymptomChange}
                className="mr-1"
              />
              {symptom}
            </label>
          ))}
        </div>

        {/* Show "Other" input */}
        {formData.symptoms.includes("Other") && (
          <input
            type="text"
            name="otherSymptom"
            placeholder="Describe other symptom"
            value={formData.otherSymptom}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
          />
        )}
      </div>

      {/* Conditions */}
      <div className="mb-3">
        <label className="block mb-1">Existing Conditions</label>
        <input
          type="text"
          name="conditions"
          value={formData.conditions}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Diabetes, BP, etc."
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        disabled={isLoading}
      >
        {isLoading ? "Checking..." : "Check Symptoms"}
      </button>

      {/* Result */}
      {response && (
        <div className="mt-5 bg-gray-100 p-3 rounded border">
          <p><strong>Gemini says:</strong></p>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
