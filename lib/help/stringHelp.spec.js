var stringHelp= require("./stringHelp");
var chai = require('chai');

var assert=chai.assert;

describe("test string help function", function(){
    it("test format", function() {
        var result = stringHelp.format("{0} {1} {0}", "a","b");
        assert.equal("a b a", result);
    })

});