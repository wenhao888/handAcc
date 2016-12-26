/**
 * validate fields of a role object.
 * the result should have format {
 *   isValid: boolean,
 *   error:  string
 * }
 *
 */

var stringHelp = require("../help/stringHelp");
var validationConstant = require("./validationConstant");

function validate (role) {
   var value = role || {};
   if (stringHelp.isBlank(value.name)) {
       return {
           isValid: false,
           error: "role name can't be blank"
       }
   }

   return validationConstant.validResult;

}


module.exports= {
    validate: validate
};