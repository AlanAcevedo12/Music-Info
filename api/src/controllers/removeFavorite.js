const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { User } = require("../db.js");

router.delete("/removeFav", async (req, res) => {
    const { trackId, userId } = req.body;
    if (!trackId) res.status(400).send("Datos incorrectos");
    try {
        let user = await User.findByPk(userId);
        let index = user.favoriteTracks.indexOf(trackId);
        if(index === -1){
            res.status(400).send({msg: "La canción no se encuentra en Favoritos"})
        }else{
            user.favoriteTracks.splice(index, 1);
            let updated = await User.update({ "favoriteTracks": user.favoriteTracks },{where: {id: userId}});
            res.status(200).send(updated);
        }

    } catch (e) {
        res.status(400).send({ msg: "Error desconocido", e });
    }
});

module.exports = router;