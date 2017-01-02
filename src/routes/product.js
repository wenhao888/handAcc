var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.render('product/list', {layout:'layout/general'});
});



module.exports = router;
