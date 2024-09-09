var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://editor:editor@cluster0.9q9dm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  username: String,
  isBlocked: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
