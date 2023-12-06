const express = require("express");
const Workout = require("../models/workoutModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "HELLO!!! WELCOME" });
});
router.get("/:id", (req, res) => {
  res.json({ msg: "HELLO!!! WELCOME" });
});
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch {
    res.status(400).json({ message: error.message });
  }
});
router.patch("/:id", (req, res) => {
  res.json({ msg: "HELLO!!! WELCOME" });
});
router.delete("/:id", (req, res) => {
  res.json({ msg: "HELLO!!! WELCOME" });
});

module.exports = router;
