const express   = require('express');

const PORT      = process.env.PORT || 3000


const route = require('./routes/route');
route(app);

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