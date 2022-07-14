const express = require('express');

const app = express();
const port = 9000;

// app.use((request, response) => {
// 	// response.send('middleware');
// });

app.get('/', (request, response) => {
	response.send('this is home page');
});

app.get('/:animals', (request, response) => {
	const { animals } = request.params;
	response.send(`this is ${animals} page`);
});

app.get('/:animals/:photoId', (request, response) => {
	const { animals, photoId } = request.params;
	response.send(`this is photo ${photoId} on ${animals} page`);
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