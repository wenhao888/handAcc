var validator = require("./validationHelp");
var assert=require("chai").assert;

describe("test  validationHelp", function () {
    it("valid email", function() {
        var result = validator.validateContact("wenhao.lin@gmail.com");
        assert.equal(true, result);
    });

    it("invalid email", function() {
        var result = validator.validateContact("wenhao.lin");
        assert.equal(false, result);
    });

    it("valid phone", function() {
        var result = validator.validateContact("(1)-406-209-1297");
        assert.equal(true, result);
    });

    it("invalid phone --- case 1", function() {
        var result = validator.validateContact("abc");
        assert.equal(false, result);
    });

    it("invalid phone --- case 2", function() {
        var result = validator.validateContact("(1(406-209-1297");
        assert.equal(false, result);
    });

    it("invalid phone --- case 3", function() {
        var result = validator.validateContact("406-(209)-1297");
        assert.equal(false, result);
    });

    it("valid phone --- case 2", function() {
        var result = validator.validateContact("(406)-209-1297");
        assert.equal(true, result);
    });

    it("empty is invalid", function() {
        var result = validator.validateContact("    ");
        assert.equal(false, result);
    })

});
