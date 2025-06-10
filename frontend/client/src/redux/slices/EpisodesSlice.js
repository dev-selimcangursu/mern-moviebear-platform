import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEpisodes } from "../../services/EpisodesService";

export const fetchAllEpisodes = createAsyncThunk(
  "movies/fetchEpisodes",
  async (id) => {
    const response = await fetchEpisodes(id);
    return response;
  }
);

const initialState = {
  episodes: [],
  loading: false,
  error: null,
};

export const EpisodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEpisodes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllEpisodes.fulfilled, (state, action) => {
        state.loading = false;
        state.episodes = action.payload.data;
      })
      .addCase(fetchAllEpisodes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default EpisodesSlice.reducer;
