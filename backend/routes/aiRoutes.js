const express = require('express');
const router = express.Router();
const { askQuestion, symptomCheck } = require('../controllers/aiControllers.js');

router.post('/ask', askQuestion);
router.post('/symptom-check', symptomCheck);

module.exports = router;
