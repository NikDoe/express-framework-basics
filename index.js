const express = require('express');
const path = require('path');
const subredditData = require('./data.json');

const app = express();
const port = 9000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (request, response) => {
	response.render('home', { name: 'homepage' });
});

app.get('/random', (request, response) => {
	const num = Math.floor(Math.random() * 10) + 1;
	const isOdd = num % 2 === 0 ? 'even' : 'odd';
	response.render('random', { name: 'random', num, isOdd });
});

app.get('/r/:subreddit', (request, response) => {
	const { subreddit } = request.params;
	const allCats = ['blue', 'monty', 'rocket', 'winston'];
	const data = subredditData[subreddit];
	if (data) {
		response.render('subreddit', { ...data, allCats });
	} else {
		response.render('404', { subreddit });
	}
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
