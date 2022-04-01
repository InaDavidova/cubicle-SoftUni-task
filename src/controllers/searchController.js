const express = require('express');
const cubeService = require('../services/cubeService.js');

const router = express.Router();

const searchPage = (req, res)=>{
    const cubes = cubeService.filterCubes(req.query);
    res.render('index', {inputs: req.query ,cubes});
}

router.get('/search', searchPage);

module.exports = router;