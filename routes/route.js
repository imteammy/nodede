const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();


module.exports = (app) => {
    app.get('/hero', async (req, res) => {
      try {
        // Connect to MongoDB
        await mongoose.connect('mongodb+srv://peerawat:YDCOyOKDb1LEyUV8@nodedev.fgnykzv.mongodb.net/', {
          useNewUrlParser: true,
          useCreateIndex: true,
        });
  
        console.log('MongoDB connected');
        res.send('MongoDB connected');
      } catch (err) {
        console.error('Cannot connect to MongoDB:', err.message);
        res.status(500).send('Cannot connect to MongoDB');
      }
    });
  };