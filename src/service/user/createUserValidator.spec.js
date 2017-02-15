var validator = require("./createUserValidator");
var assert = require("chai").assert;


describe("test createUserValidator", function () {
    it("user email is blank", function (done) {
        validator.validate({email: "   ", password: "a"}).then(function () {
            done();
        }, function (error) {
            assert.equal("email can not be blank", error.message);
            done();
        });

    });

    it("user password is blank", function () {
        validator.validate({email: "wenhao.lin@gmail.coom", password: " "}).then(function () {
                done();
            }, function (error) {
                assert.equal("password can not be blank", error.message);
                done();
            }
        );
    });
});


