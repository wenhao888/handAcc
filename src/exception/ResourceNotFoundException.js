var Base=require("./HandAccBaseException");
var Reason=require("./Reason");

class ResourceNotFoundException extends Base {
    constructor(message, code){
        super(message, code || Reason.ResourceNotFound);
    }
}

module.exports = ResourceNotFoundException;