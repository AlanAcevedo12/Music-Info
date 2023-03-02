const { Router } = require("express");
const router = Router();
const { Review, User, Album } = require("../../db.js");
const axios = require("axios");

router.get("/", async (req, res) => {
    const { albumId } = req.query;
    const { userId } = req.query;
    let where = null;
    let limit = 10;

    // console.log(albumId);
    // console.log(userId)

    if (albumId) {
        where = { albumId };
        limit = 99999;
    }
    if (userId) {
        where = { userId };
        limit = 99999;
    }

    try {
        let reviews = await Review.findAll({
            where: where,
            limit,
            order: [
                ['date', 'DESC']
            ],
            include: [{
                model: User,
                attributes: ["name", "surname", "username"]
            },
            {
                model: Album
            }],
        });
        let completeReviews = [];
        for (let i = 0; i < reviews.length; i++) {
            let { data } = await axios.get("https://api.deezer.com/album/" + reviews[i].album.id);
            completeReviews[i] = { review: reviews[i] };
            completeReviews[i] = { ...completeReviews[i], album: data }
        }
        res.send(completeReviews);
    } catch (e) {
        console.log(e);
        res.send("Error al Obtener Reseña");
    }
})

module.exports = router;