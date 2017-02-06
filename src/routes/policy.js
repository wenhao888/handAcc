/**
 * Created by wenhao on 2/4/17.
 */
var express = require('express');

var router = express.Router();

router.get('/terms', function(req, res, next) {
    res.render('policy/terms', {layout:'layout/general'});
});

router.get('/privacy', function(req, res, next) {
    res.render('policy/privacy', {layout:'layout/general'});
});

router.get('/return', function(req, res, next) {
    res.render('policy/return', {layout:'layout/general'});
});

module.exports = router;

