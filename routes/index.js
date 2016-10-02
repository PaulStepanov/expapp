var express = require('express');
var router = express.Router();

//mongodb
var mongoose = require('mongoose');
let conf = require('../config/config');
mongoose.connect(conf.get('mongodb:uri'));
var db = mongoose.connection;


//sessions
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

/* GET home page. */
router.use(session({
    cookie:{
        path: '/',
        httpOnly: true,
        secure: true,
        maxAge: 30000,
    },
    secret: 'keyboard cat',
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave:true
}));

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    req.session.numberOfVisits=req.session.numberOfVisits+1 || 1;
});
router.get('/hello',function (req,res,next) {
    res.set('Content-Type', 'text/html');
    res.send('helloword');
});
router.get('/hello/:id',function (req,res,next) {
    req.session.numberOfVisits=req.session.numberOfVisits+1 || 1;
    req.session.maxAge=30000;
    res.set('Content-Type', 'text/html');
    res.write('hi you visited this for ');
    let vievs=req.session.numberOfVisits;
    res.write(vievs.toString());
    res.write(' times,your id:' + req.params.id);
    res.end();
});



module.exports = router;
