const { Router } = require("express");
const router = Router();
const { User } = require("../../db.js");

router.put("/addFav/albums", async (req, res) => {
    const { albumId, userId } = req.body;
    if (!albumId) res.status(400).send({ msg: "Datos incorrectos" });
    try {
        let user = await User.findByPk(userId);
        if (user.favoriteAlbums.indexOf(albumId) === -1) {
            user.favoriteAlbums.push(albumId);
            let updated = await User.update({ "favoriteAlbums": user.favoriteAlbums }, { where: { id: userId } });
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
        } else {
            res.status(400).send({ msg: "El album ya se encuentra en Favoritos" })
        }

    } catch (e) {
        res.status(400).send({ msg: "Error desconocido", e });
    }
});

module.exports = router;