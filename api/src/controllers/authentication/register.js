const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { User } = require("../../db.js");
const { comparePassword, hashPassword } = require("../../helpers/hash.js");

router.get('/register', async (req, res) => {
    const { name, surname, email, password } = req.body;
    if(!name || !surname || !email || !password) 
        res.status(400).send({ msg: "Error! Datos incorrectos", error: e })
    try {
        const user = await User.create({
            name,
            surname,
            email,
            password: await hashPassword(password),
        })
        res.send(user);
    } catch (e) {
        if(e.name === "SequelizeUniqueConstraintError") 
            res.status(400).send({ msg: "Error. Ya existe un usuario con el mismo email.", error: e })
        else
            res.status(400).send({ msg: "Error desconocido", error: e })
    }
})

module.exports = router;
