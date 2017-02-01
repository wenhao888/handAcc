var gulp = require("gulp");
var request=require("request");
var path=require("path");
var productService = require(path.resolve("./src/service/product/productService"));
var async = require("async");
var stringHelp = require(path.resolve("./src/service/help/stringHelp"));
var elastic = require(path.resolve("./src/config/configureService")).elastic;


gulp.task("create-index", function (callBack) {
    var url=stringHelp.format("{0}/handacc?pretty", elastic.url);
    request.put(url, {"acknowledged" : true},function(error, response, body) {
        if (error) {
            callBack(error);
        } else if (!isSuccessful(response)) {
            callBack(body);
        } else {
            console.log("index handacc has been created");
            callBack(null);
        }
    })
});

gulp.task("delete-index", function(callBack) {
    var url=stringHelp.format("{0}/handacc?pretty", elastic.url);
    request.delete(url, function(error, response, body) {
        if (error) {
            callBack(error);
        } else if (!isSuccessful(response)) {
            callBack(body);
        } else {
            console.log("index handacc has been deleted");
            callBack(null);
        }
    })
});


gulp.task("seed-products", function(gCallBack) {
    var products = productService.getAll() || [];

    async.eachSeries(products, function(p, callBack) {
        var url=stringHelp.format("{0}/handacc/products/{1}?pretty", elastic.url, p.id);
        request.put(url, {json: p}, function (error, response, body) {
            if (error) {
                callBack(error);
            } else if (!isSuccessful(response)) {
                callBack(body);
            } else {
                callBack(null);
            }
        })

    }, function (error) {
        if (error) {
            console.log("failed in seeding products in elastic search");
            gCallBack(error);
        } else {
            console.log("all products has been seeded in elastic server");
            gCallBack(null);
        }
    })

});

gulp.task("list-products", function(callBack) {
    var url =stringHelp.format("{0}/handacc/products/_search?pretty", elastic.url);
    request.post(url,  {
        "query":
        {
            "match_all": {}
        }
    }, function (error, response, body) {
        if (error) {
            callBack(error);
        } else if (!isSuccessful(response)) {
            callBack(body);
        } else {
            console.log(body);
            callBack(null);
        }
    })
});

function isSuccessful(response) {
    response = response || {};
    if (!response.statusCode || response.statusCode<200 || response.statusCode>=300) {
        return false;
    } else {
        return true;
    }
}