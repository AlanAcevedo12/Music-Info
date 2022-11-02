const { Router } = require('express');
const searchTrack = require("../controllers/searchTrack");
const searchArtist = require("../controllers/searchArtist");
const searchAlbum = require("../controllers/searchAlbum");
const test = require("../controllers/test");
const register = require("../controllers/authentication/register");
const login = require("../controllers/authentication/login");
const logout = require('../controllers/authentication/logout');
const getAlbum = require("../controllers/getAlbum.js");

const router = Router();

router.use("/search", searchTrack);
router.use("/search", searchArtist);
router.use("/search", searchAlbum);

router.use("/get", getAlbum);

router.use("/test", test);

router.use("/auth", register);
router.use("/auth", login);
router.use("/auth", logout)



module.exports = router;