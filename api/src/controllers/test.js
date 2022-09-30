const { Router } = require("express");
const axios = require("axios");
const router = Router();
const ytdl = require('ytdl-core');
const ytsr = require('ytsr');
const fs = require('fs');

router.get('/', async (req, res) => {
    const data = req.body;

    const searchResults = await ytsr(data.url, { limit: 1 });

    let id = ytdl.getURLVideoID(searchResults.items[0].url)

    let info = await ytdl.getInfo(id);

    let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    
    let format = ytdl.chooseFormat(audioFormats, { "audioBitrate": 128, });

    let a = ytdl(searchResults.items[0].url, {format: "mp3"})



    res.send(a);
})


module.exports = router;
