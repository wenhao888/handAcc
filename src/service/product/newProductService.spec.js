var newProductService = require("./newProductService");
var assert=require("chai").assert;


describe("test new product service", function() {
    it("test setNewProductIds", function() {
        newProductService.setNewProductIds([1]);
        var products = newProductService.getNewProducts();
        assert.equal(1, products.length);
    })
});