require('dotenv').config();
const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/aiRoutes');

const app = express();

// ✅ CORS setup
app.use(cors({
  origin: 'http://localhost:5173', // React app URL
  methods: ['GET', 'POST'],
  credentials: true
}));

// ✅ Body parser
app.use(express.json());

// ✅ API Routes
app.use('/api/ai', aiRoutes);

// ✅ Error handler
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err.stack);
  res.status(500).json({ error: err.message || 'Something went wrong!' });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
