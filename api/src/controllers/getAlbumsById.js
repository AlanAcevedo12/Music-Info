const { Router } = require("express");
const axios = require("axios");
const router = Router();

router.post('/albums', async (req, res) => {
    const { albumsId } = req.body;
    // console.log(tracksId);
    if (!albumsId) res.status(400);
    try {
        let albums = [];
        for(let i = 0; i < albumsId.length; i++){
            let { data } = await axios.get("https://api.deezer.com/album/" + albumsId[i]);
            albums.push(data);
        }
        res.send(albums);
    } catch (e) {
        // console.log(e);
        res.status(400).send({ msg: "Error desconocido", error: e })
    }
})

module.exports = router;
