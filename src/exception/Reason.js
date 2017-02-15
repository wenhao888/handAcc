const InternalError=500;
const ValidatorError=400;
const Conflict = 409;
const ResourceNotFound=404;
const InvalidToken = 401;

class Reason {
    static  get InternalError(){
        return InternalError;
    }
    static get ValidatorError() {
        return ValidatorError;
    }

    static get Conflict(){
        return Conflict
    }

    static get ResourceNotFound (){
        return ResourceNotFound;
    }

    static get InvalidToken() {
        return InvalidToken;
    }
}


module.exports=Reason;