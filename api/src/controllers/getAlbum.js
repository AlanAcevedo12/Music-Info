const { Router } = require("express");
const axios = require("axios");
const router = Router();

router.get('/album', async (req, res) => {
    try {
        console.log(req.query);
        let { data } = await axios.get("https://api.deezer.com/album/"+req.query.q);
        res.send(data)
    }catch(e){
        res.status(400).send({msg: "Error desconocido", error: e})
    }
})

module.exports = router;
