const express = require('express');
const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');
const router = express.Router();

const addAccessoryPage = async (req, res) => {
    const cube = await cubeService.getCubeById(req.params.id);
    const accessories = await accessoryService.getAccessoriesNotOwnedByCube(cube.accessories);
    res.render('attachAccessory', {cube, accessories});
}

const attachAccessory = async(req, res) => {
    const cubeId = req.params.id;
    const accessoryId = req.body.accessory;

    await cubeService.attachAccessory(cubeId, accessoryId);

    res.redirect(`/details/${cubeId}`);
}

router.get('/:id/add-accessory', addAccessoryPage);
router.post('/:id/add-accessory', attachAccessory);

module.exports = router;