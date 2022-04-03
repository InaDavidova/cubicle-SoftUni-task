const express = require('express');
const router = express.Router();

const createAccessoryPage = (req, res) => {
    res.render('createAccessory');
};

router.get('/create/accessory', createAccessoryPage);

module.exports = router;