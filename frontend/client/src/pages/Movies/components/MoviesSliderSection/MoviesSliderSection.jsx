import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./MoviesSliderSection.css";

const movies = [
  {
    id: 1,
    name: "Eşref Rüya",
    description:
      "Çocukluğunda uzaktan aşık olduğu ve “Rüya” adını taktığı gizemli bir kız vardır. Yıllar sonra karşılaştığında, hem aşk hem de intikam duygularıyla yüzleşir. ",
    category: "Aksiyon,Dram,Şiddet",
    banner: "http://localhost:3000/movie-banners/esref-ruya-banner.webp",
  },
  {
    id: 2,
    name: "Breaking Bad",
    description:
      "Walter White, New Mexico’da yaşayan bir lise kimya öğretmenidir. Sessiz ve sıradan bir yaşam sürerken, bir gün akciğer kanseri olduğunu öğrenir. Ailesine maddi güvence bırakmak isteyen Walter, eski öğrencisi Jesse Pinkman ile birlikte metamfetamin üretmeye başlar.",
    category: "Suç, Drama, Gerilim",
    banner: "http://localhost:3000/movie-banners/breaking-bad-banner.webp",
  },
  {
    id: 3,
    name: "The Walking Dead",
    description:
      "Rick Grimes, bir polis memurudur. Görev sırasında vurulup komaya girer. Haftalar sonra uyandığında hastane tamamen terk edilmiştir — dış dünya zombilerle (dizide “walkers” denir) doludur. Ailesini bulmak için yola çıkan Rick, hayatta kalan insanlarla karşılaşır ve kısa sürede bir lider haline gelir..",
    category: "Aksiyon, Drama, Gerilim , Korku",
    banner: "http://localhost:3000/movie-banners/the-walking-dead-banner.jpg",
  },
];

function MoviesSliderSection() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          height: "100vh",
          width: "100%",
          arrows: true,
          pagination: true,
          autoplay: true,
          interval: 3000,
          gap: "1rem",
        }}
        style={{ height: "100%" }}
      >
        {movies.map((movie) => (
          <SplideSlide key={movie.id}>
            <div
              className="slide-banner"
              style={{
                backgroundImage: `url(${movie.banner})`,
              }}
            >
              <div className="slide-info">
                <h2>{movie.name}</h2>
                <p>{movie.description}</p>
                <span>{movie.category}</span>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default MoviesSliderSection;
