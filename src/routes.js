const express = require("express");
const cubeController = require("./controllers/cubeController.js");
const homeController = require("./controllers/homeController.js");
const aboutController = require("./controllers/aboutController.js");
const error = require('./controllers/404Cotroller.js');
const detailsConreoller = require('./controllers/detailsController.js');
const searchController = require('./controllers/searchController.js');
const creatAccessoryController = require('./controllers/createAccessoryController.js');
const router = express.Router();

router.use(homeController);
router.use(cubeController);
router.use(aboutController);
router.use(detailsConreoller);
router.use(searchController);
router.use(creatAccessoryController);
router.use(error);

module.exports = router;
