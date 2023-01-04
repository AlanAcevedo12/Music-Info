const { Router } = require("express");
const router = Router();
const { Review, User, Album } = require("../../db.js");

router.get("/", async (req, res) => {
    const { id } = req.query;
    try {
        const review = await Review.findByPk(id);

        res.send(review)
    } catch (e) {
        console.log(e);
        res.send("Error Crear Reseña");
    }
})

module.exports = router;