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
        
        await register(username, cryptedPassword);
        
        req.session.user = { id: user._id, username: user.username};

        res.redirect('/');
    }

}

router.get('/register', registerPage);

router.post('/register', registerUser),

module.exports = router;