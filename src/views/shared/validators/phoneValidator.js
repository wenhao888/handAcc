var angular=require("angular");
var validationHelp = require("../../../service/help/validationHelp");

validators= angular.module("validators");


validators.directive("phoneValidator",function() {
    return {
        restrict : "C",
        require: 'ngModel',
        link: function(scope, elem, attr, ngModel) {
            //For DOM -> model validation
            ngModel.$parsers.unshift(function(value) {
                var valid=validatePhone(value);
                ngModel.$setValidity('phone', valid);

                return value;
            });

            //For model -> DOM validation
            ngModel.$formatters.unshift(function(value) {
                var valid=validatePhone(value);
                ngModel.$setValidity('phone', valid);

                return value;
            });
        }
    };
});


function validatePhone(phone) {
    phone= (phone || "").trim();
    if (phone == '') {
        return true;
    }
    return validationHelp.validatePhone(phone);
}