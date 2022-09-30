const { Router } = require('express');
const searchTrack = require("../controllers/searchTrack");
const searchArtist = require("../controllers/searchArtist");
const searchAlbum = require("../controllers/searchAlbum");
const test = require("../controllers/test")

const router = Router();

router.use("/search", searchTrack);
router.use("/search", searchArtist);
router.use("/search", searchAlbum);
router.use("/test", test)

module.exports = router;