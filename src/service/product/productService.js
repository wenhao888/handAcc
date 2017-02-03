var fs = require('fs');
var path = require("path");
var request = require("request");
var stringHelp = require("../help/stringHelp");
var httpHelp = require("../help/httpHelp");
var elastic = require("../../config/configureService").elastic;


var products = JSON.parse(fs.readFileSync(path.resolve(__dirname, "productData.json"), 'utf8'));


function getProduct(id) {
    var product = products.find(currentValue=> currentValue.id == id);
    return product;
}


function getAll() {
    return products;
}


function getProductsForDropDown() {
    return products.map(p=> {
        return {
            "id": p.id,
            "summary_name": p.summary_name,
            "thumbnail": p.thumbnail,
            'identity': p.summary_name + " [" + p.id + "]"
        }
    })
}


function searchProductsByKeyword(keyword) {
    var keyword=keyword.trim();

    var url = stringHelp.format("{0}/handacc/products/_search", elastic.url);
    return new Promise(function(resolve, reject) {
        request.post({
            url:url,
            json: {
                "query": {
                    bool: {
                        must: {
                            "multi_match": {
                                "query": keyword,
                                "fields": ["summary_name^2","name^2","features"],
                                "minimum_should_match": "30%"
                            }
                        },
                        should: [{
                            "multi_match" : {
                                "query" : keyword,
                                "type" : "phrase_prefix",
                                "fields": ["summary_name^2","name^2","features"]
                            }
                        }]
                    }
                }
            }
        }, function (error, response, body) {
            if (error) {
                reject(error);
            } else if (!httpHelp.isSuccessful(response)) {
                reject(body);
            } else {
                resolve(httpHelp.getSearchResult(body));
            }
        })
    })

}


module.exports = {
    getProduct: getProduct,
    getAll: getAll,
    getProductsForDropDown: getProductsForDropDown,
    searchProductsByKeyword: searchProductsByKeyword
};