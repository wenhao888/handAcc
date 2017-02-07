var angular=require("angular");
validators= angular.module("validators");


validators.directive("confirmPasswordValidator",function() {
    return {
        restrict : "C",
        require: 'ngModel',
        scope:{
            password: "@",
            confirmPassword: "=ngModel"
        },
        link: function(scope, elem, attr, ngModel) {
            scope.$watch("password", function(value) {
                var password       = (value || "");
                var confirmPassword= (scope.confirmPassword || "");

                ngModel.$setValidity('match', confirmPassword === password);
            });

            ngModel.$parsers.unshift(function(value) {
                var confirmPassword= (value || "");
                var password       = (scope.password || "");


                ngModel.$setValidity('match', confirmPassword === password);
                return value;
            });

            //For model -> DOM validation
            ngModel.$formatters.unshift(function(value) {
                var confirmPassword= (value || "");
                var password       = (scope.password || "");


                ngModel.$setValidity('match', confirmPassword === password);
                return value;
            });
        }
    };
});


