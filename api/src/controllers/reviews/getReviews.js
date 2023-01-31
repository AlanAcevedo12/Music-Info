const { Router } = require("express");
const router = Router();
const { Review, User, Album } = require("../../db.js");

router.get("/", async (req, res) => {
    const { albumId } = req.query;
    const { userId } = req.query;
    let where = null;

    console.log(albumId);
    console.log(userId)

    if (albumId) where = { albumId };
    if (userId) where = { userId };

    try {
        const reviews = await Review.findAll({
            where: where,
            include: [{
                model: User,
                attributes: ["name", "surname"]
            },
            {
                model: Album
            }]
        });
        res.send(reviews);
    } catch (e) {
        console.log(e);
        res.send("Error al Obtener Reseña");
    }
})

module.exports = router;