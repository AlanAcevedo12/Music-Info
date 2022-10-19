const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { User } = require("../../db.js");
const { comparePassword, hashPassword } = require("../../helpers/hash.js");

router.post('/register', async (req, res) => {
    const { name, surname, email, password, username, age} = req.body;
    if(!name || !surname || !email || !password) 
        res.status(400).send({ msg: "Error! Datos incorrectos" })
    try {
        const user = await User.create({
            name,
            surname,
            email,
            password: await hashPassword(password),
            username,
            age
        })
        res.send(user);
    } catch (e) {
        if(e.name === "SequelizeUniqueConstraintError") {
            if(e.parent.constraint === "users_email_key")
                res.status(400).send({ msg: "Error. Ya existe un usuario con el mismo email.", error: e })
            else
                res.status(400).send({ msg: "Error. Ya existe un usuario con el mismo username.", error: e })
        }
        else
            res.status(400).send({ msg: "Error desconocido", error: e })
    }
})

module.exports = router;
