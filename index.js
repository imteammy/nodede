const express = require('express');
const app = express();
const PORT = 3000;

const routes = require('./routes/route');
routes(app);

app.get('/about', (req, res) => {
    res.send('About Word!');
});

app.get('/contact', (req, res) => {
    res.send('Contact Word!');
});

app.get('/login', (req, res) => {
    res.send('Login Word!');
});



module.exports = app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
