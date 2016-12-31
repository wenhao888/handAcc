var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('user/login', {layout:'layout/general'});
});

module.exports = router;
