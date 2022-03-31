const express = require('express');
const path = require('path');
const routes = require('./routes.js');

const initHandlebars = require('./config/handlebars.js')

const app = express();

app.use(express.urlencoded({extended: true}));

initHandlebars(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);

app.listen(5000, ()=> console.log('Server is running on port 5000'))