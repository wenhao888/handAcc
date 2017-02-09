var angular=require("angular");
var login = angular.module("login",[]);

login.controller("loginController",["$scope", function($scope) {
    $scope.submit=function(valid, $event) {
        $scope.submitted = true;

        if (!valid) {
            $event.preventDefault();
        }
    }

}]);