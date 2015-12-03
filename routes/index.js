var React = require('react');
var ReactDOM = require('react-dom/server');
var App = require('../src/js/components/App.jsx');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { content: ReactDOM.renderToString(React.createElement(App)) });
});

module.exports = router;
