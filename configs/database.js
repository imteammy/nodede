
const mongoose = require('mongoose');
require('dotenv').config();



const uri = 'mongodb+srv://peerawat:YDCOyOKDb1LEyUV8@nodedev.fgnykzv.mongodb.net';
const databaseName = "ROV";


const connectDB = async () => {
  try {
    await mongoose.connect(`${uri}/${databaseName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;


