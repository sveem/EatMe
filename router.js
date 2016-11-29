
var router = require('express').Router();

router.get('/api/food', function(req, res) {
  food.getData(req, res)
    .then(function (data) {
	  res.json(data);
  });
});


module.exports = router;