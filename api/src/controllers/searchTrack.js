const { Router } = require("express");
const axios = require("axios");
const router = Router();

router.get('/track', async (req, res) => {
    try {
        let { data } = await axios.get("https://api.deezer.com/search/track?q="+req.query.q);
        res.send(data)
    }catch(e){
        res.status(400).send({msg: "Error desconocido", error: e})
    }
})

module.exports = router;
