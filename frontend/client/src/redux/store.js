import { configureStore } from '@reduxjs/toolkit'
import  movieReducer from './slices/MovieSlice'
import EpisodeReducer from './slices/EpisodesSlice'
import AuthReducer from './slices/AuthSlice'

export const store = configureStore({
  reducer: {
    movies:movieReducer,
    episodes:EpisodeReducer,
    auth:AuthReducer
  },
})