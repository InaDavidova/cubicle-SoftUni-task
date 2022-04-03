const express = require('express');

const cubeService = require('../services/cubeService.js');

const router = express.Router();

const detailsPage = async (req, res) =>{
    const id = req.params.id;
    const cube = await cubeService.getCubeById(id);
    res.render('details', cube);
};



router.get('/details/:id', detailsPage);

module.exports = router;