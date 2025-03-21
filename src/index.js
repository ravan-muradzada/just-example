const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/blog-app')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));


app.get('/hello', (req, res) => res.send('Hello world from docker learning!'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
