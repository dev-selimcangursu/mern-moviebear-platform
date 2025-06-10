const express = require("express");
const router = express.Router();
const EpisodesController = require("../controllers/EpisodesController");

router.get("/get/section-episodes", EpisodesController.isSectionMovie);
router.get("/get/section-episode", EpisodesController.isGetEpisode);

module.exports = router;
