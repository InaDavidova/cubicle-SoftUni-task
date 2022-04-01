const express = require('express');
const cubeService = require('../services/cubeService.js');

const router = express.Router();

const searchPage = (req, res)=>{
    const cubes = cubeService.filterCubes(req.query);

    if(req.query.name || req.query.from || req.query.to){
        res.render('index', {inputs: req.query ,cubes});

    } else {
        res.redirect('/');
    }
}

router.get('/search', searchPage);

module.exports = router;