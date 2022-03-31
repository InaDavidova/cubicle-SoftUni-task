const express = require('express');
const { create: handlebars } = require('express-handlebars');
const path = require('path');

const app = express();

app.set('views', path.resolve('./src/views'));

app.engine('hbs', handlebars({
    extname: 'hbs'
}).engine);

app.set('view engine', 'hbs');

app.all('/', (req, res)=>{
    res.render('index');
});

app.listen(5000, ()=> console.log('Server is running on port 5000'))