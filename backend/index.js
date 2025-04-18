const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');
const appointmentRoutes = require('./routes/appointments');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect('mongodb://127.0.0.1:27017/healthverse', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// PostgreSQL Connection using Sequelize
const sequelize = new Sequelize('postgres', 'postgres', '2003', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('PostgreSQL Connected');
  })
  .catch((err) => {
    console.error('Unable to connect to PostgreSQL:', err);
  });

// Routes
app.use('/api/appointments', appointmentRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('HealthVerse Backend is running...');
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
