require('dotenv').config();
const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/aiRoutes');

const app = express();

// ✅ CORS setup (update this in production if needed)
app.use(cors({
  origin: 'http://https://faizcare.vercel.app/', // 👉 Change this to your frontend URL on Vercel after deploy
  methods: ['GET', 'POST'],
  credentials: true
}));

// ✅ Body parser
app.use(express.json());

// ✅ Root route (to check server is live)
app.get("/", (req, res) => {
  res.send("🟢 Backend is live!");
});

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
