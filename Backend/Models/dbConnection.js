const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://vverma7271:lPV3bER3u4OO0oKB@cluster0.yn2dkxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true, // Optional with Mongoose 6+
      useUnifiedTopology: true // Optional with Mongoose 6+
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
