var express = require('express');
var router = express.Router();
var productService = require("../service/product/productService");

/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.render('product/list', {layout:'layout/general'});
});

router.get('/:id', function(req,res,next) {
    var id = req.params.id;
    var product = productService.getProduct(id);
    res.render("product/productDetail", {layout:'layout/general', "product": product})
});

module.exports = router;
