exports.symptomCheck = async (req, res) => {
  try {
    const { age, gender, symptoms, duration, conditions, medications } = req.body;

    if (!age || !gender || !symptoms) {
      return res.status(400).json({ error: "Age, gender, and symptoms are required" });
    }

    const prompt = `
You are a symptom checker assistant for Faiz Hospital. A user has submitted the following details:

- Age: ${age}
- Gender: ${gender}
- Symptoms: ${symptoms}
- Duration: ${duration || "Not mentioned"}
- Existing Conditions: ${conditions || "None"}
- Medications: ${medications || "None"}

Based on this info, give a short and polite health suggestion. Don't diagnose deeply. Recommend visiting the related department if needed. 
End with: "Please visit Faiz Hospital for proper check-up."
`;

    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    res.json({ answer: reply });

  } catch (error) {
    console.error("Error in symptomCheck:", error);
    res.status(500).json({
      error: error.message || "Failed to check symptoms"
    });
  }
};
