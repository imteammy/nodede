const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000
const jwt = require('jsonwebtoken');


const route = require('./routes/route');
route(app);




app.listen(PORT,() => {
    console.log(`Server is runnig on http://localhost:${PORT}`);
});