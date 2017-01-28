var angular=require("angular");
var contact=require("./validateContact");

validators= angular.module("validators",[]);

validators.directive("contactValidator",function() {
    return {
        restrict : "C",
        require: 'ngModel',
        link: function(scope, elem, attr, ngModel) {
            //For DOM -> model validation
            ngModel.$parsers.unshift(function(value) {
                value=value || "";
                var valid=contact.validateContact(value);
                ngModel.$setValidity('contact', valid);

                return value;
            });

            //For model -> DOM validation
            ngModel.$formatters.unshift(function(value) {
                value=value || "";
                var valid=contact.validateContact(value);
                ngModel.$setValidity('contact', valid);

                return value;
            });
        }
    };
});
