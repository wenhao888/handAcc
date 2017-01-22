var productService = require("./productService");
var newProductIds =[
    8,9,6,5,3,10
];


function getNewProducts() {
    var newProducts=[];
    newProductIds.forEach(id=>{
        var p = productService.getProduct(id);
        newProducts.push(p);
    });

    return newProducts;
}


function setNewProductIds (ids) {
    newProductIds = ids || [];
}


module.exports = {
    getNewProducts:getNewProducts,
    setNewProductIds:setNewProductIds
};