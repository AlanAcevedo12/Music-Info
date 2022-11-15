const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { User } = require("../../db.js");
const { comparePassword, hashPassword } = require("../../helpers/hash.js");
const jwt = require("jsonwebtoken");
const { jwtGenerator } = require("../../helpers/jwtGenerator.js")

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        res.status(400).send({ msg: "Error! Datos incorrectos" })
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) res.send({ msg: "El usuario no existe" });
        if (user) {
            const isAllowed = await comparePassword(password, user.password);
            if (!isAllowed) res.send({ msg: "Contraseña Incorrecta" })
            if (isAllowed) {
                const token = jwtGenerator(user.id);
                res.cookie("jwt", token);
                res.send({
                    user: {
                        id: user.id,
                        name: user.name,
                        surname: user.surname,
                        username: user.username,
                        email: user.email,
                        age: user.age,
                        favoriteTracks: user.favoriteTracks
                    }
                })
            }
        }
    } catch (e) {
        res.status(400).send({ msg: "Error desconocido", error: e })
    }
})

module.exports = router;
