const { askQuestion, symptomCheck } = require("../controllers/syptomCheckerController");

router.post("/ask", askQuestion);
router.post("/symptom-check", symptomCheck); // 🔥 new endpoint
