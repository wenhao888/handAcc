var Reason = require("./Reason");
var Base = require("./HandAccBaseException");

class ValidationException extends Base {
    constructor(message,code) {
        super(message, code || Reason.ValidatorError);
    }
}


module.exports = ValidationException;