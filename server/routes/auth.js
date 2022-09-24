const router = require('express').Router();
const User = require('../model/User');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {

    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send('Email already exists');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const saveUser = await user.save();
        res.send({ user: user._id });
    }
    catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
})

router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send((error.details[0].message));

    const userExist = await User.findOne({ email: req.body.email })
    if (!userExist) return res.status(400).send("Invalid login credentials!");

    const validPas = await bcrypt.compare(req.body.password, userExist.password)
    if (!validPas) return res.status(400).send("Invalid login credentials!");

    const token = jwt.sign({ _id: userExist._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token);

    res.status(200).send({ "message": "Logged in successfully!" });

});

module.exports = router;