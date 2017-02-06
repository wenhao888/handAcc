var angular=require("angular");
var validationHelp = require("../../../service/help/validationHelp");

validators= angular.module("validators");


validators.directive("contactValidator",function() {
    return {
        restrict : "C",
        require: 'ngModel',
        link: function(scope, elem, attr, ngModel) {
            //For DOM -> model validation
            ngModel.$parsers.unshift(function(value) {
                var valid=validateContact(value);
                ngModel.$setValidity('contact', valid);

                return value;
            });

            //For model -> DOM validation
            ngModel.$formatters.unshift(function(value) {
                var valid=validateContact(value);
                ngModel.$setValidity('contact', valid);

                return value;
            });
        }
    };
});


function validateContact(contact) {
    //return true when contact is empty because 'required' and format requirement of contact are separate
    // in angular validation
    contact = (contact || "").trim();
    if (contact =='') {
        return true;
    }

    return validationHelp.validateContact(contact);
}