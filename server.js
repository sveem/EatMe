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

// app.get('/location', function(req, res) {
 
// res.send("Test");

// var urlID =  'https://api.yelp.com/v2/search/?oauth_consumer_key=yWoYa1PCjCU9yHgkQvlDwg&oauth_token=QpNUIhpHtW9A8qkeWjgiMDzoXXyL6pmP&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1480353065&oauth_nonce=KKTP48&oauth_version=1.0&oauth_signature=LmvWSV48L2s/yyqYW/j59cs8Gzk=&term=pizza&location=San Francisco, CA'

//  request({url: urlID}, function (error, response, body) {
//  	console.log("EROR",error);
//  	console.log("BODY", body);
//  	console.log("RESPONSE:", response)
//     if (!error && response.statusCode == 200) {
//     	console.log("Body", body)
//       res.send(body);
//     }
//   });
// });


//I have to fix this part before deployment!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
