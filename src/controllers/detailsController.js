const express = require('express');

const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');

const router = express.Router();

const detailsPage = async (req, res) =>{
    const id = req.params.id;
    const cube = await cubeService.getCubeById(id);
    const accessories = await accessoryService.getManyByIds(cube.accessories);
    res.render('details', {cube, accessories});
};



router.get('/details/:id', detailsPage);

module.exports = router;