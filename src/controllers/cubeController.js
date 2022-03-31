const express = require('express');

const cubeService = require('../services/cubeService.js');

const router = express.Router();

const createCubePage = (req, res) =>{
    res.render('create');
};

const createCube = (req, res) =>{
    let {name, description, imageUrl, difficulty} =req.body;

    cubeService.create(name, description, imageUrl, difficulty);
    
    res.redirect('/create');
}

router.get('/create', createCubePage);
router.post('/create', createCube);

module.exports = router;