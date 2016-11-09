var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  res.send('hello ' + req.params.name);
});

router.get('/:name/:quote', function(req, res, next) {
  res.send(req.params.name + ' said ' + req.params.quote);
});
module.exports = router;
