const request = require('request');  
const Yelp = require('yelp');
const consumerKey = "yWoYa1PCjCU9yHgkQvlDwg";
const consumerSecret = "iQjJlkpOce38RQSENGnlH7ziv_Q";
const tokenId = "QpNUIhpHtW9A8qkeWjgiMDzoXXyL6pmP";
const tokenSecret = "I7bN5Vc8ir4wAYEkm0NyX9rkjiI";

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