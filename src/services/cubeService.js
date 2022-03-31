const Cube = require('../models/Cube.js');

const cubeDB = [];

const create = (name, description, imageUrl, difficulty) =>{
    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDB.push(cube);
    console.log(cubeDB);
}

const cubeService = {
    create
}

module.exports = cubeService;