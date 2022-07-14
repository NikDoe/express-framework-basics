const express = require('express');
const path = require('path');

const app = express();
const port = 9000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (request, response) => {
	response.render('home');
});

app.get('/random', (request, response) => {
	const num = Math.floor(Math.random() * 10) + 1;
	const isOdd = num % 2 === 0 ? 'even' : 'odd';
	response.render('random', { num, isOdd });
});

app.get('/r/:animals', (request, response) => {
	const { animals } = request.params;
	const allCats = ['blue', 'monty', 'rocket', 'winston'];

	response.render('animals', { animals, allCats });
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
