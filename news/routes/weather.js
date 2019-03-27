var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  fs.readFile(path.join(__dirname, '..', 'public', 'img', 'weather.png'), (err, data) => {
    if (err) {
      res.send(`ups ${err}`);
    }
    else {
      res.set('Content-Type', 'image/png');
      res.send(data);
    }
  })
});

module.exports = router;
