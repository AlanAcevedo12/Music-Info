const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { Review, User } = require("../../db.js");

router.post("/create", async (req, res) => {
    const { albumId, title, score, description, userId } = req.body;
    try {
        const review = await Review.create({
            albumId, title, score, description,
            date: new Date(),
        })
        const user = await User.findByPk(userId);
        user.addReview(review);

        res.send(user)
    } catch (e) {
        console.log(e);
        res.send("Error Crear Reseña");
    }
})

module.exports = router;