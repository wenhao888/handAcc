var Base=require("./HandAccBaseException");
var Reason=require("./Reason");

class InternalException extends Base {
    constructor(message, code){
        super(message, code || Reason.InternalError);
    }
}

module.exports = InternalException;