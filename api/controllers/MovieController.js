import mongoose from "mongoose";
import Movie from "../models/Movie.js";

// MOVİEBEAR'A ÖZEL FİLMLER
export const isExclusiveMovie = async (req, res) => {
  try {
    // is_exclusive alanı true olan filmler
    const data = await Movie.find({ is_exclusive: true });

    if (data.length > 0) {
      // Film varsa
      return res.json({ success: true, data: data });
    } else {
      // Film Yoksa
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
// SEÇİLİ FİLMİ GETİRME
export const isSectionMovie = async (req, res) => {
  try {
    const { slug } = req.query;
    // Eğer slug yoksa
    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Slug bilgisi eksik.",
      });
    }
    // Slug ile eşleşen filmi bul
    const data = await Movie.find({ slug });
    // Film varsa
    if (data.length > 0) {
      return res.json({ success: true, data });
    } else {
      // Film yoksa
      return res.json({
        success: false,
        message: "Film Bulunamadı!",
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
// ÖNE ÇIKAN DİZİLER
export const highlightsMovieList = async (req, res) => {
  try {
    // is_featured_movie alanı true olan filmleri bul
    const data = await Movie.find({
      is_featured_movie: true,
    });
    // Film varsa
    if (data.length > 0) {
      return res.json({ success: true, data });
    } else {
      // Film yoksa
      return res.json({
        success: false,
        message: "Film Bulunamadı!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Sunucu hatası.",
      error: error.message,
    });
  }
};
// Dünya Çapında Kategorisindeki Diziler
export const worldwideMovieList = async (req, res) => {
  try {
    // (Dünya çapında kategorisi) filmleri bul
    const data = await Movie.find({
      genre_id: new mongoose.Types.ObjectId("68488b70f4c2d1ae2e0c0f20"),
    });
    // Film varsa
    if (data.length > 0) {
      return res.json({ success: true, data });
    } else {
      // Film yoksa
      return res.json({
        success: false,
        message: "Film Bulunamadı!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Sunucu hatası.",
      error: error.message,
    });
  }
};
// Kitaptan Uyarlananlar Kategorisindeki Diziler
export const adaptedFromBookMovieList = async (req, res) => {
  try {
    // (kitaptan uyarlananlar) filmleri bul
    const data = await Movie.find({
      genre_id: new mongoose.Types.ObjectId("68488b8df4c2d1ae2e0c0f21"),
    });
    // Film varsa
    if (data.length > 0) {
      return res.json({ success: true, data });
    } else {
      // Film yoksa
      return res.json({
        success: false,
        message: "Film Bulunamadı!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Sunucu hatası.",
      error: error.message,
    });
  }
};
// Aksiyon Kategorisindeki Diziler
export const actionSeriesMovies = async (req, res) => {
  try {
    // (aksiyon) filmleri bul
    const data = await Movie.find({
      genre_id: new mongoose.Types.ObjectId("68488b9ff4c2d1ae2e0c0f22"),
    });
    // Film varsa
    if (data.length > 0) {
      return res.json({ success: true, data });
    } else {
      // Film yoksa
      return res.json({
        success: false,
        message: "Film Bulunamadı!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Sunucu hatası.",
      error: error.message,
    });
  }
};
// Komedi Kategorisindeki Diziler
export const comedySeriesMovies = async (req, res) => {
  try {
    // (komedi) filmleri bul
    const data = await Movie.find({
      genre_id: new mongoose.Types.ObjectId("68488baff4c2d1ae2e0c0f23"),
    });
    // Film varsa
    if (data.length > 0) {
      return res.json({ success: true, data });
    } else {
      // Film yoksa
      return res.json({
        success: false,
        message: "Film Bulunamadı!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Sunucu hatası.",
      error: error.message,
    });
  }
};
