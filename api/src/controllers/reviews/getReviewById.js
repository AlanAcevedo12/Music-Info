const { Router } = require("express");
const router = Router();
const { Review, User, Album } = require("../../db.js");
const axios = require("axios");

router.get("/", async (req, res) => {
    const { id } = req.query;
    try {
        let review = await Review.findByPk(id, {
            include: [{
                model: User,
                attributes: ["name", "surname"]
            },
            {
                model: Album
            }]
        });
        let { data } = await axios.get("https://api.deezer.com/album/"+review.album.id);
        review.album.append(data);
        res.send(review);
    } catch (e) {
        console.log(e);
        res.send("Error al Obtener Reseña");
    }
})

module.exports = router;