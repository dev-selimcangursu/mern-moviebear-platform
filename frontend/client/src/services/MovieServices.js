import axios from "axios";

// MovieBear'a Özel Diziler
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

// Öne Çıkan Diziler Servis
export const getHighlistSectionMovie = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/movies/get/highlights-movie"
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// Dünya Çapında Kategorisine Ait Diziler
export const getWorldwideSectionMovie = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/movies/get/worldwide-movie"
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// Kitaptan Uyarlananlar Kategori Dizileri
export const getAdaptedTheBookSectionMovie = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/movies/get/adapted-the-book-movie"
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// Aksiyon Kategorisine Bağlı Diziler
export const getActionSeriesSectionMovie = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/movies/get/action-series-movie"
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

