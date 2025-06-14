import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchIsExclusiveMovie,
  getHighlistSectionMovie,
  getSectionMovie,
  getWorldwideSectionMovie,
  getAdaptedTheBookSectionMovie,
  getActionSeriesSectionMovie,
  getComedySectionMovie
} from "../../services/MovieServices";

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
// Dünya Çapında Kategori Diziler
export const fetchIsWorldwideMovie = createAsyncThunk(
  "movies/fetchWorldwideMovie",
  async () => {
    const response = await getWorldwideSectionMovie();
    return response;
  }
);

// Kitaptan Esinlenmiş Kategorisindeki Diziler
export const fetchIsAdaptedBookMovie = createAsyncThunk(
  "movies/fetchAdaptedBookMovie",
  async () => {
    const response = await getAdaptedTheBookSectionMovie();
    return response;
  }
);
// Aksiyon Kategorisindeki Diziler
export const fetchIsActionSeriesMovie = createAsyncThunk(
  "movies/fetchActionSeriesMovie",
  async () => {
    const response = await getActionSeriesSectionMovie();
    return response;
  }
);
// Komedi Kategorisindeki Diziler
export const fetchIsComedySeriesMovie = createAsyncThunk(
  "movies/fetchIsComedySeriesMovie",
  async () => {
    const response = await getComedySectionMovie();
    return response;
  }
);
const initialState = {
  // MovieBear'a Özel İçerikler
  isExclusiveMovie: [],
  // Seçili Diziler Bilgileri
  sectionMovie: null,
  // Öne Çıkan Diziler
  highlightsMovie: [],
  // Dünya Çapında Kategori Diziler
  worldwideMovie: [],
  // Kitaptan Esinlenmiş Kategori Diziler
  adaptedBookMovie: [],
  // Aksiyon Kategorisindeki Diziler
  actionSeriesMovies: [],
  // Komedi Kategorisindeki Diziler
  comedySeriesMovies :[],
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
      .addCase(fetchIsWorldwideMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIsWorldwideMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.worldwideMovie = action.payload.data;
      })
      .addCase(fetchIsWorldwideMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchIsAdaptedBookMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIsAdaptedBookMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.adaptedBookMovie = action.payload.data;
      })
      .addCase(fetchIsAdaptedBookMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchIsActionSeriesMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIsActionSeriesMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.actionSeriesMovies = action.payload.data;
      })
      .addCase(fetchIsActionSeriesMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
        .addCase(fetchIsComedySeriesMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIsComedySeriesMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.comedySeriesMovies = action.payload.data;
      })
      .addCase(fetchIsComedySeriesMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default movieSlice.reducer;
