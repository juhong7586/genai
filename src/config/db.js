const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://root:4cd9b2b44eaa86a1b3db62e6455a346fa08320628767b524201fe27206926f20@localhost:27017');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
module.exports = connectDB;