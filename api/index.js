const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const MovieRouter = require("./routers/MovieRouter");
const EpisodesRouter = require("./routers/EpisodesRouter");
const AuthRouter = require("./routers/AuthRouter");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/movie-banners", express.static("public/movie-banners"));
app.use("/episodes-banner", express.static("public/episodes-banner"));
// Mongoose Bağlantısı
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB bağlantısı başarılı."))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

// Rotalar...
app.use("/movies", MovieRouter);
app.use("/episodes", EpisodesRouter);
app.use("/auth", AuthRouter);

// Port Belirleme
const PORT = process.env.PORT || 3000;

// Sunucuyu Ayağa Kaldırma
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});
