require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const yelpAPICall = require('./yelpController');

const port = 3000;

app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/food', (req, res) => {
  yelpAPICall.search(req)
  .then((data) => {
    res.send(data);
  })
  .catch((error) => {
    console.error('ERROR', error);
  });
});

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000);
console.log('Server now listening on port' + ' ' + port +  "!");
