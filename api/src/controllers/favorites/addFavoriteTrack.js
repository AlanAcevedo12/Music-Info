const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { User } = require("../../db.js");

router.put("/addFav/tracks", async (req, res) => {
    const { trackId, userId } = req.body;
    if (!trackId) res.status(400).send({ msg: "Datos incorrectos" });
    try {
        let user = await User.findByPk(userId);
        if (user.favoriteTracks.indexOf(trackId) === -1) {
            user.favoriteTracks.push(trackId);
            let updated = await User.update({ "favoriteTracks": user.favoriteTracks }, { where: { id: userId } });
            res.status(200).send({
                user: {
                    id: user.id,
                    name: user.name,
                    surname: user.surname,
                    username: user.username,
                    email: user.email,
                    age: user.age,
                    favoriteTracks: user.favoriteTracks
                }
            });
        } else {
            res.status(400).send({ msg: "La canción ya se encuentra en Favoritos" })
        }

    } catch (e) {
        res.status(400).send({ msg: "Error desconocido", e });
    }
});

module.exports = router;