const router = require('express').Router();
const Login = require('../../models/login');

router.post('/', async (req, res) => {
    try {
        const loginData = await Login.create({
            username: req.body.username,
            password: req.body.password, 
        });
        res.status(200).json(loginData);
    } catch (err){
        res.status(400).json(err)
    }
});
module.exports = router;