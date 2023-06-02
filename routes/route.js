const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb+srv://peerawat:YDCOyOKDb1LEyUV8@nodedev.fgnykzv.mongodb.net/', {
    //useNewUrlParser: true,
    //useCreateIndex: true,
}).then(() => {
    console.log("MongoDb connecting");
}).catch(() => {
    console.log("Cannot connect to MongoDB");
})


module.exports = (app) => {
    app.get('/hero', (req, res) => {
        res.send("Hello world");
    });


}