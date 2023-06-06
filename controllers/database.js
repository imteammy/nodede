
const mongoose = require('mongoose');
require('dotenv').config();



const uri = 'mongodb+srv://peerawat:YDCOyOKDb1LEyUV8@nodedev.fgnykzv.mongodb.net';
const databaseName = "ROV";



mongoose.connect(`${uri}/${databaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000
  })
  .then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log(err.message);
});

