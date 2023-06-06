const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.mongodb_uri;


// Connect MongoDB at default port 27017.
mongoose.connect('mongodb+srv://peerawat:YDCOyOKDb1LEyUV8@nodedev.fgnykzv.mongodb.net/', {
    useNewUrlParser: true,
//    useCreateIndex: true,
    connectTimeoutMS: 1500
}).then(connection => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log(err.message);
})
