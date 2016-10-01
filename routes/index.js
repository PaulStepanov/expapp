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
    res.write('hi');
    res.write('helloword' + req.params.id);

    next();
});
router.get('/hello/:id',function (req,res,next) {
    res.write('hi');
    res.send();

});


module.exports = router;
