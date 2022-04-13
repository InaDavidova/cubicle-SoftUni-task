const bcrypt = require('bcrypt');
const { register } = require('../services/authService.js');

const router = require('express').Router();

const registerPage = (req, res) => {
    res.render('register');
}

const registerUser = async (req, res) => {
    const {username, password, repeatPassword} = req.body;

    if (password == repeatPassword){
        const cryptedPassword = await bcrypt.hash(password, 9);
        console.log(cryptedPassword);

        await register(username, cryptedPassword);
        res.redirect('/login');
    }

}

router.get('/register', registerPage);

router.post('/register', registerUser),

module.exports = router;