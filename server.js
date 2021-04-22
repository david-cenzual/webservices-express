const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'david',
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'David',
        year: new Date().getFullYear()
    });
})

app.listen(port, () => {
    console.log(`Listening to petitions on port ${port}`);
});