const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      genre: { type: String, required: true },
      cast: [],
      ratings: { type: Number, required: true },
      release_date: { type: Date, required: true },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  const moviedetails = new mongoose.model("movies", movieSchema);
  
  module.exports = moviedetails;