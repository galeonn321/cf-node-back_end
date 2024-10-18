const mongoose = require("mongoose");
const MovieComment = require("./movieComments.model");
const Rating = require("./ratings.model");

const movieSchema = new mongoose.Schema({
  movieId: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  comments: [MovieComment.schema],
  ratings: [Rating.schema],
  watchProviders: {
    type: [String],
    required: false,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
