const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://editor:editor@cluster0.9q9dm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

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