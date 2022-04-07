const router = require('express').Router();

const loginPage = (req, res) => {
    res.render('login');
}

router.get('/login', loginPage);

module.exports = router;