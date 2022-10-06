const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionName: String,
  questionUrl: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "answers",
  },
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedislike: Number,
  user: Object,
});

module.exports = mongoose.model("Questions", QuestionSchema);
