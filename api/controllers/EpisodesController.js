import Episodes from "../models/Episodes.js";

export const isSectionMovie = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Film ID bilgisi eksik.",
      });
    }

    const data = await Episodes.find({ movie_id: id });

    if (data.length > 0) {
      return res.json({ success: true, data });
    } else {
      return res.json({
        success: false,
        message: "Film Bölümleri Bulunamadı!",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Sunucu hatası.",
      error: error.message,
    });
  }
};
