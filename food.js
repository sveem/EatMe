// var router = require("express").Router();
// var cors = require("cors");
// var express = require('express');
// var qs = require('querystring');
const request = require('request');  
const Yelp = require('yelp');
const consumerKey = process.env.Consumer_Key;
const consumerSecret = process.env.Consumer_Secret;
const tokenId = process.env.Token;
const tokenSecret = process.env.Token_Secret;

let client = new Yelp({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  token: tokenId,
  token_secret: tokenSecret
});

yelpData = (req, res, city = 'London', food = 'pizza') => {
  req.body.limit = req.body.limit || 10;
  return client.search({ 
    term: req.body.food, 
    location: req.body.city, 
    limit: req.body.limit 
  })
  .then(data => {
    return data;
  })
  .catch(error => {
    console.error('ERROR', error);
  });
};

module.exports = {
  search: yelpData,
  client: client
};