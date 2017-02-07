/**
 * validate fields of a role object.
 * the result should have format {
 *   isValid: boolean,
 *   error:  string
 * }
 *
 */

var stringHelp = require("../help/stringHelp");

function validate (role) {
   var value = role || {};
   var result = {
       isValid:true,
       errors: []
   };

   if (stringHelp.isBlank(value.name)) {
       result.isValid = false;
       result.errors.push("role name can't be blank");
   }

   return result;
}


module.exports= {
    validate: validate
};