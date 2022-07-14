const express = require('express');

const app = express();
const port = 9000;

app.use((request, response) => {
	response.send('this is response');
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
