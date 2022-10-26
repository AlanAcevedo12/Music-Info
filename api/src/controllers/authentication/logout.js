const { Router } = require("express");
const router = Router();

router.post('/logout', async (req, res) => {
    try {
        res.clearCookie('jwt')
        res.clearCookie('FOOD-API.sig')
        res.clearCookie('FOOD-API')
        req.session = null;
        res.status(200).send("good bye!");
      } catch (error) {
        console.log(error);
      }
})

module.exports = router;
