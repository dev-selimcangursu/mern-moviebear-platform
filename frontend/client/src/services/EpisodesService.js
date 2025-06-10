import axios from "axios";
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
    return response.data
  } catch (error) {
    console.log(error);
    return error;
  }
};
