const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { Review, User, Album } = require("../../db.js");

router.post("/create", async (req, res) => {
    const { albumId, title, score, description, userId } = req.body;
    try {
        let album = await Album.findByPk(albumId);
        if (!album) album = await Album.create({ id: albumId })
        const review = await Review.create({
            title, score, description,
            date: new Date(),
        })
        const user = await User.findByPk(userId);
        user.addReview(review);
        album.addReview(review);

        res.send(user)
    } catch (e) {
        console.log(e);
        res.send("Error Crear Reseña");
    }
})

module.exports = router;