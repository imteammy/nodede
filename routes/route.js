const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();






module.exports = (app) => {
    app.get('/hero', async (req, res) => {

        // Connect MongoDB at default port 27017.
     await  mongoose.connect('mongodb+srv://peerawat:YDCOyOKDb1LEyUV8@nodedev.fgnykzv.mongodb.net/', {
            useNewUrlParser: true,
            useCreateIndex: true,
        }).then((success) => {
        const dbok = console.log("MongoDB connecting");
        res.send(dbok);
        res.end();
        }).catch((err) => {
        const dbnok =  console.log("Cannot connect to MongoDB" + err.message);
        res.send(dbnok);
        res.end();
        });
    });


}