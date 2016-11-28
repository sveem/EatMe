
var router = require('express').Router();

var food = require('./food');

router.get('/api/food', function(req, res) {
	food.test(req, res)
		.then(function (data) {
			res.json(data);
		});
	// res.send(food.test());
});
router.post('/api/food', food.test);

module.exports = router;