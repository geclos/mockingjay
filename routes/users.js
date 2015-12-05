var express = require('express');
var path = require('path');
var Constants = require('../src/common/constants');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res) {
  console.log(Constants.SC.REDIRECT_URL);
  res.writeHead(301, {
    Location: Constants.SC.REDIRECT_URL
  });
  res.end();
});

router.get('/user/:id', function(req, res) {
  res.status(200).send({
    res: req.params.id || 'meh'
  });
});

module.exports = router;
