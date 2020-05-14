const express = require('express');
const app = express();
const config = require('./config/config');

const hbs = require('hbs');
const TodoRoute = require('./routes/TodoRoute')
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('/TDList', TodoRoute);

app.listen(config.port, config.host, () => {
    console.log('Server has started');
})
