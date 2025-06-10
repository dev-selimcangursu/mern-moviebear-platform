import axios from "axios";

export const fetchIsExclusiveMovie = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/movies/get/is-exclusive-movie-list"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getSectionMovie = async (slug) => {
  try {
    const response = await axios.get(
      "http://localhost:3000/movies/get/section-movie",
      {
        params: { slug },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
