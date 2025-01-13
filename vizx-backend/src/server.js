const express = require('express');
const cors = require('cors');
const connectDB = require('./config');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
const MONGODB_URI = 'mongodb://localhost:27017/vizx-db' // for local MongoDB
// OR use MongoDB Atlas URI
// const MONGODB_URI = 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err))

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Vizx Backend is running');
});

// Listen on the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
