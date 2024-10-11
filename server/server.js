import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import TeamMember from './models/teamMemebers.js';  // Your model file

const app = express();

// Middleware for CORS configuration
app.use(cors({
  origin: 'http://localhost:5173',  // Update this to allow requests from the new frontend URL
  methods: 'GET,POST',
  credentials: true,
}));
app.use(express.json());  // To parse JSON data

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/W3B', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Route to get team members
app.get('/team-members', async (req, res) => {
  try {
    const members = await TeamMember.find();
    res.set('Cache-Control', 'no-cache');  // Disable caching for fresh data
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to insert a new team member (optional for testing)
app.post('/team-members', async (req, res) => {
  try {
    const newMember = new TeamMember(req.body);
    await newMember.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
