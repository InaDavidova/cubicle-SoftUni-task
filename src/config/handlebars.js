const { create: handlebars } = require('express-handlebars');
const path = require('path');

const initHandlebars = (app) =>{
    app.set('views', path.resolve(__dirname ,'../views'));

    app.engine('hbs', handlebars({
        extname: 'hbs'
    }).engine);
    
    app.set('view engine', 'hbs');
};

module.exports = initHandlebars;