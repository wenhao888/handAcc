var angular=require("angular");

validators= angular.module("validators");


validators.directive("passwordStrengthValidator",function() {
    return {
        restrict : "C",
        require: 'ngModel',

        link: function(scope, elem, attr, ngModel) {
            //For DOM -> model validation
            ngModel.$parsers.unshift(function(value) {
                var strength = getStrengthValue(value);
                console.log(strength);
                ngModel.$setValidity('strength', strength>=50);
                return value;
            });

            //For model -> DOM validation
            ngModel.$formatters.unshift(function(value) {
                var strength =  getStrengthValue(value);
                ngModel.$setValidity('strength', strength>=50);
                return value;
            });
        }
    };
});

function getStrengthValue(value) {
    if (typeof value == 'undefined') {
        return 0
    } else {
        return value;
    }
}

