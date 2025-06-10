import React from "react";
import './MoviesSliderSection.css'
import Slider from '../Slider/Slider'
function MoviesSliderSection() {
  const movies = [
    {
      _id: "6847f2397b98dce036bab675",
      name: "Kuzey Güney",
      slug: "kuzey-guney",
      is_exclusive: true,
      age_rating: "+13",
      genre_id: "60c72b2f9b1e8b001c8e4d3a",
      release_year: 2011,
      duration: 169,
      summary:
        "Kuzey, askeri okul sınavlarını kazanıp ileride başarılı bir asker olacak, Güney ise iyi bir üniversitede okuyup hedeflediği kariyere doğru sağlam adımlarla ilerleyecektir. Ancak iki kardeşin hayallerinin gerçeğe dönüşebilmesi için kaderlerini de değiştirmeleri gerekecektir.",
      poster_path: "kuzey-guney.webp",
      trailer_url:
        "https://www.youtube.com/embed/YvlFub6SHzs?autoplay=1&mute=1&loop=1&playlist=YvlFub6SHzs",
      ticket: ["ticket1", "ticket2", "ticket3"],
      is_visible: true,
      is_featured_movie: true,
    },
    {
      _id: "6847f2397b98dce036bab675",
      name: "Kuzey Güney",
      slug: "kuzey-guney",
      is_exclusive: true,
      age_rating: "+13",
      genre_id: "60c72b2f9b1e8b001c8e4d3a",
      release_year: 2011,
      duration: 169,
      summary:
        "Kuzey, askeri okul sınavlarını kazanıp ileride başarılı bir asker olacak, Güney ise iyi bir üniversitede okuyup hedeflediği kariyere doğru sağlam adımlarla ilerleyecektir. Ancak iki kardeşin hayallerinin gerçeğe dönüşebilmesi için kaderlerini de değiştirmeleri gerekecektir.",
      poster_path: "kuzey-guney.webp",
      trailer_url:
        "https://www.youtube.com/embed/YvlFub6SHzs?autoplay=1&mute=1&loop=1&playlist=YvlFub6SHzs",
      ticket: ["ticket1", "ticket2", "ticket3"],
      is_visible: true,
      is_featured_movie: true,
    },
    {
      _id: "6847f2397b98dce036bab675",
      name: "Kuzey Güney",
      slug: "kuzey-guney",
      is_exclusive: true,
      age_rating: "+13",
      genre_id: "60c72b2f9b1e8b001c8e4d3a",
      release_year: 2011,
      duration: 169,
      summary:
        "Kuzey, askeri okul sınavlarını kazanıp ileride başarılı bir asker olacak, Güney ise iyi bir üniversitede okuyup hedeflediği kariyere doğru sağlam adımlarla ilerleyecektir. Ancak iki kardeşin hayallerinin gerçeğe dönüşebilmesi için kaderlerini de değiştirmeleri gerekecektir.",
      poster_path: "kuzey-guney.webp",
      trailer_url:
        "https://www.youtube.com/embed/YvlFub6SHzs?autoplay=1&mute=1&loop=1&playlist=YvlFub6SHzs",
      ticket: ["ticket1", "ticket2", "ticket3"],
      is_visible: true,
      is_featured_movie: true,
    },
    {
      _id: "6847f2397b98dce036bab675",
      name: "Kuzey Güney",
      slug: "kuzey-guney",
      is_exclusive: true,
      age_rating: "+13",
      genre_id: "60c72b2f9b1e8b001c8e4d3a",
      release_year: 2011,
      duration: 169,
      summary:
        "Kuzey, askeri okul sınavlarını kazanıp ileride başarılı bir asker olacak, Güney ise iyi bir üniversitede okuyup hedeflediği kariyere doğru sağlam adımlarla ilerleyecektir. Ancak iki kardeşin hayallerinin gerçeğe dönüşebilmesi için kaderlerini de değiştirmeleri gerekecektir.",
      poster_path: "kuzey-guney.webp",
      trailer_url:
        "https://www.youtube.com/embed/YvlFub6SHzs?autoplay=1&mute=1&loop=1&playlist=YvlFub6SHzs",
      ticket: ["ticket1", "ticket2", "ticket3"],
      is_visible: true,
      is_featured_movie: true,
    },
    {
      _id: "6847f2397b98dce036bab675",
      name: "Kuzey Güney",
      slug: "kuzey-guney",
      is_exclusive: true,
      age_rating: "+13",
      genre_id: "60c72b2f9b1e8b001c8e4d3a",
      release_year: 2011,
      duration: 169,
      summary:
        "Kuzey, askeri okul sınavlarını kazanıp ileride başarılı bir asker olacak, Güney ise iyi bir üniversitede okuyup hedeflediği kariyere doğru sağlam adımlarla ilerleyecektir. Ancak iki kardeşin hayallerinin gerçeğe dönüşebilmesi için kaderlerini de değiştirmeleri gerekecektir.",
      poster_path: "kuzey-guney.webp",
      trailer_url:
        "https://www.youtube.com/embed/YvlFub6SHzs?autoplay=1&mute=1&loop=1&playlist=YvlFub6SHzs",
      ticket: ["ticket1", "ticket2", "ticket3"],
      is_visible: true,
      is_featured_movie: true,
    },
    {
      _id: "6847f2397b98dce036bab675",
      name: "Kuzey Güney",
      slug: "kuzey-guney",
      is_exclusive: true,
      age_rating: "+13",
      genre_id: "60c72b2f9b1e8b001c8e4d3a",
      release_year: 2011,
      duration: 169,
      summary:
        "Kuzey, askeri okul sınavlarını kazanıp ileride başarılı bir asker olacak, Güney ise iyi bir üniversitede okuyup hedeflediği kariyere doğru sağlam adımlarla ilerleyecektir. Ancak iki kardeşin hayallerinin gerçeğe dönüşebilmesi için kaderlerini de değiştirmeleri gerekecektir.",
      poster_path: "kuzey-guney.webp",
      trailer_url:
        "https://www.youtube.com/embed/YvlFub6SHzs?autoplay=1&mute=1&loop=1&playlist=YvlFub6SHzs",
      ticket: ["ticket1", "ticket2", "ticket3"],
      is_visible: true,
      is_featured_movie: true,
    },

    {
      _id: "6847f2397b98dce036bab675",
      name: "Kuzey Güney",
      slug: "kuzey-guney",
      is_exclusive: true,
      age_rating: "+13",
      genre_id: "60c72b2f9b1e8b001c8e4d3a",
      release_year: 2011,
      duration: 169,
      summary:
        "Kuzey, askeri okul sınavlarını kazanıp ileride başarılı bir asker olacak, Güney ise iyi bir üniversitede okuyup hedeflediği kariyere doğru sağlam adımlarla ilerleyecektir. Ancak iki kardeşin hayallerinin gerçeğe dönüşebilmesi için kaderlerini de değiştirmeleri gerekecektir.",
      poster_path: "kuzey-guney.webp",
      trailer_url:
        "https://www.youtube.com/embed/YvlFub6SHzs?autoplay=1&mute=1&loop=1&playlist=YvlFub6SHzs",
      ticket: ["ticket1", "ticket2", "ticket3"],
      is_visible: true,
      is_featured_movie: true,
    },
  ];
  return (
    <section className="movies-section">
      <div className="container">
        <Slider movies={movies} />
      </div>
    </section>
  );
}

export default MoviesSliderSection;
