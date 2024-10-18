const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MONGO_URI, {
    connectTimeoutMS: 30000, // 30 seconds timeout
    socketTimeoutMS: 45000,  // 45 seconds socket timeout
  })
  .then(() => {
    console.log('MongoDB connected!');
    mongoose.connection.close();
  })
  .catch((err) => console.error('MongoDB connection error:', err));
  mongoose.set('debug', true);