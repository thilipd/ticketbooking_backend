const express = require('express');

const router = express.Router();

const User = require('../modle/user')


router.post('/signup', async (req, res, next) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile
    })

    try {
        const user = await user.save()
        res.send('You have Signed In')
    } catch (err) {
        res.status(400).json(err)

    }
})


router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email, password: password })
            (user) ? res.send(user) : res.status(400).json({ message: 'Login failed ' })
    } catch (err) {
        res.status(400).json(err)
    }
})


module.exports = router;
