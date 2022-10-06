const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String,
  dob: String,
  image: String,
});

module.exports = mongoose.model("Staffs", StaffSchema);
