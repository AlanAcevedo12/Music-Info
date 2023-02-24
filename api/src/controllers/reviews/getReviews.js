const { Router } = require("express");
const router = Router();
const { Review, User, Album } = require("../../db.js");
const axios = require("axios");

router.get("/", async (req, res) => {
    const { albumId } = req.query;
    const { userId } = req.query;
    let where = null;

    // console.log(albumId);
    // console.log(userId)

    if (albumId) where = { albumId };
    if (userId) where = { userId };

    try {
        let reviews = await Review.findAll({
            where: where,
            include: [{
                model: User,
                attributes: ["name", "surname", "username"]
            },
            {
                model: Album
            }]
        });
        let completeReviews = [];
        for(let i = 0; i < reviews.length; i++){
            let { data } = await axios.get("https://api.deezer.com/album/" + reviews[i].album.id);
            completeReviews[i] = {review: reviews[i]};
            completeReviews[i] = {...completeReviews[i], album: data}
        }
        res.send(completeReviews);
    } catch (e) {
        console.log(e);
        res.send("Error al Obtener Reseña");
    }
})

module.exports = router;