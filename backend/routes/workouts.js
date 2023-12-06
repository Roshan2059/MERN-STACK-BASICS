const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "HELLO!!! WELCOME" });
});
router.get("/:id", (req, res) => {
  res.json({ msg: "HELLO!!! WELCOME" });
});
router.post("/", (req, res) => {
  res.json({ msg: "HELLO!!! WELCOME" });
});
router.patch("/:id", (req, res) => {
  res.json({ msg: "HELLO!!! WELCOME" });
});
router.delete("/:id", (req, res) => {
  res.json({ msg: "HELLO!!! WELCOME" });
});

module.exports = router;
