const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { User } = require("../db.js");

router.put("/addFav", async (req, res) => {
    const { trackId, userId } = req.body;
    if (!trackId) res.status(400).send("Datos incorrectos");
    try {
        let user = await User.findByPk(userId);
        user.favoriteTracks.push(trackId);
        let updated = await User.update({ "favoriteTracks": user.favoriteTracks },{where: {id: userId}});

        // await updated.save();

        res.status(200).send(updated);
    } catch (e) {
        res.status(400).send({ msg: "Error desconocido", e });
    }
});

module.exports = router;