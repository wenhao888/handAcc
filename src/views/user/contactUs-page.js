var angular= require("angular");
require("../shared/validators");
var contactUs = angular.module("contactUs",["validators"]);

contactUs.controller("contactUsController", ["$scope", function($scope) {
    $scope.submitted = false;
    $scope.cancel=function(){
        window.history.back();
    };

    $scope.submit = function($valid, $event) {
        $scope.submitted=true;

        if (!$valid) {
            $event.preventDefault();
            return;
        }
    };

}]);