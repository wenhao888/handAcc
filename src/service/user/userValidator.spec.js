var validator = require("./userValidator");
var assert = require("chai").assert;


describe("test user service", function () {
   it("user email is blank", function() {
       var result = validator.validate({email:"   ", password: "a"});
       assert.equal(false, result.isValid);
       assert.equal("email can not be blank", result.errors[0]);
   });

    it("user password is blank", function() {
        var result = validator.validate({email:"wenhao.lin@gmail.coom", password: " "});
        assert.equal(false, result.isValid);
        assert.equal("password can not be blank", result.errors[0]);
    });

    it("user email and password are both blank", function() {
        var result = validator.validate({email: null, password: " "});
        assert.equal(false, result.isValid);
        assert.equal("email can not be blank", result.errors[0]);
        assert.equal("password can not be blank", result.errors[1]);
    })
});


