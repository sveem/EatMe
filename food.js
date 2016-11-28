var router = require("express").Router();
// var cors = require("cors");
var request = require("request");
var express = require('express');
// var qs = require('querystring');  
var Yelp = require("yelp");
var app = express();

var client = new Yelp({
  consumer_key: "yWoYa1PCjCU9yHgkQvlDwg",
  consumer_secret: "iQjJlkpOce38RQSENGnlH7ziv_Q",
  token: "QpNUIhpHtW9A8qkeWjgiMDzoXXyL6pmP",
  token_secret: "I7bN5Vc8ir4wAYEkm0NyX9rkjiI"
});

 function getTest(req, res) {
  return client.search({ term: 'pizza', location: 'Manhattan' })
  .then(function (data) {
    console.log("+++++++++++++++++", data )
    return data;
  })
  .catch(function (err) {
  console.error("ERROR", err);
  });
}


// function getFoodPlaces(req,res) {
//   client.search({
//     term: req.body.food,
//     location:'Manhattan', 
//     sort: 2, 
//     limit: 10 })
//   .then(function(data) {
//     res.send(data.businesses);
//   })
//   .catch(function(err) {
//   console.error(err);
//   });
// }

module.exports = {
	test: getTest
}