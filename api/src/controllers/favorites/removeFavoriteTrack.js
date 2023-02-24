const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { User } = require("../../db.js");

router.put("/removeFav/tracks", async (req, res) => {
    const { trackId, userId } = req.body;
    console.log(trackId, userId)
    if (!trackId) res.status(400).send({ msg: "Datos incorrectos" });
    try {
        let user = await User.findByPk(userId);
        let index = user.favoriteTracks.indexOf(trackId);
        if (index === -1) {
            res.status(400).send({ msg: "La canción no se encuentra en Favoritos" })
        } else {
            user.favoriteTracks.splice(index, 1);
            let updated = await User.update({ "favoriteTracks": user.favoriteTracks }, { where: { id: userId } });
            res.status(200).send({
                user: {
                    id: user.id,
                    name: user.name,
                    surname: user.surname,
                    username: user.username,
                    email: user.email,
                    age: user.age,
                    favoriteTracks: user.favoriteTracks,
                    favoriteAlbums: user.favoriteAlbums
                }
            });
        }

    } catch (e) {
        res.status(400).send({ msg: "Error desconocido", e });
    }
});

module.exports = router;