const express = require('express');

const app = express();
const port = 9000;

// app.use((request, response) => {
// 	// response.send('middleware');
// });

app.get('/', (request, response) => {
	response.send('home page');
});

app.get('/cats', (request, response) => {
	response.send('🐱‍👤cats page');
});

app.get('/dogs', (request, response) => {
	response.send('🐶dogs page');
});

app.post('/dogs', (request, response) => {
	response.send('🦮dogs post request');
});

app.get('*', (request, response) => {
	response.send('wrong path👽');
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
