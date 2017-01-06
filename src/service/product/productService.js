var fs = require('fs');
var path=require("path");

var products = JSON.parse(fs.readFileSync(path.resolve(__dirname, "productData.json"), 'utf8'));


function getProduct(id) {
    var product = products.find(currentValue=> currentValue.id==id);
    return product;
}



module.exports = {
    getProduct: getProduct
};