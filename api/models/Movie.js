const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    name: { type: String }, // Film Adı
    slug: { type: String, unique: true }, // Film Slug'ı
    is_exclusive: { type: Boolean, default: false }, // MovieBear'a Özel Film mi?
    age_rating: { type: String }, // Yaş Sınırı
    genre_id: { type: mongoose.Schema.Types.ObjectId, ref: "Genre" }, // Filmin Türü
    release_year: { type: Number }, // Yayın Yılı
    duration: { type: Number }, // Süre (dakika cinsinden)
    summary: { type: String }, // Kısa Açıklama
    poster_path: { type: String }, // Poster Resmi
    trailer_url: { type: String }, // Fragman URL'si
    ticket:{type:Array}, // Dizi Kategorileri
    is_visible: { type: Boolean }, // Görünürlük Durumu
    is_featured_movie: { type: Boolean }, // Öne Çıkan Film mi?
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
