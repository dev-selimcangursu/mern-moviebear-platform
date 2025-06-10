import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchIsExclusiveMovie,getHighlistSectionMovie ,getSectionMovie} from "../../services/MovieServices";

// MovieBear'a Özel İçeriklerin Servisten Alınması
export const fetchIsExclusiveMovieList = createAsyncThunk(
  "movies/fetchIsExclusiveMovie",
  async () => {
    const response = await fetchIsExclusiveMovie();
    return response;
  }
);
// Seçili Filmin Detay Sayfası için Seçili  Film
export const fetchIsSelectMovie = createAsyncThunk(
  "movies/fetchSelectMovie",
  async (slug) => {
    const response = await getSectionMovie(slug);
    return response;
  }
);
// Öne Çıkan Filmler 
export const fetchIsHighlightsMovie = createAsyncThunk(
  "movies/fetchHighlightsMovie",
  async () => {
    const response = await getHighlistSectionMovie();
    return response;
  }
);

const initialState = {
  // MovieBear'a Özel İçerikler
  isExclusiveMovie: [],
  // Seçili Film Bilgileri
  sectionMovie: null,
  // Öne Çıkan Filmler 
  highlightsMovie : [] ,
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIsExclusiveMovieList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIsExclusiveMovieList.fulfilled, (state, action) => {
        state.loading = false;
        state.isExclusiveMovie = action.payload.data;
      })
      .addCase(fetchIsExclusiveMovieList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchIsSelectMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIsSelectMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.sectionMovie = action.payload.data;
      })
      .addCase(fetchIsSelectMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
        .addCase(fetchIsHighlightsMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIsHighlightsMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.highlightsMovie = action.payload.data;
      })
      .addCase(fetchIsHighlightsMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default movieSlice.reducer;
