const express = require("express");
const router = express.Router();

const staffDB = require("../models/Staff");
router.get("/", async (req, res) => {
  try {
    await staffDB
      .find()
      .then((doc) => {
        res.status(200).send(doc);
      })
      .catch((error) => {
        res.status(500).send({
          status: false,
          message: "Unable to get the question details",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Unexpected error",
    });
  }
});
module.exports = router;
