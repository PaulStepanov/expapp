var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/hello',function (req,res,next) {
    res.set('Content-Type', 'text/html');
    res.send('helloword');
});
router.get('/hello/:id',function (req,res,next) {
    res.set('Content-Type', 'text/html');
    res.send('helloword' + req.params.id);
});

module.exports = router;
