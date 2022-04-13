const User = require("../models/User.js");

const register = (username, password) => {
  return User.create({ username, password });
};

const login = (username, password) => {
    
}

const authService = {
    register, 
    login
};

module.exports = authService;
