var assert=require("chai").assert;
var ValidationException=require("../../exception").ValidationException;

describe("test promise", function() {
    it("test then ", function(done) {
        var p =Promise.resolve(1).then();
        assert.isTrue(p instanceof  Promise);
        done();
    });

    it("test resolve", function (done) {
        new Promise(function(resolve, reject) {
            resolve(100);
        }).then(function(result) {
            assert.equal(100, result);
            done();
        });
    });


    it("test catch", function (done) {
        new Promise(function(resolve, reject) {
            reject("sample error");
        }).then().then().catch(function() {
            console.log("catch exception");
            done();
        });
    });
    it("test onRejection", function (done) {
        new Promise(function(resolve, reject) {
            reject("reject error");
        }).then().then().then(null, function(error) {
            assert.equal("reject error", error);
            done();
        });
    });

    it("test reject with exception", function () {
        new Promise(function(resolve, reject) {
            reject(new ValidationException("sample exception"));
        }).then(function() {
            done(null)
        }, function (error) {
            assert.isTrue(error instanceof  ValidationException);
            done(error)
        })
    })



});
