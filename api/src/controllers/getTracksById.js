const { Router } = require("express");
const axios = require("axios");
const router = Router();

router.post('/track', async (req, res) => {
    const { tracksId } = req.body;
    // console.log(tracksId);
    if (!tracksId) res.status(400);
    try {
        let tracks = [];
        for(let i = 0; i < tracksId.length; i++){
            let { data } = await axios.get("https://api.deezer.com/track/" + tracksId[i]);
            tracks.push(data);
        }
        res.send(tracks);
    } catch (e) {
        // console.log(e);
        res.status(400).send({ msg: "Error desconocido", error: e })
    }
})

module.exports = router;
