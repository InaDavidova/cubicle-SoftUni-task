const express = require('express');

const router = express.Router();

const error = (req, res) =>{
    res.render('404');
};

router.all('*', error);

module.exports = router;