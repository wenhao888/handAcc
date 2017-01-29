var fs = require('fs');
var path=require("path");

var products = JSON.parse(fs.readFileSync(path.resolve(__dirname, "productData.json"), 'utf8'));


function getProduct(id) {
    var product = products.find(currentValue=> currentValue.id==id);
    return product;
}


function getAll() {
    return products;
}


function getProductsForDropDown(){
    return products.map(p=> {
        return {
            "id": p.id,
            "summary_name": p.summary_name,
            "thumbnail":p.thumbnail,
            'identity': p.summary_name +" [" + p.id +"]"
        }
    })
}


module.exports = {
    getProduct: getProduct,
    getAll:getAll,
    getProductsForDropDown:getProductsForDropDown
};