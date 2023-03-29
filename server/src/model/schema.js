const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  username: {
    type: String,
  },
  photo: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
