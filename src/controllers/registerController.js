const router = require('express').Router();

const registerPage = (req, res) => {
    res.render('register');
}

router.get('/register', registerPage);

module.exports = router;