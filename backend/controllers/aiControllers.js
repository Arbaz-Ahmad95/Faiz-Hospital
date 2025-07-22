const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const MODEL_NAME = "gemini-1.5-flash";

exports.askQuestion = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Please enter a hospital-related question" });
    }

    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: `
You are a chatbot for Faiz Hospital. Only answer hospital-related questions (departments, doctors, timing, appointments).
If not related, reply: "I can only answer health/hospital questions."
              `
            }
          ]
        }
      ]
    });

    const result = await chat.sendMessage(question);
    const response = await result.response;
    const text = response.text();

    res.json({ answer: text });

  } catch (error) {
    console.error("Error in askQuestion:", error);
    res.status(500).json({ error: error.message || "Failed to respond" });
  }
};

exports.symptomCheck = async (req, res) => {
  try {
    const { age, gender, symptoms, duration, conditions, medications } = req.body;

    if (!age || !gender || !symptoms) {
      return res.status(400).json({ error: "Age, gender, and symptoms are required" });
    }

    const prompt = `
A user submitted this info:

- Age: ${age}
- Gender: ${gender}
- Symptoms: ${symptoms}
- Duration: ${duration || "Not mentioned"}
- Existing Conditions: ${conditions || "None"}
- Medications: ${medications || "None"}

Give a short health suggestion (no full diagnosis). End with: "Please visit Faiz Hospital for proper check-up."
    `;

    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    res.json({ answer: reply });

  } catch (error) {
    console.error("Error in symptomCheck:", error);
    res.status(500).json({ error: error.message || "Failed to check symptoms" });
  }
};
