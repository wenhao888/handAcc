var Reason = require("./Reason");

class HandAccBaseException extends Error {
    constructor (message,code) {
        super(message);
        this._code= code || Reason.InternalError;
        this._closeUrl = "";
    }

    get code(){
        return this._code;
    }

    set closeUrl(url) {
        this._closeUrl = url;
    }

    get closeUrl() {
        return this._closeUrl;
    }
}

module.exports= HandAccBaseException;