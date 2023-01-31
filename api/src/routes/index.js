const { Router } = require('express');
const searchTrack = require("../controllers/searchTrack");
const searchArtist = require("../controllers/searchArtist");
const searchAlbum = require("../controllers/searchAlbum");
const test = require("../controllers/test");
const register = require("../controllers/authentication/register");
const login = require("../controllers/authentication/login");
const logout = require('../controllers/authentication/logout');
const getAlbum = require("../controllers/getAlbum.js");
const addFavorite = require("../controllers/addFavorite.js");
const removeFavorite = require("../controllers/removeFavorite.js");
const getTracksById = require("../controllers/getTracksById.js");
const createReview = require("../controllers/reviews/createReview.js");
const getReview = require("../controllers/reviews/getReviewById.js");
const getReviews = require("../controllers/reviews/getReviews");

const router = Router();

router.use("/search", searchTrack);
router.use("/search", searchArtist);
router.use("/search", searchAlbum);

router.use("/get", getAlbum);

router.use("/get", getTracksById);

router.use("/test", test);

router.use("/auth", register);
router.use("/auth", login);
router.use("/auth", logout)

router.use("/favorite", addFavorite);
router.use("/favorite", removeFavorite);

router.use("/review", createReview);
router.use("/review", getReview);
router.use("/reviews", getReviews);



module.exports = router;