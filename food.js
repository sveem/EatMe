// var router = require("express").Router();
// var cors = require("cors");
// var express = require('express');
// var qs = require('querystring');
var request = require("request");  
var Yelp = require("yelp");

var client = new Yelp({
  consumer_key: "yWoYa1PCjCU9yHgkQvlDwg",
  consumer_secret: "iQjJlkpOce38RQSENGnlH7ziv_Q",
  token: "QpNUIhpHtW9A8qkeWjgiMDzoXXyL6pmP",
  token_secret: "I7bN5Vc8ir4wAYEkm0NyX9rkjiI"
});

 // var randomNumber = function() {
 // var random = Math.floor(Math.random() * 20)+ 10;
 //   return random;
 // };

 function yelpData(req, res, city = "London", food = "pizza") {
 	console.log("REQUEST+++++++++:", req.body)
  req.body.limit = req.body.limit || 10;
  return client.search({ term: req.body.food, location: req.body.city, limit: req.body.limit }) //req.body.value
  .then(function (data) {
    // console.log("+++++++++++++++++DA++++TA", data )
     return data;
  })
  .catch(function (err) {
  console.error("ERROR", err);
  });
}

module.exports = {
	search: yelpData,
	client: client
}