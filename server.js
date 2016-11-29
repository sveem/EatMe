var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var morgan = require('morgan');
// var router = require("./router.js");
var app = express();
var yelpAPICall = require('./food');

var port = 3000;
app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
// app.use("/",router);


app.post('/api/food', function(req, res) {
	console.log("REQ.BODY", req.body)
	yelpAPICall.search(req)
  	.then(function (data) {
    	// console.log("+++++++++++++++++DA++++TA", data)
     	res.send(data);
  	})
  	.catch(function (err) {
  		console.error("ERROR", err);
  	});
});

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

//I have to fix this part before deployment!

app.listen(process.env.PORT || 3000);
console.log("Server now listening on port" + " " + port +  "!");
