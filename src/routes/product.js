var express = require('express');
var productService = require("../service/product/productService");
var logger = require("../service/logging/logService").getLogger("product");
var router = express.Router();

/* GET users listing. */
router.get('/search', function(req, res, next) {
    var keyword= req.query.keyword || "";
    if (keyword.trim() == '') {
        res.redirect("/products/list");
        return;
    }

    productService.searchProductsByKeyword(keyword).then(function (products) {
        var condition= {
            products: products,
            keyword:keyword
        };
        res.render('product/search', {layout:'layout/general', condition: condition});

    }, function (error) {
        logger.error(error);
    });

});

router.get('/:id/detail', function(req,res,next) {
    var id = req.params.id;
    var product = productService.getProduct(id);
    res.render("product/productDetail", {layout:'layout/general', "product": product})
});

router.get('/download', function(req, res, next) {
    res.render('product/download', {layout:'layout/general'});
});

router.get("/list", function(req,res, next) {
    var products = productService.getAll();
    res.render('product/list', {layout:'layout/general', products: products});
});

module.exports = router;
