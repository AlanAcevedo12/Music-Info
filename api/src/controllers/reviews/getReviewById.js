const { Router } = require("express");
const router = Router();
const { Review, User, Album } = require("../../db.js");

router.get("/", async (req, res) => {
    const { id } = req.query;
    try {
        const review = await Review.findByPk(id, {
            include: [{
                model: User,
                attributes: ["name", "surname"]
            },
            {
                model: Album
            }]
        });
        res.send(review);
    } catch (e) {
        console.log(e);
        res.send("Error al Obtener Reseña");
    }
})

module.exports = router;