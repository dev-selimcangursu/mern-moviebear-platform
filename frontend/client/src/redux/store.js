import { configureStore } from '@reduxjs/toolkit'
import  movieReducer from './slices/MovieSlice'
import EpisodeReducer from './slices/EpisodesSlice'

export const store = configureStore({
  reducer: {
    movies:movieReducer,
    episodes:EpisodeReducer
  },
})