const express = require("express");
const cubeService = require("../services/cubeService.js");

const router = express.Router();

const home = async (req, res) => {
  console.log(req.session, 'home');
  let cubes = await cubeService.getAllCubes();
  res.render("index", { cubes });
};

router.get("/", home);

module.exports = router;
