const express = require("express");
const cubeController = require("./controllers/cubeController.js");
const homeController = require("./controllers/homeController.js");
const aboutController = require("./controllers/aboutController.js");

const router = express.Router();

router.all("/", (req, res) => {
  res.render("index");
});

router.use(homeController);
router.use(cubeController);
router.use(aboutController);

module.exports = router;
