const express = require("express");
const router = express.Router();

const questionRouter = require("./Question");
const answerRouter = require("./Answer");
const userRouter = require("./User");
const staffRouter = require("./Staff");
router.get("/", (req, res) => {
  res.send("This api is reserved for quora clone");
});

router.use("/questions", questionRouter);
router.use("/answers", answerRouter);
router.use("/users", userRouter);
router.use("/staffs", staffRouter);
module.exports = router;
