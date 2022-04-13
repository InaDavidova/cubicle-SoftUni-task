const express = require('express');

const router = express.Router();

const error = (req, res) =>{
    res.status(404).render('404');
};

router.all('*', error);

module.exports = router;