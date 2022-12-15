const User = require("../models/User.js");

const register = (username, password) => {
  return User.create({ username, password });
};

const login =  (username, password) => {
    return User.findOne({username});
}

const authService = {
    register, 
    login
};

module.exports = authService;
