var ValidationException = require("./ValidationException");
var assert=require("chai").assert;

describe("test validation exception", function() {
    it("test constructor", function () {
        try {
            var ex = new ValidationException("sample exception");
            ex.closeUrl ="/";
        } catch (ex) {
           assert.equal("/", ex.closeUrl);
        }
    })
});

