var express = require('express');
var router = express.Router();

/* GET index.ejs. */
router.get('/', function(req, res) {
  res.render('index', { 
    title: 'Hey World!',
    message: 'You are so beautiful' 
  });

});

module.exports = router;
