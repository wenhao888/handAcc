var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home/home', { title: 'Express', layout:false });
});


module.exports = router;