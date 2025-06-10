const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String }, // Kategori Adı
    slug: { type: String, unique: true }, // Kategori Slug'ı
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
