const mongoose = require("mongoose");

const EpisodeSchema = new mongoose.Schema(
  {
    movie_id: { type: mongoose.Schema.Types.ObjectId, ref:"Movie" }, // Film ID
    title: { type: String }, // Dizi Bölğm Başlığı
    video_url: { type: String }, // Dizi  Bölüm İframe Url Link
    description: { type: String }, // Dizi Bölüm Açıklaması
    episode_image: { type: String },  // Dizi Bölüm Temsili Görsel
  },
  { timestamps: true }
);

module.exports = mongoose.model("Episode", EpisodeSchema);
