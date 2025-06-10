import Movie from "../models/Movie.js";

// MovieBear'a Özel İçerik Filmler
export const isExclusiveMovie = async (req, res) => {
  try {
    const data = await Movie.find({ is_exclusive: true });

    if (data.length > 0) {
      return res.json({ success: true, data: data });
    } else {
      return res.json({
        success: false,
        message: "Özel İçerik Filmler Bulunamadı!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};
// Seçili Filmi Getirme
export const isSectionMovie = async (req, res) => {
  try {
    const { slug } = req.query;

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Slug bilgisi eksik.",
      });
    }

    const data = await Movie.find({ slug });

    if (data.length > 0) {
      return res.json({ success: true, data });
    } else {
      return res.json({
        success: false,
        message: "Film Bulunamadı!",
      });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Sunucu hatası.",
        error: error.message,
      });
  }
};
