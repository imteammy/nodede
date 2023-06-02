const express = require('express');
const route = express.Router();


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send("Hello world");
    });
}