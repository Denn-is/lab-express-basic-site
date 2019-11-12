const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.html');
});

app.get('/about.html', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/works.html', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});