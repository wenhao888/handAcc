var roleValidator = require("./roleValidator");
var assert = require("chai").assert;

describe("test role validator", function () {
    it("validate none parameter", function () {
        var result = roleValidator.validate();

        assert.equal(false, result.isValid);
        assert.equal("role name can't be blank", result.errors[0]);
    });

    it("validate null role", function () {
        var result = roleValidator.validate(null);

        assert.equal(false, result.isValid);
        assert.equal("role name can't be blank", result.errors[0]);
    });

    it("role name can't blank", function () {
        var result = roleValidator.validate({
            name: " "
        });

        assert.equal(false, result.isValid);
        assert.equal("role name can't be blank", result.errors[0]);
    });

    it("simple valid role", function () {
        var result = roleValidator.validate({
            name: " abc def g "
        });

        assert.equal(true, result.isValid);
    })

});
