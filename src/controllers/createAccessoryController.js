const express = require('express');
const accessoryService = require('../services/accessoryService.js')

const router = express.Router();

const createAccessoryPage = (req, res) => {
    res.render('createAccessory');
};

const createAccessory = async (req, res) => {
    let {name, description, imageUrl} = req.body;

    await accessoryService.create(name, description, imageUrl);

    res.redirect('/');
};

router.get('/create/accessory', createAccessoryPage);
router.post('/create/accessory', createAccessory)

module.exports = router;