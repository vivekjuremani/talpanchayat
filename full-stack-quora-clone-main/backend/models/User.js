const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: String,
  photo: String,
  email: String,
});

module.exports = mongoose.model("Users", UserSchema);
