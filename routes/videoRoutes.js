const express = require("express");
const videoController = require("../controllers/videoController");
const router = express.Router();

router.get("/video", videoController.getVideos);

router.get("/video/:id", videoController.getVideosDetails);

router.post("/video", videoController.postVideos);

router.put("/video", videoController.putVideos);

module.exports = router;
