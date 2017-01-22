var angular= require("angular");
var contactUs = angular.module("contactUs",[]);

contactUs.controller("contactUsController", ["$scope", function($scope) {
    $scope.submitted = false;
    $scope.cancel=function(){
        window.history.back();
    };

    $scope.submit = function() {
        $scope.submitted=true;
    }
}]);