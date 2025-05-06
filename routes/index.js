const { application } = require("express");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("nicee");
});

router.get("/register");

module.exports = router;
