const Accessory = require('../models/Accessory.js');

const create = (name, description, imageUrl) => {
   return Accessory.create({name, description, imageUrl});
}

const getAllAccessories = () =>{
    return Accessory.find({}).lean();
}

const getManyByIds = (array) =>{
    return Accessory.find({})
    .where('_id').in(array).lean();
}

const accessoryService = {
    create, 
    getAllAccessories,
    getManyByIds
};

module.exports = accessoryService;