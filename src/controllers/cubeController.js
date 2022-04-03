const express = require('express');

const cubeService = require('../services/cubeService.js');

const router = express.Router();

const createCubePage = (req, res) => {
    res.render('create');
};

const createCube = async (req, res) => {
    let { name, description, imageUrl, difficulty } = req.body;

    await cubeService.create(name, description, imageUrl, difficulty);

    res.redirect('/');
}

router.get('/create', createCubePage);
router.post('/create', createCube);

module.exports = router;