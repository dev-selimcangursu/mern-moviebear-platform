require("dotenv").config();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");

// KULLANICI GİRİŞ İŞLEMİ
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // KULLANICI BULUNAMAZSA
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "E-posta bulunamadı" });
    }

    // ŞİFRE KARŞILAŞTIRMA
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    // ŞİFRENİN UYUŞMAMA DURUMU
    if (!isPasswordMatch) {
      return res.status(401).json({ success: false, message: "Şifre hatalı" });
    }

    // KULLANICI BİLGİLERİ JWT TOKEN OLUŞTURARAK TUTULDU
    const token = jwt.sign(
      {
        user_id: user._id,
        name: user.name,
        createdAt: user.createdAt,
        uuid: user.uuid,
        is_premium: user.is_premium,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
    );

    // GİRİŞ BAŞARILIYSA
    return res.json({
      success: true,
      message: "Giriş başarılı",
      token,
      user: {
        id: user._id,
        uuid: user.uuid,
        email: user.email,
        is_premium: user.is_premium,
        name: user.name,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    // HERHANGİ BİR HATA DURUMU
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Bilinmeyen bir hata oluştu",
      error: error.message,
    });
  }
};
// KULLANICI KAYIT İŞLEMİ
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // DAHA ÖNCE E-POSTA ADRESİYLE KAYIT VAR MI KONTROLÜ
    const existingUser = await User.findOne({ email });

    // E-POSTA KAYITLIYSA DÖNECEK DURUM
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "Bu e-posta zaten kayıtlı" });
    }

    // ŞİFREYİ HASHLEME
    const hashedPassword = await bcrypt.hash(password, 10);

    // YENİ KULLANICI OBJESİ
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      uuid: uuidv4(),
    });
    await newUser.save();

    // KAYIT BAŞARILIYSA DİREKT TOKEN OLUŞTURUR
    const token = jwt.sign(
      {
        user_id: newUser._id,
        uuid: newUser.uuid,
        email: newUser.email,
        is_premium: newUser.is_premium,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // KAYIT BAŞARILI OLMA DURUMU
    return res.status(201).json({
      success: true,
      message: "Kayıt başarılı",
      token,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Kayıt sırasında hata oluştu" });
  }
};

// PRİEMİUM HESABA GEÇİŞ
const premium = async (req, res) => {
  // GELEN TOKENİ YAKALA
  const authHeader = req.headers.authorization;

  // GELEN TOKEN YOKSA VEYA DOĞRU FORMATTA DEĞİLSE DURUMU
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Yetkisiz erişim" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // TOKENİ DOĞRULAMA KODU
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.user_id;

    // TOKENDEN GELEN VERİLERLE KULLANICI BUL
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Kullanıcı bulunamadı" });
    }
    // PREMİUM AKTİF HALE GETİRME
    user.is_premium = true;
    await user.save();

    // BAŞARILI OLMA DURUMU
    return res.json({
      success: true,
      message: "Premium üyelik aktif edildi",
    });
  } catch (err) {
    console.error(err);
    return res.status(401).json({ success: false, message: "Token geçersiz" });
  }
};
module.exports = { login, register, premium };
