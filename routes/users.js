var express = require('express');
let Parser = require('rss-parser');
let parser = new Parser();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  parser.parseURL('https://www.polygon.com/rss/index.xml', function(err, feed) {

    let test = feed.items;
    console.log(feed.title);

    res.render('users', { title: "test", content: test });
  })
});

module.exports = router;