import Episodes from "../models/Episodes.js";

// FİLME AİT DİZİLERİ GETİR
export const isSectionMovie = async (req, res) => {
  try {
    const { id } = req.query;

     // FİLMİ BULAMAZSA OLAN DURUM
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Film ID bilgisi eksik.",
      });
    }

    // FİLME AİT BÖLÜMLERİ BUL
    const data = await Episodes.find({ movie_id: id });
    // EĞER FİLME AİT BÖLÜM VARSA  
    if (data.length > 0) {
      return res.json({ success: true, data });
    } else {
      // FİLME AİT BÖLÜM YOKSA
      return res.json({
        success: false,
        message: "Film Bölümleri Bulunamadı!",
      });
    }
  } catch (error) {
    // HATA DURUMU
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Sunucu hatası.",
      error: error.message,
    });
  }
};

// SADECE SEÇİLİ BÖLÜMLERİ GETİR
export const isGetEpisode = async (req, res) => {
  try {
    const { id } = req.query;
    // EĞER BÖLÜM ID YOKSA 
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Bölüm ID bilgisi eksik.",
      });
    }

    // DİZİYE AİT EŞLEŞEN BÖLÜMÜ GETİR
    const data = await Episodes.find({ _id: id });

    // BÖLÜM VARSA 
    if (data.length > 0) {
      return res.json({ success: true, data });
    } else {
      // BÖLÜM YOKSA
      return res.json({
        success: false,
        message: "Bölüm Bulunamadı!",
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
