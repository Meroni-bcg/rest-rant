
// Modules and Globals
const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// Controllers & Routes
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
	res.render('home');
});

app.get('*', (req, res) => {
	res.render('error404');
});

// LISTEN
app.listen(PORT, () => {
	console.log('Listening on port:', PORT);
});
