var  HandAccBaseException = require("./HandAccBaseException");

var assert=require("chai").assert;

describe("test base exception", function () {
   it("test constructor", function () {
       try{
           var ex = new HandAccBaseException("this is a sample exception");
            ex.closeUrl="/";
           throw ex;
       } catch (ex){
           assert.equal("this is a sample exception", ex.message);
           assert.notEqual(null, ex.stack);
           assert.isTrue(ex instanceof HandAccBaseException);
           assert.equal("/", ex.closeUrl);
       }
   });
});