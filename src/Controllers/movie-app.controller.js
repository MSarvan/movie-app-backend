const Movie_model = require("../Models/movie-app.model");
const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const data = await Movie_model.find().lean().exec();
    return res.status(200).send(data);
  } catch(err) {
    return res.status(500).send(err.message);
  }
});

router.post("", async (req, res) => {
    try {
      const data = await Movie_model.create(req.body);
      return res.status(200).send(data);
    } catch(err) {
      return res.status(500).send(err.message);
    }
  });

router.get("/:id", async (req, res) => {
  try {
    const data = await Movie_model.findById(req.params.id);
    return res.status(200).send(data);
  } catch(err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = await Movie_model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(data);
  } catch(err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Movie_model.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(data);
  } catch(err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;