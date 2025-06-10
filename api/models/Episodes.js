const mongoose = require("mongoose");

const EpisodeSchema = new mongoose.Schema(
  {
    movie_id: { type: mongoose.Schema.Types.ObjectId, ref:"Movie" },
    title: { type: String },
    video_url: { type: String },
    description: { type: String },
    episode_image: { type: String }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Episode", EpisodeSchema);
