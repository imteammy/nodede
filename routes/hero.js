const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const route = express.Router();

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useCreateIndex: true,
})
.then((connection) => { 
    console.log("Connect to MongoDB succesfully."); })
.catch((err) => {       
    console.log("Cannot connect to MongoDB");
});




module.exports = function (app) {

    app.get('/hero', (req, res) => {
        res.render('hero');
    });
    
    app.get('/hero/:name', (req, res) => {
        const heroname = req.param.name;
        res.render('hero', { heroname });
        res.end();
    }); 


}

