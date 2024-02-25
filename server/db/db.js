const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

  
const photoSchema = new mongoose.Schema({
  picUrl: { type: String, required: true },
  tag: { 
    type: String, 
    enum: ['holidays', 'events', 'nature'], 
    required: true 
  }, 
}, { timestamps: true }); 
const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
