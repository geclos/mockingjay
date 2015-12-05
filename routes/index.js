var React = require('react');
var ReactDOM = require('react-dom/server');
var App = require('../src/js/components/App.jsx');
var express = require('express');
var SC = require('node-soundcloud');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.code) {
    SC.authorize(req.query.code, function(err, accessToken) {
        if (err) {
          throw err;
        } else {
          // Client is now authorized and able to make API calls
          console.log('access token:', accessToken);
        }
      });
  }
  res.render('index', {
    content: ReactDOM.renderToString(React.createElement(App))
  });
});
// router.get('/me', function (req, res, next) {});

module.exports = router;
