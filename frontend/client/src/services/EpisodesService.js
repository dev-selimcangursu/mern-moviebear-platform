import axios from "axios";

// Seçili Diziye Ait Bölümleri Getir
export const fetchEpisodes = async (id) => {
  try {
    const response = await axios.get(
      "http://localhost:3000/episodes/get/section-episodes",
      {
        params: {
          id,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Seçili Bölümü Getir
export const fetchGetEpisode = async (id) => {
  try {
    const response = await axios.get(
      "http://localhost:3000/episodes/get/section-episode",
      {
        params: { id },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
