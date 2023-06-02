const express   = require('express');
const mongoose  = require('mongoose');
const bodyPaser = require('body-parser')
const flash     = require('connect-flash');
const app       = express();
const PORT      = process.env.PORT || 3000
const jwt       = require('jsonwebtoken');


const route = require('./routes/route');
route(app);

app.use(bodyPaser.urlencoded({ extended : true }));
app.use(bodyPaser.json())

app.use(flash());
app.use()

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

// app.listen(PORT,() => {
//     console.log(`Server is runnig on http://localhost:${PORT}`);
// });

module.exports = app;