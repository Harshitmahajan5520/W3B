import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import TeamMember from './models/teamMemebers.js'; 
import Event from './models/events.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST',
  credentials: true,
}));
app.use(express.json()); 

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
    res.set('Cache-Control', 'no-cache'); 
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

app.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


