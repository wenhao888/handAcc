var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.render('product/list', {layout:'layout/general'});
});

router.get('/:id/detail', function(req,res,next) {
    var id = req.params.id;
    var product = productService.getProduct(id);
    res.render("product/productDetail", {layout:'layout/general', "product": product})
});

router.get('/download', function(req, res, next) {
    res.render('product/download', {layout:'layout/general'});
});

module.exports = router;
