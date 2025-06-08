import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Slide from "./Slide.jsx";
import MovieCard from "../../../pages/Home/components/SpecialContentSection/components/MovieCard/MovieCard.jsx";

const Slider = () => {
  return (
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        perPage: 6,
        gap: "1rem",
        breakpoints: {
          768: {
            perPage: 1,
          },
        },
      }}
      aria-label="Film Slider"
    >
      <Slide>
        <MovieCard image="https://images.justwatch.com/poster/265024975/s718/cehennem-melekleri-3.jpg" />
      </Slide>
      <Slide>
        <MovieCard image="https://www.paribucineverse.com/Files/POSTER/Sihirli_Annem_v2_jpg.png" />
      </Slide>
      <Slide>
        <MovieCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDVhT4wcdzaX0skkKdFZsAzJNVmrrrUWNmw&s" />
      </Slide>
      <Slide>
        <MovieCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7SSlmUduknVHR1JP4jTrnjh4C4B6iPyqxBQ&s" />
      </Slide>
      <Slide>
        <MovieCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXigKOjYQzVfXhc9Z5b3rUEw2AYM4hOxUtog&s" />
      </Slide>
      <Slide>
        <MovieCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7StVYKqBE-vVuJAYGyEU0tY259VFEndst8VJn4J5quD-SFyKXn7XG1vNjEej0JyqeCI&usqp=CAU" />
      </Slide>
    </Splide>
  );
};

export default Slider;
