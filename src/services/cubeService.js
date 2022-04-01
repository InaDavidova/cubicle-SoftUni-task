const Cube = require("../models/Cube.js");

const cubeDB = [
  new Cube(
    "Gan356 Air SM",
    "Magnets in AirSM will not drop, and their positions will be more precise with the Magnets-Snap-On design. With the use of 3mm*2mm magnets, the handfeel will be more stable and more comfortable. P.S. This design is brand new for the AirSM.",
    "https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg",
    3
  ),
  new Cube(
    "Eco-Dark",
    "ala bala",
    "https://thingsidesire.com/wp-content/uploads/2018/06/Eco-Dark-Rubik%E2%80%99s-Cube2.jpg",
    6
  ),
  new Cube(
    "Pyraminx",
    "asjbsjcbs cbascb",
    "https://images-na.ssl-images-amazon.com/images/I/61izOzq%2BBAL._SY355_.jpg",
    1
  ),
  new Cube(
    "Megaminx",
    "Zabsahd sjdhs",
    "https://images-na.ssl-images-amazon.com/images/I/61HpQqVQ37L._SY355_.jpg",
    3
  ),
];

const create = (name, description, imageUrl, difficulty) => {
  let cube = new Cube(name, description, imageUrl, difficulty);

  cubeDB.push(cube);
  console.log(cubeDB);
};

const getAllCubes = () => {
  return cubeDB.slice();
};

const getCubeById = (id) => {
  return cubeDB.find((el) => el.id === id);
};

const filterCubes = (searchObj) => {
  let result = cubeDB.slice();

  if (searchObj.name) {
    result = result.filter((el) => el.name.toLowerCase().includes(searchObj.name.toLowerCase()));
  }

  if (searchObj.from) {
    result = result.filter((el) => el.difficulty >= Number(searchObj.from));
  }

  if (searchObj.to) {
    result = result.filter((el) => el.difficulty <= Number(searchObj.to));
  }

  return result;
};

const cubeService = {
  create,
  getAllCubes,
  getCubeById,
  filterCubes,
};

module.exports = cubeService;