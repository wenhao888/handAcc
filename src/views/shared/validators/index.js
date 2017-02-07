var angular=require("angular");
validators= angular.module("validators",[]);


/**
 * list all the validators in the following
 */

require("./contactValidator");
require("./phoneValidator");
require("./passwordStrengthValidator");
require("./confirmPasswordValidator");




