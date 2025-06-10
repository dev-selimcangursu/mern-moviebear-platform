const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/MovieController')


router.get('/get/is-exclusive-movie-list',MovieController.isExclusiveMovie)
router.get('/get/section-movie',MovieController.isSectionMovie)
router.get('/get/highlights-movie',MovieController.highlightsMovieList)
router.get('/get/worldwide-movie',MovieController.worldwideMovieList)
router.get('/get/adapted-the-book-movie',MovieController.adaptedFromBookMovieList)
router.get('/get/action-series-movie',MovieController.actionSeriesMovies)

module.exports = router