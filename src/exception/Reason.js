const InternalError=500;
const ValidatorError=400;
const Conflict = 409;

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
}


module.exports=Reason;