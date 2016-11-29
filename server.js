var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var morgan = require('morgan');
var router = require("./router.js");
var app = express();

app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use("/",router);

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

//I have to fix this part before deployment!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
