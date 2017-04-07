var express = require('express');
var router = express.Router();

// HOME PAGE
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Style Index' });
});

// COMPONENTS
router.get('/components', function(req, res, next) {
  res.render('components', { title: 'Components'});
});

// LAYOUTS
router.get('/layouts', function(req, res, next) {
  res.render('layouts', { title: 'Layouts'});
});

module.exports = router;
