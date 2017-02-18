var angular=require("angular");

var confirm = angular.module("confirm",[]);


confirm.controller("confirmController",["$scope", function($scope) {
    $scope.close = function() {
        if (typeof document.referrer !='undefined' && document.referrer) {
            //if come from the contactUs page
            window.history.go(-2)
        } else {
            //else, for example user enter the url directly
            window.history.go(-1);
        }
    }
}]);