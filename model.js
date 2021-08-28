const mongoose = require('mongoose')

const user = new mongoose.Schema({
  name:{ type: String, required: [true,"User name is Required"] },
  email:{ type: String, required: [true,"User email is Required"] },
  created_on: {type: Date, default: Date.now},
});

module.exports = mongoose.model('User', user)