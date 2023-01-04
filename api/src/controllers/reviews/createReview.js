const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { Review, User, Album } = require("../../db.js");

router.post("/create", async (req, res) => {
    const { albumId, title, score, description, userId } = req.body;
    try {
        let album = await Album.findByPk(albumId);
        if (!album) album = await Album.create({ id: albumId, totalScore: 0, totalReviews: 0 })

        const review = await Review.create({
            title, score, description,
            date: new Date(),
        })

        const user = await User.findByPk(userId);
        user.addReview(review);

        album.addReview(review);

        console.log(album.totalScore, " - ", typeof (album.totalScore))
        console.log(score, " - ", typeof (score))

        album.update({ totalScore: album.totalScore + parseInt(score), totalReviews: album.totalReviews + 1 });

        res.send(user)
    } catch (e) {
        console.log(e);
        res.send("Error Crear Reseña");
    }
})

module.exports = router;