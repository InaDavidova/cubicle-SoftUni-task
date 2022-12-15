const router = require('express').Router();

const logoutUser = (req, res) => {
    console.log(req.session);
    // delete req.session.user;
    // console.log(req.session);
    res.redirect('/');
}

router.get('/logout', logoutUser);

module.exports = router;
