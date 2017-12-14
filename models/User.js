const mongoose = require('mongoose');
// const Schema = mongoose.Schema; // This code can be "destructured", see below
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String
});

mongoose.model('users', userSchema);