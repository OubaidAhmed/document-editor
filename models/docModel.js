var mongoose = require('mongoose');
var dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


const docSchema = mongoose.Schema({
  title: String,
  content: {
    type: String,
    default: ""
  },
  uploadedBy: String,
  date: {
    type: Date,
    default: Date.now
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Document', docSchema);