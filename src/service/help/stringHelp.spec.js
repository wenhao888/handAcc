var stringHelp = require("./stringHelp");
var assert= require("chai").assert;

describe("test stringHelp", function () {
    describe("test format", function () {
        it("simple testing", function () {
            var result = stringHelp.format("{0} {1} {0}", "a", "b");
            assert.equal("a b a", result);
        })
    });

    describe("test isBlank", function () {
       it("null is blank", function () {
           assert.equal(true, stringHelp.isBlank(null));
       });

        it("empty is blank", function () {
            assert.equal(true, stringHelp.isBlank(""));

        });

        it("space is blank", function () {
            assert.equal(true, stringHelp.isBlank("   "));
        });


        it("not blank", function () {
            assert.equal(false, stringHelp.isBlank("  abc "));
        })

    })

});
