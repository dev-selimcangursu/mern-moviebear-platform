const express = require('express')
const router = express.Router()
const EpisodesController = require('../controllers/EpisodesController')


router.get('/get/section-episodes',EpisodesController.isSectionMovie)


module.exports = router