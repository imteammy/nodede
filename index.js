const express = require('express');
const app = express();
const PORT = 3000


app.get('/', (req, res) => {
    res.send('Hello Word!');
});

app.get('/about', (req, res) => {
    res.send('About Word!');
});

app.get('/contact', (req, res) => {
    res.send('Contact Word!');
});

app.get('/login', (req, res) => {
    res.send('Login Word!');
});



module.exports = app;