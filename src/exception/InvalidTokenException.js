var Base=require("./HandAccBaseException");
var Reason=require("./Reason");

class InvalidTokenException extends Base {
    constructor(message, code){
        super(message, code || Reason.InvalidToken);
    }
}

module.exports = InvalidTokenException;